/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        if (moshaf.length > 0) {
            const options = moshaf.map(m => ({
                value: m.id,
                label: m.name,
                server: m.server,
                surah_list: m.surah_list.split(','), // Splitting surah_list into an array of strings
            }));
            setRewayaOptions(options);
            setSurahList(options[0]?.surah_list || []); // Initialize surahList with the first reciter's surah_list
            setServer(options[0]?.server || ''); // Initialize server with the first reciter's server
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
        const fetchSurahData = async (surahList, selectedServer) => {
            try {
                const res = await fetch('https://mp3quran.net/api/v3/suwar?language=ar');
                const data = await res.json();
                const surahName = data.suwar

                surahList = surahName.split(',')
                surahList.forEach((surah) => {
                    surah.forEach((surahName) => {
                        if (surahName.id == surah) {

                            setSurahOptions(surahName)
                        }
                    })

                })



            } catch (error) {
                console.error('Error fetching surah data:', error);
            }
        };
        console.log("o" + surahOptions);

        fetchSurahData();
    }, [surahOptions]);

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
                        <Box id='quranPlayer'>
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
                                    setSurahList(selectedOption.surah_list); // Update surahList based on selected narration
                                    setServer(selectedOption.server); // Update server based on selected narration
                                }}
                            />
                        </Box>

                        <Box>
                            <FormLabel htmlFor="surah-select" fontSize={{ base: 'md', md: 'lg' }}>السورة</FormLabel>
                            <Flex direction={{ base: 'column', md: 'row' }} gap={2}>
                                <Select
                                    id="surah-select"
                                    options={surahOptions.name}
                                    placeholder="Select Surah"
                                    styles={{
                                        container: (provided) => ({
                                            ...provided,
                                            flex: 1
                                        })
                                    }}
                                />
                            </Flex>
                        </Box>

                        <Box id='quranPlayer' mt={4}>
                            <AudioPlayer
                                src="" // Replace with your audio file URL
                                onPlay={e => console.log("onPlay")}
                            />
                        </Box>
                    </>
                )}
            </Flex>
        </Box>
    )
}

export default QuranPlayer;
