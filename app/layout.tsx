import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
        className={`${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
