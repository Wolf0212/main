import { Button, Heading, Link, List, ListItem } from '@chakra-ui/react'
import { ArrowForwardIos, Facebook, GitHub, Instagram } from '@mui/icons-material'
import React from 'react'

const Social = () => {
    return (
        <>
            <Heading
                mt={6}
                mb={3}
                size='md'
                textUnderlineOffset={6}
                textDecorationColor='#525252'
                textDecorationThickness='4px'
                textDecorationLine={'underline'}
            >
                On the Web
            </Heading>
            <List id='Social'>
                <ListItem>
                    <Link href='https://www.facebook.com/Aeterna212/' target='_blank' _hover={{ textDecoration: 'none' }}>
                        <Button
                            _hover={{
                                textUnderlineOffset: '5px',
                                textDecorationThickness: '2px',
                                textDecorationLine: 'underline',
                            }}
                            ms='-1px'
                            py={1}
                            px={0}
                            colorScheme='teal'
                            variant='link'
                            leftIcon={<Facebook />}
                        >
                            Quang Dung
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href='https://github.com/Wolf1910' target='_blank' _hover={{ textDecoration: 'none' }}>
                        <Button
                            _hover={{
                                textUnderlineOffset: '5px',
                                textDecorationThickness: '2px',
                                textDecorationLine: 'underline',
                            }}
                            ms='-1px'
                            py={1}
                            px={0}
                            colorScheme='teal'
                            variant='link'
                            leftIcon={<GitHub />}
                        >
                            Wolf1910
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href='https://instagram.com/qdung.2001' target='_blank' _hover={{ textDecoration: 'none' }}>
                        <Button
                            _hover={{
                                textUnderlineOffset: '5px',
                                textDecorationThickness: '2px',
                                textDecorationLine: 'underline',
                            }}
                            ms='-1px'
                            py={1}
                            px={0}
                            colorScheme='teal'
                            variant='link'
                            leftIcon={<Instagram />}
                        >
                            @qdung.2001
                        </Button>
                    </Link>
                </ListItem>
            </List>
            <Button
                display='flex'
                ml='auto'
                mr='auto'
                mt={4}
                mb={4}
                colorScheme='teal'
                rightIcon={<ArrowForwardIos sx={{ fontSize: '16px' }} />}
            >
                My Projects
            </Button>
        </>
    )
}

export default Social