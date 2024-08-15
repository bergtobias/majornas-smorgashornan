import Link from "next/link";
import React from "react";
import { PiMapPin } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; 2024 Majornas Smörgåshörna. Alla rättigheter erhålls.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
