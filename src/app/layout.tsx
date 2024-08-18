import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Loader from "@/components/Loader/Loader.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simodang",
  description: "Simodang Admin Panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Loader>{children}</Loader>
      </body>
    </html>
  );
}
