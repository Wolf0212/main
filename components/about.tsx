import { Box, Button, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { ArrowForwardIos, Email, Phone } from '@mui/icons-material'
import React from 'react'

const About = () => {
    return (
        <>
            <Box display='flex' flexDirection={{ base: 'column', md: 'row' }}>
                <div id='About'>
                    <Heading>Nguyen Quang Dung</Heading>
                    <HStack mt={2} wrap='wrap' spacing={0} columnGap={2} rowGap={1}>
                        <HStack spacing={1}>
                            <Email fontSize='small' />
                            <Text fontWeight='semibold' fontSize='sm'>
                                dungnguyenquang221@gmail.com
                            </Text>
                        </HStack>
                        <HStack spacing={1}>
                            <Phone fontSize='small' />
                            <Text fontWeight='semibold' fontSize='sm'>
                                (+84) 37-716-2315
                            </Text>
                        </HStack>
                    </HStack>
                </div>
                <Image
                    mb={2}
                    alt='avatar'
                    ml={{ base: 'auto', md: 'auto' }}
                    mr={{ base: 'auto', md: '0' }}
                    mt={{ base: '6', md: '0' }}
                    borderRadius='full'
                    border='2px solid white'
                    src='/avatar-cropped.jpg'
                    objectFit='cover'
                    boxSize={{ base: '200px', md: '104px' }}
                />
            </Box>
            <Heading
                mt={3}
                mb={4}
                size='md'
                textUnderlineOffset={6}
                textDecorationColor='#525252'
                textDecorationThickness='4px'
                textDecorationLine={'underline'}
            >
                About me
            </Heading>
            <Text>
                Hello guys and welcome to my litte corner here.
                I am an undergraduated student and currently in my last year at FPT University, where I studies for my Bachelor's
                Degree in Computer Science. For now, I am focusing on web development, especially
                in the front-end section since I love creating gorgeous UI and meaningful UX for users.
                I also have some experience with back-end section though I am not much into it, they are
                just too arid for me 🥲
            </Text>
            <Button
                display='flex'
                ml='auto'
                mr='auto'
                mt={4}
                mb={4}
                colorScheme='teal'
                rightIcon={<ArrowForwardIos sx={{ fontSize: '16px' }} />}
            >
                Download my CV
            </Button>
        </>
    )
}

export default About