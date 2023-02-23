import { useState } from 'react';
import { Button, Typography } from '@material-tailwind/react';
import Link from 'next/link';

const Card = ({
  id,
  link,
  code,
  title,
  imageUrlBack,
  description,
  imageUrl,
}: any) => {
  const [flipped, setFlipped] = useState(false);
  const handlePointerDown = () => {
    if (window.innerWidth < 768) {
      setFlipped(!flipped);
    }
  };

  const cardBack = () => {
    return (
      <div className='relative flip-card-back text-md md:text-lg hidden  p-10 md:grid bg-gray-100 tracking-wide leading-loose items-center z-50'>
        <Typography variant='h3'>{title}</Typography>

        <p>{description}</p>

        <a href={code}>GitHub Repo</a>

        <a target='_blank' rel='noreferrer' href={link}>
          See The Project
        </a>
      </div>
    );
  };

  return (
    <div className='flex flex-col justify-center  md:m-8 md:my-16 my-8 '>
      <div className=' group md:h-[30rem] md:w-[40rem] [perspective:1000px] w-96 h-[20rem] border'>
        <div className='relative h-full w-full rounded-xl shadow-xl [transform-style:preserve-3d] transition-all duration-500 group-hover:[transform:rotateY(180deg)]'>
          <div className=' absolute inset-0 [backface-visibility:hidden] '>
            <h1 className='flex w-full text-xl p-2 bg-white/60 backdrop-blur shadow-lg leading-loose tracking-wider uppercase'>
              {title}
            </h1>

            <div className='border  flex  border-white absolute -bottom-10 mx-4 rounded p-[2px] bg-gray-800 '>
              <img src={imageUrl} alt={title} />
            </div>
          </div>
          <div className='absolute inset-0 text-center [transform:rotateY(180deg)] justify-center flex items-center flex-col md:gap-20 gap-10 md:text-xl rounded-xl tracking-wide leading-loose bg-white/40 px-12 text-neutral-800  [backface-visibility:hidden]'>
            <p>{description}</p>

            <Link href={code} target='_blank' rel='noreferrer'>
              <Button
                variant='gradient'
                className='text-gray-500 text-md shadow-sm bg-slate-200 px-2 rounded-none md:hover:scale-105 md:hover:bg-neutral-200'
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}>
                GitHub Repo
              </Button>
            </Link>

            <Link target='_blank' rel='noreferrer' href={link}>
              <Button
                variant='gradient'
                className='text-gray-500 text-md  shadow-sm bg-slate-200 px-2 rounded-none md:hover:scale-105 md:hover:bg-neutral-200'
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}>
                See The Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

{
  /* <div
      key={id}
      className={`flip-card w-screen z-10 h-[25rem] md:w-[40rem] md:h-[30rem] p-4 pt-10 mt-10 ${
        flipped ? 'hover' : ''
      }`}
      onPointerDown={handlePointerDown}>
      <div className='flip-card-inner bg-gray-200'>
        <div className='flip-card-front'>
          <h1 className='flex w-full text-xl p-2 bg-white/60 backdrop-blur shadow-lg leading-loose tracking-wider uppercase'>
            {title}
          </h1>
          <div className='border hidden md:flex  border-white absolute -bottom-20 mb-6 mx-4 rounded p-[2px] bg-gray-800 '>
            <img src={imageUrl} alt={title} />
          </div>
          <div className='text-md md:text:lg gap-4 flex flex-col border-b-2 md:hidden  p-10  bg-gray-50 tracking-wide leading-loose items-center'>
            <p>{description}</p>

            <Link href={code}>
              <Button
                variant='gradient'
                className='text-gray-700 shadow-sm bg-slate-200 px-2 rounded-none'
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}>
                GitHub Repo
              </Button>
            </Link>

            <a target='_blank' rel='noreferrer' href={link}>
              <Button
                variant='gradient'
                className='text-gray-700 shadow-sm bg-slate-200 px-2 rounded-none'
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}>
                See The Project
              </Button>
            </a>
          </div>
        </div>
        {cardBack()}
      </div>
    </div> */
}
