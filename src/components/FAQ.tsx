"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is the brand of the implant important? Does the implant have quality",
    answer:
      "For our dental procedures, CevreDent Clinic only utilizes premium products like Ivoclar Vivadent, Straumann, and Nobel Biocare Implant. These products are well-known for their excellence, ensuring long-lasting and beneficial results for our patients. Our dedication to delivering the finest caliber of dental care is reflected in our commitment to these top brands. You might consult the European Journal of Dentistry, a reputable source for dental research, for additional information.",
  },
  {
    question: "How long does Hollywood smile last?",
    answer:
      "The duration of a Hollywood smile is determined by the durability of the dental implants, crowns, or veneers used. Porcelain veneers can last over 20 years, while composite veneers last approximately 10 years.",
  },
  {
    question: "How long does dental veneer last?",
    answer:
      "Dental veneers can endure for a long period, particularly if they are well adhered to the enamel. While composite veneers normally have a lifespan of 7–10 years, strong porcelain veneers have the ability to survive for 20 years or even longer.",
  },
  {
    question: "What does a dental crown do",
    answer:
      "A dental crown is a cap that resembles a tooth that can be used to restore a tooth that has been decayed, damaged, weaker, or worn down. In addition, dental professionals may cover root-treated teeth and dental implants with crowns. Crowns can endure anywhere between five and fifteen years.",
  },
  {
    question: "Is implant very painful",
    answer:
      "During the dental implant procedure, local anesthesia will be used to numb the nerves around the implant area. This will prevent you from feeling any pain. You may experience some pressure, but it is not uncomfortable.",
  },
  {
    question: "Is it painful to get a crown",
    answer:
      "The regular dental treatment of getting a crown could make some people nervous since they are afraid of the discomfort. However, because your dentist will numb your mouth before beginning any treatment, the procedure shouldn't be uncomfortable. This holds true for each step of the procedure, from the first appointment to the last fitting.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-[#0c1015]">
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
