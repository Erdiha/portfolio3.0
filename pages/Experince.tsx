import { useEffect } from "react";
import DrawerExperience from "../components/DrawerExperience";
import { experienceObject } from "../utils/data";
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
              case "item4":
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
      className="w-full md:h-screen flex min-h-screen justify-center items-center relative mt-20 pt-10 z-50   md:pb-0 md:mt-0"
    >
      <div className="w-full h-[150vh] min-h-100vh pt-10  md:h-[75%]  md:w-[80%] xl:w-[70%] 2xl:w-[60%]  flex flex-col 4xl:max-w-[90rem] mx-auto">
        <div
          className="h-[5%] md:h-1/6 flex justify-center relative mx-8 md:mx-0
        md:w-full"
        >
          <span
            id="item1"
            className="experience-title flex w-full h-full observe-item max-w-5"
          />
          <span
            id="item2"
            className="experience-title2 flex w-full h-full observe-item"
          />
          <span
            id="item3"
            className="text-2xl font-bold uppercase tracking-wide  h-full items-center flex bg- observe-item  ml-10 md:ml-0"
          >
            Professional Experience
          </span>
        </div>
        <div className="w-full h-[90%]  flex relative lg:flex-row flex-col justify-between  gap-5 lg:gap-1 4xl:max-w-[90rem] mx-auto">
          {experienceObject?.map((item, index) => (
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
