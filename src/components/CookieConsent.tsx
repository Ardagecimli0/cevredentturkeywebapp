"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            setShow(true);
        }
    }, []);

    const accept = () => {
        localStorage.setItem("cookie_consent", "true");
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 text-white p-4 z-[9999] backdrop-blur-sm border-t border-gray-800">
            <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-300 text-center sm:text-left">
                    We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                </p>
                <div className="flex gap-4 shrink-0">
                    <button
                        onClick={accept}
                        className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
}