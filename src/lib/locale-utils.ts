// URL slug'dan dil kodunu çıkar
// Örnek: "de-implant-in-turkey" -> "de", "en" -> "en", "" -> "en"
export function extractLocaleFromSlug(slug: string): string {
    if (!slug || slug === '') return 'en';

    const validLocales = ['en', 'de', 'es', 'fr', 'it'];

    // Eğer direkt dil kodu ise (en, de, es, fr, it)
    if (validLocales.includes(slug)) {
        return slug;
    }

    // xx-implant-in-turkey formatından dil kodunu çıkar
    const match = slug.match(/^(en|de|es|fr|it)-/);
    if (match) {
        return match[1];
    }

    return 'en';
}
