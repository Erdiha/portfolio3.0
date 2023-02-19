import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Icon from './Icon';
// import { useRouter } from 'next/router';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [currentNav, setCurrentNav] = useState('home');
  const [sections, setSections] = useState([]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const display = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', display);

    // Get all sections on the page
    const sectionElements: any = document.querySelectorAll('section');
    const newSections: any = [];

    // For each section, create an observer
    sectionElements.forEach((section: any) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCurrentNav(section.id);
          }
        },
        {
          rootMargin: '-50% 0px -50% 0px',
        },
      );
      observer.observe(section);
      section.observer = observer; // assign observer to the element
      newSections.push(section.id);
    });

    setSections(newSections);

    // Clean up the observer when component unmounts
    return () => {
      window.removeEventListener('scroll', display);
      sectionElements.forEach((section: any) => {
        const observer: IntersectionObserver = section.observer;
        observer.disconnect();
      });
    };
  }, []);
  const navitems = () => {
    const items = ['home', 'skills', 'projects', 'resume', 'contact'];
    const navItems = items.map((item) => (
      <li
        key={item}
        onClick={() => setCurrentNav(item)}
        className={`ml-10 text-sm uppercase hover:border-b-2 ${
          item === 'home'
            ? `border-gray-200 ${!currentNav && 'border-2 p-1 border-gray-100'}`
            : `border-gray-800 ${
                currentNav === item ? 'border-2 p-1 border-gray-800' : ''
              }`
        }`}>
        <Link href={`${item === 'home' ? '/' : '#' + item}`}>{item}</Link>
      </li>
    ));
    return navItems;
  };

  console.log(currentNav);
  return (
    <div
      className={` ${
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100]  backdrop-blur bg-white/30  ease-in-out duration-300 text-black font-semibold'
          : 'fixed w-full h-20 z-[100] ease-in-out duration-300 bg-slate-900 text-white'
      }`}>
      <div className='flex justify-between md:max-w-[90rem] md:mx-auto items-center w-full h-full px-8 md:px-32 2xl:px-16 '>
        <Link href='/'>
          <Icon />
        </Link>
        <div>
          <ul className='hidden md:flex'>{navitems()}</ul>
          {/* Hamburger Icon */}
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }>
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[70%] md:w-[45%] h-screen bg-[#ecf0f3] p-8 ease-in duration-500 text-black'
              : 'fixed left-[-110%] top-0 p-10 ease-in duration-500'
          }>
          <div>
            <div className='flex w-full items-center justify-between '>
              <Link href='/'>
                <Icon />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-tr-sm bg-gray-300 text-gray-600 font-bold  p-3 shadow-md cursor-pointer'>
                <AiOutlineClose
                  className='text-xl font-bold
                '
                />
              </div>
            </div>
            <div className='border-b border-gray-300 my-8'>
              <i className='w-[85%] md:w-[90%] '>A Passion For Developing.</i>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>

              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href='/#resume'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Resume
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#8e8e92]'>
                CONNECT WITH ME
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/erdi-haciogullari-919246222/'
                  target='_blank'
                  rel='noreferrer'>
                  <div className='rounded-sm shadow-sm shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/Erdiha'
                  target='_blank'
                  rel='noreferrer'>
                  <div className='rounded-sm shadow-sm shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-sm shadow-sm shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/#resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-sm shadow-sm shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
