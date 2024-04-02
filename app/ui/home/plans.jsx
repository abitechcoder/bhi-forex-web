import React from "react";
import { lato } from "../fonts";
import Plan from "./plan";
import {plans} from "../../lib/placeholder-data"

function Plans() {
 
  return (
    <section className="section-container px-4 lg:px-0">
      <div className="text-center pt-[50px] lg:pt-[100px] pb-[30px] lg:pb-[50px]">
        <h2 className={`${lato.className} text-4xl tracking-wider font-bold`}>
          Choose your <span className="text-green-500">Plan</span>
        </h2>
        <p className="w-full lg:w-[400px] mx-auto mt-4 tracking-wider text-gray-400">
          Learning forex made easier
        </p>
      </div>
      <hr className="w-[200px] border-green-500 mx-auto" />
      <div className="py-[50px] grid lg:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <Plan key={index} plan={plan} />
        ))}
      </div>
    </section>
  );
}

export default Plans;
