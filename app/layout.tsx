import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wealthy at Home - Expert Wealth Advisor at Your Doorstep in 30 Minutes",
  description: "Get a Wealthy advisor at your home in 30 minutes. Personalized portfolio reviews, access to 1000+ products, and expert financial planning. Available in Mumbai, Delhi-NCR & Bangalore.",
  keywords: "wealthy, wealth advisor, financial planning, home consultation, portfolio review, tax optimization, mutual funds, stocks, insurance",
  openGraph: {
    title: "Wealthy at Home - Expert Wealth Advisor at Your Doorstep",
    description: "Wealthy advisors come to you in 30 minutes. Book your home consultation now.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Maven+Pro:wght@400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
