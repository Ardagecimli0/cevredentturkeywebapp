"use client";

const journeyRows = [
  // Row 1 - 3 items, centered
  [
    { name: "Online Consultation", position: "left" },
    { name: "Arrival in Istanbul", position: "center" },
    { name: "Preoperative Tests", position: "right" },
  ],
  // Row 2 - 3 items, slightly offset
  [
    { name: "Examination with Op. Dr. Can Kalkavan", position: "left" },
    { name: "Operation Day Planning", position: "center" },
    { name: "Operation", position: "right" },
  ],
  // Row 3 - 4 items
  [
    { name: "Postoperative Check Up", position: "left" },
    { name: "Splint and Silicone Purchase", position: "center-left" },
    { name: "Regular Check Ups", position: "center-right" },
    { name: "Departure", position: "right" },
  ],
  // Row 4 - 1 item, centered
  [
    { name: "Confidence Renewed", position: "center" },
  ],
];

export default function Journey() {
  return (
    <section className="py-16 bg-[#0c1015]">
      <div className="max-w-md mx-auto px-4 md:max-w-7xl">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            How Will Your
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold text-[#c9a96e]">
            Rhinoplasty Journey Go?
          </h3>
        </div>

        {/* Mobile Zigzag Layout */}
        <div className="md:hidden space-y-8">
          {journeyRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex justify-center gap-4 ${rowIndex === 0 ? 'px-4' :
                  rowIndex === 1 ? 'px-2' :
                    rowIndex === 2 ? 'px-0' :
                      'px-8'
                }`}
            >
              {row.map((step, stepIndex) => (
                <div
                  key={stepIndex}
                  className="flex flex-col items-center text-center group cursor-pointer"
                  style={{ width: row.length === 1 ? '100px' : row.length === 4 ? '80px' : '90px' }}
                >
                  {/* Dot */}
                  <div className="w-3 h-3 rounded-full bg-[#c9a96e] mb-2 relative z-10 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#c9a96e]/50 group-hover:scale-125">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border border-[#c9a96e] opacity-30 transition-all duration-300 group-hover:opacity-70" />
                  </div>
                  {/* Label */}
                  <p className="text-gray-400 text-xs leading-tight transition-colors duration-300 group-hover:text-[#c9a96e]">
                    {step.name}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Desktop Layout - Horizontal Timeline */}
        <div className="hidden md:block relative">
          {/* Line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-700" />

          {/* Steps */}
          <div className="grid grid-cols-11 gap-4">
            {journeyRows.flat().map((step, index) => (
              <div key={index} className="text-center relative group cursor-pointer">
                {/* Dot */}
                <div className="w-4 h-4 rounded-full bg-[#c9a96e] mx-auto mb-3 relative z-10 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#c9a96e]/50 group-hover:scale-125">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-[#c9a96e] opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:w-8 group-hover:h-8" />
                </div>
                {/* Label */}
                <p className="text-gray-400 text-xs leading-tight transition-colors duration-300 group-hover:text-[#c9a96e]">
                  {step.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
