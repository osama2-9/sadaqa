import { Box, Flex, Image, Link } from '@chakra-ui/react'
0
const Footer = () => {
  return (
    <Box w={'full'} bg={'gray.50'}>
        <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
            <Image src='/palestineFlag.png' />


            <Link position={'relative'} top={'-70px'} textDecoration={'underline'} zIndex={10} color={'black'}>How to Save on your phone</Link>


        </Flex>
      
    </Box>
  )
}

export default Footer
