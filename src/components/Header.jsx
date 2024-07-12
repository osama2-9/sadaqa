import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Header = () => {

    return (
        <Box color={'black'} shadow={'md'} w={'full'} h={'65px'}>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Box mt={'2'} ml={'10'}>
                    <Image src="/logo.png" w={'45px'} />
                </Box>

                <Flex display={{ base: 'flex', md: 'flex' }} gap={5} me={'22'} mt={3}>
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

            </Flex>


        </Box>
    );
}

export default Header;
