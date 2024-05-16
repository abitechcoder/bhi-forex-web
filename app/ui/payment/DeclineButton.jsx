"use client";
import { Button } from "../../../components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

const DeclineButton = (data) => {
  const [loading, setLoading] = useState(false);
  async function updateSubscription(data) {
    const supabase = createClientComponentClient();
    setLoading(true);

    const { data: subscription, error } = await supabase
      .from("subscription")
      .update({ status: data?.value })
      .eq("payment_id", data?.payment_id)
      .select();
    setLoading(false);
    if (subscription) {
      console.log("Updated subscription Data:", subscription);
      return subscription;
    }

    if (error) {
      console.log("Error occured while updating subscription:", error);
      throw new Error("Failed to update subscription.");
    }
  }

  return (
    <Button variant="destructive" onClick={() => updateSubscription(data)}>
      {loading ? "Declining" : "Decline"}
    </Button>
  );
};

export default DeclineButton;
