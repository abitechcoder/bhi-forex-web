import React from "react";
import TextInput from "../TextInput";
import Link from "next/link";
import Image from "next/image";

function Login() {
  return (
    <section className="section-container h-[90vh] p-0">
      <div className="grid grid-cols-2 h-full">
        <div className="grid place-items-center relative">
        <Image
            src={"/bg-forex.jpg"}
            alt="Background Image"
            placeholder="empty"
            fill
            className="object-cover object-center rounded-lg z-[-5] opacity-15"
          />
          <div className="w-[60%]">
            <h1 className="text-4xl mb-4">
              <span className="text-green-500 font-bold">Welcome</span> Back,
            </h1>
            <p>
              We have a community of over 20,000 Forex Traders where continuous
              Forex Technical and Fundamental analysis is being shared
            </p>
          </div>
        </div>
        <div className="bg-gray-900 grid place-items-center">
            <div className="w-full px-16 grid gap-4">
                <h1 className="text-3xl text-green-500 font-bold mb-2 text-center">Login</h1>
                <form className="grid gap-4">
                    <TextInput title="Email" placeholder_text="abiola@gmail.com"/>
                    <TextInput title="Password" type="password" placeholder_text="******"/>
                    <Link href={"/reset-password"} className="text-md text-gray-400 hover:text-green-500 hover:cursor-pointer hover:underline">Forget Password?</Link>
                    <button type="submit" className="bg-green-500 py-2 w-full rounded-lg">Log In</button>
                </form>
                <p className="text-center">Don't Have An Account? <Link href={"/signup"} className="font-bold text-green-500 hover:underline hover:cursor-pointer">Sign Up</Link></p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
