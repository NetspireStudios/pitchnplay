import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Pitch & Play - Edmonton's Premier Cricket Facility",
  description: "Step into Edmonton's Premier Indoor Cricket Facility where dreams take flight and champions are born. Professional lanes, expert coaching, and state-of-the-art equipment.",
  keywords: "cricket, Edmonton, cricket facility, coaching, lane rental, batting practice, cricket equipment, Tyson George Gordon, Ishwar Sohi",
  authors: [{ name: "Pitch & Play Cricket Academy" }],
  creator: "Pitch & Play",
  publisher: "Pitch & Play",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pitchandplay.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Pitch & Play - Edmonton's Premier Cricket Facility",
    description: "Professional cricket facility with expert coaching, lane rentals, and equipment services in Edmonton, Alberta.",
    url: 'https://pitchandplay.ca',
    siteName: 'Pitch & Play',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pitch & Play - Edmonton's Premier Cricket Facility",
    description: "Professional cricket facility with expert coaching, lane rentals, and equipment services in Edmonton, Alberta.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
