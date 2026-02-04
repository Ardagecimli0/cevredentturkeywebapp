"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "@/lib/i18n";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("tr");
  const [countryName, setCountryName] = useState("Turkey"); // Default country name
  const { t } = useTranslation();

  // IP adresinden ülke otomatik algılama
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

      // Prepare the data to send to the API in the format requested
      const payload = {
        Patient_Name: name,
        Patients_Status: "New",
        Mobile: `+${phone}`,
        Email: email,
        Country: countryName,
        Interest: "Dental",
        Procedure: "-",
        Description: "-",
        Lead_Source: "Web Form",
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

      // Redirect to thank you page with language (lowercase for URL)
      const langUrl = langMatch ? langMatch[1] : 'en';
      window.location.href = `/${langUrl}-implant-in-turkey/thank-you`;
    } catch (error) {
      console.error("API isteği başarısız:", error);
      // Optionally show an error message to the user
      alert("There was an error submitting your form. Please try again.");
    }
  };

  return (
    // ID BURAYA EKLENDİ: Artık butonlar bu bölüme kaydırabilir.
    <section id="contact" className="py-16 bg-[#0c1015] scroll-mt-20">
      <style jsx global>{`
        .phone-input-container { width: 100%; }
        .phone-input-container .form-control {
          width: 100% !important; height: 48px !important; background-color: #0c1015 !important;
          border: 1px solid #374151 !important; border-radius: 8px !important; color: white !important;
          font-size: 16px !important; padding-left: 48px !important;
        }
        .phone-input-container .form-control:focus { border-color: #25D366 !important; box-shadow: none !important; }
        .phone-input-container .flag-dropdown { background-color: #0c1015 !important; border: 1px solid #374151 !important; border-radius: 8px 0 0 8px !important; }
        .phone-input-container .country-list { background-color: #1c2530 !important; color: white !important; border: 1px solid #374151 !important; }
        .phone-input-container .country-list .country:hover { background-color: #0c1015 !important; }
      `}</style>

      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl border border-gray-700/50 p-8 md:p-12 bg-[#151b23]/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Sol Taraf - Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {t('contactForm.title')}
              </h2>
              <p className="text-gray-400 mb-8 text-sm">
                {t('contactForm.subtitle')}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="bg-[#1c2530] rounded-xl p-6 border border-gray-600/50 space-y-4">

                  {/* Name Input */}
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder={t('contactForm.namePlaceholder')}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#0c1015] border border-gray-700 text-white placeholder-gray-500 focus:border-[#25D366] focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Phone Input */}
                  <PhoneInput
                    country={countryCode}
                    value={phone}
                    onChange={(value) => setPhone(value)}
                    placeholder={t('contactForm.phonePlaceholder')}
                    enableSearch={true}
                    containerClass="phone-input-container"
                  />

                  {/* Email Input */}
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      placeholder={t('contactForm.emailPlaceholder')}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#0c1015] border border-gray-700 text-white placeholder-gray-500 focus:border-[#25D366] focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#20BD5A] py-4 rounded-lg text-white font-bold text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-green-500/20"
                  >
                    {t('contactForm.submit')}
                  </button>
                </div>
              </form>
            </div>

            {/* Sağ Taraf - Resim */}
            <div className="relative w-full flex justify-center items-center py-8">
              <div className="relative w-full max-w-[500px] h-[450px] md:h-[550px] rounded-3xl overflow-hidden border-4 border-gray-700/50 shadow-2xl group cursor-pointer transition-all duration-500 hover:shadow-[#c9a96e]/30">
                <Image
                  src="/images/aa.png"
                  alt="Dr. Can Kalkavan"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}