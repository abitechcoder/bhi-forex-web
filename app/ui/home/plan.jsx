import React from "react";
import { lato } from "../fonts";
import Link from "next/link";
import { CheckIcon } from "@heroicons/react/24/solid";

function Plan({ plan }) {
  return (
    <div className="card">
      <h3 className={`${lato.className} text-green-500 text-xl`}>
        {plan?.title}
      </h3>

      <h3 className={`${lato.className} font-bold text-green-500 text-4xl`}>
        {plan?.amount}
      </h3>

      <p className="text-center leading-8 text-gray-400">{plan?.text}</p>

      <ul className="list-none w-[100%] flex flex-col gap-3">
        {plan?.perks.map((perk, index) => (
          <li key={index} className="grid grid-cols-[30px_1fr] items-center gap-3">
            <CheckIcon className="w-6 h-6 text-green-500" />{" "}
            <p className="text-sm">{perk}</p>
          </li>
        ))}
      </ul>
      <Link href={plan?.link} className="btn-primary">
        Enrol Now
      </Link>
    </div>
  );
}

export default Plan;
