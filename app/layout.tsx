import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const metadata: Metadata = {
  title: "UrbanDiary | Handcrafted Leather Journals",
  description: "Discover our collection of premium handmade leather diaries and journals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cinzel.variable} font-sans antialiased bg-stone-50 text-stone-900`}>
        {children}
      </body>
    </html>
  );
}
