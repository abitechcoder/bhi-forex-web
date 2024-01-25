"use client";

import React, { useState } from "react";
import { lato } from "../fonts";
import Link from "next/link";
import { CheckIcon } from "@heroicons/react/24/solid";

function Testimonial({ testimonial }) {
  const [less, setLess] = useState(true);
  let testimonial_text = "";

  if (testimonial?.text.length > 200) {
    testimonial_text = less ? (
      <p className="text-justify leading-8 text-gray-400 min-h-[200px]">
        {testimonial?.text.slice(0, 200)}...{" "}
        <span
          onClick={() => setLess(false)}
          className="font-bold text-white hover:text-green-500 hover:cursor-pointer"
        >
          Read More
        </span>
      </p>
    ) : (
      <p className="text-justify leading-8 text-gray-400 min-h-[200px]">
        {testimonial?.text}{" "}
        <span
          onClick={() => setLess(true)}
          className="font-bold text-white hover:text-green-500 hover:cursor-pointer"
        >
          Read Less
        </span>
      </p>
    );
  } else {
    testimonial_text = (
      <p className="text-justify leading-8 text-gray-400 min-h-[200px]">
        {testimonial?.text}
      </p>
    );
  }
  return (
    <div className="card gap-2">
      <h3 className={`${lato.className} text-green-500 text-lg w-full`}>
        {testimonial?.title}
      </h3>

      {testimonial_text}

      <div className="w-full flex gap-4">
        <div className="w-[50px] h-[50px] rounded-full bg-green-500"></div>
        <div>
          <h3>{testimonial?.name}</h3>
          <p className="text-green-500 font-bold">Forex Trader {testimonial_text.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
