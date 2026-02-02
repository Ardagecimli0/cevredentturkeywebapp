"use client";

export default function Testimonials() {
  return (
    <section className="pt-24 pb-20 bg-[#0c1015]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Sol Taraf - Başlık ve Parlayan Buton */}
          <div className="lg:w-[32%] flex flex-col pt-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#c9a96e] mb-6 leading-tight tracking-tight">
              Patient Stories of<br />
              Transformation and<br />
              Confidence
            </h2>
            <p className="text-gray-300 text-base mb-10 max-w-[300px] leading-relaxed">
              We love our patients, but don't just take our word for it. Take a look at what they say about us!
            </p>

            {/* Parlayan ve Zıplayan Buton */}
            <div className="relative group w-full sm:w-60">
              {/* Alt Parlama Efekti */}
              <div className="absolute -inset-1 bg-[#22c55e] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

              <a
                href="https://api.whatsapp.com/send/?phone=905494755287&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-full bg-[#22c55e] hover:bg-[#1da850] text-white text-center py-3.5 rounded-lg font-bold text-base transition-all duration-300 hover:-translate-y-2 active:translate-y-0 shadow-xl"
              >
                Let's get started
              </a>
            </div>
          </div>

          {/* Sağ Taraf - Hover Efektli Kartlar */}
          <div className="lg:w-[68%] grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Kart 1 */}
            <div className="bg-[#1c2530] rounded-xl p-6 flex flex-col justify-between min-h-[440px] border border-gray-800/60 shadow-xl transition-all duration-300 hover:-translate-y-4 hover:border-[#c9a96e]/50 group">
              <div className="relative">
                <p className="text-gray-300 text-sm leading-relaxed pr-3 h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700">
                  I underwent a full mouth rehabilitation at CevreDent Clinic. From the first consultation to the final restoration the team provided clear explanations, a personalised treatment plan and outstanding follow-up care. My implants and prosthetics look natural, feel comfortable and restored my confidence when eating and smiling.
                </p>
                <div className="absolute right-0 top-0 w-1 h-16 bg-[#c9a96e]/15 group-hover:bg-[#c9a96e]/40 transition-colors rounded-full"></div>
              </div>
              <div className="mt-8 pt-5 border-t border-gray-800/80">
                <p className="text-white font-semibold text-sm mb-2">
                  Patient: Anna Müller <span className="text-gray-500 text-xs ml-1 font-normal">DE</span>
                </p>
                <div className="flex gap-1 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Kart 2 */}
            <div className="bg-[#1c2530] rounded-xl p-6 flex flex-col justify-between min-h-[440px] border border-gray-800/60 shadow-xl transition-all duration-300 hover:-translate-y-4 hover:border-[#c9a96e]/50 group">
              <div className="relative">
                <p className="text-gray-300 text-sm leading-relaxed pr-3 h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700">
                  The entire process was smooth thorough diagnostics, realistic timelines and attentive post-op support. The implant-supported bridges restored my chewing function quickly and the aesthetic result exceeded my expectations. Travel and accommodation arrangements were handled professionally.
                </p>
                <div className="absolute right-0 top-0 w-1 h-16 bg-[#c9a96e]/15 group-hover:bg-[#c9a96e]/40 transition-colors rounded-full"></div>
              </div>
              <div className="mt-8 pt-5 border-t border-gray-800/80">
                <p className="text-white font-semibold text-sm mb-2">
                  Patient: Hannah Schmidt <span className="text-gray-500 text-xs ml-1 font-normal">DE</span>
                </p>
                <div className="flex gap-1 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Kart 3 */}
            <div className="bg-[#1c2530] rounded-xl p-6 flex flex-col justify-between min-h-[440px] border border-gray-800/60 shadow-xl transition-all duration-300 hover:-translate-y-4 hover:border-[#c9a96e]/50 group">
              <div className="relative">
                <p className="text-gray-300 text-sm leading-relaxed pr-3 h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700">
                  The CevreDent Clinic team combines artistry with clinical excellence. The restorations are precise and natural-looking; the occlusion feels perfect. The team ensured minimal discomfort and provided clear aftercare instructions — my confidence and speech improved dramatically.
                </p>
                <div className="absolute right-0 top-0 w-1 h-16 bg-[#c9a96e]/15 group-hover:bg-[#c9a96e]/40 transition-colors rounded-full"></div>
              </div>
              <div className="mt-8 pt-5 border-t border-gray-800/80">
                <p className="text-white font-semibold text-sm mb-2">
                  Patient: Emily Thompson <span className="text-gray-500 text-xs ml-1 font-normal">GB</span>
                </p>
                <div className="flex gap-1 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}