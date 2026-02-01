"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is rhinoplasty?",
    answer:
      "Rhinoplasty is a surgical procedure that reshapes or repairs the nose. It can be performed for cosmetic purposes to improve the appearance of the nose or for functional purposes to correct breathing problems.",
  },
  {
    question: "Am I a good candidate for rhinoplasty?",
    answer:
      "Good candidates for rhinoplasty are individuals who are in good overall health, have realistic expectations about the outcomes, and are seeking improvement in the appearance or function of their nose. A consultation with Dr. Kalkavan will help determine if you are a suitable candidate.",
  },
  {
    question: "How long does the rhinoplasty surgery take?",
    answer:
      "Rhinoplasty surgery typically takes between 1.5 to 3 hours, depending on the complexity of the procedure and the techniques used.",
  },
  {
    question: "How long is the recovery period?",
    answer:
      "Initial recovery takes about 1-2 weeks, during which you may experience swelling and bruising. Most patients can return to work after 7-10 days. Full results are visible after 6-12 months as the swelling completely subsides.",
  },
  {
    question: "Will I have visible scars after surgery?",
    answer:
      "With closed rhinoplasty, all incisions are made inside the nose, leaving no visible scars. Open rhinoplasty involves a small incision on the columella, which typically heals to become nearly invisible.",
  },
  {
    question: "How many rhinoplasty surgeries has Dr. Can Kalkavan performed?",
    answer:
      "Dr. Can Kalkavan has performed over 20,000 successful rhinoplasty procedures with a 98% patient satisfaction rate.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-[#252d38]">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#c9a96e] text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-600"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-4 flex items-center justify-between text-left"
              >
                <span className="text-white font-medium">{faq.question}</span>
                <span className="text-[#c9a96e] text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="pb-4 text-gray-400 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
