import { useState } from "react";

const Prayer = () => {
    const [selectedPrayer, setSelectedPrayer] = useState(null);

    const handleTranslate = (index) => {
        setSelectedPrayer((prev) => (prev === index ? null : index));
    };

    const prayers = [
        {
            arabic: "اللهم ارحم شهداءنا وشهداء جميع المسلمين، وأدخلهم في رحمتك التي وسعت كل شيء يا رب وإنا لله وإنا إليـــه راجعون",
            english: "O Allah, have mercy on our martyrs and the martyrs of all Muslims, and admit them into Your mercy that encompasses everything. Indeed, we belong to Allah, and indeed to Him we will return."
        },
        {
            arabic: "ربي إني أستغفرك يا عظيم لي ولجميع الشهداء",
            english: "My Lord, I seek Your forgiveness, O Great One, for myself and for all the martyrs."
        },
        {
            arabic: "اللهم اجزه عن الإحسان إحسانًا وعن الإساءة عفوًا وغفرانًا اللهم إن كان محسنًا فزد في حسناته وإن كان مسيئًا فتجاوز عنه يا رب العالمين اللهم أدخله الجنة من غير مناقشة حساب ولا سابقه عذاب",
            english: "O Allah, reward him for his good deeds with goodness and for his misdeeds with pardon and forgiveness. O Allah, if he was good, increase his good deeds, and if he was bad, overlook his misdeeds. O Lord of the worlds, admit him to Paradise without reckoning or prior punishment."
        },
        {
            arabic: "يا رب أبدله دارًا خيرًا من داره وأهلًا خيرًا من أهله وأزواجًا خيرًا من أزواجه وأسكنه فسيح جناتك في الدراجات العليا، اللهم عامله بما أنت أهله ولا تعامله بما هو أهله",
            english: "O Lord, replace his home with a better home, his family with a better family, and his spouses with better spouses. Grant him residence in Your spacious gardens in the highest ranks. O Allah, treat him with what You are worthy of, and do not treat him with what he is worthy of."
        },
        {
            arabic: "يا رب ارحم من استوفيت أجله وأخذته من بين أهله، وأنت وحدك تعلم ألم فقده، اللهم ارحمه واغفر له واجمعنا به في جنتك",
            english: "O Lord, have mercy on those whose time You have fulfilled and taken from among their families. You alone know the pain of losing them. O Allah, have mercy on them, forgive them, and reunite us with them in Your Paradise."
        },
        {
            arabic: "اللهم ارحم شهداءنا برحمتك، واربط على قلب والديهم وأهلهم وتقبلهم مع الشهداء",
            english: "O Allah, have mercy on our martyrs with Your mercy, and strengthen the hearts of their parents and families. Accept them among the martyrs."
        }
    ];

    return (
        <div className="mb-10 text-black mt-10 px-5">
            <h1 className="text-center text-3xl font-bold mb-10">Prayers</h1>
            <div className="flex flex-wrap justify-between" id="Prayer">
                {prayers.map((prayer, index) => (
                    <div
                        key={index}
                        className="p-5 shadow-md border border-gray-200 rounded-lg mb-6 w-full md:w-[45%]"
                    >
                        <p className="text-xl font-bold mb-4">
                            {selectedPrayer === index ? prayer.english : prayer.arabic}
                        </p>
                        <button
                            onClick={() => handleTranslate(index)}
                            className="text-blue-600 hover:underline"
                        >
                            {selectedPrayer === index ? "Show Arabic" : "Translate to English"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Prayer;
