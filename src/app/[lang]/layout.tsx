import type { Metadata } from "next";
import "@/app/globals.css";
import { ClientBody } from "@/app/ClientBody";
import { extractLocaleFromSlug } from "@/lib/locale-utils";

export const metadata: Metadata = {
  title: "Dental Implants in Turkey - CevreDent Clinic",
  description: "Premium dental care in Turkey. Full mouth rehabilitation and implant treatments. Free consultation available.",
  icons: {
    icon: "/favicon.ico",
  },
};

export async function generateStaticParams() {
  return [
    { lang: 'en-implant-in-turkey' },
    { lang: 'de-implant-in-turkey' },
    { lang: 'es-implant-in-turkey' },
    { lang: 'fr-implant-in-turkey' },
    { lang: 'it-implant-in-turkey' },
  ];
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  // URL slug'dan dil kodunu çıkar (örn: "de-implant-in-turkey" -> "de")
  const locale = extractLocaleFromSlug(lang);

  return (
    <html lang={locale}>
      <ClientBody lang={lang}>{children}</ClientBody>
    </html>
  );
}
