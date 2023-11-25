import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer/footer";
import "./globals.css";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "700", "800", "900"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${figtree.variable} `}>
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-content dark:text-base-content">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
