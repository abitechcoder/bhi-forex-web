"use client";
import React, { useEffect } from "react";
import TextInput from "../TextInput";
import Link from "next/link";
import Image from "next/image";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Login() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    reset({
      email: "",
      password: "",
    });
  }, [isSubmitSuccessful]);

  const onSubmit = async (formdata) => {
    const { email, password } = formdata;
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (data?.session) {
      toast.success("Login Successful");
      // console.log("supabase Response:", data);
      router.replace("/account");
    }

    if (error) {
      console.log("Supabase error:", error.message);
      if (error.message === "Email not confirmed") {
        toast.error("Please check your mail for confirmation email!", {
          duration: 7000,
        });
      } else if (error.message === "Invalid login credentials") {
        toast.error("Please enter a valid email/password", { duration: 7000 });
      } else {
        toast.error("Error occured while Signing in");
      }
    }
  };
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
              <span className="text-green-500 font-bold">Welcome</span> Back,
            </h1>
            <p className="text-center lg:text-left">
              We have a community of over 20,000 Forex Traders where continuous
              Forex Technical and Fundamental analysis is being shared
            </p>
          </div>
        </div>
        <div className="bg-gray-900 grid place-items-center">
          <div className="w-full p-5 lg:px-16 grid gap-4">
            <h1 className="text-3xl text-green-500 font-bold mb-2 text-center">
              Login
            </h1>
            <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <TextInput
                  {...register("email", {
                    required: "Email Address is required",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Email Address is invalid",
                    },
                  })}
                  title="Email"
                  placeholder_text="johndoe@gmail.com"
                  type="email"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <TextInput
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password cannot be less than 6",
                    },
                    maxLength: {
                      value: 20,
                      message: "Password cannot be more than 20",
                    },
                  })}
                  title="Password"
                  type="password"
                  placeholder_text="******"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <Link
                href={"/reset-password"}
                className="text-md text-gray-400 hover:text-green-500 hover:cursor-pointer hover:underline"
              >
                Forget Password?
              </Link>
              <button
                type="submit"
                className="bg-green-500 py-2 w-full rounded-lg"
              >
                Log In
              </button>
            </form>
            <p className="text-center">
              Don't Have An Account?{" "}
              <Link
                href={"/signup"}
                className="font-bold text-green-500 hover:underline hover:cursor-pointer"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
