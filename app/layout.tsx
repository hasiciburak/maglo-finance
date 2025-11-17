import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.scss";
import { Providers } from "./providers";

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maglo Finance",
  description: "Modern finansal yönetim platformu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kumbhSans.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
