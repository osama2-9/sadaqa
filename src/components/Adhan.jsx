import { useEffect, useState } from 'react';

export const Adhan = () => {
    const [prayerTimes, setPrayerTimes] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [country, setCountry] = useState('Palestine');
    const [city, setCity] = useState('Gaza');
    const [nextPrayer, setNextPrayer] = useState(null);
    const [timeRemaining, setTimeRemaining] = useState(null);

    const citiesByCountry = {
        Egypt: ['Cairo', 'Alexandria'],
        Palestine: ['Gaza', 'Al-Quds', 'Nablus'],
        Pakistan: ['Karachi', 'Lahore'],
        India: ['Delhi', 'Mumbai'],
        Turkey: ['Istanbul', 'Ankara', 'Izmir']
    };

    const fetchPrayerTimes = async (selectedCity, selectedCountry) => {
        try {
            setLoading(true);
            const today = new Date().toLocaleDateString('en-CA');
            const response = await fetch(
                `https://api.aladhan.com/v1/timingsByCity/${today}?city=${selectedCity}&country=${selectedCountry}`
            );
            const data = await response.json();
            if (data.code === 200) {
                setPrayerTimes(data.data.timings);
                setNextPrayerTime(data.data.timings);
            } else {
                setError('Could not fetch prayer times');
            }
        } catch (err) {
            setError('Error fetching prayer times');
        } finally {
            setLoading(false);
        }
    };

    const setNextPrayerTime = (timings) => {
        const now = new Date();
        const currentTime = now.toLocaleTimeString('en-GB', { hour12: false }).split(':');
        const currentHour = parseInt(currentTime[0]);
        const currentMinute = parseInt(currentTime[1]);

        const prayerNames = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
        const prayerTimes = prayerNames.map(name => {
            const [hour, minute] = timings[name].split(':').map(Number);
            return { name, time: new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute) };
        });

        const upcomingPrayers = prayerTimes.filter(({ time }) => time > now);
        if (upcomingPrayers.length > 0) {
            const next = upcomingPrayers[0];
            setNextPrayer(next);
            setTimeRemaining(next.time - now);
        } else {
            setNextPrayer(null);
            setTimeRemaining(null);
        }
    };

    const formatTime = (timeString) => {
        const [hour, minute] = timeString.split(':');
        const formattedHour = hour % 12 || 12; // Convert to 12-hour format
        return `${formattedHour}:${minute}`;
    };

    const filteredPrayerTimes = prayerTimes && Object.entries(prayerTimes).filter(
        ([name]) => ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].includes(name)
    );

    useEffect(() => {
        const timerId = setInterval(() => {
            if (timeRemaining > 0) {
                setTimeRemaining((prev) => prev - 1000);
            }
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeRemaining]);

    useEffect(() => {
        fetchPrayerTimes(city, country);
    }, [city, country]);

    return (
        <div id='prayerTime' className="max-w-2xl mb-20 mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Prayer Times</h2>

            
            <div className="mb-4">
                <label htmlFor="country" className="block mb-2 font-semibold text-gray-700">
                    Select Country:
                </label>
                <select
                    id="country"
                    value={country}
                    onChange={(e) => {
                        setCountry(e.target.value);
                        setCity(''); 
                    }}
                    className="border p-2 w-full mb-4 bg-gray-100 focus:outline-none rounded-md text-black"
                >
                    <option value="">Select a Country</option>
                    {Object.keys(citiesByCountry).map((countryName) => (
                        <option key={countryName} value={countryName}>
                            {countryName}
                        </option>
                    ))}
                </select>

                <label htmlFor="city" className="block mb-2 font-semibold  text-black">
                    Select City:
                </label>
                <select
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="border p-2 w-full mb-4 focus:outline-none text-black bg-gray-100 rounded-md"
                    disabled={!country} 
                >
                    <option value="">Select a City</option>
                    {country &&
                        citiesByCountry[country]?.map((cityName) => (
                            <option key={cityName} value={cityName}>
                                {cityName}
                            </option>
                        ))}
                </select>
            </div>

            {loading && <p className="text-lg text-center">Loading...</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}

            {filteredPrayerTimes && filteredPrayerTimes.length > 0 ? (
                <div className="flex flex-wrap justify-center">
                    {filteredPrayerTimes.map(([name, time]) => (
                        <div
                            key={name}
                            className="p-4 border border-gray-200 rounded-lg shadow-lg m-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-gray-50"
                        >
                            <p className="text-xl font-bold text-gray-700 text-center mb-2 capitalize">{name}</p>
                            <p className="text-lg text-center text-gray-600">{formatTime(time)}</p>
                        </div>
                    ))}
                </div>
            ) : (
                !loading && <p className="text-center text-gray-500">No prayer times available</p>
            )}

            {nextPrayer && (
                <div className="mt-6 p-4 border border-gray-200 rounded-lg shadow-lg bg-green-50">
                    <h3 className="text-lg font-semibold text-gray-800">Next Prayer:</h3>
                    <p className="text-xl font-bold text-gray-700">{nextPrayer.name}</p>
                    <p className="text-lg text-gray-600">{formatTime(nextPrayer.time.toLocaleTimeString('en-GB', { hour: 'numeric', minute: 'numeric', hour12: false }))}</p>
                    <p className="text-md text-gray-500">
                        Time Remaining:
                        {timeRemaining
                            ? `${Math.floor(timeRemaining / 60000)} minutes ${Math.floor((timeRemaining % 60000) / 1000)} seconds`
                            : 'N/A'}
                    </p>
                </div>
            )}
        </div>
    );
};
