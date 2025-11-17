import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.scss";
import { Providers } from "./providers";

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const gordita = localFont({
  src: [
    {
      path: "../public/Gordita-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/Gordita-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/Gordita-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Gordita-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/Gordita-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Gordita-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/Gordita-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/Gordita-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/Gordita-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/Gordita-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-gordita",
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
      <body className={`${kumbhSans.className} ${gordita.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
