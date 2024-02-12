import React from 'react';
import { NativeBaseProvider, Box, Center, Heading, Button } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

const LandingPage = ({ navigation }) => {
    const navigateToNews = () => {
        navigation.navigate('Home');
    };

    return (
        <NativeBaseProvider>
            <Box flex={1} justifyContent="center">
                <LinearGradient
                    colors={['#FFD700', '#FFA500']}
                    style={{ flex: 1 }}
                >
                    <Center flex={1}>
                        <Heading size="4xl" color="cyan.800" mb={8}>
                            BharatNews
                        </Heading>
                        <Button
                            onPress={navigateToNews}
                            size="md"
                            variant="outline"
                            colorScheme="white"
                            _text={{ color: 'white', fontSize: "25px" }}
                            _pressed={{ opacity: 0.6 }}
                            width="80%"
                            height={55}
                        >
                            Get Started
                        </Button>
                    </Center>
                </LinearGradient>
            </Box>
        </NativeBaseProvider>
    );
};

export default LandingPage;
