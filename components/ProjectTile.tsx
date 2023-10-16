import { Button } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

const Card = ({
  link,
  code,
  title,
  description,
  imageUrl,
  bgImage,
  shadowColor,
}: any) => {
  console.log(bgImage);
  return (
    <div className="card ">
      <div
        style={{ boxShadow: `10px 35px 30px -15px ${shadowColor}` }}
        className="wrapper"
      >
        <img src={imageUrl} className="cover-image" />
        <p className="text-center  flex  absolute -top-10  p-2 font-bold font-sans  tracking-wider md:z-0 z-50">
          {title}
        </p>
      </div>

      <div className="character flex flex-col z-30 ">
        <img
          src={imageUrl}
          className="cover bg-repeat bg-center  w-full self-start  absolute  top-0 justify-start  left-0 z-0 blur-md p-3 "
        />

        <div className="self-center h-full flex-2 w-full text-center  drop-shadow-lg text-gray-100 justify-center items-center flex tracking-wide imgGradient">
          <p className="flex p-5 md:text-xl ">{description}</p>
        </div>
        <div className="flex flex-row justify-center gap-1  flex-1 items-center w-full  p-5">
          <Button
            style={{ borderRadius: "0" }}
            className="w-full rounded-none lg:hover:scale-[1.05] bg-slate-200 text-gray-900  "
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            <a
              rel="noreferrer"
              target="_blank"
              className=" text-center  text-custom-blue p-1 bttnA"
              href={link}
            >
              Site Link
            </a>
          </Button>
          <Button
            style={{ borderRadius: "0" }}
            className="w-full  lg:hover:scale-[1.05] bg-slate-200 text-gray-900 "
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            <a
              rel="noreferrer"
              target="_blank"
              className=" text-center  text-custom-blue p-1 bttnA"
              href={code}
            >
              Source Code
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
