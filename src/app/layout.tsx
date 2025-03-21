import type { Metadata } from "next";
import { Cabin, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import OpenHour from "@/components/common/OpenHour";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose desired weights
  variable: "--font-poppins", // Custom CSS variable
});

export const cabin = Cabin({
  subsets: ["latin"],
  weight: [ "400", "500", "600", "700"], // Choose desired weights
  variable: "--font-cabin", // Custom CSS variable
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose desired weights
  variable: "--font-plus-jakarta-sans", // Custom CSS variable
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
        className={`${poppins.variable} ${cabin.variable} ${plusJakartaSans.variable} antialiased`}
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
