import type { Metadata } from "next";
import { DM_Sans, Montserrat, Nunito, Urbanist, Work_Sans, Lexend, Archivo_Black } from 'next/font/google';
import "./globals.css";
// import NavigationBar from "@/components/navbar/navbar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-secondary",
  display: "swap",
});

const archivo = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: "400"
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-tertiary",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ['400', '700'],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Colossus",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${montserrat.variable} ${nunito.variable} ${urbanist.variable} ${workSans.variable} ${lexend.variable} ${archivo.variable}`}
    >
      <head>
        <title>{String(metadata.title ?? "")}</title>
        <meta name="description" content={String(metadata.description ?? "")} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
