"use server";
import { redirect } from "next/navigation";
import { generateUid } from "./utils";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export async function createSubscription(data) {
  const { title, amount, payment_url } = data;
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  // const { data } = await supabase.from('todos').select()
  const {
    data: { user },
  } = await supabase.auth.getUser();
  let randomId = generateUid();
  const { data: subscriptions, error } = await supabase
    .from("subscription")
    .insert([
      {
        title,
        amount,
        user_id: user?.id,
        payment_id: `PAYMENT-${randomId}`,
        status: false,
      },
    ])
    .select();
  if (subscriptions) {
    console.log("subscription Data:", subscriptions);
    redirect(payment_url);
  }

  if (error) {
    console.log("Error during subscription:", error);
  }
}

export async function getSubscriptions() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  // const { data } = await supabase.from('todos').select()
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let { data: subscriptions, error } = await supabase
    .from("subscription")
    .select("title, amount, status, payment_id, created_at").eq("user_id", user.id);

  if (subscriptions) {
    console.log("subscription Data:", subscriptions);
  }

  if (error) {
    console.log("Error during subscription:", error);
  }
}
