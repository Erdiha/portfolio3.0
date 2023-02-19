import React, { useState, useEffect } from 'react';

function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id='home' className={`hero ${loaded ? 'hero-loaded' : ''}`}>
      <div className='hero-inner'>
        <div className='flex justify-center items-center h-full'>
          <div className='flex flex-col max-w-7xl pt-20 h-[50%] md:p-40 md:m-auto'>
            <div className='flex mt-20 md:mb-40 hero-text-animate justify-center items-center gap-1 text-start uppercase text-sm md:text-xl font-bold hero-text-animate'>
              <span className='hero-text-animate flex text-md md:text-4xl bg-white/30 p-2 rounded sepia'>
                A passion for{' '}
              </span>
              <span
                className={`ring-white ring-1 p-1 md:text-5xl flex flex-col text-gray-900  hero-text-animate invert text-lg ${
                  loaded ? 'translate-x-0 ' : 'translate-x-[200%] '
                }`}>
                developing.
              </span>
            </div>
            <div className='text-start pt-20 md:pt-40 md:text-2xl'>
              <h1 className='font-semibold'> Hi, I am ERDI. </h1>
              <i
                className={`flex text-sm text-[#ecf0f3]/80 md:text-xl font-light hero-text-animate ${
                  loaded ? 'translate-y-0' : 'translate-y-[40px]'
                }`}>
                Frontend Engineer. UI & UX Designer.
              </i>
            </div>
          </div>
        </div>
      </div>
      <div className='hero-background' />
    </section>
  );
}

export default Hero;
