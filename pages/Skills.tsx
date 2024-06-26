import React, { useEffect, useState } from "react";
import { skills } from "../utils/data";
import { useInView } from "react-intersection-observer";

function Skills(animatedProps: { animated: boolean }) {
  const { animated } = animatedProps;
  //usingreact observer api
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
  });

  // create parallax effect on skills sectiob
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const parallax = document.querySelector(".parallax-image") as HTMLElement;
      const scrollPosition = window.pageYOffset;
      parallax.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
    });
  }, []);

  return (
    <section id="skills" className="parallax-container py-32 w-full h-[100vh] ">
      <div className="parallax-image "></div>
      <div className="h-full w-full  ">
        <div
          ref={ref}
          className=" flex flex-col items-center justify-center   h-full  rounded font-semibold tracking-wide"
        >
          <SkillsTile skills={skills} animated={animated} />
        </div>
      </div>
    </section>
  );
}

export default Skills;

const SkillsTile = ({ skills, animated }: any) => {
  return (
    <div className=" bar shadow-gray-700  backdrop-blur-xl bg-white/40 rounded-md h-full grid grid-cols-1 w-full md:w-[80%] xl:w-[70%] 2xl:w-[60%] justify-center p-10">
      <p className="w-fit pr-2 h-fit bg-white/50 rounded">SKILLS</p>
      {animated &&
        skills.map((skill: any, index: number) => (
          <div key={skill.icon.toString() + index} className="bar md:mx-10">
            <div className="info mt-0">
              <span className="text-2xl flex gap-2 ">
                {skill.name} {skill.icon}
              </span>
            </div>
            <div className="progress-line">
              <span
                className="after:content-[attr(data-content)]"
                style={{ width: `${skill.percentage}%` }}
                data-content={`${skill.percentage}%`}
              ></span>
            </div>
          </div>
        ))}
    </div>
  );
};
