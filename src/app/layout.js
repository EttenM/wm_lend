import "./globals.scss";
import { Inter, Lexend_Peta } from "next/font/google";
import localFont from "next/font/local";
import { Header } from "@/blocks/header";
import { Footer } from "@/blocks/footer";
import Preloader from "@/blocks/preloader/Preloader";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const lexend = Lexend_Peta({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
});

const pixy = localFont({
  src: [
    {
      path: "./fonts/Pixy.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-pixy",
});

export const metadata = {
  title: "WrapMe",
  description: "WrapMe Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lexend.variable} ${pixy.variable} font-inter`}
      >
        <div className=" overflow-x-hidden">
          <Preloader />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
