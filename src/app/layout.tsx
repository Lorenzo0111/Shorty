import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Shorty - Short your boring url",
  description:
    "Short your boring urls with shorter ones and get insights on them.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
