import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-white shadow-md w-full h-16">
            <div className="flex items-center justify-between h-full px-4 md:px-10">
                <div className="mt-2">
                    <img src="/logo.png" alt="Logo" className="w-11" />
                </div>

                <div className="hidden md:flex gap-5 mt-3 mr-6">
                    <a href="#quranPlayer" className="text-black hover:text-green-800 cursor-pointer">
                        Quran Player
                    </a>
                    <a href="#Sobha" className="text-black hover:text-green-800 cursor-pointer">
                        Sobha
                    </a>
                    <a href="#Prayer" className="text-black hover:text-green-800 cursor-pointer">
                        Prayer
                    </a>
                    <a href="#prayerTime" className="text-black hover:text-green-800 cursor-pointer">
                        Prayer Time
                    </a>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-8 h-8 text-black"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden relative w-full z-50 flex flex-col items-center bg-white shadow-lg py-4">
                    <a href="#quranPlayer" className="text-black hover:text-green-800 cursor-pointer py-2">
                        Quran Player
                    </a>
                    <a href="#Sobha" className="text-black hover:text-green-800 cursor-pointer py-2">
                        Sobha
                    </a>
                    <a href="#Prayer" className="text-black hover:text-green-800 cursor-pointer py-2">
                        Prayer
                    </a>
                    <a href="#prayerTime" className="text-black hover:text-green-800 cursor-pointer py-2">
                        Prayer Time
                    </a>
                </div>
            )}
        </div>
    );
};

export default Header;
