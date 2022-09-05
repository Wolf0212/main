import { Badge, Box, Grid, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Layout from "../components/layout";

const Project: NextPage = () => {
    return (
        <Layout>
            <Heading
                mt={3}
                mb={4}
                size='md'
                textUnderlineOffset={6}
                textDecorationColor='#525252'
                textDecorationThickness='4px'
                textDecorationLine={'underline'}
            >
                Projects
            </Heading>
            <Text mb={4}>
                This place is for showcasing pet projects, assignments in my university and
                some works from my internship which I think will better explain my skills and
                capability.
            </Text>
            <SimpleGrid columns={[1, 2]} gridGap='24px'>
                <Box>
                    <Image src='/onlyfunds.png' mb={3} rounded='lg' shadow='md' />
                    <Text fontSize='md' textAlign='center'>
                        OnlyFunds
                        <Badge colorScheme='green' ml={1} >Assignment</Badge>
                    </Text>
                    <Text fontSize='sm' fontWeight='light'>
                        A platform for creators to create and share their works with others and make profits
                        from them.
                    </Text>
                </Box>
                <Box>
                    <Image src='/onlyfunds.png' mb={3} rounded='lg' shadow='md' />
                    <Text fontSize='md' textAlign='center'>
                        Startup Competition Matching
                        <Badge colorScheme='red' ml={1} >Works</Badge>
                    </Text>
                    <Text fontSize='sm' fontWeight='light'>
                        An internal website for students of University of Economics and Law (UEL) to register and find teammates
                        for their startup projects.
                    </Text>
                </Box>
                <Box>
                    <Image src='/onlyfunds.png' mb={3} rounded='lg' shadow='md' />
                    <Text fontSize='md' textAlign='center'>
                        コーヒー Store
                        <Badge colorScheme='green' ml={1} >Assignment</Badge>
                    </Text>
                    <Text fontSize='sm' fontWeight='light'>
                        A website mimic a POS machine utilizing ASP.NET and Razor Pages. This website also supports
                        basic stocks handling and monitoring.
                    </Text>
                </Box>
            </SimpleGrid>
        </Layout >
    )
}

export default Project