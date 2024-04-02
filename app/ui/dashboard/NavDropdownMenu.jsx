import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { FiChevronDown } from "react-icons/fi";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import SignOut from "./SignOut";
import Link from "next/link";

const NavDropdownMenu = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-4 hover:cursor-pointer group">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2">
            <div className="text-sm">
              <p className="font-bold group-hover:text-green-500">
                {user?.user_metadata.firstname} {user?.user_metadata.lastname}
              </p>
              {/* <p className="group-hover:text-green-500">abiolaolalekan39@gmail.com</p> */}
            </div>
            <FiChevronDown className="w-6 h-6 group-hover:text-green-500" />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link href={"/account/profile"}>
          <DropdownMenuItem className="hover:cursor-pointer">
            Account Setting
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem className="hover:cursor-pointer">
          <SignOut />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropdownMenu;
