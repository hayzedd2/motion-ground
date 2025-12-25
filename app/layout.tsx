import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";

const pt_serif = Newsreader({subsets : ["latin"]})

export const metadata: Metadata = {
  title: "Playground",
  description: "Playground for ui interactions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pt_serif.className} antialiased`}>
        {children}
      </body>
      <Analytics />
      <Toaster />
    </html>
  );
}
