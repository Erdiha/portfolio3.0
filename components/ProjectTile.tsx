import { Button, Typography } from '@material-ui/core';
import Link from 'next/link';
import React, { useState } from 'react';

const Card = ({
  link,
  code,
  title,
  imageUrlBack,
  description,
  imageUrl,
}: any) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className='flip-card w-screen h-[25rem] md:w-[40rem] md:h-[40rem] p-4 '>
      <div className='flip-card-inner  bg-gray-200'>
        <div className='flip-card-front '>
          <h1 className='flex w-full text-xl p-2 bg-white/70 backdrop-blur shadow-lg leading-loose tracking-wider uppercase'>
            {title}
          </h1>
          <div className='border border-white absolute -bottom-10 mb-6 mx-4 rounded p-[2px] bg-gray-800'>
            <img src={imageUrl} alt='image myflix' />
          </div>
        </div>
        <div className='flip-card-back text-lg  p-10 grid bg-gray-100 tracking-wide leading-loose items-center'>
          <Typography variant='h3'>{title}</Typography>

          <p>{description}</p>

          <a href={code}>
            <Button variant='outlined' className=' shadow-sm bg-slate-700'>
              GitHub Repo
            </Button>
          </a>
          <a target='_blank' referrerPolicy='no-referrer' href={link}>
            <Button variant='outlined' className=' shadow-sm bg-slate-700'>
              {' '}
              See The Project
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
