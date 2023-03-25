import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const user = useUser();

  return (
    <div className="mb-8 h-20 w-full items-center bg-slate-800">
      <nav className="mx-auto flex h-full max-w-7xl flex-row items-center">
        <div className="text-xl font-bold">Cinehub</div>
        <div className="ml-auto flex items-center gap-4">
          <form>
            <input
              placeholder="Search"
              className="rounded-md border-2 border-slate-700 bg-slate-900 py-2 px-4"
            />
          </form>
          {user.isSignedIn ? <SignOutButton /> : <SignInButton />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
