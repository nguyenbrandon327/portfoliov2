import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbutton from "../components/Navbutton";
import PageFadeIn from "../components/PageFadeIn";
import InitialsLink from "../components/InitialsLink";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BRANDON NGUYEN®",
  description: "BRANDON NGUYEN",
  icons: { icon: "/icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <div className="min-h-screen relative">
          <div className="fixed top-0 left-0 z-50">
            <InitialsLink />
          </div>
          <div className="fixed top-0 right-0 z-50">
            <Navbutton />
          </div>
          <div className="min-h-screen flex items-center justify-center">
            <div className="bg-background h-[100svh] w-full sm:min-w-[500px] sm:w-auto sm:aspect-[8.375/10.875] max-w-full sm:max-w-[min(100vw-2rem,calc(100svh*0.769))] overflow-y-auto custom-scrollbar">
              <PageFadeIn className="h-full">
                {children}
              </PageFadeIn>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
