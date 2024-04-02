"use server";
import { redirect } from "next/navigation";
import { generateUid } from "./utils";

export async function createSubscription(data) {
  const { title, amount, payment_url } = data;
  const date_array = new Date().toISOString().split("T");
  let randomId = generateUid();
  try {
    const subscription = {
      title,
      amount,
      userId: 1111,
      paymentId: 10000,
      date:
        date_array[0].split("-").reverse().join("-") +
        " " +
        date_array[1].split(".")[0],
      payment_url,
      payment_id: `PAYMENT-${randomId}`,
    };
    console.log("subscription Data:", subscription);
  } catch (error) {
    console.error("Error occured during subscribtion");
  }
  redirect(payment_url);
}
