import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const user = useUser();
  const [query, setQuery] = useState("");

  return (
    <div className="mb-8 h-20 w-full items-center bg-slate-800 px-4">
      <nav className="mx-auto flex h-full max-w-7xl flex-row items-center">
        <Link href="/" className="font-bold md:text-xl">
          Cinehub
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void router.push("/search/" + encodeURIComponent(query));
            }}
          >
            <input
              value={query}
              onChange={(e) => setQuery(e.currentTarget.value)}
              placeholder="Search"
              className="w-40 rounded-md border-2 border-slate-700 bg-slate-900 py-2 px-4"
            />
          </form>
          {user.isSignedIn ? <SignOutButton /> : <SignInButton />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
