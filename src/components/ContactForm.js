import React from "react";


const DoubtSection = () => {
  return (
    <section className="w-full bg-[#E8D6C0] rounded-2xl px-4 md:px-12 py-8 md:py-12 flex flex-col items-center gap-6 md:gap-10 max-w-3xl mx-auto">
      <h2 className="font-space-grotesk font-bold text-[#2E0711] text-[48px] text-center leading-tight mb-2">Still Doubtful?</h2>
      <p className="font-space-grotesk font-bold text-[#2E0711] text-[24px] text-center max-w-2xl mx-auto mb-2">
Please share your query with us — our team will get back to you shortly!      </p>
      <button className="flex justify-center items-center py-3 px-8 md:py-4 md:px-12 bg-gradient-to-r from-[#590D22] to-[#72182A] border-2 border-[#E8D6C0] rounded-full font-space-grotesk font-bold text-base md:text-lg text-[#E8D6C0] transition-colors duration-300 hover:from-[#72182A] hover:to-[#590D22]">
        Register Your Doubts
      </button>
    </section>
  );
};

export default DoubtSection;
