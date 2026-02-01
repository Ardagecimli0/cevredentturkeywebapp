"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#0c1015] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Side - Logo and About */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.png"
                alt="Dr. Can Kalkavan Logo"
                width={50}
                height={50}
                className="h-14 w-auto"
              />
              <div>
                <p className="text-gray-300 text-sm">Op. Dr.</p>
                <p className="text-white text-xl font-semibold italic" style={{ fontFamily: 'Georgia, serif' }}>Can Kalkavan</p>
                <p className="text-gray-500 text-xs">Ear Nose and Throat Specialist</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-4 max-w-md">
              European Board Certified Plastic Surgeon, specialized in
              Rhinoplasty and Aesthetic Surgery. European Board Ear Nose and
              Throat Specialist.
            </p>
            <p className="text-gray-500 text-sm">
              Copyright © 2025 Op. Dr. Can Kalkavan - All Rights Reserved
            </p>
          </div>

          {/* Right Side - Contact */}
          <div className="md:text-right space-y-3">
            {/* Address */}
            <div className="flex items-start gap-3 md:justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="text-gray-400 text-sm">
                Acıbadem mah. Çeçen sok, Akasya Avm NO:25 B1 blok Kat:7 D:89, 34674 Üsküdar/İstanbul
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 md:justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <a
                href="mailto:info@drcankalkavan.com"
                className="text-gray-400 text-sm hover:text-[#c9a96e] transition"
              >
                info@drcankalkavan.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 md:justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a
                href="tel:+905467633630"
                className="text-gray-400 text-sm hover:text-[#c9a96e] transition"
              >
                +90 (546) 763 36 30
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
