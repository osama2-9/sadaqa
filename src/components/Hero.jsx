const Hero = () => {
    return (
        <div id="quranPlayer" className="mt-12 mx-5 md:mx-12 text-black text-center md:text-left p-4 md:p-8">
            <div className="flex flex-col md:flex-row items-center">
                <img
                    src="/logo.png"
                    className="w-48 md:w-96 mb-4 md:mb-0 rounded-full shadow-md"
                    alt="Logo"
                />

                <div className="md:ml-6">
                    <p className="text-base md:text-lg mb-4">
                        This page is created for the souls of the people who were killed in Gaza. It serves as a tribute and a reminder of their sacrifices. We aim to honor their memory through this platform, providing Quranic content and religious materials to support and uplift the community.
                        <span className="font-bold text-red-500">
                            Your participation and contributions help in keeping their legacy alive and supporting the ongoing efforts for peace and justice.
                        </span>
                    </p>

                    <a href="/E-Quran.pdf" download>
                        <button className="bg-green-600 hover:bg-green-400 text-white text-lg px-6 py-2 rounded">
                            Download Holy Quran
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;
