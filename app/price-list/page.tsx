import { Button } from "@/components/ui/button";

export default function PriceList() {
  return (
    <div className=" ">
      <h1 className="text-2xl">Prislista</h1>
      <a href="prislista.pdf" target="_blank">
        <Button>Se prislista</Button>
      </a>
    </div>
  );
}
