import { Button } from '@material-tailwind/react';
import React from 'react';

function Resume() {
  const [view, setView] = React.useState(false);
  return (
    <section
      id='resume'
      className={`w-full  ${
        view ? 'h-[100vh]' : 'h-[20rem]'
      } bg-gray-500 justify-around items-center flex p-10 flex-col md:flex-row scroll-mt-[40vh] align-top `}>
      {view ? (
        <div className='w-full h-full flex flex-col gap-2 '>
          <Button
            className='w-20 md:hover:scale-105 bg-slate-100 text-gray-900 '
            onClick={() => setView(!view)}
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}>
            Close
          </Button>
          <iframe src='/resume.pdf' width='100%' height='95%' />
        </div>
      ) : (
        <>
          {' '}
          <Button
            onClick={() => setView(!view)}
            className='w-fit hover:scale-150 bg-slate-200 text-gray-900 px-3 hidden md:flex'
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}>
            View Resume
          </Button>
          <Button
            className='w-fit hover:scale-150 bg-slate-200 text-gray-900 p-3'
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}>
            <a
              download
              href='/resume.pdf'
              target='_blank'
              rel='noreferrer'
              className=' border-[1px] text-center   text-custom-blue font-semibold'>
              Download Resume
            </a>
          </Button>
        </>
      )}
    </section>
  );
}

export default Resume;

const pdf = () => {};
