import React, { useState } from 'react'
import { Box, Container, Flex, Heading, HStack, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, useColorModeValue } from '@chakra-ui/react'
import { Info, MenuOutlined, Storage } from '@mui/icons-material';
import ToggleButton from './toggle';
import NextLink from 'next/link';
import Logo from './logo';
import NavItem from './navItem';

const Navbar = () => {
    const [selected, setSelected] = useState(0);
    return (
        <Box
            as='nav'
            position='fixed'
            top='0'
            w='100%'
            p={3}
            bg={useColorModeValue('whiteAlpha.50', '#20202310')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
        >
            <Container maxW='container.md' w='100%'>
                <Flex alignItems='center'>
                    <NextLink href='/' passHref>
                        <Link mr={5} _hover={{ textDecoration: 'none' }} onClick={() => setSelected(0)}>
                            <HStack>
                                <Logo />
                                <Heading fontSize='18px'>
                                    Welcome!
                                </Heading>
                            </HStack>
                        </Link>
                    </NextLink>
                    {/* For desktop browsers */}
                    <HStack flexGrow={1} spacing={5} display={{ base: 'none', md: 'flex' }}>
                        <NavItem text='Projects' selected={selected === 2} onClick={() => setSelected(2)} />
                    </HStack>
                    <HStack gap='4px' ml='auto'>
                        <ToggleButton />
                        {/* For mobile devices */}
                        <Box
                            display={{ base: 'inline-block', md: 'none' }}
                        >
                            <Menu>
                                <MenuButton
                                    as={IconButton}
                                    aria-label='Options'
                                    icon={<MenuOutlined />}
                                />
                                <MenuList>
                                    <MenuItem icon={<Info />}>
                                        About me
                                    </MenuItem>
                                    <MenuItem icon={<Storage />}>
                                        My projects
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    </HStack>
                </Flex>
            </Container>
        </Box >
    )
}

export default Navbar