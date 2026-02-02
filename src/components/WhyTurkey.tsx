"use client";

import Image from "next/image";

const reasons = [
  {
    title: "Affordable Prices:",
    description:
      "Turkey offers high-quality dental treatments at competitive prices compared to many European countries.",
  },
  {
    title: "Experienced Specialists:",
    description:
      "Experienced implantologists and dental technicians provide predictable and long-lasting results.",
  },
  {
    title: "Advanced Techniques:",
    description:
      "Computer-guided implant placement, CAD/CAM restorations and modern implant systems ensure precision.",
  },
  {
    title: "Comprehensive Care:",
    description:
      "From diagnostics to final restorations and aftercare everything is planned for a comfortable experience.",
  },
];

export default function WhyTurkey() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#0c1015] to-[#151b23]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Title and Image */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#c9a96e] mb-8">
              Why Choose Turkey for Your Dental Treatment?
            </h2>
            <div className="overflow-hidden rounded-lg group cursor-pointer">
              <Image
                src="/images/why-turkey.webp"
                alt="Turkey Dental Treatment"
                width={500}
                height={400}
                className="w-full transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          </div>

          {/* Right Side - Reasons */}
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-[#1c2530] rounded-xl p-6 border border-gray-700 hover:border-[#c9a96e] hover:scale-105 transition-all duration-300 ease-out cursor-pointer"
              >
                <h3 className="text-xl font-bold text-[#c9a96e] mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-300">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
