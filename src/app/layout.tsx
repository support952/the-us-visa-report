import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreakingNewsTicker from "@/components/BreakingNewsTicker";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The US Visa News — Immigration Policy Insights & Analysis",
  description:
    "Independent coverage of U.S. immigration policy, visa programs, and the Diversity Visa Lottery. Trusted analysis since 2019.",
  keywords:
    "US immigration, diversity visa, green card lottery, DV lottery, H-1B visa, immigration policy, visa bulletin",
  openGraph: {
    title: "The US Visa News",
    description: "Independent coverage of U.S. immigration policy, visa programs, and the Diversity Visa Lottery.",
    siteName: "The US Visa News",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The US Visa News",
    description: "Independent coverage of U.S. immigration policy, visa programs, and the Diversity Visa Lottery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-paper text-ink-soft`}
      >
        <BreakingNewsTicker />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
