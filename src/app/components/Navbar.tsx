import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <Link href="/" className="flex justify-center items-center">
        <div className="flex bg-black justify-center items-center h-14 w-full text-white sm:h-24">
          <div className="font-jaro text-4xl sm:text-6xl">PokeDex</div>
        </div>
      </Link>
    </>
  );
};

export default Navbar;
