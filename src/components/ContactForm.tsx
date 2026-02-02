"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("tr");

  // IP adresinden ülke otomatik algılama
  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data.country_code) {
          setCountryCode(data.country_code.toLowerCase());
        }
      } catch (error) {
        console.error("Could not detect country:", error);
        setCountryCode("tr");
      }
    };
    detectCountry();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Name: ${name}, Phone: +${phone}, Email: ${email}`;

    window.open(
      `https://api.whatsapp.com/send/?phone=905494755287&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`,
      "_blank"
    );

    // Formu gönderdikten sonra alanları temizle
    setName("");
    setPhone("");
    setEmail("");
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
                Get Your Free Consultation
              </h2>
              <p className="text-gray-400 mb-8 text-sm">
                Fill out the form and we'll contact you shortly
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
                      placeholder="Your Name"
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
                    placeholder="Your Phone"
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
                      placeholder="Your Email"
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
                    SUBMIT
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