import React from 'react'
import { motion } from 'framer-motion'
import { Text, useColorModeValue } from '@chakra-ui/react'

const Rocket = () => {
    return (
        <Text
            fontWeight='semibold'
            as='div'
            display='flex'
            rounded={'lg'} p={3} my={6}
            width='100%'
            gap={1}
            justifyContent='center'
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            shadow="md"
            overflow='visible'
        >
            Wish you have a nice day!
            <motion.div
                animate={{
                    y: [-5, 5, -5]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
            >
                🚀
            </motion.div>
        </Text>

    )
}

export default Rocket