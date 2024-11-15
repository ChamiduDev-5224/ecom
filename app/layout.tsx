import type { Metadata } from "next";
import localFont from "next/font/local";
import {Poppins} from 'next/font/google'
import "./globals.css";

// const poppins = Poppins({
//   subsets:['latin'],
//   weight:['100','200','300','400','500','600','700'],
//   variable:'--font-poppins'
// })
const poppins = Poppins({
  subsets:['latin'],
  weight:['100','200','300','400','500','600','700'],
  variable:'--font-poppins'
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ecom",
  description: "ecommerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
