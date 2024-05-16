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
import SignOut from "./SignOut";
import Link from "next/link";
import { getUser } from "../../lib/data";

const NavDropdownMenu = async ({ removeAccount = false }) => {
  const user = await getUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-4 hover:cursor-pointer group">
          <Avatar>
            <AvatarImage
              src={user?.avatar_url}
            />
            <AvatarFallback className="bg-gray-500 font-bold">{user?.firstname[0]} {user?.lastname[0]}</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2">
            <div className="text-sm">
              <p className="font-bold group-hover:text-green-500">
                {user?.firstname} {user?.lastname}
              </p>
              {/* <p className="group-hover:text-green-500">abiolaolalekan39@gmail.com</p> */}
            </div>
            <FiChevronDown className="w-6 h-6 group-hover:text-green-500" />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {!removeAccount && (
          <Link href={"/account/profile"}>
            <DropdownMenuItem className="hover:cursor-pointer">
              Account Setting
            </DropdownMenuItem>
          </Link>
        )}
        <DropdownMenuItem className="hover:cursor-pointer">
          <SignOut />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropdownMenu;
