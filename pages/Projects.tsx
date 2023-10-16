import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import ProjectTile from "../components/ProjectTile";
import { allProj } from "../utils/data";
import i6 from "../public/camper2.png";
import i5 from "../public/myflix2.png";
import i3 from "../public/liftbudz2.png";
import i8 from "../public/schedule2.png";
import i4 from "../public/thoodies2.png";
import i7 from "../public/trivia2.png";
import i2 from "../public/letterbee2.png";
import i1 from "../public/glazed&confused2.png";

const Projects = () => {
  const bgImages = [i1, i2, i3, i4, i5, i6, i7, i8];
  const randomColors = [
    "#451952",
    "#662549",
    "#AE445A",
    "#F39F5A",
    "#004225",
    "#A73121",
    "#FFB000",
    "#FFCF9D",
  ];

  return (
    <section
      id="projects"
      className="w-full min-h-screen  flex  justify-center pb-40 md:pb-0"
    >
      <div className="flex flex-wrap justify-evenly items-center md:mt-25  gap-[23rem]  relative h-full  md:gap-40 md:px-10 mt-32 mb-[20rem]">
        <div className="flex justify-center items-center h-fit absolute -top-20  md:-top-0 md:static   w-full mt-10">
          <p className="uppercase font-semibold text-center text-[2.3rem] ">
            Projects
          </p>
        </div>
        {allProj.map((project: any, index: number) => (
          <ProjectTile
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.image}
            imageUrlBack={project.imageUrlBack}
            link={project.link}
            code={project.code}
            bgImage={bgImages[index]}
            shadowColor={randomColors[index]}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
