import React, { useEffect, useRef } from "react";
import DrawerExperience from "../components/DrawerExperience";
import { experinceObject } from "../utils/data";

const Experince = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Example: Add different classes based on the ID of the entry
            switch (entry.target.id) {
              case "item1":
                entry.target.classList.add("class-for-item1");
                break;
              case "item2":
                entry.target.classList.add("class-for-item2");
                break;
              case "item3":
                entry.target.classList.add("class-for-item3");
                break;
              // Add more cases as needed
            }
          }
        });
      },
      {
        threshold: 0.1, // Adjust as needed
      }
    );

    // Select items to observe
    const items = document.querySelectorAll(".observe-item");

    // Observe each item
    items.forEach((item) => observer.observe(item));

    return () => {
      // Unobserve each item
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section
      id="experience"
      className="w-screen h-screen flex min-h-[100vh] justify-center items-center "
    >
      <div className="w-full rounded  border-[50px] h-[75%] bg-gray-200 md:w-[80%] xl:w-[70%] 2xl:w-[60%]">
        <div className="w-full h-1/6 flex border-l-2 border-l-white items-center  justify-center relative bg-gray-200">
          <span
            id="item1"
            className="experience-title flex w-full h-full observe-item"
          />
          <span
            id="item2"
            className="experience-title2 flex w-full h-full observe-item"
          />

          <span
            id="item3"
            className="text-xl font-bold uppercase tracking-wide  h-full justify-center items-center self-center flex absolute 
         observe-item bg-gray-200"
          >
            Professional Experience
          </span>
        </div>
        <div className="w-full h-5/6 flex relative   bg-gray-200">
          <div className=" w-full h-full flex-col  justify-center py-1  gap-1 items-center flex drawer-wrapper">
            {experinceObject?.map((item, index) => (
              <DrawerExperience item={item} index={index} />
            ))}
          </div>
          {/* 
        <div className="drawer-experience w-full h-full  justify-center items-center flex  drawer-wrapper">
          <DrawerExperience />
        </div>
        <div className="drawer-experience w-full h-full  justify-center items-center flex  drawer-wrapper">
          <DrawerExperience />
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default Experince;
