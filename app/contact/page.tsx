import { Suspense } from "react";
import Map from "./Map";
import {
  PiEnvelope,
  PiLetterCircleH,
  PiMailbox,
  PiMapPin,
} from "react-icons/pi";
import { PiPhone } from "react-icons/pi";

export default async function Contact() {
  return (
    <>
      <div className="grid grid-cols-[1.5fr,3fr] items-center gap-4">
        <h1 className="col-span-2 text-2xl">Kontakta oss</h1>
        <PiMapPin size={30} className="mx-auto text-primary" />
        <p className="text-foreground">
          Djurgårdsgatan 31,
          <br /> 414 62 Göteborg
        </p>
        <PiPhone size={30} className="mx-auto text-primary" />
        <a href="tel:031140572" className="text-blue-700">
          031-14 05 72
        </a>
        <PiEnvelope size={30} className="mx-auto text-primary" />
        <a href="mailto:mshmajorna@gmail.com" className="text-blue-700">
          mshmajorna@gmail.com
        </a>
      </div>
      <Map className="mt-12 rounded-xl" />
    </>
  );
}
