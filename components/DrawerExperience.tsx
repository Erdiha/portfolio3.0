import React, { useEffect, useState } from "react";
import { delay, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer";

const webLayout = ({
  hoveredIndex,
  item,
  setHoveredIndex,
  transitionSettings,
  animateProps,
  index,
  ref,
  sectionVariants,
}: any) => {
  return (
    <motion.div
      key={item.id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={animateProps}
      transition={transitionSettings}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#333",
        color: "white",
        position: "relative",
        zIndex: "9999",
        width: "100%", // Ensure the parent container allows flexible widths
      }}
      className=" clippyStyle "
    >
      <span className="clippyStyle2" />
      <div className="w-full h-[35%] flex flex-col relative bg-[#333]">
        <motion.p className="text-gray-100 text-start  w-full h-full flex justify-center  items-center text-xl first-letter:">
          {item.title}
        </motion.p>
        <motion.p className=" flex absolute bottom-0 left-2 italic text-white/50 font-light">
          {item.type}
        </motion.p>
      </div>
      {/* <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-[10rem]  self-center absolute bottom-[35%]"
        src={item.icon}
        alt=""
      /> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-[15rem] w-full aspect-square  justify-center items-center  rounded-full  self-center absolute bottom-[25%]  "
      >
        {borderIcon(index)}
      </motion.div>
      <motion.section
        initial="hidden"
        animate={hoveredIndex === index ? "visible" : "hidden"}
        variants={sectionVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "80%",
          backgroundColor: "#333",
          boxShadow: "inner 0px 0px 10px 10px white",
          bottom: 0,
          padding: "20px",
          zIndex: "9999",
        }}
      >
        <section className="flex flex-col w-full h-fit pl-[20px] gap-2 border-l-2">
          <motion.p className="text-start text-2xl text-white w-full text-shadow">
            {item.company}
          </motion.p>
          <motion.p className="text-start text-gray-300 w-full italic font-thin text-shadow">
            {item.date.start} - {item.date.end}
          </motion.p>
        </section>
        <motion.section
          className="w-full flex flex-col overflow-y-auto h-[80%] justify-center  indent-text"
          style={{
            maxHeight: "calc(100% - 20px)", // Adjust as per your design
          }}
        >
          {item.description.map((desc: any, index: number) => (
            <motion.li key={index} style={{ marginBottom: "5px" }}>
              {desc}
            </motion.li>
          ))}
        </motion.section>
      </motion.section>
    </motion.div>
  );
};

const mobileLayout = ({ item, index }: any) => {
  return (
    <section className="w-full h-full justify-center items-center relative p-8 flex">
      <div className="w-full h-full p-1 flex flex-col bg-[#333] relative justify-between">
        <span className="text-md tracking-wide font-semibold bg-[#333] pl-1   text-gray-200  shadow-md shadow-gray-500 w-full p-2">
          {item.title}
        </span>
        <span className="text-sm text-gray-300 w-full h-fit pl-1 p-1">
          {item.company}
        </span>

        <section className="flex gap-4 w-full h-fit pl-1 p-1 justify-centers items-center">
          <span className="italic font-thin text-gray-300 text-sm">
            {item.type}
          </span>
          <hr />
          <span className="text-white/40 italic font-extralight text-xs">
            {item.date.start} - {item.date.end}
          </span>
        </section>
        <ul className="w-full h-fit  pl-1 py-3 flex-col  flex bg-gray-200   justify-center gap-2">
          {item.description.map((desc: any, index: number) => (
            <motion.li
              className="text-gray-600 text-[12px] w-full h-full"
              key={index}
              style={{ marginBottom: "5px" }}
            >
              {desc}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const borderIcon = (index: number) => {
  console.log(index);
  const styles = [
    {
      borderTop: "5rem solid red",
      borderBottom: "none",
      borderRadius: "200px",
      animation: "spin 9s linear infinite",

      boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)",
      background: "linear-gradient(to right, #ff6e7f, #bfe9ff)", // Gradient background
    },
    {
      borderLeft: "4rem solid blue",
      borderBottom: "none",
      borderRadius: "200px",
      animation: "spin 8s linear infinite",
      //transform: "perspective(500px) rotateX(30deg) rotateY(20deg)",
      boxShadow: "30px 30px 10px rgba(0, 0, 0, 0.5)",
      background: "linear-gradient(to bottom, #36d1dc, #5b86e5)", // Gradient background
    },
    {
      borderRight: "3rem solid yellow",
      borderBottom: "none",
      borderRadius: "200px",
      animation: "spin 10s linear infinite",
      //transform: "perspective(500px) rotateX(30deg) rotateY(20deg)",
      boxShadow: "60px 60px 10px rgba(0, 0, 0, 0.5)",
      background: "linear-gradient(to right, #f7971e, #ffd200)", // Gradient background
    },
  ];

  const borderStyle = styles[index];

  return (
    <span
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        ...borderStyle,
      }}
    />
  );
};

const DrawerExperience = React.memo(({ item, index }: any) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const transitionSettings = {
    type: "spring",
    stiffness: 100,
    damping: 10,
  };

  const animateProps = inView
    ? {
        opacity: 1,
        zIndex: "9999",
        width: hoveredIndex === index ? "80%" : "30%",
        transition: transitionSettings,
      }
    : { opacity: 0 };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: transitionSettings },
  };

  return isClient
    ? isMobile
      ? mobileLayout({ item, index })
      : webLayout({
          hoveredIndex,
          item,
          setHoveredIndex,
          transitionSettings,
          animateProps,
          index,
          ref,
          sectionVariants,
        })
    : null;
});

export default DrawerExperience;
