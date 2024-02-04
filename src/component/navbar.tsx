import React from "react";
import Link from "../../node_modules/next/link";
import navStyle from '../styles/navStyle.module.css'
const Navbar = () => {
  return (
    <div >
      
      <nav className={navStyle.body}>
        <ul className={navStyle.head}>
            <li>
          <Link href={"/"}>
              Home
          </Link>
              </li>
          <Link href={"/contact"}>
            <li>Contact</li>
          </Link>
          <Link href={"/blogpost"}>
            <li>blog</li>
          </Link>

          <Link href={"/about"}>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
