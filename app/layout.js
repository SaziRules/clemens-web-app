import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clemens | Incontinece products and solutions",
  description: "Trust Clemens to live every moment with confidence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Desktop Header */}
        <Header />
        {/* Mobile Header */}
        <Banner />
        {children}
      </body>
    </html>
  );
}
