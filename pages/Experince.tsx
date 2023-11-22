import React, { useEffect, useRef, useState } from "react";
import DrawerExperience from "../components/DrawerExperience";
import { experinceObject } from "../utils/data";
interface ExperienceItem {
  // Define properties based on your data structure
  id: number;
  title: string;
  description: string;
}

interface DrawerExperienceProps {
  item: ExperienceItem;
  index: number;
}
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
      className="w-full h-screen flex min-h-[100vh] justify-center items-center relative z-50"
    >
      <div className="w-full   h-[75%]  md:w-[80%] xl:w-[70%] 2xl:w-[60%] rounded-full">
        <div className="w-full h-[10%] md:h-1/6 flex border-l-2 border-l-white  justify-center relative  m-8 md:m-4">
          <span
            id="item3"
            className="text-2xl font-bold uppercase tracking-wide  h-full items-center flex bg- observe-item absolute left-0"
          >
            Professional Experience
          </span>
          <span
            id="item1"
            className="experience-title flex w-full h-full observe-item"
          />
          <span
            id="item2"
            className="experience-title2 flex w-full h-full observe-item"
          />
        </div>
        <div className="w-full h-[90%] md:h-5/6 flex relative md:flex-row flex-col justify-center gap-20 md:gap-5">
          {experinceObject?.map((item, index) => (
            <DrawerExperience item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experince;

// /* box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8); */
// background: #333;
