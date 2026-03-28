import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manhattan Auto Repair Inc. | Quality Repairs in NYC",
  description:
    "Over 60 years of combined experience. NYS inspections, full auto repair, diagnostics, tires & towing. Walk-ins welcome. 552 W 48th Street, New York, NY.",
  keywords:
    "auto repair Manhattan, NYC car repair, NYS inspection, mechanic New York, Manhattan Auto Repair",
  openGraph: {
    title: "Manhattan Auto Repair Inc.",
    description:
      "Quality Repairs with Years of Experience. A third of the cost of the dealership and three times as fast.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
