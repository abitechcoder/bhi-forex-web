import React from "react";
import Image from "next/image";
import Link from "next/link";
import { lato } from "../fonts";

function Hero() {
  return (
    <section className="section-container grid grid-cols-2 h-[80vh]">
      <div className="flex flex-col justify-center items-start gap-8">
        <h1 className={`${lato.className} text-6xl leading-[70px]`}>
          Discover The Pathway to Mastering the Art of Profitable Forex
          Trading.
        </h1>
        <p className="text-lg text-green-500">
          BHIForex is your sure guide to financial freedom. We're a supportive
          community dedicated to teaching you the art of profitable forex
          trading.
        </p>
        <Link href={"/signup"} className="btn-secondary">
          Enrol now
        </Link>
      </div>
      <div className="grid place-items-center relative">
      <div className="w-[200px] h-[200px] absolute top-0 left-[50px] bg-orange-500 rounded-ss-[25px]"></div>
      <div className="w-[200px] h-[200px] absolute bottom-0 right-[50px] bg-yellow-400 rounded-ee-[25px]"></div>
        <div style={{width: "450px", height: "450px", position: "relative" }}>
            
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

export default Hero;
