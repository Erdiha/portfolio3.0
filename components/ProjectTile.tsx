import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import Image from 'next/image';

const Card = ({ link, code, title, description, imageUrl }: any) => {
 
  return (
    <div className='flex flex-col justify-center  p-2 m-2 md:m-8 my-0 py-5'>
      <div className=' group md:h-[25rem] md:w-[35rem] [perspective:1000px] max-w-96 h-[20rem] border'>
        <div className='relative h-full w-full rounded-xl shadow-xl [transform-style:preserve-3d] transition-all duration-500 group-hover:[transform:rotateY(180deg)]'>
          <div className=' absolute inset-0 [backface-visibility:hidden] '>
            <h1 className='flex w-full text-fit p-2 bg-white/60 backdrop-blur shadow-lg leading-loose tracking-wider uppercase'>
              {title}
            </h1>

            <div className={`border flex  w-full h-full border-white absolute  rounded p-[2px] justify-center items-center ${title==='Glazed & Confused'? 'bg-pink-400 pt-2 mt-3 h-[94%]':''}`}>
              <Image
                src={imageUrl}
                alt={title}
               fill
                style={{ objectFit: 'contain',justifyContent:'center',alignItems:'center', padding:title==='Glazed & Confused'?'2rem ':'0px' }}
              />
            </div>
          </div>
          <div className=' [transform:rotateY(180deg)] justify-evenly w-full h-full flex items-center flex-col md:text-xl rounded-xl tracking-wide leading-loose bg-white/40 px-12 text-neutral-800   [backface-visibility:hidden]'>
            <p className='text-sm'>{description}</p>

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
                {imageUrl === 'lb1.jpg'
                  ? 'Watch the Game Play'
                  : ' See The Project'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
