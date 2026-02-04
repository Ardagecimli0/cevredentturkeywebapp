"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "@/lib/i18n";

export default function Hero() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("tr");
  const [countryName, setCountryName] = useState("Turkey"); // Default country name
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch("http://ip-api.com/json/?fields=country,countryCode");
        const data = await response.json();
        if (data.countryCode) {
          setCountryCode(data.countryCode.toLowerCase());
        }
        if (data.country) {
          setCountryName(data.country);
        }
      } catch (error) {
        console.error("Could not detect country:", error);
        setCountryCode("tr");
        setCountryName("Turkey");
      }
    };
    detectCountry();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Get the current language from the URL
      const currentPath = window.location.pathname;
      const langMatch = currentPath.match(/^\/(en|de|es|fr|it)-/);
      const lang = langMatch ? langMatch[1].toUpperCase() : 'EN'; // Default to EN if not found

      // Prepare the data to send to the API
      const payload = {
        Patient_Name: name,
        Patients_Status: "New",
        Mobile: `+${phone}`,
        Email: email,
        Country: countryName,
        Interest: "Dental",
        Procedure: "-",
        Description: "-",
        Lead_Source: "Google/Web Form",
        Lead_Source_Detail: "Cevredent Turkey Web App",
        Language: lang,
        Doctor: "CevreDent"
      };

      // Submit the form data to the API
      await fetch(`https://zoho.hotelistan.net/api/form-patient`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Redirect to thank you page with language
      const langUrl = langMatch ? langMatch[1] : 'en';
      window.location.href = `/${langUrl}-implant-in-turkey/thank-you`;
    } catch (error) {
      console.error("API isteği başarısız:", error);
      // Optionally show an error message to the user
      alert("There was an error submitting your form. Please try again.");
    }
  };

  return (
    <section className="pt-24 pb-16 min-h-[85vh] relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #12171e 0%, #1a2028 50%, #12171e 100%)' }}>
      <style jsx global>{`
        .hero-phone-input { width: 100%; }
        .hero-phone-input .form-control {
          width: 100% !important;
          height: 48px !important;
          background-color: #1c2530 !important;
          border: 1px solid #374151 !important;
          border-radius: 8px !important;
          color: white !important;
          font-size: 16px !important;
          padding-left: 48px !important;
        }
        .hero-phone-input .form-control:focus { border-color: #25D366 !important; box-shadow: none !important; }
        .hero-phone-input .flag-dropdown {
          background-color: #1c2530 !important;
          border: 1px solid #374151 !important;
          border-radius: 8px 0 0 8px !important;
        }
        .hero-phone-input .country-list { background-color: #1c2530 !important; color: white !important; }
        .hero-phone-input .country-list .country:hover { background-color: #0c1015 !important; }
      `}</style>

      <div className={`max-w-7xl mx-auto px-4 mt-8 lg:mt-14 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 items-start">

          {/* Sol Taraf - Doktor Görseli (Düzenlenen Kısım) */}
          <div className="lg:col-span-5 relative">
            <Image
              src="/images/banner.png"
              alt="Cevre Dental Doctor"
              width={500}
              height={600}
              // rounded-3xl: Köşeleri yuvarlar, overflow-hidden: Taşmaları keser, shadow-2xl: Hafif derinlik verir
              className="w-full h-auto transition-transform duration-300 ease-in-out hover:-translate-y-3 rounded-3xl overflow-hidden shadow-2xl"
              priority
            />
          </div>

          {/* Orta Kısım - Rozetler */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col items-center justify-center lg:justify-start gap-4 lg:gap-6 py-6 lg:py-0 mt-6 lg:mt-0">
            {["google.png", "rated.png", "uems-logo.png", "real.png", "star.png"].map((img, idx) => (
              <Image
                key={idx}
                src={`/images/${img}`}
                alt="Badge"
                width={120}
                height={120}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 object-contain hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>

          {/* Sağ Taraf - Başlık ve Form */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-[50px] font-bold text-white mb-4 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-[#b08d57] text-xl md:text-2xl font-bold leading-snug">
                {t('hero.subtitle')}<br />
                {t('hero.subtitleLine2')}
              </p>
            </div>

            <div className="bg-[#1c2530]/80 backdrop-blur-sm rounded-xl p-5 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">{t('hero.formTitle')}</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder={t('hero.formNamePlaceholder')}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#1c2530] border border-gray-600 text-white focus:border-[#25D366] outline-none"
                  required
                />
                <PhoneInput
                  country={countryCode}
                  value={phone}
                  onChange={(value) => setPhone(value)}
                  containerClass="hero-phone-input"
                />
                <input
                  type="email"
                  placeholder={t('hero.formEmailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#1c2530] border border-gray-600 text-white focus:border-[#25D366] outline-none"
                  required
                />
                <button type="submit" className="w-full bg-[#25D366] py-3 rounded-lg text-white font-bold hover:bg-[#1eb956] transition-colors">
                  {t('hero.formSubmit')}
                </button>
              </form>
            </div>

            {/* Form Altı Görsel */}
            <div className="flex justify-center w-full mt-4">
              <Image
                src="/images/log.png"
                alt="Partner Logos"
                width={400}
                height={80}
                className="w-auto h-10 md:h-12 object-contain opacity-90"
              />
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Butonu */}
      <a
        href="https://api.whatsapp.com/send?phone=905494755287&text=What%20are%20the%20options%20and%20pricing%20for%20dental%20treatment"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </section>
  );
}