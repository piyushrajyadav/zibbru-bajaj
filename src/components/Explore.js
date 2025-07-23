
import React from "react";

const ExploreSection = () => {
  return (
    <section className="w-full bg-[#E8D6C0] rounded-2xl px-4 md:px-12 py-8 md:py-12 flex flex-col items-center gap-8 md:gap-16 max-w-6xl mx-auto">
      <h1 className="font-space-grotesk font-bold text-[#2E0711] text-[48px] text-center leading-tight mb-4">Explore</h1>
      <p className="font-space-grotesk font-bold text-[#2E0711] text-[24px] text-center max-w-2xl mx-auto">
Because We Believe in 100% Transparency, We Believe in your entitlement to know if your Pet’s Conditions are covered under our Policies      </p>
      <div className="flex flex-col sm:flex-row gap-4 md:gap-10 justify-center w-full flex-wrap">
        <button className="py-3 px-8 bg-[#590D22] text-white rounded-full font-bold text-base md:text-lg transition-colors duration-300 hover:bg-[#72182A]">
          Pet Type
        </button>
        <button className="py-3 px-8 bg-[#590D22] text-white rounded-full font-bold text-base md:text-lg transition-colors duration-300 hover:bg-[#72182A]">
         Pet Breed
        </button>
         <button className="py-3 px-8 bg-[#590D22] text-white rounded-full font-bold text-base md:text-lg transition-colors duration-300 hover:bg-[#72182A]">
           Conditions Covered
        </button>
      </div>
    </section>
  );
};

export default ExploreSection;
