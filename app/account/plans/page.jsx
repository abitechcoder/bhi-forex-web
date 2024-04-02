import React from "react";
import Plan from "../../ui/home/plan"
import {plans} from "../../lib/placeholder-data"

const page = () => {
  return (
    <div>
      <div className="grid gap-4">
        <h1>Pricing</h1>
        <h2 className="text-4xl">Choose Suitable Plan</h2>
        <p>You can change your plan any time or auto renew by subscribing to the service again</p>
      </div>

      <div className="py-[50px] grid lg:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <Plan key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default page;
