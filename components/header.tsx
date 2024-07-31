import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href={"/"} className="flex items-center space-x-2">
        <div className="bg-cyan-600 w-fit">
          <Image
            src={"/dropbox-clone-logo.jpg"}
            alt="Dropbox Clone Logo"
            width={50}
            height={50}
          />
        </div>
        <h1 className="font-bold text-cl">Dropbox Clone</h1>
      </Link>
      <div className="flex px-5 space-x-2 items-center">
        {/* Theme Toggle */}

        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <SignInButton forceRedirectUrl={"/dashboard"} mode="modal">
            <div className="bg-cyan-800 px-3 py-1.5 rounded-md text-cyan-50 cursor-pointer">
              Anmelden
            </div>
          </SignInButton>
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
