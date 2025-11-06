import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "@/app/globals.css";
import Providers from "@/app/providers";

const barlow = Barlow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ecomm26 UI",
  description: "Complete FullStack E-Commerce application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${barlow.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
