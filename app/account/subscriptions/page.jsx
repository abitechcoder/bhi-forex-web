import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="grid gap-4">
          <h1>Manage Subscription</h1>
          <h2 className="text-4xl">My Subsciptions</h2>
          <p>Here is list of plans that you have subscribed.</p>
        </div>
        <Link href={"/account/plans"} className="btn-secondary">
          View Pricing
        </Link>
      </div>

      <div className="py-8">
        <div className="bg-red-700 text-white px-8 py-4">
          NOTE! You haven't subscribed to any service{" "}
          <Link href={"/account/plans"} className="font-bold underline">
            subscribe now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
