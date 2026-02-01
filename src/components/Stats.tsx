"use client";

const stats = [
  {
    icon: "/images/stats/operations.svg",
    value: "+20000",
    label: "Thousands of successful dental rehabilitations and implant treatments completed",
  },
  {
    icon: "/images/stats/years.svg",
    value: "30+",
    label: "Years of experience in dental rehabilitations and implant treatments",
  },
  {
    icon: "/images/stats/countries.svg",
    value: "%95",
    label: "of Patients recommend Op. Dr. Can Kalkavan",
  },
  {
    icon: "/images/stats/satisfaction.svg",
    value: "%98",
    label: "Patient satisfaction rate after dental procedures",
  },
];

export default function Stats() {
  return (
    <section className="py-12 bg-[#0c1015]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#151b23] rounded-xl p-6 text-center card-hover border border-gray-800"
            >
              <img
                src={stat.icon}
                alt=""
                className="w-12 h-12 mx-auto mb-4 opacity-80"
              />
              <p className="text-3xl md:text-4xl font-bold text-[#c9a96e] mb-2">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
