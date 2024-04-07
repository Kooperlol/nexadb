import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@/components/shared/footer";
import "./globals.css";
import HeaderProvider from "@/providers/header-provider";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { LoadingProvider } from "@/providers/loading-provider";

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
  children: string | string[]; // Update type to allow single or multiple children
  params: { locale: string };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  // Convert children to an array if it's not already an array
  const childrenArray = Array.isArray(children) ? children : [children];

  // Concatenate multiple children strings into a single string
  const htmlContent = childrenArray.join("");

  // Check if htmlContent is defined before using it
  const innerHTML = htmlContent ? { __html: htmlContent } : undefined;

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
              <LoadingProvider>{children}</LoadingProvider>
              <Footer />
            </NextIntlClientProvider>
          </ReCaptchaProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
