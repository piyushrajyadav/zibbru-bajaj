import React from 'react';

// Import your SVG icons. Make sure the path is correct relative to this component file.
// Assuming this component is in /src/components, the path would be ../assets/
import Icon1 from '../assets/icon1.svg';
import Icon2 from '../assets/icon2.svg';
import Icon3 from '../assets/icon3.svg';
import Icon4 from '../assets/icon4.png';
import Icon5 from '../assets/icon5.svg';
import Icon6 from '../assets/icon6.svg';
import Icon7 from '../assets/icon7.svg';
import Icon8 from '../assets/icon8.svg';
import Icon9 from '../assets/icon9.svg';
import Icon10 from '../assets/icon10.svg';


// Array containing the exact text and corresponding imported icon from the image
const features = [
  { icon: Icon1, text: 'Flexible Time Period Term Policy Options.' },
  { icon: Icon2, text: 'RFID tagging for your Dog & Cats.' },
  { icon: Icon3, text: 'Covers the Medical costs for Dogs and Cats.' },
  { icon: Icon4, text: 'Covers failure of vaccinations' },
  { icon: Icon5, text: 'Covers Ads cost in case of Theft of the Pet' },
  { icon: Icon6, text: '30 day Terminal Diseases Cover.' },
  { icon: Icon7, text: 'Reward for help in finding Lost or Stolen pet.' },
  { icon: Icon8, text: 'Pet owner’s third-party liability up to ₹15 lakhs Cover.' },
  { icon: Icon9, text: 'Cover Available on Individual and Group Basis.' },
  { icon: Icon10, text: 'Cover Available on Individual and Group Basis.' },
];


const ZibbruFeatures = () => {
  return (
    <section className="bg-[#E8D6C0] text-[#4C0013] px-4 md:px-8 lg:px-16 py-20 md:py-40 rounded-2xl w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-space-grotesk font-bold text-[#2E0711] text-[32px] md:text-[48px] leading-tight mb-4">ZIBBRU + BAJAJ ALLIANZ</h2>
          <p className="font-space-grotesk font-bold text-[#2E0711] text-[18px] md:text-[24px] mt-3 max-w-3xl mx-auto">
            Tailored plans that cover everything from accidents to peace of mind-because their health is your heart.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 md:gap-x-6 gap-y-6 md:gap-y-10 text-center">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-start">
              <img src={item.icon} alt="" className="h-10 w-10 md:h-12 md:w-12 mb-3 md:mb-4" />
              <p className="font-semibold text-xs md:text-sm leading-tight">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <button className="bg-[#590D22] text-white font-semibold py-2 md:py-3 px-6 md:px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 text-sm md:text-base">
            Get Our Full Coverage Options
          </button>
        </div>
      </div>
    </section>
  );
};

export default ZibbruFeatures;