import React, { useEffect, useState } from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';
import { Box, Heading, Text, Image, Center } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const SavedArticles = () => {
    const [savedArticles, setSavedArticles] = useState([]);

    useEffect(() => {
        const fetchSavedArticles = async () => {
            try {
                // Retrieve saved articles from AsyncStorage
                const savedArticlesJson = await AsyncStorage.getItem('savedArticles');
                if (savedArticlesJson) {
                    const savedArticles = JSON.parse(savedArticlesJson);
                    setSavedArticles(savedArticles);
                }
            } catch (error) {
                console.error('Error fetching saved articles:', error);
            }
        };

        fetchSavedArticles();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <Heading mt={4} mb={2} textAlign="center">Saved Articles</Heading>
                {savedArticles.length > 0 ? (
                    savedArticles.map(article => (
                        <Box key={article.id} bg="white" p={4} mb={4} borderRadius={8} shadow={2}>
                            <Image source={{ uri: article.imageUrl }} alt="Article Image" size="lg" mb={4} borderRadius={8} />
                            <Center>
                                <Heading size="md" mb={2}>{article.title}</Heading>
                                <Text fontSize="sm" color="gray.500" mb={2}>{article.author} | {article.publishedDate}</Text>
                                <Text fontSize="md" mb={2}>{article.summary}</Text>
                            </Center>
                        </Box>
                    ))
                ) : (
                    <Center>
                        <Text>No saved articles</Text>
                    </Center>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default SavedArticles;
