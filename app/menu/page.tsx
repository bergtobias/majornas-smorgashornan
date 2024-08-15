"use client";
import { Button } from "@/components/ui/button";
import { items } from "./items";
import { useState } from "react";
import Image from "next/image";

type Item = {
  href: string;
  variant: string;
  description: string;
  title: string;
};

export default function Menu() {
  const [filterButtons, setFilterButtons] = useState<string>("Smörgåstårtor");

  const uniqueItems = items.reduce<Item[]>((acc, item) => {
    if (!acc.find((i) => i.variant === item.variant)) {
      acc.push(item);
    }
    return acc;
  }, []);

  const handleButtonClick = (variant: string) => {
    setFilterButtons(variant);
  };

  console.log(filterButtons);

  return (
    <div className=" ">
      <nav className=" grid grid-cols-3 gap-2 mb-6 z-10">
        {uniqueItems.map((item, index) => (
          <Button
            onClick={() => handleButtonClick(item.variant)}
            key={item.href}
            variant={
              filterButtons.includes(item.variant) ? "default" : "outline"
            }
          >
            {item.variant}
          </Button>
        ))}
      </nav>
      <div className="grid grid-cols-1 gap-5">
        {items
          .filter((item) => filterButtons.includes(item.variant))
          .map((item) => (
            <div
              key={item.href}
              className="border rounded overflow-hidden border-secondary-foreground/20 shadow-md"
            >
              <div className="relative w-full aspect-square h-72 ">
                <Image
                  src={`/menu/${item.href}`}
                  alt="bild"
                  layout="fill"
                  objectFit="cover"
                  className=" shadow"
                  quality={100}
                />
              </div>
              <div className=" p-2">
                <h2 className="text-lg font-bold my-2">{item.title}</h2>
                <p className="leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
