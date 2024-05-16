"use server";
import { redirect } from "next/navigation";
import { generateUid, getExpiryDate } from "./utils";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { getUser } from "./data";
import { revalidatePath } from "next/cache";

const cookieStore = cookies();
const supabase = createServerComponentClient({ cookies: () => cookieStore });

export async function createSubscription(data) {
  const { title, amount, payment_url, days } = data;
  console.log("Days:", days);
  // const { data } = await supabase.from('todos').select()
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();
  const expirty_date = getExpiryDate(title, days);
  const user = await getUser();
  let randomId = generateUid();
  const { data: subscriptions, error } = await supabase
    .from("subscription")
    .insert([
      {
        title,
        amount,
        user_id: user?.id,
        payment_id: `PAYMENT-${randomId}`,
        status: "pending",
        expires_at: expirty_date,
      },
    ])
    .select();
  if (subscriptions) {
    // console.log("subscription Data:", subscriptions);
    revalidatePath("/account/transactions");
    redirect(payment_url);
  }

  if (error) {
    console.log("Error during subscription:", error);
  }
}

export async function updateUser(formdata) {
  const user = await getUser();
  const { data, error } = await supabase
    .from("profiles")
    .update(formdata)
    .eq("id", user.id)
    .select();

  if (data) {
    revalidatePath("/account/profile");
    return { status: true };
  }

  if (error) {
    return { status: false };
  }
}

export async function updateSubAction(data) {
  const { data: subscription, error } = await supabase
    .from("subscription")
    .update({ status: data?.value })
    .eq("payment_id", data?.payment_id)
    .select();

  if (subscription) {
    revalidatePath("/admin/confirm");
    return {
      data: subscription,
      error: false,
    };
  }

  if (error) {
    return {
      data: null,
      error: true,
    };
  }
}
