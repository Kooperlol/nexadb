import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import "./globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import BgParticles from "@/components/shared/bg-particles";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NexaDB",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/media/logo.png" />
      </head>
      <body className={`${poppins.className}`}>
        <BgParticles />
        <ChakraProvider>
          <Header />
          <div style={{ zIndex: 10, position: "relative" }}>
            {children}
            <Footer />
          </div>
        </ChakraProvider>
      </body>
    </html>
  );
}
