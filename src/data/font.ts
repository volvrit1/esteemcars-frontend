import { Lexend_Deca ,Plus_Jakarta_Sans} from "next/font/google";
import { Inter } from "next/font/google";

export const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose desired weights
  variable: "--font-inter", // Custom CSS variable
});

export const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"], // Choose desired weights
    variable: "--font-plus-jakarta", // Custom CSS variable
  });
