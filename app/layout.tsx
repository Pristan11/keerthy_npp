import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keerthy-npp",
  description: "keerthy npp",
  icons:
    "https://p7.hiclipart.com/preview/687/666/501/compass-rose-clip-art-compass.jpg",
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
// 'sm': '640px',
// 'md': '768px',
// 'lg': '1024px',
// 'xl': '1280px',
// '2xl': '1536px',
// // Add custom breakpoints if needed
// '3xl': '1600px',
// '4xl': '1920px',

// 720x1280 (HD, e.g., older smartphones)
// 1080x1920 (FHD, e.g., standard laptops and monitors)
// 1440x2560 (QHD, e.g., higher-end smartphones and monitors)
// 2160x3840 (4K UHD, e.g., modern high-end monitors and TVs)
// 4320x7680 (8K UHD, e.g., latest high-end TVs and monitors)

// Small Laptops/Ultrabooks:
// 1366x768 (e.g., budget laptops)
// 1440x900 (e.g., MacBook Air)
// Medium Laptops:
// 1920x1080 (Full HD, e.g., most modern laptops)
// 2560x1600 (e.g., MacBook Pro 13")
// Large Laptops:
// 2880x1800 (e.g., MacBook Pro 15")
// 3840x2160 (4K, e.g., high-end laptops)
// Desktops and Monitors
// Small Monitors:
// 1280x1024 (e.g., older monitors)
// 1440x900 (e.g., budget monitors)
// Medium Monitors:
// 1920x1080 (Full HD, e.g., standard monitors)
// 2560x1440 (QHD, e.g., high-res monitors)
// Large Monitors:
// 3440x1440 (e.g., ultrawide monitors)
// 3840x2160 (4K, e.g., high-end monitors)
// 5120x2880 (5K, e.g., ultra-high-res monitors)
// 7680x4320 (8K, e.g., latest high-end monitors)
// Televisions
// Small TVs:
// 1366x768 (e.g., 24"-32" TVs)
// 1920x1080 (Full HD, e.g., 32"-40" TVs)
// Medium TVs:
// 3840x2160 (4K UHD, e.g., 40"-55" TVs)
// Large TVs:
// 3840x2160 (4K UHD, e.g., 60" and above TVs)
// 7680x4320 (8K UHD, e.g., latest large TVs)
// Wearables
// Smartwatches:
// 320x320 (e.g., older models)
// 360x360 (e.g., Samsung Galaxy Watch)
// 368x448 (e.g., Apple Watch Series 6)
// Resolutions
// Common:
// 720x1280 (HD, e.g., older smartphones)
// 1080x1920 (FHD, e.g., standard laptops and monitors)
// 1440x2560 (QHD, e.g., higher-end smartphones and monitors)
// 2160x3840 (4K UHD, e.g., modern high-end monitors and TVs)
// 4320x7680 (8K UHD, e.g., latest high-end TVs and monitors)
