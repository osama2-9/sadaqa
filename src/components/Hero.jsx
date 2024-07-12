import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';

const Hero = () => {
    return (
        <Box id='quranPlayer'  mt={50} mx={{ base: '5', md: '50' }} color={'black'} textAlign={{ base: 'center', md: 'left' }} p={{ base: 4, md: 8 }}  >
            <Flex direction={{ base: 'column', md: 'row' }} alignItems="center">
                <Image src='/logo.png' w={{ base: '200px', md: '400px' }} mb={{ base: 4, md: 0 }} borderRadius={'full'} shadow={'md'} />

                <Box ml={{ md: 6 }}>
                    <Text fontSize={{ base: 'md', md: 'lg' }} mb={4}>
                        This page is created for the souls of the people who were killed in Gaza. It serves as a tribute and a reminder of their sacrifices. We aim to honor their memory through this platform, providing Quranic content and religious materials to support and uplift the community. <Text fontWeight={'bold'} color={'red.500'}>Your participation and contributions help in keeping their legacy alive and supporting the ongoing efforts for peace and justice.</Text>
                    </Text>

                    <a href={'/E-Quran.pdf'} download>
                        <Button _hover={{
                            bg: "green.400"
                        }} bg={'green.600'} color={'white'} size={'lg'}>
                            Download Holy Quran
                        </Button>
                    </a>
                </Box>
            </Flex>
        </Box>
    );
}

export default Hero;
