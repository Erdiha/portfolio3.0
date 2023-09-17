import { Typography } from '@material-tailwind/react';
import Image from 'next/image';
import ProjectTile from '../components/ProjectTile';
import { allProj } from '../utils/data';


const Projects = () => {
  return (
    <section id='projects' className='w-full min-h-screen bg-gray-50'>
      <div className='w-full text-center'>
        <Typography
          className='uppercase md:border-b border-gray-500 pt-[7rem]'
          variant='h3'>
          Projects
        </Typography>
      </div>

      <div className='flex flex-wrap justify-center items-center md:p-10 gap-10 mb-20'>
        {allProj.map((project: any) => (
          <ProjectTile
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.image}
            imageUrlBack={project.imageUrlBack}
            link={project.link}
            code={project.code}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
