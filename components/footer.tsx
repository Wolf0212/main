import { Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <Text fontSize='sm' opacity='0.4' textAlign='center' mt={4}>
            &copy; {new Date().getFullYear()} Nguyen Quang Dung. All Rights Reserved.
        </Text>
    )
}

export default Footer