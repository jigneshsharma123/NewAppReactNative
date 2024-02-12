import React from 'react';
import { ScrollView, SafeAreaView, Share } from 'react-native';
import { Box, Heading, Text, Image, Center, IconButton } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const ArticleDetailScreen = ({ route }) => {
    const { article } = route.params;
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }

    const shareArticle = async () => {
        try {
            await Share.share({
                message: article.content,
            });
        } catch (error) {
            console.error(error.message);
        }
    };

    
    return (
        <SafeAreaView style={{ flex: 1, marginTop: 50 }} >
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }} p={4} bg="gray.100">

                <IconButton
                    variant="ghost"
                    onPress={goBack}
                    icon={<Ionicons name="arrow-back" size={24} color="#fff" />}
                    position="absolute"
                    top={0}
                    left={0}
                    ml={4}
                    mt={4}
                    bgColor={'blueGray.500'}
                    width={50}
                    height={50}
                    borderRadius={100}
                />

                <Center>
                    <Heading mt={20} size="lg" color="black" fontWeight={'bold'}>{article.title}</Heading>
                    <Text fontSize="sm" color="gray.500" mb={2}>{article.author} | {article.publishedDate}</Text>
                </Center>

                <Center>
                    <Image source={{ uri: article.imageUrl }} alt="Article Image" width="100%" size="xl" resizeMode="cover" borderRadius={8} />
                </Center>

                <Box bg="white" p={4} borderRadius={8} shadow={2} mt={4}>
                    <Text>{article.content}</Text>
                </Box>

            </ScrollView>

            <IconButton
                variant="solid"
                onPress={shareArticle}
                icon={<Ionicons name="share" size={24} color="#fff" />}
                bg="teal.500"
                position="absolute"
                bottom={4}
                right={4}
            />

        
        </SafeAreaView>
    );
};

export default ArticleDetailScreen;

