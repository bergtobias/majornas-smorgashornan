"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { pages } from "./Navbar";
import { usePathname } from "next/navigation";

const SideSheet = () => {
  const [sideOpen, setSideOpen] = useState(false);
  const params = usePathname();
  return (
    <Sheet open={sideOpen} onOpenChange={() => setSideOpen(!sideOpen)}>
      <SheetTrigger asChild>
        <div className="border rounded shadow h-10 w-12 flex justify-center items-center ">
          <svg
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-primary"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="border-r-8 border-r-primary/80 flexflex-col"
      >
        <SheetHeader>
          <SheetTitle className="text-3xl text-primary">Navigering</SheetTitle>
        </SheetHeader>
        <div className="">
          <hr className="my-6" />
          <div className="flex flex-col gap-8 text-xl py-5">
            {pages.map((page) => (
              <Link
                href={page.href}
                key={page.href}
                className={`flex gap-8 items-center px-4 ${
                  params === page.href
                    ? " text-primary-foreground py-2 rounded bg-gradient-to-r from-primary via-primary/80 to-primary "
                    : ""
                }`}
                onClick={() => setSideOpen(false)}
              >
                {page.icon}
                {page.title}
              </Link>
            ))}
            <hr className="my-6" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideSheet;
