import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manhattan Auto Repair Inc.",
  description:
    "Auto repair shop at 552 W 48th Street, New York. NYS inspections, diagnostics, brakes, tires, towing. Walk-ins welcome. (212) 757-4366.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
