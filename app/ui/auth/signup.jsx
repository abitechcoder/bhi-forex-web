import React from "react";
import TextInput from "../TextInput";
import Link from "next/link";
import Image from "next/image";

function SignUp() {
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
              Get started with{" "}
              <span className="text-green-500 font-bold leading-[3rem]">
                BHIForex
              </span>
            </h1>
            <p>
              We have a community of over 20,000 Forex Traders where continuous
              Forex Technical and Fundamental analysis is being shared
            </p>
          </div>
        </div>
        <div className="bg-gray-900 grid place-items-center overflow-y-auto py-16">
          <div className="w-full px-16 grid gap-4">
            <h1 className="text-3xl text-green-500 font-bold mb-2 text-center">
              Sign Up
            </h1>
            <form className="grid gap-4">
              <TextInput title="First Name" placeholder_text="John" />
              <TextInput title="Last Name" placeholder_text="Doe" />
              <TextInput title="Username" placeholder_text="johnDoe" />
              <TextInput title="Email" placeholder_text="johndoe@gmail.com" />
              <TextInput
                title="Whatsapp Number"
                placeholder_text="+2348011122233"
              />
              <TextInput
                title="Telegram Id"
                placeholder_text="Your Telegram Id"
              />
              <TextInput
                title="Password"
                type="password"
                placeholder_text="******"
              />
              <TextInput
                title="Confirm Password"
                type="password"
                placeholder_text="******"
              />
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  required
                  value={false}
                  className="hover:cursor-pointer h-5 w-5"
                />
                <p>
                  I accept the{" "}
                  <Link
                    href={""}
                    className="text-md text-green-500 hover:cursor-pointer hover:underline"
                  >
                    Terms & Privacy policy
                  </Link>
                </p>
              </div>
              <button
                type="submit"
                className="bg-green-500 py-2 w-full rounded-lg"
              >
                Sign Up
              </button>
            </form>
            <p className="text-center">
              Already Have An Account?{" "}
              <Link
                href={"/login"}
                className="font-bold text-green-500 hover:underline hover:cursor-pointer"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
