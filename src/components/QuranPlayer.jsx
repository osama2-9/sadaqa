import { useState, useEffect } from 'react';
import { Box, Flex, FormLabel, Heading, Spinner } from '@chakra-ui/react';
import Select from 'react-select';
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from 'react-h5-audio-player';
import useQuranRNS from '../hooks/useQuranRNS';

const QuranPlayer = () => {
    const { reciters, loading } = useQuranRNS();
    const [selectedReciter, setSelectedReciter] = useState(null);
    const [moshaf, setMoshaf] = useState([]);
    const [RewayaOptions, setRewayaOptions] = useState([]);
    const [server, setServer] = useState('');
    const [surahList, setSurahList] = useState([]);
    const [surahOptions, setSurahOptions] = useState([]);
    const [audioSrc, setAudioSrc] = useState('');

    useEffect(() => {
        if (moshaf.length > 0) {
            const options = moshaf.map(m => ({
                value: m.id,
                label: m.name,
                server: m.server,
                surah_list: m.surah_list.split(','),
            }));
            setRewayaOptions(options);
            setSurahList(options[0]?.surah_list || []);
            setServer(options[0]?.server || '');
        }
    }, [moshaf]);

    const recitersOptions = reciters?.map(reciter => ({
        value: reciter.id,
        label: reciter.name,
    }));

    const handleReciterChange = async (selectedOption) => {
        try {
            const res = await fetch(
                `https://www.mp3quran.net/api/v3/reciters?language=ar&reciter=${selectedOption.value}`
            );
            const data = await res.json();
            if (data && data.reciters && data.reciters.length > 0) {
                setMoshaf(data.reciters[0].moshaf);
            }
            console.log('Selected Reciter Data:', data);
        } catch (error) {
            console.log('Error fetching reciter data:', error);
        }
        setSelectedReciter(selectedOption);
    };

    useEffect(() => {
        const fetchSurahData = async () => {
            try {
                const res = await fetch('https://mp3quran.net/api/v3/suwar?language=ar');
                const data = await res.json();
                const surahName = data.suwar;

                const surahListStr = surahList.join(',');
                const surahOptionsList = surahName.filter(surah => surahListStr.includes(surah.id.toString()));

                setSurahOptions(surahOptionsList.map(surah => ({
                    value: `${server}${String(surah.id).padStart(3, '0')}.mp3`,
                    label: surah.name,
                })));
                console.log('Surah Options:', surahOptionsList);

            } catch (error) {
                console.error('Error fetching surah data:', error);
            }
        };

        fetchSurahData();
    }, [surahList, server]);

    return (
        <Box mt={20} mx={{ base: '5', md: '50' }} color={'black'}>
            <Heading mb={5} textAlign={'center'}>Quran Player</Heading>
            <Flex direction="column" gap={4}>
                {loading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                        <Spinner size="xl" />
                    </Box>
                ) : (
                    <>
                        <Box>
                            <FormLabel htmlFor="reciter-select" fontSize={{ base: 'md', md: 'lg' }}>اسم القارئ</FormLabel>
                            <Select
                                id="reciter-select"
                                value={selectedReciter}
                                onChange={handleReciterChange}
                                options={recitersOptions}
                                placeholder="Select Reciter"
                            />
                        </Box>

                        <Box>
                            <FormLabel htmlFor="narration-select" fontSize={{ base: 'md', md: 'lg' }}>الرواية</FormLabel>
                            <Select
                                id="narration-select"
                                options={RewayaOptions}
                                placeholder="Select Narration"
                                onChange={(selectedOption) => {
                                    setSurahList(selectedOption.surah_list);
                                    setServer(selectedOption.server);
                                }}
                            />
                        </Box>

                        <Box>
                            <FormLabel htmlFor="surah-select" fontSize={{ base: 'md', md: 'lg' }}>السورة</FormLabel>
                            <Select
                                id="surah-select"
                                options={surahOptions}
                                placeholder="Select Surah"
                                onChange={(selectedOption) => {
                                    setAudioSrc(selectedOption.value);
                                }}
                                styles={{
                                    container: (provided) => ({
                                        ...provided,
                                        flex: 1
                                    })
                                }}
                            />
                        </Box>

                        <Box mt={4}>
                            <AudioPlayer
                                src={audioSrc}
                                autoPlay={false}
                            />
                        </Box>
                    </>
                )}
            </Flex>
        </Box>
    );
}

export default QuranPlayer;
