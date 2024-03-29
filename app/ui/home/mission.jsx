import React from "react";
import { lato } from "../fonts";
import Link from "next/link";

function Mission() {
  return (
    <section className="section-container px-4 lg:px-0">
      <div className="text-center pt-[70px] lg:pt-[100px] pb-[30px] lg:pb-[50px]">
        <h2 className={`${lato.className} text-4xl tracking-wider font-bold`}>
          What we <span className="text-green-500">offer</span>
        </h2>
        <p className="w-full lg:w-[400px] mx-auto mt-4 tracking-wider text-gray-400">
          Your dreams deserve a solid training academy, we've got you covered!
        </p>
      </div>
      <hr className="w-[200px] border-green-500 mx-auto" />
      <div className="py-[50px] grid lg:grid-cols-3 gap-8">
        <div className="card">
          <h3 className={`${lato.className} font-bold text-green-500 text-xl`}>
            Forex Education
          </h3>
          <p className="text-center leading-8">
            We provide a robust curriculum that covers everything from forex
            basics to advanced trading strategies. Our aim is to equip you with
            the knowledge and skills you need to thrive in the forex market.
            Click the button below to enroll now.
          </p>
          <Link href={"/signup"} className="btn-secondary">
            Enrol Now
          </Link>
        </div>

        <div className="card">
          <h3 className={`${lato.className} font-bold text-green-500 text-xl`}>
            Trading Community
          </h3>
          <p className="text-center leading-8">
            We foster a trading community of over 100,000 subscribers where high
            quality signals, trading resources and tools are shared for free.
            Click the button below to join now.
          </p>
          <Link href={"#"} className="btn-secondary">
            Join Telegram Channel
          </Link>
        </div>

        <div className="card">
          <h3 className={`${lato.className} font-bold text-green-500 text-xl`}>
            Live Trading Session
          </h3>
          <p className="text-center leading-8">
            Our free live trading session on YouTube every Monday 1:00 PM GMT+1
            was created to help traders improve their trading and be
            consistently profitable. Click the button below to subscribe to the
            channel.
          </p>
          <Link href={"#"} className="btn-secondary">
            Click here to Subscribe
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Mission;
