import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const Links = [
    { id: 1, title: "Mentorship Courses", route: "/courses" },
    { id: 2, title: "Mentorship Plan", route: "/plan" },
    { id: 3, title: "Fire Calculator", route: "" },
    // { id: 4, title: "Blog", route: "" },
    { id: 5, title: "Faqs", route: "" },
  ];
  return (
    <header className="container mx-auto py-4 flex items-center justify-between">
      <Link href={"/"}><Image src={"/logo.png"} alt="Company Logo" height={70} width={120} /></Link>
      <div className="flex gap-8 text-sm">
        {Links.map(({id, title, route}) => <Link className="hover:text-green-500" key={id} href={route}>{title}</Link>)}
      </div>
      <div className="flex gap-4">
        <Link href={"/login"} className="btn-secondary">
          Login
        </Link>
        <Link href={"/signup"} className="btn-primary">
          Sign Up
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
