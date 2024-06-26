import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";

export interface ICard {
  id: number;
  title: string;
  description: string;
  link: string;
  code: string;
  image: string;
  bgImage: string;
}

import { SiCplusplus, SiCsharp, SiTypescript } from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandPython,
  TbBrandReactNative,
  TbBrandTailwind,
} from "react-icons/tb";

const MyObject = {
  name: "C",
  percentage: 72,
  color: "fuchsia",
  icon: (
    <span className=" flex text-center items-center p-0 m-0">
      <SiCsharp /> {"  "}/{"  "} <SiCplusplus />
    </span>
  ),
};
const sizeNum = 25;
export const skills = [
  {
    name: "React",
    percentage: 90,
    color: "red",
    icon: <DiReact size={`${sizeNum}`} />,
  },
  {
    name: "Next.js",
    percentage: 90,
    color: "blue",
    icon: <TbBrandNextjs size={`${sizeNum}`} />,
  },
  {
    name: "Tailwind CSS",
    percentage: 93,
    color: "orange",
    icon: <TbBrandTailwind size={`${sizeNum}`} />,
  },
  {
    name: "TypeScript",
    percentage: 89,
    color: "teal",
    icon: <SiTypescript size={`${sizeNum}`} />,
  },
  {
    name: "JavaScript",
    percentage: 91,
    color: "black",
    icon: <DiJavascript1 size={`${sizeNum}`} />,
  },
  {
    name: "HTML",
    percentage: 94,
    color: "purple",
    icon: <DiHtml5 size={`${sizeNum}`} />,
  },
  {
    name: "CSS",
    percentage: 86,
    color: "gray",
    icon: <DiCss3 size={`${sizeNum}`} />,
  },
  {
    name: "Node.js",
    percentage: 72,
    color: "green",
    icon: <DiNodejsSmall size={`${sizeNum}`} />,
  },
  {
    name: "Python",
    percentage: 75,
    color: "green",
    icon: <TbBrandPython size={`${sizeNum} `} />,
  },
  MyObject,
  {
    name: "React Native",
    percentage: 70,
    color: "green",
    icon: <TbBrandReactNative size={`${sizeNum} `} />,
  },
];

export const projectNames = [
  "Glazed & Confused",
  "LetterBee - An Android App",
  "LiftBudz",
  "Thoodies",
  "MyFlix",
  "MyCamper",
  "Quiz Game",
  "Cya App",
];
export const projectLinks = [
  "https://gand-c.vercel.app/home",
  "https://www.youtube.com/watch?v=U_5BrEn1fzg",
  "https://lift-budz.vercel.app/",
  "http://thoodies.com/",
  "https://myflix-eight.vercel.app/",
  "https://main--effortless-kangaroo-bb5cd4.netlify.app/",
  "https://main.d2en2iuoalsx7.amplifyapp.com/",
  "https://cya-client-cs130.herokuapp.com/login",
];
const projectDescriptions = [
  "Glazed & Confused: A testament to my freelance skills, a professional website project showcasing my full-stack development expertise in my portfolio.",
  "LetterBee: Exercise your vocabulary and analytical thinking skills with this striking Android app, published on the Google App Store.",
  "LiftBudz: A clever fitness social web app created using Tailwind, NextJS, React, TS, and Firebase.",
  "Thoodies: Discover culinary delights on this pro recipe website built with NextJS, Tailwind, TypeScript, and Firebase.",
  "MyFlix: Immerse yourself in a cleverly designed Netflix mockup website powered by Tailwind, NextJS, React, TS, and Firebase.",
  "MyCamper: Explore and bookmark US national parks effortlessly with this ingenious individualized park finder.",
  "Quiz Game: Engage in a fun and interactive side project, perfect for one or two players.",
  "Cya App: Experience seamless scheduling with this professional app, created by a team of talented classmates for our final project at UCLA.",
];

export const techUsed = [
  " React, Firebase, Recoil, Next.js, TypeScript, API, Material UI.",
  "",
  "JSX, React, SCSS",
  "  JSX, Firebase, MongoDB, CSS, Bootstrap, Express.",
];

export const projectsCode = [
  "https://github.com/Erdiha/GlazedANDConfused",
  "https://github.com/Erdiha/LetterBee",
  "https://github.com/Erdiha/LiftBudz",
  "https://github.com/Erdiha/Thoodies",
  "https://github.com/Erdiha/myFLIX",
  "https://github.com/Erdiha/Camper",
  "https://github.com/Erdiha/Quiz-Game",
  "https://github.com/cs130-w22/Group-A1",
];
const images = [
  "glazed&confused.jpg",
  "lb1.jpg",
  "liftbudz.jpg",
  "food.jpg",
  "movies.jpg",
  "camping.jpg",
  "trivia.jpg",
  "schedule.jpg",
];

export const allProj: any = [];
for (let i = 0; i < projectsCode.length; i++) {
  const temp: ICard = {
    id: i,
    title: projectNames[i],
    description: projectDescriptions[i],
    link: projectLinks[i],
    code: projectsCode[i],
    image: "/" + images[i],
    bgImage: "",
  };
  allProj.push(temp);
}

export const experinceObject = [
  {
    title: "React Frontend Developer",
    company: "GBCS GRoup",
    type: "Internship",
    icon: "/internship.png",
    date: { start: "July 2023", end: "January 2024" },
    description: [
      "Led front-end projects in Agile settings, guiding developers and interns for timely, quality deliveries.",
      "Handled full-scope front-end work from coding to debugging, enhancing user experience and system efficiency.",
      "Drove team coordination and project planning, ensuring high-quality standards and effective internal communication.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company: " Glazed & Confused Mini Donuts Food Truck",
    type: "Freelance",
    icon: "/freelancer.png",
    date: { start: "April 2023", end: "November 2023" },
    description: [
      "Designed, developed, and launched a full-stack website for Glazed & Confused Mini Donuts Food Truck Company, enhancing online presence and customer engagement.",
      "Managed both front-end and back-end development tasks.",
    ],
  },
  {
    title: "Data Management Consultant",
    company: "Integrated Behavioral Health Research Institute",
    type: "Freelance",
    icon: "/freelancer.png",
    date: {
      start: "October 2023",
      end: "Present",
    },
    description: [
      "Used Python and Pandas libraries to clean, handle incomplete or empty data, and analyze the data.",
      "Utilizing Pandas functionalities like DataFrame manipulation, merging, and time-series analysis to deliver tailored software solutions.",
    ],
  },
  {
    title: "Web-App Developer",
    company: "Graph Academy",
    type: "Internship",
    icon: "/freelancer.png",
    date: {
      start: "May 2023",
      end: "Present",
    },
    description: [
      "Working with JavaScript/Typescript and modern frameworks/libraries like React.js and Flutter to create dynamic and responsive web interfaces.",
      "Utilized backend technologies such as Node.js, Express.js, and PostgreSQL (Supabase) for server-side development, including RESTful API design and implementation, to deliver tailored software solutions.",
    ],
  },
];
