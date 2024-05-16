"use client";
import React, { useEffect, useState } from "react";
import TextInput from "../ui/TextInput";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const page = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    reset({
      email: "",
      password: "",
    });
  }, [isSubmitSuccessful]);

  const onSubmit = async (formdata) => {
    setIsLoading(true);
    const { email, password } = formdata;
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (data?.session) {
      let { data: profiles, error } = await supabase
        .from("profiles")
        .select("id,role").eq('id', data?.session.user.id);
      
        if(profiles[0].role === "admin") {
          toast.success("Login Successful");
          router.push("/admin/confirm");
          setIsLoading(false);
        } else {
          toast.error("You are unauthorized");
          setIsLoading(false);
        } 
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
    <div className="grid place-items-center h-screen">
      <div className="bg-gray-900 grid place-items-center w-[40%]">
        <div className="w-full p-5 py-8 lg:px-16 grid gap-4">
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
              {isLoading ? "Logging In" : "Log In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
