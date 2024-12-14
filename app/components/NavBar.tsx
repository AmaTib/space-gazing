"use client";

import Link from "next/link";
import "../styles/navBar.scss";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <nav>
        <ul className="navList">
          <li>
            <Link
              className={`navLink ${pathname === "/" ? "focus" : ""}`}
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`navLink ${
                pathname === "/likedimages" ? "focus" : ""
              }`}
              href={"/likedimages"}
            >
              Liked Images
            </Link>
          </li>
          <li>
            <Link
              className={`navLink ${pathname === "/about" ? "focus" : ""}`}
              href={"/about"}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
