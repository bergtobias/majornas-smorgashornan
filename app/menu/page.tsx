"use client";
import { Button } from "@/components/ui/button";
import { items } from "./items";
import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      <nav className=" grid grid-cols-3 gap-2 mb-6 z-10 md:grid-cols-6">
        {uniqueItems.map((item, index) => (
          <Button
            className="boder border-primary"
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
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {items
          .filter((item) => filterButtons.includes(item.variant))
          .map((item) => (
            <Card
              key={item.href}
              className="bg-primary/20 border border-primary/50 overflow-hidden"
            >
              <CardHeader className="relative w-full aspect-square h-72 ">
                <Image
                  src={`/menu/${item.href}`}
                  alt="bild"
                  layout="fill"
                  objectFit="cover"
                  className=" shadow"
                  quality={100}
                />
              </CardHeader>
              <CardContent>
                <CardTitle className=" my-2">{item.title}</CardTitle>
                <CardDescription className="leading-relaxed text-base">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}
