import "./globals.css";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/src/Components/Header";
import Footer from "@/src/Components/Footer";
import Script from "next/script";
import Head from "next/head";

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
      <Head>
        <title>Mohamed WAFI - Full Stack Developer Portfolio</title>
        <meta name="description" content="Portfolio of Mohamed WAFI, a Full Stack Developer specializing in building modern web applications using Next.js, React, and Node.js." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
