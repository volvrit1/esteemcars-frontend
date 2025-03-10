import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { Jost } from "next/font/google";
import Footer from "@/components/common/Footer";
import { inter } from "@/data/font";
import OpenHour from "@/components/common/OpenHour";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Inter } from "next/font/google";

// export const inter = Inter({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"], // Choose desired weights
//   variable: "--font-inter", // Custom CSS variable
// });

export const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose desired weights
  variable: "--font-jost", // Custom CSS variable
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ESTEEM CARS",
  description: "ESTEEM CARS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${inter.variable} font-[jost] antialiased`}
      >
        <div id="modal-root"></div>
        <Navbar />
        {children}
        <OpenHour />
        <ToastContainer
          rtl={false}
          autoClose={2000}
          newestOnTop={true}
          position="top-right"
          hideProgressBar={false}
        />
        <Footer />
      </body>
    </html>
  );
}
