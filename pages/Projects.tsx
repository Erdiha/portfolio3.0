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

import { Box, Container, Typography } from '@material-ui/core';

const Projects = () => {
  console.log(allProj);
  return (
    <div className='w-full h-full '>
      <Box className='w-full px-20 py-10 text-center'>
        <Typography variant='h2'>Projects</Typography>
      </Box>

      <Box
        className='flex bg-brown-300   justify-center items-center gap-10 flex-wrap p-10 gap-y-20'
        maxWidth='xxl'>
        {' '}
        {allProj.map((project: any, index: number) => {
          return (
            <Box>
              <ProjectTile
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.image}
                imageUrlBack={project.Image}
                link={project.link}
                code={project.code}
              />
            </Box>
          );
        })}
      </Box>
    </div>
  );
};
export default Projects;
