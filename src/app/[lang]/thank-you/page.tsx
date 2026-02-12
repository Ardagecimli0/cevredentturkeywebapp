import ThankYouClient from "./ThankYouClient";

// Force static generation for Vercel
export const dynamic = 'force-static';

// Generate static params for all language routes
export async function generateStaticParams() {
    return [
        { lang: 'dental-implant-in-turkey' },          // English
        { lang: 'dis-implanti-turkiye' },              // Turkish
        { lang: 'zahnimplantat-in-der-turkei' },       // German
        { lang: 'implante-dental-en-turquia' },        // Spanish
        { lang: 'implant-dentaire-en-turquie' },       // French
        { lang: 'impianto-dentale-in-turchia' },       // Italian
    ];
}

export default function ThankYouPage() {
    return <ThankYouClient />;
}
