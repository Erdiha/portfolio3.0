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
      className="m-1 clippyStyle "
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
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-[50%] self-center absolute bottom-[35%]"
        src={item.icon}
        alt=""
      />
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
      <div className="w-full h-full p-1 flex flex-col bg-[#333] relative">
        <span className="text-sm text-gray-300 w-full h-full ">
          {item.company}
        </span>
        <span className="text-md tracking-wide font-semibold bg-[#333] p-1 absolute top-[-35px] text-gray-200 left-0 shadow-md shadow-gray-500 w-full">
          {item.title}
        </span>
        <p className="flex gap-4  absolute top-[20%] justify-centers items-center">
          <span className="italic font-thin text-gray-300 text-sm">
            {item.type}
          </span>
          <hr />
          <span className="text-white/40 italic font-extralight text-xs">
            {item.date.start} - {item.date.end}
          </span>
        </p>
        <ul className="w-full h-full p-2 top-14 flex-col overflow-y-auto flex  absolute  bg-gray-200  left-0 min-h-[120%] justify-center pt-4">
          {item.description.map((desc: any, index: number) => (
            <motion.li
              className="text-gray-600 text-[11px]"
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

const DrawerExperience = React.memo(({ item, index }: any) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [startAnimation, setStartAnimation] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const transitionSettings = {
    type: "spring",
    stiffness: 100,
    damping: 10,
  };

  // Adjust the width based on hover state
  const animateProps = inView
    ? {
        opacity: 1,
        zIndex: "9999",
        width: hoveredIndex === index ? "80%" : "30%",
        transition: transitionSettings,
      }
    : { opacity: 0 };

  // Adjust the sectionVariants as per the requirements
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: transitionSettings },
  };

  return isMobile
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
      });
});

export default DrawerExperience;
