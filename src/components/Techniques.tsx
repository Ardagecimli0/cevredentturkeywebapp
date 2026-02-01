"use client";

const techniques = [
  {
    icon: "/images/techniques/closed.svg",
    title: "Open Rhinoplasty",
  },
  {
    icon: "/images/techniques/preservation.svg",
    title: "Piezo Technique",
  },
  {
    icon: "/images/techniques/ultrasonic.svg",
    title: "Push-Down Technique",
  },
  {
    icon: "/images/techniques/revision.svg",
    title: "Let-Down Technique",
  },
];

export default function Techniques() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#0c1015] to-[#151b23]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Rhinoplasty Techniques
        </h2>
        <div className="w-16 h-1 bg-[#c9a96e] mx-auto mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techniques.map((technique, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
            >
              <div className="w-24 h-24 mx-auto mb-4 bg-[#1c2530] rounded-2xl flex items-center justify-center border border-gray-700 transition-all duration-300 group-hover:border-[#c9a96e] group-hover:shadow-lg group-hover:shadow-[#c9a96e]/20">
                <img
                  src={technique.icon}
                  alt={technique.title}
                  className="w-12 h-12 opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:brightness-125"
                />
              </div>
              <p className="text-white font-medium text-sm transition-colors duration-300 group-hover:text-[#c9a96e]">{technique.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
