import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navbar from "@/src/Components/Navbar";
import { Theme } from "@radix-ui/themes";
import Footer from "@/src/Components/Footer";
import "./globals.css";
import Test from "@/src/Components/Test";

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
            <Navbar />
            <main className="flex-1 overflow-x-hidden">
              {children}
            </main>
            <Footer />
          </div>
          {/* <Test /> */}
          {/* </Theme> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
