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
        transform: `translate3d(${position.x - 15}px, ${position.y - 15}px, 0)`, // Center the cursor
        perspective: "1000px", // Add perspective for 3D effect
      }}
    >
      {/* Enhanced 3D cursor style */}
      <div
        className="w-4 h-4  rounded-full  relative justify-center flex items-center cursor-follower-wrapper"
        style={
          {
            // transform: "rotateX(90deg) rotateY(45deg)", // Rotate the cursor for a 3D look
          }
        }
      >
        {/* You can add more elements or effects inside this div */}
        <span className="w-2 h-2 bg-black rounded-full  absolute animate-pulse"></span>
      </div>
    </div>
  );
};

export default CursorFollower;
