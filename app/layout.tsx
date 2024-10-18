import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keerthy Uthayakumaran - National People's Power",
  description:
    "Keerthy Uthayakumaran is a political candidate representing National People's Power (NPP) in the 2024 Presidential Election, advocating for an honest and corruption-free government.",
  icons: "https://p7.hiclipart.com/preview/687/666/501/compass-rose-clip-art-compass.jpg",
  keywords: [
    "Keerthy Uthayakumaran",
    "National People's Power",
    "NPP",
    "2024 Presidential Election",
    "Honest Government",
    "Corruption-free",
    "Political candidate",
    "Sri Lankan politics",
    "Transparency in government",
    "Democracy",
    "Good governance"
  ],
  openGraph: {
    title: "Keerthy Uthayakumaran - National People's Power",
    description:
      "Keerthy Uthayakumaran is a political candidate representing National People's Power (NPP) in the 2024 Presidential Election, advocating for an honest and corruption-free government.",
    url: "https://example.com/keerthy-uthayakumaran",
    type: "website",
    images: [
      {
        url: "https://p7.hiclipart.com/preview/687/666/501/compass-rose-clip-art-compass.jpg",
        width: 1200,
        height: 630,
        alt: "Keerthy Uthayakumaran",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}