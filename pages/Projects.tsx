import ProjectTile from '../components/ProjectTile';
import Image from 'next/image';
import {
  projectNames,
  projectDescriptions,
  projectLinks,
  projectsCode,
  techUsed,
  allProj,
} from '../utils/data';
import { Typography } from '@material-tailwind/react';

const Projects = () => {
  console.log(allProj);
  return (
    <section id='projects' className='w-full min-h-[100vh] bg-red-50/50 pt-32'>
      <div className='w-full text-center flex justify-center '>
        <Typography
          className='w-fit uppercase border-b border-gray-500'
          variant='h3'>
          Projects
        </Typography>
      </div>

      <div className='flex bg-brown-300   justify-center items-center gap-10 flex-wrap p-10 gap-y-20'>
        {' '}
        {allProj.map((project: any, index: number) => {
          return (
            <div>
              <ProjectTile
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.image}
                imageUrlBack={project.Image}
                link={project.link}
                code={project.code}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
