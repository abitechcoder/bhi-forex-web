import React from "react";
import { lato } from "../fonts";
import Plan from "./plan";

function Plans() {
  const plans = [
    {
      title: "Monthly Plan",
      amount: "$49",
      text: "FULL access to our free resource and course as you begin your Forex Journey",
      perks: [
        "Full Access to Training videos",
        "Access to Beginner & advanced live classes",
        "Free trade signals (Bonus)",
        "Help & Support",
        "Private Community",
      ],
      link: "/signup",
    },
    {
      title: "3 Months Plan",
      amount: "$99",
      text: "FULL access to our free resource and course as you begin your Forex Journey",
      perks: [
        "Everything in Monthly plan, plus:",
        "Weekly Live trading sessions",
        "Mentor's Personal Contact",
        "Free trading plan template",
        "Priority Support",
      ],
      link: "/signup",
    },
    {
      title: "6 Months Plan",
      amount: "$225",
      text: "FULL access to our free resource and course as you begin your Forex Journey",
      perks: [
        "Everything in 3 Months plan plus:",
        "Daily Live trading session",
        "60 Minutes group call with a Mentor to create a personalized trading plan",
        "Certificate of Attendance",
        "Top Priority Support",
      ],
      link: "/signup",
    },
    {
      title: "12 Months Plan",
      amount: "$399",
      text: "FULL access to our free resource and course as you begin your Forex Journey",
      perks: [
        "Everything is 6 Months plan plus:",
        "Access to Beginner & advanced live classes",
        "Free trade signals (Bonus)",
        "Help & Support",
        "Private Community",
      ],
      link: "/signup",
    },
  ];
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
