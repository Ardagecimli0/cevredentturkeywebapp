import type { Metadata } from "next";
import "@/app/globals.css";
import { ClientBody } from "@/app/ClientBody";
import { extractLocaleFromSlug } from "@/lib/locale-utils";

// JSON dosyalarını import et
import enDental from "../../../public/locales/en-dental.json";
import deDental from "../../../public/locales/de-dental.json";
import esDental from "../../../public/locales/es-dental.json";
import frDental from "../../../public/locales/fr-dental.json";
import itDental from "../../../public/locales/it-dental.json";

// Translations map
const translations: Record<string, typeof enDental> = {
  en: enDental,
  de: deDental,
  es: esDental,
  fr: frDental,
  it: itDental,
};

// Force static generation for Vercel
export const dynamic = 'force-static';

// Dinamik metadata oluştur
// Dinamik metadata oluştur
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = extractLocaleFromSlug(lang);
  const data = translations[locale] || translations.en;

  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords,
    icons: {
      icon: "/icon.ico",
    },
  };
}

export async function generateStaticParams() {
  return [
    { lang: 'en-implant-in-turkey' },
    { lang: 'de-implant-in-turkey' },
    { lang: 'es-implant-in-turkey' },
    { lang: 'fr-implant-in-turkey' },
    { lang: 'it-implant-in-turkey' },
  ];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  // URL slug'dan dil kodunu çıkar (örn: "de-implant-in-turkey" -> "de")
  const locale = extractLocaleFromSlug(lang);

  return (
    <html lang={locale}>
      <ClientBody lang={lang}>{children}</ClientBody>
    </html>
  );
}
