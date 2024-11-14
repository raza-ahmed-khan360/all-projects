import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-plus-jakarta-sans", 
});

export const metadata: Metadata = {
  title: "Projects",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={plusJakartaSans.variable}
      >
        {children}
      </body>
    </html>
  );
}