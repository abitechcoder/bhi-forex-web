import React from "react";
import { lato } from "../fonts";
import Testimonial from "./testimonial";

function Testimonials() {
  const testimonials = [
    {
      title: "Amazing Analysis",
      text: "I enrolled into BHIForex Academy with minimal knowledge of Forex trading and I can boldly say that I have learnt a lot. The remarkable thing is that I have also been able to learn about life from a different angle. I am impressed with their professionalism and approachability. I’m grateful to Jeffrey Benson and the astonishing BHIForex Team.",
      image_url: "",
      name: "Carte Efe",
    },
    {
      title: "Amazing Analysis",
      text: "Starting my forex journey with BHIForex has been a game changer for me, I joined BHiForex five months ago with zero knowledge about trading. But now I can confess this is a place that can make your trading journey easy and simple. Their teaching style is superb and makes you understand and adapt to the system within a short period of time. All thanks to Mr. Jeffrey and all tutors for making my forex trading journey easy. I'm forever grateful.",
      image_url: "",
      name: "Abiola Olalekan",
    },
    {
      title: "Amazing Analysis",
      text: "I Joined BHIForex as a complete beginner in August 2023 during my holidays and in 2 months I started seeing impressive results. The classes are easy to understand. All the teachers in the academy always push me to be the best special thanks to Samuel Tochi. My favourite classes are the interactive classes with the community managers and the Wednesday live trading session with Jeffrey Benson. Have been able to help my friends pass their prop firm challenges and have investors waiting to invest in my trading portfolio. Thank you BHIForex Academy.",
      image_url: "",
      name: "Seyi Ifagbemi",
    },
  ];
  return (
    <section className="section-container">
      <div className="text-center pt-[100px] pb-[30px]">
        <h2
          className={`${lato.className} text-3xl text-green-500 tracking-wider font-bold`}
        >
          What Our Student Says
        </h2>
      </div>
      <hr className="w-[200px] border-white mx-auto" />
      <div className="py-[50px] flex gap-[50px] justify-between">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
