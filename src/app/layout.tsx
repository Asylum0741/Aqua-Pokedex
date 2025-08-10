import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";

const jaro = localfont({
  src: "../../public/fonts/Jaro.ttf",
  variable: "--font-jaro",
});

const mont = localfont({
  src: "../../public/fonts/Montserrat.ttf",
  variable: "--font-mont",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aqua Pokedex",
  description: "A Pokédex built with Next.js",
  icons: {
    icon: "/images/favicon.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} ${jaro.variable} ${mont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
