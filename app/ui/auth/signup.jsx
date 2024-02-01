"use client";
import React, { useEffect } from "react";
import TextInput from "../TextInput";
import Link from "next/link";
import Image from "next/image";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function SignUp() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    getValues,
    handleSubmit,
    reset,
  } = useForm();
  useEffect(() => {
    reset({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      phone: "",
      telegram_id: "",
      password: "",
      c_password: "",
    });
  }, [isSubmitSuccessful]);
  const onSubmit = async (formdata) => {
    const { email, password } = formdata;
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: formdata,
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });

    if (data) {
      toast.success(
        "Registration Successful, Confirmation mail has been sent to your email"
      );
      // console.log("supabase Response:", data);
      router.push("/login");
    }

    if (error) {
      toast.error("Error occured while registering!");
      // console.log("supabase Error:", error);
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
              Get started with{" "}
              <span className="text-green-500 font-bold leading-[3rem]">
                BHIForex
              </span>
            </h1>
            <p className="text-center lg:text-left ">
              We have a community of over 20,000 Forex Traders where continuous
              Forex Technical and Fundamental analysis is being shared
            </p>
          </div>
        </div>
        <div className="bg-gray-900 grid place-items-center overflow-y-auto py-16">
          <div className="w-full p-5 lg:px-16 grid gap-4">
            <h1 className="text-3xl text-green-500 font-bold mb-2 text-center">
              Sign Up
            </h1>
            <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <TextInput
                  {...register("firstname", {
                    required: "firstname is required",
                    minLength: {
                      value: 2,
                      message: "firstname cannot be less than 2",
                    },
                    maxLength: {
                      value: 20,
                      message: "firstname cannot be more than 20",
                    },
                  })}
                  title="First Name"
                  placeholder_text="John"
                />
                {errors.firstname && (
                  <p className="text-red-500">{errors.firstname.message}</p>
                )}
              </div>

              <div className="grid gap-2">
                <TextInput
                  {...register("lastname", {
                    required: "lastname is required",
                    minLength: {
                      value: 2,
                      message: "lastname cannot be less than 2",
                    },
                    maxLength: {
                      value: 20,
                      message: "lastname cannot be more than 20",
                    },
                  })}
                  title="Last Name"
                  placeholder_text="Doe"
                />
                {errors.lastname && (
                  <p className="text-red-500">{errors.lastname.message}</p>
                )}
              </div>

              <div className="grid gap-2">
                <TextInput
                  {...register("username", {
                    required: "username is required",
                    minLength: {
                      value: 2,
                      message: "username cannot be less than 2",
                    },
                    maxLength: {
                      value: 20,
                      message: "username cannot be more than 20",
                    },
                  })}
                  title="Username"
                  placeholder_text="johnDoe"
                />
                {errors.username && (
                  <p className="text-red-500">{errors.username.message}</p>
                )}
              </div>

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
                  {...register("phone", {
                    required: "Whatsapp number is required",
                    minLength: {
                      value: 6,
                      message: "Whatsapp number cannot be less than 6",
                    },
                    maxLength: {
                      value: 20,
                      message: "Whatsapp number cannot be more than 20",
                    },
                  })}
                  title="Whatsapp Number"
                  placeholder_text="+2348011122233"
                />
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}
              </div>

              <div className="grid gap-2">
                <TextInput
                  {...register("telegram_id", {
                    required: "Telegram Id is required",
                    minLength: {
                      value: 4,
                      message: "Telegram Id cannot be less than 4",
                    },
                    maxLength: {
                      value: 20,
                      message: "Telegram Id cannot be more than 20",
                    },
                  })}
                  title="Telegram Id"
                  placeholder_text="Your Telegram Id"
                />
                {errors.telegram_id && (
                  <p className="text-red-500">{errors.telegram_id.message}</p>
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

              <div className="grid gap-2">
                <TextInput
                  {...register("c_password", {
                    required: "Confirm Password is required",
                    validate: {
                      matchesPreviousPassword: (value) => {
                        const { password } = getValues();
                        return password === value || "Passwords should match!";
                      },
                    },
                  })}
                  title="Confirm Password"
                  type="password"
                  placeholder_text="******"
                />
                {errors.c_password && (
                  <p className="text-red-500">{errors.c_password.message}</p>
                )}
              </div>
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
