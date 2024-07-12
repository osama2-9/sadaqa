import { Box, Flex, Image, Text, useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box color={'black'} shadow={'md'} w={'full'} h={'65px'}>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Box mt={'2'} ml={'10'}>
                    <Image src="/logo.png" w={'45px'} />
                </Box>

                <Flex display={{ base: 'none', md: 'flex' }} gap={5} me={'22'} mt={3}>
                    <Box as="a" href="#quranPlayer">
                        <Text _hover={{ color: 'darkgreen', cursor: "pointer" }}>Quran player</Text>
                    </Box>

                    <Box as="a" href="#Sobha">
                        <Text _hover={{ color: 'darkgreen', cursor: "pointer" }}>Sobha</Text>
                    </Box>

                    <Box as="a" href="#Prayer">
                        <Text _hover={{ color: 'darkgreen', cursor: "pointer" }}>Prayer</Text>
                    </Box>
                </Flex>

                <IconButton
                    bg={'gray.300'}
                    display={{ base: 'flex', md: 'none' }}
                    icon={<HamburgerIcon />}
                    onClick={onOpen}
                    me={'22'}
                    mt={3}
                    variant="ghost"
                    aria-label="Open Menu"
                />
            </Flex>

            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton color={'black'} />
                    <DrawerHeader color={'black'} bg={'gray.50'}>Menu</DrawerHeader>
                    <DrawerBody bg={'gray.50'}>
                        <VStack color={'black'} align="start" spacing={4}>
                            <Box id="Quran player">
                                <Text _hover={{ color: 'darkgreen', cursor: "pointer" }} onClick={onClose}>Quran player</Text>
                            </Box>

                            <Box id="Sobha">
                                <Text _hover={{ color: 'darkgreen', cursor: "pointer" }} onClick={onClose}>Sobha</Text>
                            </Box>

                            <Box id="Prayer">
                                <Text _hover={{ color: 'darkgreen', cursor: "pointer" }} onClick={onClose}>Prayer</Text>
                            </Box>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}

export default Header;
