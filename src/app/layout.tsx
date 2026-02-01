import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Rhinoplasty in Turkey - Op. Dr. Can Kalkavan",
  description: "Rhinoplasty in Turkey with Op. Dr. Can Kalkavan. Get the best results with our experienced team. Starting from 2990€. Free consultation available.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
