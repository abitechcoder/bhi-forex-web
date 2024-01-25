import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 pt-10 mt-10">
      <div className="container mx-auto py-4 flex flex-col items-center">
        <Image src={"/logo.png"} alt="Company Logo" height={80} width={170} />
        <p className="text-sm text-center leading-6 w-[30%]">
          <strong>BHIForex Academy</strong> provides general information and
          educational materials only. Please recognize that your ultimate
          success or failure will be the result of your{" "}
          <strong>own efforts</strong>.
        </p>
        <div className="w-[70%] flex justify-between text-sm text-green-500 mt-10">
          <Link href={"/plan"}>Mentorship Plan</Link>
          <Link href={"/courses"}>Mentorship Courses</Link>
          <Link href={""}>FAQs</Link>
        </div>
        <div className="w-[100%] mt-10 py-4 border-t flex justify-between items-center">
          <p>&copy; BHIForex Academy. All Rights Reserved</p>
          <div className="flex items-center gap-4">
            <div className="w-[40px] h-[40px] rounded-full grid place-items-center bg-black hover:cursor-pointer hover:bg-white hover:text-black">
              <FaXTwitter className="w-5 h-5" />
            </div>
            <div className="w-[40px] h-[40px] rounded-full grid place-items-center bg-blue-700 hover:cursor-pointer hover:bg-white hover:text-blue-700">
              <FaFacebookF className="w-5 h-5" />
            </div>
            <div className="w-[40px] h-[40px] rounded-full grid place-items-center bg-red-600 hover:cursor-pointer hover:bg-white hover:text-red-600">
              <FaInstagram className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
