import React, { useEffect, useState } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import Icon from '../components/Icon';
import {
  DiReact,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiNodejsSmall,
} from 'react-icons/di';
function Skills() {
  useEffect(() => {
    window.addEventListener('scroll', function () {
      const parallax = document.querySelector('.parallax-image') as HTMLElement;
      const scrollPosition = window.pageYOffset;
      parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
    });
  }, []);

  const skills = [
    { name: 'React', percentage: 90, color: 'red', icon: <DiReact /> },
    { name: 'Next.js', percentage: 90, color: 'blue', icon: <DiReact /> },
    {
      name: 'Tailwind CSS',
      percentage: 90,
      color: 'orange',
      Icon: <DiReact />,
    },
    { name: 'TypeScript', percentage: 90, color: 'teal', icon: <DiReact /> },
    {
      name: 'JavaScript',
      percentage: 80,
      color: 'black',
      icon: <DiJavascript1 />,
    },
    { name: 'HTML', percentage: 90, color: 'purple', icon: <DiHtml5 /> },
    { name: 'CSS', percentage: 80, color: 'gray', icon: <DiCss3 /> },
    {
      name: 'Node.js',
      percentage: 70,
      color: 'green',
      icon: <DiNodejsSmall />,
    },
  ];
  return (
    <div className='parallax-container w-full '>
      <div className='parallax-image '></div>
      <div className='parallax-content w-full h-full flex justify-center items-center'>
        <div className=' flex flex-col items-center justify-center backdrop-blur-sm bg-[#7f8080]/30 w-full p-20 rounded font-semibold tracking-wide'>
          <SkillsTile skills={skills} />
        </div>
      </div>
    </div>
  );
}

export default Skills;

interface ISkills {
  name: string;
  percentage: number;
  color: string;
}

const SkillsTile = ({ skills }: any) => {
  return (
    <div className='container mx-auto'>
      <h2 className='text-2xl font-bold  text-start'>My Skills</h2>
      <div className='grid grid-cols-1 md:grid-cols- lg:grid-cols-4 gap-4'>
        {skills.map((skill: any) => (
          <div
            key={skill.name}
            className='bg-white/50 p-8  shadow-md text-center'>
            <div className='mb-4 text-center w-full flex text-2xl'>
              {skill.icon}
            </div>
            <h3 className='text-lg font-bold mb-2'>{skill.name}</h3>
            <div className='mb-4'>
              <ProgressBar
                completed={skill.percentage}
                bgColor={skill.color}
                labelAlignment='center'
                height='20px'
              />
            </div>
            <p className='text-gray-500 text-sm'>{''}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
