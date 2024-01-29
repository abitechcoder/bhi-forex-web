import React from "react";
import Image from "next/image";
import Link from "next/link";
import { lato } from "../fonts";

function OngoingReg() {
  return (
    <section className="section-container grid lg:grid-cols-2 lg:h-[80vh] px-4 lg:px-0 gap-8 lg:gap-0">
      <div className="flex flex-col justify-center items-center lg:items-start gap-8">
        <h1 className={`${lato.className} text-4xl text-center lg:text-left leading-[50px] lg:text-6xl lg:leading-[70px]`}>
          Enrol for the <span className="text-green-500 font-bold">Second Part of BHIForex 2024</span> Ongoing Training
        </h1>
        {/* <p className="text-lg text-green-500">
          BHIForex is your sure guide to financial freedom. We're a supportive
          community dedicated to teaching you the art of profitable forex
          trading.
        </p> */}
        <Link href={"/signup"} className="btn-secondary">
          Enrol now
        </Link>
      </div>
      <div className="grid place-items-center relative">
      <div className="hidden lg:block w-[200px] h-[200px] absolute top-0 left-[50px] bg-green-500 rounded-ss-[25px]"></div>
      <div className="hidden lg:block w-[200px] h-[200px] absolute bottom-0 right-[50px] bg-yellow-400 rounded-ee-[25px]"></div>
        <div className="w-full h-[300px] lg:w-[450px] lg:h-[450px] relative">
            
          <Image
            src={"/image1.jpg"}
            alt=""
            placeholder="empty"
            fill
            className="object-cover object-center rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default OngoingReg;
