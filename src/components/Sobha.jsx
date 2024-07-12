import { useState } from "react";
import {
    Box,
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    Button,
    useDisclosure,
    Text,
    Heading
} from "@chakra-ui/react";

const Sobha = () => {
    const taj = [
        {
            title: "تاج الدعاء",
            description: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ."
        },
        {
            title: "تاج الاستغفار",
            description: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ."
        },
        {
            title: "تاج التسبيح",
            description: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ."
        },
        {
            title: "تاج الذكر",
            description: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ."
        },
        {
            title: "تاج التحصين",
            description: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ."
        },
        {
            title: "تاج تفريج الكرب",
            description: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ."
        },
        {
            title: "تاج راحة البال",
            description: "لا حول ولا قوة الا بالله العلي العظيم"
        },
        {
            title: "تاج الشكر",
            description: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ."
        }
    ];


    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedItem, setSelectedItem] = useState(null);
    const [count, setCount] = useState(0);

    const handleCardClick = (item) => {
        setSelectedItem(item);
        onOpen();
    };

    const handleReset = () => setCount(0);
    const handleIncrement = () => setCount((prev) => prev + 1);
    const handleDecrement = () => setCount((prev) => prev - 1);

    return (
        <Box id="Sobha" color={"black"} mt={10} p={5}>
            <Heading mb={6} textAlign="center">
                Sobha
            </Heading>
            <Flex wrap="wrap" justify="space-between">
                {taj.map((item) => (
                    <Box

                        key={item.title}
                        p={5}
                        shadow="md"
                        borderWidth="1px"
                        borderRadius="lg"
                        onClick={() => handleCardClick(item)}
                        cursor="pointer"
                        width={{ base: "100%", md: "23%" }}
                        mb={6}
                    >
                        <Text textAlign={'center'} fontSize="xl" fontWeight="bold">
                            {item.title}
                        </Text>
                    </Box>
                ))}
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent p={2} bg={'gray.50'}>
                    <ModalHeader color={'black'}>{selectedItem?.title}</ModalHeader>
                    <ModalBody>
                        <Text color={'black'} fontWeight={'bold'} fontSize={'22'} mb={4}>{selectedItem?.description}</Text>
                        <Text color={'black'} mb={4}>Count: {count}</Text>
                        <Flex mb={4}>
                            <Button onClick={handleIncrement} bg={'green.500'} mr={3} _hover={{
                                bg:"green.300"
                            }}>
                                +
                            </Button>
                            <Button onClick={handleDecrement} bg={'red.500'} mr={3} _hover={{
                                bg: "red.300"
                            }}>
                                -
                            </Button>
                        </Flex>
                        <Flex justifyContent="space-between">
                            <Button onClick={handleReset} colorScheme="red">
                                Reset
                            </Button>
                            <Button onClick={onClose} colorScheme="blue">
                                Close
                            </Button>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default Sobha;
