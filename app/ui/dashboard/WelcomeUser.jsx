import React from "react";
import { getUser } from "../../lib/data";

const WelcomeUser = async () => {
  const user = await getUser();
  console.log("User:", user)
  return (
    <h1 className="text-2xl md:text-4xl font-bold">
      Welcome, {`${user.firstname} ${user.lastname}`}
    </h1>
  );
};

export default WelcomeUser;
