import React from "react";
import Link from "../../node_modules/next/link";
const Navbar = () => {
  return (
    <>
      <nav className="flex   flex-row">
        <ul className="flex w-full justify-between p-3 m-3   bg-gray-200">
            <li>
          <Link href={"/"}>
              Home
          </Link>
              </li>
          <Link href={"/contact"}>
            <li>Contact</li>
          </Link>
          <Link href={"/blog"}>
            <li>blog</li>
          </Link>

          <Link href={"/about"}>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
