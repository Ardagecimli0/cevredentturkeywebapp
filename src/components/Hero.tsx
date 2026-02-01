"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Hero() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("tr");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    window.open(
      `https://api.whatsapp.com/send?phone=905467633630&text=Name: ${name}, Phone: +${phone}, Email: ${email}`,
      "_blank"
    );
  };

  return (
    <section className="pt-24 pb-16 min-h-[85vh] relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #12171e 0%, #1a2028 50%, #12171e 100%)' }}>
      {/* Custom styles for react-phone-input-2 */}
      <style jsx global>{`
        .hero-phone-input {
          width: 100%;
        }
        
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
        
        .hero-phone-input .form-control:focus {
          border-color: #25D366 !important;
          box-shadow: none !important;
        }
        
        .hero-phone-input .form-control::placeholder {
          color: #6b7280 !important;
        }
        
        .hero-phone-input .flag-dropdown {
          background-color: #1c2530 !important;
          border: 1px solid #374151 !important;
          border-right: none !important;
          border-radius: 8px 0 0 8px !important;
        }
        
        .hero-phone-input .flag-dropdown:hover,
        .hero-phone-input .flag-dropdown:focus,
        .hero-phone-input .flag-dropdown.open {
          background-color: #242d3a !important;
        }
        
        .hero-phone-input .selected-flag {
          background-color: transparent !important;
          padding: 0 0 0 12px !important;
          width: 42px !important;
        }
        
        .hero-phone-input .selected-flag:hover,
        .hero-phone-input .selected-flag:focus,
        .hero-phone-input .selected-flag.open {
          background-color: transparent !important;
        }
        
        .hero-phone-input .selected-flag .flag {
          transform: scale(1.2);
        }
        
        .hero-phone-input .selected-flag .arrow {
          border-top-color: #9ca3af !important;
          left: 22px !important;
        }
        
        .hero-phone-input .selected-flag .arrow.up {
          border-bottom-color: #9ca3af !important;
        }
        
        .hero-phone-input .country-list {
          background-color: #1c2530 !important;
          border: 1px solid #374151 !important;
          border-radius: 8px !important;
          margin-top: 4px !important;
          max-height: 200px !important;
        }
        
        .hero-phone-input .country-list .country {
          color: white !important;
          padding: 10px 12px !important;
        }
        
        .hero-phone-input .country-list .country:hover,
        .hero-phone-input .country-list .country.highlight {
          background-color: #0c1015 !important;
        }
        
        .hero-phone-input .country-list .country .dial-code {
          color: #9ca3af !important;
        }
        
        .hero-phone-input .country-list .search {
          background-color: #0c1015 !important;
          border-bottom: 1px solid #374151 !important;
          padding: 10px !important;
        }
        
        .hero-phone-input .country-list .search-box {
          background-color: #1c2530 !important;
          border: 1px solid #374151 !important;
          border-radius: 6px !important;
          color: white !important;
          padding: 8px 12px !important;
          width: 100% !important;
        }
        
        .hero-phone-input .country-list .search-box::placeholder {
          color: #6b7280 !important;
        }
        
        .hero-phone-input .country-list::-webkit-scrollbar {
          width: 6px;
        }
        
        .hero-phone-input .country-list::-webkit-scrollbar-track {
          background: #0c1015;
          border-radius: 3px;
        }
        
        .hero-phone-input .country-list::-webkit-scrollbar-thumb {
          background: #374151;
          border-radius: 3px;
        }
        
        .hero-phone-input .country-list::-webkit-scrollbar-thumb:hover {
          background: #4b5563;
        }
      `}</style>

      <div

        // Değişiklik burada: 'mt-8 lg:mt-14' eklendi

        className={`max-w-7xl mx-auto px-4 mt-8 lg:mt-14 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
      >
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 items-start">
          {/* Left Side - Doctor Image */}
          <div className="lg:col-span-5 relative">
            <Image
              src="/images/banner.png"
              alt="Cevre Dental Doctor"
              width={500}
              height={600}
              // Değişiklik burada yapıldı:
              className="w-full h-auto transition-transform duration-300 ease-in-out hover:-translate-y-3"
              priority
            />
          </div>

          {/* Middle - Certification Badges */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col items-center justify-center lg:justify-start gap-4 lg:gap-6 py-6 lg:py-0 mt-6 lg:mt-0">
            {/* Google Verified Reviews */}
            <Image
              src="/images/google.png"
              alt="Google Verified Reviews"
              width={120}
              height={120}
              // w-16 (mobil), md:w-20 (tablet), lg:w-28 (masaüstü - 112px)
              className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 object-contain hover:scale-105 transition-transform duration-300"
            />

            {/* Rated Excellent Trustpilot */}
            <Image
              src="/images/rated.png"
              alt="Rated Excellent Trustpilot"
              width={120}
              height={120}
              className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 object-contain hover:scale-105 transition-transform duration-300"
            />

            {/* U.E.M.S Badge */}
            <Image
              src="/images/uems-logo.png"
              alt="U.E.M.S."
              width={120}
              height={120}
              className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 object-contain hover:scale-105 transition-transform duration-300"
            />

            {/* Top Doctor Badge */}
            <Image
              src="/images/real.png"
              alt="RealSelf Top Doctor"
              width={120}
              height={120}
              className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 object-contain hover:scale-105 transition-transform duration-300"
            />

            {/* 5 Star Badge */}
            <Image
              src="/images/star.png"
              alt="5 Star Treatment"
              width={120}
              height={120}
              className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Side - Title and Form */}
          <div className="lg:col-span-5 space-y-6">
            {/* Title */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-[50px] font-bold text-white mb-4 leading-tight whitespace-nowrap">
                Dental Clinic in Turkey
              </h1>
              <p className="text-[#b08d57] text-xl md:text-2xl font-bold leading-snug">
                Enhance Your Smile with CevreDent<br />
                Clinic&apos;s Affordable Services
              </p>
            </div>

            {/* Consultation Section */}
            <div className="text-center lg:text-left pt-2">
              <h3 className="text-3xl font-bold text-white mb-2">Free Consultation</h3>
              <p className="text-gray-300 text-lg">
                Get a personalized dental consultation
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-[#1c2530]/80 backdrop-blur-sm rounded-xl p-5">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#1c2530] border border-gray-600 text-white placeholder-gray-500 focus:border-[#25D366] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <PhoneInput
                  country={countryCode}
                  value={phone}
                  onChange={(value) => setPhone(value)}
                  placeholder="Your Phone"
                  enableSearch={true}
                  searchPlaceholder="Search country..."
                  containerClass="hero-phone-input"
                />

                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#1c2530] border border-gray-600 text-white placeholder-gray-500 focus:border-[#25D366] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-green py-3 rounded-lg text-white font-semibold text-base tracking-wide hover:opacity-90 transition-opacity"
                >
                  SUBMIT
                </button>
              </form>

              {/* Partner Logos */}
              <div className="flex items-center justify-center gap-5 pt-4 mt-4 border-t border-gray-700">
                <div className="flex items-center gap-1 text-gray-400">
                  <span className="text-xl font-bold">N</span>
                  <div className="text-[10px] leading-tight">
                    <span className="block">Nobel</span>
                    <span className="block">Biocare</span>
                  </div>
                </div>
                <div className="text-gray-400">
                  <span className="text-sm font-semibold italic">Straumann</span>
                </div>
                <div className="text-gray-400 text-[10px] leading-tight">
                  <span className="block">ivoclar</span>
                  <span className="block">vivadent</span>
                </div>
                <div className="text-gray-400 text-[10px] leading-tight">
                  <span className="block text-[8px]">European Journal of</span>
                  <span className="block font-bold text-xs">DENTISTRY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://api.whatsapp.com/send?phone=905467633630&text=I%20want%20to%20get%20information%20about%20dental%20treatments"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </section>
  );
}