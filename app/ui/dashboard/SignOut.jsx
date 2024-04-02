"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const SignOut = () => {
    const supabase = createClientComponentClient();
    const router = useRouter();
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log("Error signing out: ", error);
    }

    router.replace("/login");
  };
  return <div onClick={handleSignOut}>SignOut</div>;
};

export default SignOut;
