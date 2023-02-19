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
      <div className='flip-card-back text-md md:text:lg hidden  p-10 md:grid bg-gray-100 tracking-wide leading-loose items-center'>
        <Typography variant='h3'>{title}</Typography>

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
    );
  };

  return (
    <div
      key={id}
      className={`flip-card w-screen h-[25rem] md:w-[40rem] md:h-[30rem] p-4 pt-10 mt-10 ${
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
    </div>
  );
};

export default Card;
