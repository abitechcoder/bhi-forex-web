import React from "react";
import TextInput from "../TextInput";
import Link from "next/link";
import Image from "next/image";

function ResetPassword() {
  return (
    <section className="section-container h-[90vh] p-0">
      <div className="grid lg:grid-cols-2 h-full">
        <div className="grid place-items-center relative">
        <Image
            src={"/bg-forex.jpg"}
            alt="Background Image"
            placeholder="empty"
            fill
            className="object-cover object-center rounded-lg z-[-5] opacity-15"
          />
          <div className="w-[100%] p-5 lg:p-0 lg:w-[60%]">
            <h1 className="text-3xl text-center lg:text-left lg:text-4xl mb-4">
              <span className="text-green-500 font-bold">Reset</span> Password
            </h1>
            <p className="text-center lg:text-left">
            We all forget things. Enter your email address to reset your password
            </p>
          </div>
        </div>
        <div className="bg-gray-900 grid place-items-center">
            <div className="w-full p-5 lg:px-16 grid gap-4">
                <h1 className="text-3xl text-green-500 font-bold mb-2 text-center">Password Reset</h1>
                <form className="grid gap-6">
                    <TextInput title="Email" placeholder_text="abiola@gmail.com" type="email"/>
                    <button type="submit" className="bg-green-500 py-2 w-full rounded-lg">Reset Password</button>
                </form>
                <p className="text-center">Remember Password? <Link href={"/login"} className="font-bold text-green-500 hover:underline hover:cursor-pointer">Log In</Link></p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default ResetPassword;
