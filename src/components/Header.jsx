const Header = () => {

    return (
        <div className="bg-white shadow-md w-full h-16">
            <div className="flex items-center justify-between h-full">
                <div className="mt-2 ml-10">
                    <img src="/logo.png" alt="Logo" className="w-11" />
                </div>

                <div className="flex gap-5 mr-6 mt-3">
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
            </div>
        </div>
    );
}

export default Header;
