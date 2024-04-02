import React from "react";
import Image from "next/image";
import Link from "next/link";
import DropMenu from "./NavDropdownMenu";

async function Navbar() {
  return (
    <header className="container mx-auto py-4 flex items-center justify-between">
      <Link href={"/"}>
        <Image src={"/logo.png"} alt="Company Logo" height={70} width={120} />
      </Link>
      <DropMenu />
    </header>
  );
}

export default Navbar;
