import { useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'

const Logo = () => {
    return (
        <motion.img
            style={{ margin: '4px' }}
            src={`/pawn${useColorModeValue('', '-dark')}.png`}
            width='24px'
            height='24px'
            alt='pawn-animate'
            animate={{
                rotate: [-20, 60, -20],
                transition: {
                    duration: 2,
                    repeat: Infinity
                }
            }}
        />
    )
}

export default Logo