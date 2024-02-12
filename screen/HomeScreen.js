import React from 'react';
import { NativeBaseProvider, Center, View, Box, Heading, TouchableOpacity, Text, Image, FlatList } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const articles = [

    {
   
    id: '1',
   
    title: 'Headline of the First Article',
   
    summary: 'Summary of the first article...',
   
    content: 'Full content of the first article...',
   
    author: 'Author Name',
   
    publishedDate: '2024-02-01',
   
    imageUrl: 'https://example.com/path-to-image.jpg',
   
    },
   
    // Add more articles
   
   ];
   
   
const HomeScreen = ({ articles }) => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ArticleDetails', { article: item })}>
            <Box bg="gray.100" p={4} mb={4} borderRadius={8}>
                <Heading size="md" mb={2}>{item.title}</Heading>
                <Text fontSize="sm" mb={2}>{item.description}</Text>
                <Image source={{ uri: item.image }} alt="Article Image" size="sm" mb={2} resizeMode="cover" borderRadius={8} />
                <Text fontSize="xs" color="gray.500">{item.publishedAt}</Text>
            </Box>
        </TouchableOpacity>
    );

    return (
        <NativeBaseProvider>
            <View p={4}>
                <Center>
                    <Heading mb={4}>Demo of the App</Heading>
                </Center>
                <FlatList
                    data={articles}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </NativeBaseProvider>
    );
};

export default HomeScreen;
