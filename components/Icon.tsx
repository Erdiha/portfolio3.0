import React, { useEffect, useState } from 'react';

function Icon() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className='flex justify-center items-center font-monserrat  px-1'>
      <div className='relative items-center flex justify-center'>
        <span
          className={`text-2xl font-bold ${
            animate ? 'text-[#d93752] animate-slide-in-1' : 'opacity-0'
          }`}
          style={{ textShadow: '0 1px 0 rgba(255, 255, 255, 0,6)' }}>
          E
        </span>
        <span
          className={`text-2xl font-extrabold ${
            animate ? 'text-gray-600 animate-slide-in-2' : 'opacity-0'
          }`}>
          H
        </span>
        <span
          className={`text-2xl font-extrabold ${
            animate ? 'text-gray-600 animate-slide-in-3' : 'opacity-0'
          }`}>
          A
        </span>
        <span
          className={`text-2xl font-extrabold ${
            animate ? 'text-gray-600 animate-slide-in-4' : 'opacity-0'
          }`}>
          C
        </span>
        <span
          className={`text-2xl font-extrabold ${
            animate ? 'text-gray-600 animate-slide-in-5' : 'opacity-0'
          }`}>
          I
        </span>
      </div>
      <span className='sr-only'>EHACI</span>
    </div>
  );
}

export default Icon;
