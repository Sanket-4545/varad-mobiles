import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Varad Mobiles | Your Trusted Mobile Store in Barshi",
  description:
    "Varad Mobiles in Barshi — explore smartphones, mobile accessories, exciting offers, and customer-friendly service.",
  openGraph: {
    title: "Varad Mobiles | Your Trusted Mobile Store in Barshi",
    description:
      "Varad Mobiles in Barshi — explore smartphones, mobile accessories, exciting offers, and customer-friendly service.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
