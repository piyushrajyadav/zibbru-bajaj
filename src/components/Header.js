import React from 'react';


const Header = () => (
    <header className="flex flex-col sm:flex-row justify-between items-center py-4 px-4 md:px-8 w-full gap-2 sm:gap-0">
        <div className="flex items-center">
            <img src="https://placehold.co/40x40/ffffff/4a0e2a?text=Z" alt="Zibbru Logo" className="h-10 w-10 mr-2 rounded" />
            <div>
                <p className="text-white font-bold text-lg md:text-xl">Zibbru</p>
                <p className="text-white text-xs md:text-sm">PET INSURANCE</p>
            </div>
        </div>
        <button className="border border-white text-white py-1 px-4 rounded-full text-sm md:text-base transition hover:bg-white hover:text-brand-purple">LOGIN</button>
    </header>
);
export default Header;
