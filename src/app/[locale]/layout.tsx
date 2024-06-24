import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@/components/shared/footer";
import HeaderProvider from "@/providers/header-provider";
import "./globals.css";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Transition from "@/providers/transition-provider";

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

interface LocaleLayoutProps {
  children: React.ReactNode; // Allow ReactNode to cover all children types
  params: { locale: string };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  return (
    <html lang={locale}>
      <head>
        <link rel="shortcut icon" href="/media/logo.png" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${poppins.className} bg-main`}>
        <ChakraProvider>
          <ReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          >
            <NextIntlClientProvider messages={useMessages()} locale={locale}>
              <HeaderProvider />
              <Transition>{children}</Transition>
              <Footer />
            </NextIntlClientProvider>
          </ReCaptchaProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
