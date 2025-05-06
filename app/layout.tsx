import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photography by Grace",
  description:
    "Professional photography services for graduation, senior portraits, and special events",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Great+Vibes"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body
        className={`${inter.className} vsc-initialized`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
