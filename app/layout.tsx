import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-JetBrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LemonPop Vibes",
  description: "Cozy Lofi place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${jetBrainsMono.variable} antialiased flex flex-col items-center justify-betwee relative h-fit select-none`}
      >
        <div className="fixed w-full lg:max-w-[1500px] lg:px-[10vw] z-1">
          <Header />
        </div>

        {children}

        <Footer />
      </body>
    </html>
  );
}
