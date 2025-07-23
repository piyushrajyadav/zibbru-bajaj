import React from 'react';

// Import all the section components
import Header from './components/Header';
import HeroSection from './components/Hero';
import ZibbruFeatures from './components/Features';
import EligibilityCriteria from './components/Eligibility';
import ExploreSection from './components/Explore';
import DoubtSection from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const colors = {
    background: '#66142A',
  };

  return (
    <main style={{ backgroundColor: colors.background }}>
      <div className="relative font-lato">
        <Header />

        {/* THIS IS THE CORRECTED LINE:
          The gap between sections has been increased from gap-16 to gap-24.
          This will add more vertical space between each component.
        */}
        <div className="w-full max-w-[1520px] mx-auto flex flex-col items-center gap-24 px-4 md:px-8 pb-16">
          <HeroSection />
          <ZibbruFeatures />
          <EligibilityCriteria />
          <ExploreSection />
          <DoubtSection />
        </div>
        
        <Footer />
      </div>
    </main>
  );
}

export default App;