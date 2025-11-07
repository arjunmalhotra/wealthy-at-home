import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wealthy at Home - Expert Wealth Advisor at Your Doorstep in 30 Minutes",
  description: "Get SEBI-registered wealth advisors at your home in 30 minutes. Personalized portfolio reviews, tax optimization, and financial planning. Available in Mumbai, Delhi-NCR & Bangalore.",
  keywords: "wealth advisor, financial planning, home consultation, portfolio review, tax optimization, SEBI registered advisor",
  openGraph: {
    title: "Wealthy at Home - Expert Wealth Advisor at Your Doorstep",
    description: "SEBI-registered wealth advisors come to you in 30 minutes. Book your home consultation now.",
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
