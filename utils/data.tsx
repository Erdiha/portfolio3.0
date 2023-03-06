import {
  DiReact,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiNodejsSmall,
  DiPython,
} from 'react-icons/di';

export interface ICard {
  id: number;
  title: string;
  description: string;
  link: string;
  code: string;
  image: string;
}

import { TbBrandNextjs, TbBrandTailwind, TbBrandPython } from 'react-icons/tb';
import { SiTypescript, SiCplusplus, SiCsharp } from 'react-icons/si';

const MyObject = {
  name: 'C',
  percentage: 72,
  color: 'fuchsia',
  icon: (
    <span className=' flex text-center items-center p-0 m-0'>
      <SiCsharp /> {'  '}/{'  '} <SiCplusplus />
    </span>
  ),
};
const sizeNum = 25;
export const skills = [
  {
    name: 'React',
    percentage: 90,
    color: 'red',
    icon: <DiReact size={`${sizeNum}`} />,
  },
  {
    name: 'Next.js',
    percentage: 90,
    color: 'blue',
    icon: <TbBrandNextjs size={`${sizeNum}`} />,
  },
  {
    name: 'Tailwind CSS',
    percentage: 93,
    color: 'orange',
    icon: <TbBrandTailwind size={`${sizeNum}`} />,
  },
  {
    name: 'TypeScript',
    percentage: 89,
    color: 'teal',
    icon: <SiTypescript size={`${sizeNum}`} />,
  },
  {
    name: 'JavaScript',
    percentage: 91,
    color: 'black',
    icon: <DiJavascript1 size={`${sizeNum}`} />,
  },
  {
    name: 'HTML',
    percentage: 94,
    color: 'purple',
    icon: <DiHtml5 size={`${sizeNum}`} />,
  },
  {
    name: 'CSS',
    percentage: 86,
    color: 'gray',
    icon: <DiCss3 size={`${sizeNum}`} />,
  },
  {
    name: 'Node.js',
    percentage: 72,
    color: 'green',
    icon: <DiNodejsSmall size={`${sizeNum}`} />,
  },
  {
    name: 'Python',
    percentage: 75,
    color: 'green',
    icon: <TbBrandPython size={`${sizeNum} `} />,
  },
  MyObject,
];

export const projectNames = [
  'LiftBudz',
  'Thoodies',
  'MyFlix',
  'MyCamper',
  'Quiz Game',
  'Cya App',
];
export const projectLinks = [
  'https://lift-budz.vercel.app/',
  'http://thoodies.com/',
  'https://myflix-eight.vercel.app/',
  'https://main--effortless-kangaroo-bb5cd4.netlify.app/',
  'https://main.d2en2iuoalsx7.amplifyapp.com/',
  'https://cya-client-cs130.herokuapp.com/login',
];
export const projectDescriptions = [
  'LiftBudz is a fitness social web app that I created using tailwind, NextJS, React, TS, and Firebase',
  'Thoodies is a recipe website I created using NextJS, Tailwind, Typescript, and Firebase',
  'MyFlix is a Netflix mockup website I created using tailwind, NextJS, React, TS, and Firebase',
  'MyCamper is an individualized park finder allowing users to search for and bookmark any national park in the US.',
  'Quiz Game is a fun little side project, which can be played with one or two people.',
  'Cya App is a scheduling app I created along with four of my classmates as our final project at UCLA.',
];

export const techUsed = [
  ' React, Firebase, Recoil, Next.js, TypeScript, API, Material UI.',
  '',
  'JSX, React, SCSS',
  '  JSX, Firebase, MongoDB, CSS, Bootstrap, Express.',
];

export const projectsCode = [
  'https://github.com/Erdiha/LiftBudz',
  'https://github.com/Erdiha/Thoodies',
  'https://github.com/Erdiha/myFLIX',
  'https://github.com/Erdiha/Camper',
  'https://github.com/Erdiha/Quiz-Game',
  'https://github.com/cs130-w22/Group-A1',
];
const images = [
  'liftbudz.jpg',
  'food.jpg',
  'movies.jpg',
  'camping.jpg',
  'trivia.jpg',
  'schedule.jpg',
];

export const allProj: any = [];
for (let i = 0; i < 6; i++) {
  const temp: ICard = {
    id: i,
    title: projectNames[i],
    description: projectDescriptions[i],
    link: projectLinks[i],
    code: projectsCode[i],
    image: images[i],
  };
  allProj.push(temp);
}
