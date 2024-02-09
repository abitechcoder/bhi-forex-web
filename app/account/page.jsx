"use client";
import React, { useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

function page() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log("Error signing out: ", error);
    }

    router.replace("/login");
  };

  // useEffect(() => {
  //   const getUser = async() => {
  //     const {data: {user}} = await supabase.auth.getUser();

  //   }
  // }, [])

  return (
    <div>
    <h1 className="text-2xl md:text-4xl font-bold">Welcome, Abiola Adeosun</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default page;
