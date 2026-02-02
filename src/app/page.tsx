import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PressLogos from "@/components/PressLogos";
import Stats from "@/components/Stats";
import BeforeAfter from "@/components/BeforeAfter";
import HospitalHotel from "@/components/HospitalHotel";
import Testimonials from "@/components/Testimonials";
import RhinoplastyBeforeAfterYT from "@/components/RhinoplastyBeforeAfterYT";
import WhyTurkey from "@/components/WhyTurkey";
import Packages from "@/components/Packages";
import WhyDoctor from "@/components/WhyDoctor";
import Publications from "@/components/Publications";
import ContactForm from "@/components/ContactForm";
import DoctorInfo from "@/components/DoctorInfo";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { ClientBody } from "@/app/ClientBody";
import "@/app/globals.css";

export const metadata = {
  title: "Dental Implants in Turkey - CevreDent Clinic",
  description: "Premium dental care in Turkey. Full mouth rehabilitation and implant treatments. Free consultation available.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function HomePage() {
  return (
    <html lang="en">
      <ClientBody lang="en">
        <main className="min-h-screen bg-[#0c1015]">
          <Header />
          <Hero />
          <PressLogos />
          <Stats />
          <BeforeAfter />
          <HospitalHotel />
          <Testimonials />
          <RhinoplastyBeforeAfterYT />
          <WhyTurkey />
          <Packages />
          <WhyDoctor />
          <Publications />
          <ContactForm />
          <DoctorInfo />
          <FAQ />
          <Footer />
        </main>
      </ClientBody>
    </html>
  );
}
