import React from 'react'
import { motion } from 'framer-motion'
import { Link } from '@chakra-ui/react'
import NextLink from 'next/link';


const NavItem = ({ text, selected, onClick }: { text: string, selected: boolean, onClick: () => void }) => {

    return (
        <motion.div onClick={onClick}
            animate={{ opacity: selected ? 1 : 0.5 }}
            style={{ position: 'relative' }}
        >
            <NextLink href={`/${text.toLocaleLowerCase()}`} passHref>
                <Link _hover={{ textDecoration: 'none' }}>
                    {text}
                    {selected && (
                        <motion.div
                            className='underline'
                            layoutId='underline'
                            style={{
                                width: '100%',
                                position: 'absolute',
                                height: '2px',
                                backgroundColor: '#525252',
                            }}
                        />
                    )}
                </Link>
            </NextLink>

        </motion.div>
    )
}

export default NavItem