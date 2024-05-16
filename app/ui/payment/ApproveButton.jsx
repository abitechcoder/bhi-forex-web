"use client";
import { Button } from "../../../components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { updateSubAction } from "../../lib/action";

const ApproveButton = (data) => {
  const [loading, setLoading] = useState(false);
  async function updateSubscription(data) {
    setLoading(true);

    const result = await updateSubAction(data);
    console.log("Result:", result);

    setLoading(false);
    if (result.data) {
      console.log("Updated subscription Data:", result.data);
      return result.data;
    }

    if (result.error) {
      console.log("Error occured while updating subscription:", error);
      throw new Error("Failed to update subscription.");
    }
  }

  return (
    <Button onClick={() => updateSubscription(data)}>
      {loading ? "Approving" : "Approve"}
    </Button>
  );
};

export default ApproveButton;
