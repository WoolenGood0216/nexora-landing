import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXORA — Teknologi untuk langkah berikutnya",
  description:
    "Temukan perangkat teknologi pilihan dengan desain modern, performa andal, dan pengalaman belanja yang lebih mudah.",
  applicationName: "NEXORA"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
