import type { NextPage } from "next";
import Head from "next/head";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Contact from "./Contact";
import Resume from "./Resume";
import { Button } from "@material-tailwind/react";
import { RxDoubleArrowUp } from "react-icons/rx";
import Experince from "./Experince";
const Home: NextPage = () => {
  const [animated, setAnimated] = useState(false);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const onScroll = () => {
      const skillsTile = document.getElementById("skills") as HTMLElement;
      if (skillsTile?.getBoundingClientRect().top < window.innerHeight) {
        setAnimated(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>EHACI</title>
        <meta
          name="description"
          content="web developer/engineer who loves developing unique responsive websites with beautiful ui."
        />
      </Head>
      <Hero />
      <Skills animated={animated} />
      <Experince />
      <Projects />
      <Resume />
      <Contact />
      <Button
        onClick={handleClick}
        className="p-4 aspect-square md:hover:scale-105  text-gray-900 rounded-full text-2xl mb-8 justify-center items-center flex shadow-lg bg-slate-200"
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        <RxDoubleArrowUp size={30} />
      </Button>
    </div>
  );
};

export default Home;
