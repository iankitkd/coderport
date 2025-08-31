"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import SignoutModal from "./SignoutModal";
import Icon from "../Icon";
import { Button } from "../ui/Button";

export default function SignoutButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="destructive"
        onClick={() => setIsOpen(true)}
        className="rounded-xl px-1 w-full text-nowrap flex items-center gap-2"
      >
        <Icon name="logout" />
        Signout
      </Button>

      {isOpen && (
        <SignoutModal 
          close={() => setIsOpen(false)} 
          handleSignout={() => signOut()}
        />
      )}
    </>
  );
}
