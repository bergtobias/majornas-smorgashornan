import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  creator: "Vercevo",
  title: "Majornas Smörgåshörna",
  description:
    "Upptäck Majornas Smörgåshörna - din lokala smörgåsbutik i hjärtat av Majorna, Göteborg. Vi erbjuder ett brett utbud av färska, handgjorda smörgåsar med kvalitetsingredienser, perfekta för frukost, lunch eller fika. Beställ online eller besök oss för att njuta av våra delikatesser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${roboto.className} min-h-screen font-sans antialiased  `}
      >
        <div className="flex flex-col min-h-[100dvh]">
          <Navbar />
          <main className="container mx-auto flex-1 p-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
