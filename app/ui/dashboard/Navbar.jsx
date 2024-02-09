import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {FiChevronDown} from "react-icons/fi"

function Navbar() {
  return (
    <header className="container mx-auto py-4 flex items-center justify-between">
      <Link href={"/"}>
        <Image src={"/logo.png"} alt="Company Logo" height={70} width={120} />
      </Link>
      <div className="flex gap-4 hover:cursor-pointer group">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-2">
        <div className="text-sm">
          <p className="font-bold group-hover:text-green-500">Abiola Adeosun</p>
          {/* <p className="group-hover:text-green-500">abiolaolalekan39@gmail.com</p> */}
        </div>
        <FiChevronDown className="w-6 h-6 group-hover:text-green-500"/>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
