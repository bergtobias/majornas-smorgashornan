import { PiAddressBook, PiBook, PiCallBell, PiHouse } from "react-icons/pi";
import { PiCashRegister } from "react-icons/pi";
import { PiCalendar } from "react-icons/pi";
import Link from "next/link";
import React from "react";
import SideSheet from "./SideSheet";

export const pages = [
  { title: "Hem", href: "/", icon: <PiHouse size={30} /> },
  { title: "Meny", href: "/menu", icon: <PiCallBell size={30} /> },
  {
    title: "Prislista",
    href: "/price-list",
    icon: <PiCashRegister size={30} />,
    blank: true,
  },
  { title: "Om oss", href: "/about-us", icon: <PiBook size={30} /> },
  { title: "Öppettider", href: "/open-hours", icon: <PiCalendar size={30} /> },
  { title: "Kontakt", href: "/contact", icon: <PiAddressBook size={30} /> },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href={"/"} className="mr-4 flex items-center space-x-2 lg:mr-6">
            LOGO
          </Link>
          <nav className="flex items-center gap-4  lg:gap-6">
            {pages.map((page) => (
              <Link
                role="link"
                href={page.href}
                key={page.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60 "
              >
                {page.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex lg:hidden items-center ">
          <SideSheet />
          <Link
            href={"/"}
            className="container text-wrap text-xl text-primary font-bold   text-center"
          >
            Majornas Smörgåshörna
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
