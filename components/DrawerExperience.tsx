import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useMediaQuery } from "react-responsive";

const DrawerExperience = ({ item, index }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 680px)" }); // Updated the query
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Define drawer styles based on screen size
  const drawerStyle = {
    width: "100%", // Adjust width for mobile
    display: "flex",
    justifyContent: "center",

    // margin: isMobile ? "15vh 0 0 0" : "25vh 0 0 0", // Adjust margin for mobile
  };

  return (
    <div className="flex  w-full h-full  relative">
      <div className="h-full w-[50%] flex relative z-[9999] group">
        <button
          className="text-sm uppercase font-normal w-full bg-gray-800  z-[9999] flex    button-drawer h-full items-center  pr-5 text-white p-5 text-start"
          onClick={toggleDrawer}
        >
          {item.title}
        </button>
        <span className="button-span group-hover:w-[110%]"></span>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        style={drawerStyle}
        className="drawer-content"
      >
        <div className="w-full h-full flex">Hello World</div>
      </Drawer>
    </div>
  );
};

export default DrawerExperience;
