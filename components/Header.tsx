import { UserButton, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Avatar from "./Avatar";
import Link from "next/link";

const Header = async () => {
  const { userId } = await auth();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-[#FAFAF9] border-b border-gray-200">
      <Link href="/view-chatbots" className="flex items-center gap-3">
      <Avatar seed="Daiwik" size={60} />

      <div className="leading-tight">
      <h1 className="text-3xl font-thin text-gray-900">
        Assist-Bot
      </h1>
      <p className="text-xs text-gray-500">
        Your personal customizable chatbot
      </p>
      </div>
      </Link>

      <div className="flex items-center gap-4">
        {userId ? (
          <UserButton showName />
        ) : (
          <SignInButton mode="modal">
            <button className="px-4 py-2 rounded-full bg-black text-white">
              Sign In
            </button>
          </SignInButton>
        )}
      </div>
    </header>
  );
};

export default Header;