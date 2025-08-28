import Link from "next/link";
import Icon from "../Icon";
import { Button } from "../ui/Button";

import { auth } from "@/auth";
import { APP_NAME } from "@/data";

export default async function Header() {
  const session = await auth();
  const user = session?.user;

  return (
    <header className="w-full sticky top-0 z-20 flex justify-between items-center px-4 md:px-8 py-2 rounded-b-2xl bg-white border-x border-b border-primary-border">
      <Link href={"/"}>
        <div className="flex gap-2 items-center text-2xl font-semibold">
          <span>
            <Icon name="laptopCode" className="text-primary" />
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-start to-gradient-end">
            {APP_NAME}
          </span>
        </div>
      </Link>

      {user ? (
        <Link href={"/profile"} className="">
          <span><Icon name="user" className="h-8 w-8 rounded-full p-1 bg-border"/></span>
        </Link>
      ) : (
        <Link href={"/login"} className="">
          <Button variant="gradient" className="px-6 py-1 text-xl">Login</Button>
        </Link>
      )}
    </header>
  );
}
