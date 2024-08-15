import { PiClock } from "react-icons/pi";

export default function OpenHours() {
  return (
    <>
      <div className="grid grid-cols-2 mt-4 px-4">
        <h1 className="text-2xl">Öppettider</h1>
        <div className="flex justify-start items-center mb-8">
          <PiClock size={40} />
        </div>
        <span>Måndag</span>
        <span>09.00 - 18.00</span>
        <span>Tisdag</span>
        <span>09.00 - 18.00</span>
        <span>Onsdag</span>
        <span>09.00 - 18.00</span>
        <span>Torsdag</span>
        <span>09.00 - 18.00</span>
        <span>Fredag</span>
        <span>09.00 - 18.00</span>
        <span>Lördag</span>
        <span>Öppet för avhämtning</span>
        <span>Söndag</span>
        <span className="text-destructive">Stängt</span>
      </div>
    </>
  );
}
