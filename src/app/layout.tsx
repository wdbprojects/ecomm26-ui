import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import Providers from "@/app/providers";

const montserrat = Montserrat({
  subsets: ["latin"],
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
      <body className={`${montserrat.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
