import type { Metadata } from "next";
import { Inter, Ubuntu } from "next/font/google";
import "./globals.css";
import Loader from "@/components/Loader/Loader.component";
import { ThemeProvider } from "@/components/themes/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

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
      {/* <body className={inter.className} suppressHydrationWarning={true}>
        <Loader>{children}</Loader>
      </body> */}
      <body className={ubuntu.className} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* <Loader></Loader> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
