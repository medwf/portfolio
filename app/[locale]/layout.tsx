import "./globals.css";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/src/Components/Header";
import Footer from "@/src/Components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });


export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.className}`}
      >
        <NextIntlClientProvider messages={messages}>
          {/* <Theme appearance="dark"> */}
          <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
            <Header />
            <main className="flex-1 overflow-x-hidden">
              {children}
            </main>
            <Footer />
          </div>
          {/* <Test /> */}
          {/* </Theme> */}
        </NextIntlClientProvider>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
