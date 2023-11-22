import React, { useState, useEffect } from "react";

const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none bg-transparent  transition-all duration-100 ease-linear z-[9999] "
      style={{
        transform: `translate3d(${position.x - 10}px, ${position.y - 10}px, 0)`, // Center the cursor
        perspective: "1000px", // Add perspective for 3D effect
      }}
    >
      {/* Enhanced 3D cursor style */}
      <div className="w-6 h-6  rounded-full  relative justify-center flex items-center cursor-follower-wrapper scale-150">
        {/* You can add more elements or effects inside this div */}
        <span className="w-2 h-2 bg-black rounded-full  absolute scale-150  animate-pulse"></span>
      </div>
    </div>
  );
};

export default CursorFollower;
