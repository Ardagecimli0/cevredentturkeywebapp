"use client";

import Image from "next/image";

export default function HospitalHotel() {
  return (
    <section className="py-16 bg-[#0c1015]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Hospital Card */}
          <div className="relative rounded-xl overflow-hidden card-hover">
            <Image
              src="/images/hospital.jpg"
              alt="Kartal Kızılay Hospital"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 right-4">
              <span className="badge-hospital px-4 py-2 rounded-full text-white text-sm font-semibold">
                HOSPITAL
              </span>
            </div>
            <div className="p-6 bg-[#151b23]">
              <h3 className="text-xl font-semibold text-white mb-1">
                Our guests are hosted in
              </h3>
              <p className="text-[#c9a96e] text-lg font-bold">
                Kartal Kızılay Hospital
              </p>
            </div>
          </div>

          {/* Hotel Card */}
          <div className="relative rounded-xl overflow-hidden card-hover">
            <Image
              src="/images/hotel.png"
              alt="Istanbul The Kailyn Hotel"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 right-4">
              <span className="badge-hotel px-4 py-2 rounded-full text-white text-sm font-semibold">
                HOTEL
              </span>
            </div>
            <div className="p-6 bg-[#151b23]">
              <h3 className="text-xl font-semibold text-white mb-1">
                Our guests stay at
              </h3>
              <p className="text-[#c9a96e] text-lg font-bold">
                Istanbul The Kailyn Hotel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
