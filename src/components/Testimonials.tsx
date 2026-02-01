"use client";

import { useState } from "react";

const testimonials = [
  {
    text: "I had my nose surgery with Op. Dr. Can Kalkavan and I am more than satisfied with the result. Thanks to his knowledge, attentive care, and reassuring approach before and after the surgery, I felt safe and confident at every step. He carefully listened to my wishes, patiently answered all my questions, and achieved a natural and perfectly fitting result for my face.",
    name: "Anna Müller",
    country: "DE",
    rating: 5,
  },
  {
    text: "I had my rhinoplasty done with Op. Dr. Can Kalkavan in early November 2024, and I couldn't be happier with my choice. This was my first-ever surgery, and I was extremely nervous, but both Dr. Kalkavan and his team made the entire process so smooth and reassuring. Their kindness, professionalism, and attentiveness were outstanding from start to finish.",
    name: "Hannah Schmidt",
    country: "DE",
    rating: 5,
  },
  {
    text: "I recently had a rhinoplasty surgery, and I couldn't be happier with the results. Op. Dr. Can Kalkavan is a true artist and an extremely caring individual. From the moment I walked into his office, I knew I was in good hands. The doctor and his staff were incredibly professional and friendly, making me feel comfortable and at ease throughout the entire process.",
    name: "Emily Thompson",
    country: "UK",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-16 bg-[#0c1015]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Title */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#c9a96e] mb-4">
              Patient Stories of<br />
              Transformation<br />
              and Confidence
            </h2>
            <p className="text-gray-400 mb-6">
              We love our patients, but don't just take our word for it. Take a
              look at what they say about us!
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=905467633630&text=What%20are%20the%20options%20and%20pricing%20for%20rhinoplasty"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn-green px-8 py-4 rounded-full text-white font-semibold"
            >
              Start Making Changes!
            </a>
          </div>

          {/* Right Side - Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#1c2530] rounded-xl p-6 border border-gray-700 transition-all duration-300 hover:border-[#c9a96e] hover:shadow-lg hover:shadow-[#c9a96e]/10 cursor-pointer"
              >
                <p className="text-gray-300 text-sm mb-4 line-clamp-6">
                  {testimonial.text}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">
                      Patient: {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-xs">{testimonial.country}</p>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
