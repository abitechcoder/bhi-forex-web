"use client";
import React, { useEffect, useState } from "react";
import TextInput from "../TextInput";
import Link from "next/link";
import Image from "next/image";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAuthContext } from "../../../context/AuthContext";

function Login() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const {setAuth} = useAuthContext();

  // useEffect(() => {
  //   reset({
  //     email: "",
  //     password: "",
  //   });
  // }, [isSubmitSuccessful]);

  useEffect(() => {
    if (user) {      
      reset({
        email: "",
        password: "",
      });
      toast.success("Login Successful");
      router.push("/account");
      setIsLoading(false);
    }
  }, [user]);

  const onSubmit = async (formdata) => {
    const { email, password } = formdata;
    setIsLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    

    if (data?.session) {   
      setUser(data?.session);
      setAuth(data?.session);
    }

    if (error) {
      // console.log("Supabase error:", error.message);
      setIsLoading(false);
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
    <section className="section-container h-[90vh] p-0 relative">
      {isLoading && (
        <div className="bg-white/20 w-full h-full absolute top-0 left-0 z-10 grid place-items-center">
          <div className="w-[100px] h-[100px] bg-black rounded-lg grid place-items-center">
            <svg
              aria-hidden="true"
              class="w-9 h-9 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        </div>
      )}
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
