import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
const cookieStore = cookies();
const supabase = createServerComponentClient({ cookies: () => cookieStore });
import { unstable_noStore as noStore } from "next/cache";

export async function getUser() {
  noStore();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profiles } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id);

  return profiles[0];
}

export async function getSubscriptions() {
  noStore();
  const user = await getUser();
  let { data: subscriptions, error } = await supabase
    .from("subscription")
    .select("title, amount, status, payment_id, created_at")
    .eq("user_id", user.id);

  if (subscriptions) {
    //   console.log("subscription Data:", subscriptions);
    return subscriptions;
  }

  if (error) {
    console.log("Error during subscription:", error);
    throw new Error("Failed to fetch the latest subscriptions.");
  }
}

export async function getUserActiveSubscriptions() {
  noStore();
  const user = await getUser();
  let { data: subscriptions, error } = await supabase
    .from("subscription")
    .select("title, amount, status, payment_id, created_at, expires_at")
    .eq("user_id", user.id)
    .eq("status", "success")

  if (subscriptions) {
      console.log("subscription Data:", subscriptions);
    return subscriptions;
  }

  if (error) {
    console.log("Error during subscription:", error);
    throw new Error("Failed to fetch the latest subscriptions.");
  }
}

export async function getAllSubscriptions() {
  // const cookieStore = cookies();
  // const supabase = createServerComponentClient({ cookies: () => cookieStore });
  noStore();
  let { data: subscriptions, error } = await supabase.from("subscription")
    .select(`
title, amount, status, payment_id, created_at,
  profiles (
    firstname, lastname
  )
`);

  // let { data: subscriptions, error } = await supabase
  //   .from("subscription")
  //   .select("title, amount, status, payment_id, created_at")

  if (subscriptions) {
    console.log("subscription Data:", subscriptions);
    return subscriptions;
  }

  if (error) {
    console.log("Error during subscription:", error);
    throw new Error("Failed to fetch all subscriptions.");
  }
}
