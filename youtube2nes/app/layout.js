import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CountDown from "./components/Countdown";
import { Inter } from "next/font/google";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Youtube2nes",
  description: "Youtube2nes Download mp3 easyway.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${inter.className}`}>
        {/* Main Start */}
        <Providers>
          <Header />
          <CountDown/>
          {children}
          <Footer />
        </Providers>
        {/* Main End */}
      </body>
    </html>
  );
}
