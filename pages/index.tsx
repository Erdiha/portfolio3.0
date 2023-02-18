import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import { useEffect, useState } from 'react';
import { skills } from '../utils/data';
import { useInView } from 'react-intersection-observer';
import Contact from './Contact';

const Home: NextPage = () => {
  const [animated, setAnimated] = useState(false);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    const onScroll = () => {
      const skillsTile = document.getElementById('skills') as HTMLElement;
      if (skillsTile?.getBoundingClientRect().top < window.innerHeight) {
        setAnimated(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <Head>
        <title>EHACI</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <Skills animated={animated} />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
