"use client";
import { useEffect, useState } from "react";
import { TextInput } from "../../../ui/components";
import { useForm } from "react-hook-form";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import toast from "react-hot-toast";
import { updateUser } from "../../../lib/action";
import clsx from "clsx";

const ProfileForm = ({ user }) => {
  // console.log(user)
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [isUpdating, setIsUpdating] = useState(false);

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset,
  } = useForm({
    values: {
      email: user?.email || "",
      firstname: user?.firstname || "",
      lastname: user?.lastname || "",
      username: user?.username || "",
      telegram_id: user?.telegram_id || "",
      phone: user?.phone || "",
    },
  });

  const onSubmit = async (formdata) => {
    setIsUpdating(true);
    const { status } = await updateUser(formdata);

    if (status) {
      setIsUpdating(false);
      toast.success("Data successfully updated!");
    } else {
      setIsUpdating(false);
      toast.error("Error occurred while updating data!");
    }
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-2 items-center pb-4">
        <label htmlFor="email">Email</label>
        <div>
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
            id="email"
            disabled
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 items-center pb-4 ">
        <label htmlFor="First Name">Firstname</label>
        <div>
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
      </div>
      <div className="grid grid-cols-2 gap-2 items-center pb-4 ">
        <label htmlFor="Last Name">Lastname</label>
        <div>
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
      </div>
      <div className="grid grid-cols-2 gap-2 items-center pb-4 ">
        <label htmlFor="Username">Username</label>
        <div>
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
      </div>
      <div className="grid grid-cols-2 gap-2 items-center pb-4 ">
        <label htmlFor="Whatsapp Number">Whatsapp Number</label>
        <div>
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
      </div>
      <div className="grid grid-cols-2 gap-2 items-center pb-4">
        <label htmlFor="Telegram Id">Telegram Id</label>
        <div>
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
      </div>
      <button
        type="submit"
        className={clsx('bg-green-500 py-2 w-[200px] rounded-lg mx-auto hover:bg-green-700', {'bg-green-700': isUpdating === true})}
      >
        {isUpdating ? "Updating...." : "Update Profile"}
      </button>
    </form>
  );
};

export default ProfileForm;
