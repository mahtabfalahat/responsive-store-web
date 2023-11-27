import { Figtree } from "next/font/google";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer/footer";
import { Sidebar } from "./_components/sidebar/sidebar";
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
        <div className="flex flex-col ">
          <Header />
          <div className="flex flex-grow">
            <Sidebar />
            <main className="flex-grow">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
