import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <Head>
        <title>EHACI</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
