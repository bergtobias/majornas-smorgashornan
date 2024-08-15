import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center text-center mt-10">
      <Card className="max-w-md bg-white shadow-lg p-8 rounded-lg">
        <div className="text-2xl font-bold text-gray-900">Välkommen!</div>
        <div className="text-gray-700 mt-4">
          Upptäck våra utsökta smörgåsar, noggrant tillagade med gamla
          traditioner och de bästa ingredienserna.
        </div>
        <Link href={"/menu"}>
          <Button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
            Se vår meny
          </Button>
        </Link>
      </Card>
    </main>
  );
}
