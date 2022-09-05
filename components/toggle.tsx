import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { DarkMode, LightMode } from '@mui/icons-material';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'

const ToggleButton = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const toggleMode = () => {
        toggleColorMode();
        localStorage.setItem('chakra-ui-color-mode', colorMode === 'dark' ? 'light' : 'dark');
    }
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                key={useColorModeValue('light', 'dark')}
                initial={{ rotateY: -90 }}
                animate={{ rotateY: 0 }}
                exit={{ rotateY: 90 }}
                transition={{ duration: 0.2 }}
            >
                <IconButton
                    aria-label='toggle-mode'
                    colorScheme={useColorModeValue('purple', 'orange')}
                    icon={useColorModeValue(<DarkMode color='inherit' />, <LightMode color='inherit' />)}
                    onClick={toggleMode}
                />
            </motion.div>
        </AnimatePresence>

    )
}

export default ToggleButton