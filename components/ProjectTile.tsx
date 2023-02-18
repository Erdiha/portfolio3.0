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
    <div className='flip-card w-[40rem] h-[40rem] p-4 '>
      <div className='flip-card-inner bg-black '>
        <div className='flip-card-front border border-black'>
          <h1 className='flex w-full text-xl p-2 bg-white/70 backdrop-blur shadow-lg leading-loose'>
            {title}
          </h1>
          <div className='absolute -bottom-10 mb-6 mx-4 rounded p-[2px] bg-gray-800'>
            <img src={imageUrl} alt='image myflix' />
          </div>
        </div>
        <div className='flip-card-back  p-10 grid bg-gray-100 '>
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
