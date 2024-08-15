import { cn } from "@/lib/utils";
import React from "react";

const Map = ({ className }: { className?: string }) => {
  return (
    <iframe
      className={cn(className)}
      width="100%"
      height="200"
      src="https://maps.google.se/maps?width=100%25&amp;height=600&amp;hl=sv&amp;q=Djurg%C3%A5rdsgatan%2031,%20414%2062%20G%C3%B6teborg+(%20Majorna's%20Sandwich%20Corner)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    ></iframe>
  );
};

export default Map;
