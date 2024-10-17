import { useState } from 'react';
import { Box, Flex, Image, Link, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Text } from '@chakra-ui/react';

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const steps = [
        { src: '1.png', title: 'Click share button' },
        { src: '2.png', title: 'Click add to home screen' },
        { src: '3.png', title: 'Click add' },
        { src: '4.png', title: 'The website will be saved as a bookmark' },
    ];

    return (
        <Box w={'full'} bg={'gray.50'}>
            <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
                <Image src='/palestineFlag.png' />

                <Link
                    position={'relative'}
                    top={'-70px'}
                    textDecoration={'underline'}
                    zIndex={10}
                    color={'black'}
                    onClick={openModal}
                >
                    How to Save on your phone
                </Link>

                <Modal isOpen={isOpen} onClose={closeModal}>
                    <ModalOverlay />
                    <ModalContent bg={'white'}>
                        <ModalHeader color={'black'}>How to Save on your phone</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody bg={'gray.50'}>
                            {steps.map((step, index) => (
                                <Box key={index} mb={4}>
                                    <Text textAlign={'center'} fontWeight={'bold'} mb={5} color={'black'}>{step.title}</Text>
                                    <Image src={step.src} alt={step.title} mb={2} />
                                </Box>
                            ))}
                        </ModalBody>

                        <ModalFooter bg={'white'}>
                            <Button colorScheme='blue' mr={3} onClick={closeModal}>
                                Close
                            </Button>
                        </ModalFooter >
                    </ModalContent>
                </Modal>
            </Flex>
        </Box>
    );
};

export default Footer;
