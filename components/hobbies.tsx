import { Heading, HStack, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react'
import { Headset, Laptop, MenuBook, Public, SportsEsports, SportsKabaddi } from '@mui/icons-material'
import React from 'react'

const Hobbies = () => {
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
                Things I ❤️
            </Heading>
            <HStack flexWrap='wrap' gap={2} spacing={0}>
                <Tag size='lg' variant='solid' colorScheme='teal'>
                    <TagLeftIcon boxSize='16px'>
                        <SportsKabaddi />
                    </TagLeftIcon>
                    <TagLabel>Judo</TagLabel>
                </Tag>
                <Tag size='lg' variant='solid' colorScheme='teal'>
                    <TagLeftIcon boxSize='16px'>
                        <SportsEsports />
                    </TagLeftIcon>
                    <TagLabel>Video Games</TagLabel>
                </Tag>
                <Tag size='lg' variant='solid' colorScheme='teal'>
                    <TagLeftIcon boxSize='16px'>
                        <Laptop />
                    </TagLeftIcon>
                    <TagLabel>Coding</TagLabel>
                </Tag>
                <Tag size='lg' variant='solid' colorScheme='teal'>
                    <TagLeftIcon boxSize='16px'>
                        <MenuBook />
                    </TagLeftIcon>
                    <TagLabel>Reading</TagLabel>
                </Tag>
                <Tag size='lg' variant='solid' colorScheme='teal'>
                    <TagLeftIcon boxSize='16px'>
                        <Public />
                    </TagLeftIcon>
                    <TagLabel>Traveling</TagLabel>
                </Tag>
                <Tag size='lg' variant='solid' colorScheme='teal'>
                    <TagLeftIcon boxSize='16px'>
                        <Headset />
                    </TagLeftIcon>
                    <TagLabel>Listening to Music</TagLabel>
                </Tag>
            </HStack>
        </>
    )
}

export default Hobbies