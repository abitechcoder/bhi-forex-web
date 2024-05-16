import React from "react";
import Image from "next/image";
import Link from "next/link";
import { lato } from "../fonts";

function Hero() {
  return (
    <section className="section-container grid lg:grid-cols-2 lg:h-[80vh] px-4 lg:px-0 gap-8 lg:gap-0">
      <div className="flex flex-col justify-center items-center lg:items-start gap-8">
        <h1 className={`text-4xl text-center lg:text-left leading-[50px] lg:text-6xl lg:leading-[70px]`}>
          Discover The Pathway to Mastering the Art of <span className="text-green-500 font-bold">Profitable Forex
          Trading.</span>
        </h1>
        <p className="text-lg text-green-500 text-center lg:text-left">
          BHIForex is your sure guide to financial freedom. We're a supportive
          community dedicated to teaching you the art of profitable forex
          trading.
        </p>
        <Link href={"/signup"} className="btn-secondary">
          Enrol now
        </Link>
      </div>
      <div className="grid place-items-center relative">
      <div className="hidden lg:block w-[200px] h-[200px] absolute top-0 left-[50px] bg-orange-500 rounded-ss-[25px]"></div>
      <div className="hidden lg:block w-[200px] h-[200px] absolute bottom-0 right-[50px] bg-yellow-400 rounded-ee-[25px]"></div>
        <div className="w-full h-[300px] lg:w-[450px] lg:h-[450px] relative">
            
          <Image
            src={"/hero-pic.png"}
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

export default Hero;
