"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/lib/i18n";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        // Check if user has already consented
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            // Show popup after a short delay
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setIsVisible(false);
    };

    const handleViewPreferences = () => {
        // For now, just accept and close
        localStorage.setItem("cookieConsent", "preferences");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 z-50 max-w-sm bg-white rounded-lg shadow-2xl border border-gray-200 p-6 animate-fade-in">
            {/* Close button */}
            <button
                onClick={() => setIsVisible(false)}
                className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-[#1e3a5f] text-white hover:bg-[#2a4a6f] transition-colors"
                aria-label="Close"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 mb-3 pr-8">
                {t("cookieConsent.title")}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                {t("cookieConsent.description")}
            </p>

            {/* Buttons */}
            <div className="flex gap-3">
                <button
                    onClick={handleAccept}
                    className="flex-1 px-4 py-2.5 bg-[#1e3a5f] text-white text-sm font-medium rounded-md hover:bg-[#2a4a6f] transition-colors"
                >
                    {t("cookieConsent.accept")}
                </button>
                <button
                    onClick={handleViewPreferences}
                    className="flex-1 px-4 py-2.5 bg-white text-gray-700 text-sm font-medium rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                    {t("cookieConsent.viewPreferences")}
                </button>
            </div>

            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
        </div>
    );
}