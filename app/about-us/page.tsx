import Image from "next/image";

export default function AboutUs() {
  return (
    <div className=" ">
      <main className="container mx-auto px-4">
        <div className="relative w-full aspect-square mb-6 ">
          <Image
            src="/about-us.webp"
            alt="bild"
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow"
          />
        </div>
        <p className="text-lg leading-relaxed mb-6">
          Vi övertog Majornas Smörgåshörna december 1982 och har sedan dess
          varit ett familjeföretag.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Vår stora passion är råvaror av högsta kvalite och kunnig personal.
          Smörgåshörnan har ett stort utbud av smörgåstårtor, snittar,
          landgångar, sandwiches och kalla rätter.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Vi lägger ner mycket tid och omsorg för att just du skall bli nöjd.
        </p>
        <p className="text-lg leading-relaxed font-bold text-primary">
          Varmt välkomna!
        </p>
      </main>
    </div>
  );
}
