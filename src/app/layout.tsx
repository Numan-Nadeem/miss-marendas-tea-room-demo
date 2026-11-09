import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miss Marenda's Tea Room — Sparta, TN | Lunch, Tea & Antiques",
  description:
    "Homemade chicken salad, soup and sweets served Tuesday–Friday on Sparta's historic town square, with antiques and treasures upstairs. Call (931) 836-2542 to reserve a table.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
