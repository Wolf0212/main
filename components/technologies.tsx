import { Badge, Box, chakra, Heading, SimpleGrid, Text, useColorModeValue, useMediaQuery } from '@chakra-ui/react'
import { isValidMotionProp, motion, Variants } from 'framer-motion';
import React from 'react'

const Technologies = () => {
    const ChakraBox = chakra(motion.div, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
    });

    const [isPhone] = useMediaQuery('(max-width: 992px)');

    const backgroundColor = useColorModeValue('#FFFFFF', '#464646');

    const lineColor = useColorModeValue('#319795', '#81E6D9');

    const frontFace: Variants = {
        initial: {
            width: '100%',
            height: '100%',
            backgroundColor: backgroundColor,
            borderRadius: '8px',
            transition: {
                duration: .5,
                type: 'tween'
            }
        },
        hover: {
            height: '2%',
            backgroundColor: lineColor,
            borderRadius: '0px 0px 8px 8px',
            transition: {
                duration: '.5'
            }
        }
    }

    const img: Variants = {
        initial: {
            opacity: 1
        },
        hover: {
            opacity: 0
        }
    }

    return (
        <>
            <Heading
                mt={6}
                mb={4}
                size='md'
                textUnderlineOffset={6}
                textDecorationColor='#525252'
                textDecorationThickness='4px'
                textDecorationLine={'underline'}
            >
                Technologies
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} gridGap='16px'>
                <ChakraBox
                    className='card'
                    w='full'
                    h={72}
                    borderRadius='lg'
                    position='relative'
                    initial='initial'
                    whileHover='hover'
                    whileInView={
                        isPhone ? 'hover' : ''
                    }
                    animate='initial'
                    shadow='lg'
                >
                    <Box
                        className='back-face'
                        bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.300')}
                        p={4}
                        h='full'
                        borderRadius='inherit'
                    >
                        <Badge bg='#42cdff' variant='solid' px={2} py={1}>
                            <Heading fontSize='xl'>
                                React
                            </Heading>
                        </Badge>
                        <Text>
                            I love React for its component-based concept which makes
                            my code much cleaner and easier to reuse, and
                            also for its huge community which offer tons of useful
                            frameworks and libraries to work with.
                        </Text>
                    </Box>
                    <ChakraBox
                        className='front-face'
                        bottom='0'
                        position='absolute'
                        variants={frontFace}
                        overflow='hidden'
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <motion.img style={{ maxWidth: '144px', maxHeight: '144px' }} src='/react.png' alt='tech-img' variants={img} animate={{ rotate: 360, transition: { repeat: Infinity, duration: 5, ease: 'linear' } }} />
                    </ChakraBox>
                </ChakraBox>
                <ChakraBox
                    className='card'
                    w='full'
                    h={72}
                    borderRadius='lg'
                    position='relative'
                    initial='initial'
                    whileHover='hover'
                    whileInView={
                        isPhone ? 'hover' : ''
                    }
                    animate='initial'
                    shadow='lg'
                >
                    <Box
                        className='back-face'
                        bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.300')}
                        p={4}
                        h='full'
                        borderRadius='inherit'
                    >
                        <Badge bg='#5034d2' variant='solid' px={2} py={1}>
                            <Heading fontSize='xl'>
                                .NET
                            </Heading>
                        </Badge>
                        <Text>
                            .NET framework is my choice of specialization in my University. I choose this framework because
                            of its support for langugage interoperability and also for its well-written documentation.
                        </Text>
                    </Box>
                    <ChakraBox
                        className='front-face'
                        bottom='0'
                        position='absolute'
                        variants={frontFace}
                        overflow='hidden'
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <motion.img
                            style={{ maxWidth: '144px', maxHeight: '144px', borderRadius: '50%' }}
                            src='/dotnet.png' alt='tech-img' variants={img}
                        />
                    </ChakraBox>
                </ChakraBox>
                <ChakraBox
                    className='card'
                    w='full'
                    h={72}
                    borderRadius='lg'
                    position='relative'
                    initial='initial'
                    whileHover='hover'
                    whileInView={
                        isPhone ? 'hover' : ''
                    }
                    animate='initial'
                    shadow='lg'
                >
                    <Box
                        className='back-face'
                        bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.300')}
                        p={4}
                        h='full'
                        borderRadius='inherit'
                    >
                        <Badge bg='#e06e00' variant='solid' px={2} py={1}>
                            <Heading fontSize='xl'>
                                Java
                            </Heading>
                        </Badge>
                        <Text>
                            I use Java to learn basic knowledge about programming such as
                            data structures, algorithmms, OOP, etc. I also have some knowledge of
                            building Java Web with Jsp and Servlet.
                        </Text>
                    </Box>
                    <ChakraBox
                        className='front-face'
                        bottom='0'
                        position='absolute'
                        variants={frontFace}
                        overflow='hidden'
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <motion.img
                            style={{ maxWidth: '144px', maxHeight: '144px', borderRadius: '50%' }}
                            src='/java.png' alt='tech-img' variants={img}
                        />
                    </ChakraBox>
                </ChakraBox>
            </SimpleGrid>
        </>
    )
}

export default Technologies