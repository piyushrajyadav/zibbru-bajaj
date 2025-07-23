import React from 'react';


const EligibilityCriteria = () => {
  return (
    <section className="w-full bg-[#E8D6C0] text-[#2E0711] px-4 md:px-8 lg:px-16 py-8 md:py-24 rounded-2xl font-space-grotesk flex flex-col items-center gap-8 md:gap-12">
      <div className="text-center">
        <h2 className="font-space-grotesk font-bold text-[#2E0711] text-[32px] md:text-[48px] leading-tight mb-4">Eligibility Criteria</h2>
        <p className="font-space-grotesk font-bold text-[#2E0711] text-[18px] md:text-[24px] mt-4 max-w-4xl mx-auto">
          Coverage can be given to domesticated Dogs and Cats which are at least 90 days of age old and belonging to below mentioned breeds.
        </p>
      </div>
      <div className="w-full max-w-4xl bg-[#66142A] rounded-2xl p-2 sm:p-4 md:p-6 overflow-x-auto">
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-[#E8D6C0] text-center font-bold text-xs sm:text-sm md:text-base lg:text-xl">
          <thead>
            <tr>
              <th className="p-2 sm:p-4 border border-black">Pet Type</th>
              <th className="p-2 sm:p-4 border border-black">Breed Type</th>
              <th className="p-2 sm:p-4 border border-black">Entry Age</th>
              <th className="p-2 sm:p-4 border border-black">Exit Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={4} className="p-2 sm:p-4 border border-black align-middle">Dogs</td>
              <td className="p-2 sm:p-4 border border-black">Small</td>
              <td rowSpan={3} className="p-2 sm:p-4 border border-black align-middle">3 Months - 7 Years</td>
              <td rowSpan={3} className="p-2 sm:p-4 border border-black align-middle">10 Years</td>
            </tr>
            <tr>
                <td className="p-2 sm:p-4 border border-black">Medium</td>
            </tr>
            <tr>
                <td className="p-2 sm:p-4 border border-black">Large</td>
            </tr>
            <tr>
              <td className="p-2 sm:p-4 border border-black">Giant</td>
              <td className="p-2 sm:p-4 border border-black">3 Months - 4 Years</td>
              <td className="p-2 sm:p-4 border border-black">6 Years</td>
            </tr>
            <tr>
              <td className="p-2 sm:p-4 border border-black">Cats</td>
              <td className="p-2 sm:p-4 border border-black">All Breeds</td>
              <td className="p-2 sm:p-4 border border-black">3 Months - 7 Years</td>
              <td className="p-2 sm:p-4 border border-black">12 Years</td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default EligibilityCriteria;