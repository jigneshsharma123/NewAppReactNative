import React, { useState } from 'react';
import { FlatList, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Box, Heading, Text, Image, Center, Input, Icon, View, HStack, Pressable } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const articles = [
    {
        category: "Technology",
        title: "The Latest Advancements in Artificial Intelligence",
        summary: "Discover the groundbreaking developments and applications of AI technology in various industries.",
        author: "John Smith",
        content: "(Image credit: Android Central) In this weekly column, Android Central Fitness Editor Michael Hicks talks about the world of wearables, apps, and fitness tech related to running and health, in his I never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in trouble",

        publishedDate: "2024-02-12",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        category: "Sports",
        title: "Top 10 Moments of the Olympic Games",
        summary: "Relive the most memorable moments from the recent Olympic Games, from record-breaking performances to inspiring stories of triumph.",
        author: "Sarah Johnson",
        content: "(Image credit: Android Central) In this weekly column, Android Central Fitness Editor Michael Hicks talks about the world of wearables, apps, and fitness tech related to running and health, in his I never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in trouble",

        publishedDate: "2024-02-10",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        category: "Politics",
        title: "Recent Political Developments in Global Diplomacy",
        summary: "Explore the latest geopolitical shifts and diplomatic negotiations shaping the world stage.",
        author: "David Williams",
        content: "(Image credit: Android Central) In this weekly column, Android Central Fitness Editor Michael Hicks talks about the world of wearables, apps, and fitness tech related to running and health, in his I never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in trouble",

        publishedDate: "2024-02-11",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        category: "Entertainment",
        title: "Behind the Scenes of the Year's Biggest Blockbuster",
        summary: "Go behind the scenes of the making of the latest Hollywood blockbuster, from casting decisions to special effects.",
        author: "Emily Brown",
        content: "(Image credit: Android Central) In this weekly column, Android Central Fitness Editor Michael Hicks talks about the world of wearables, apps, and fitness tech related to running and health, in his I never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in trouble",

        publishedDate: "2024-02-09",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: '1',
        title: "I never expected to love the Apple Watch Ultra 2 so much, and now I'm in trouble",
        summary: "I've tested the Apple Watch Ultra 2 for the past few months, and it's changed what I want from smartwatches. Worse, it's made me a fan of the squircle.",
        content: "(Image credit: Android Central) In this weekly column, Android Central Fitness Editor Michael Hicks talks about the world of wearables, apps, and fitness tech related to running and health, in his I never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in troubleI never expected to love the Apple Watch Ultra 2 so much, and now I'm in trouble",
        author: "Michael L Hicks",
        publishedDate: "2024-02-11T16:00:44Z",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/7q5yJcsk6PYvebMfKdcLpR-1200-80.jpeg",
    },
    {
        id: '2',
        title: "Apple Vision Pro Could Take Four Generations to Reach 'Ideal Form'",
        summary: "Realizing the Apple Vision Pro headset's \"ideal form\" could take four successive generations of the device, some people in Apple's Vision Products Group believe. That's according to well-connected Bloomberg reporter Mark Gurman.",
        content: "Realizing the Apple Vision Pro headset's \"ideal form\" could take four successive generations of the device, some people in Apple's Vision Products Group believe. That's according to well-connected Bl… [+1869 chars]",
        author: "Tim Hardwick",
        publishedDate: "2024-02-11T14:48:14Z",
        imageUrl: "https://images.macrumors.com/t/I55gBLWK0Trxh_VWrZmLbW80ZYI=/1600x/article-new/2023/06/Apple-Vision-Pro-at-Steve-Jobs-Theater.jpeg",
    },
    {
        id: '3',
        title: "I tried working a full day wearing Apple's Vision Pro. It's the ultimate WFH device.",
        summary: "Apple's Vision Pro could be a game changer for remote workers who like to multitask while they work from home.",
        content: "WFH jobs are going to get more fun with the Apple Vision Pro if you can afford the $3,500 price tag.Jordan Hart/BI<ul><li>I tried working from home using the Apple Vision Pro on Wednesday.</li><li>… [+2290 chars]",
        author: "Jordan Hart",
        publishedDate: "2024-02-11T10:47:01Z",
        imageUrl: "https://i.insider.com/65c674f1917a1dae024521a1?width=1200&format=jpeg",
    },
    {
        id: '4',
        title: "The Vision Pro's scary side effect",
        summary: "Apple's new VR goggles are really cool. But they may rewire our brains in some unexpected — and scary — ways.",
        content: "Apple; Mike Kemp/In Pictures via Getty Images; Alyssa Powell/BI The reviews are in, and the tech press  is lauding the Apple Vision Pro headset  for delivering on the company's promises. It's well… [+10246 chars]",
        author: "Adam Rogers",
        publishedDate: "2024-02-11T10:55:01Z",
        imageUrl: "https://i.insider.com/65c5358e43bb77284ba50fb4?width=1200&format=jpeg",
    },
    {
        id: '5',
        title: "Llevo más de 20 años analizando las mejores teles del mercado. Ahora he probado las Vision Pro y para cine me han enamorado",
        summary: "Mis expectativas antes de probar las gafas de realidad mixta de Apple eran muy moderadas. Mi experiencia con otros dispositivos de realidad virtual o realidad aumentada hasta ahora no ha sido totalmente satisfactoria, entre otras razones, porque me mareo con …",
        content: "Mis expectativas antes de probar las gafas de realidad mixta de Apple eran muy moderadas. Mi experiencia con otros dispositivos de realidad virtual o realidad aumentada hasta ahora no ha sido totalme… [+5165 chars]",
        author: "Juan Carlos López",
        publishedDate: "2024-02-11T11:01:00Z",
        imageUrl: "https://i.blogs.es/3c07a0/applevisionpro/840_560.jpeg",
    }
];

// Define category options
const categories = ['All', 'Technology', 'Sports', 'Politics', 'Entertainment'];

const HomeScreen = ({ navigation }) => {
    // State for search text
    const [searchText, setSearchText] = useState('');

    // State for selected category
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Get window width for responsive design
    const windowWidth = useWindowDimensions().width;

    // Filter articles based on search text and selected category
    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchText.toLowerCase()) &&
        (selectedCategory === 'All' || article.category === selectedCategory)
    );

    // Render each article item
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ArticleDetail', { article: item })}>
            <Box bg="white" p={4} mb={4} borderRadius={8} shadow={2}>
                <Image source={{ uri: item.imageUrl }} alt="Article Image" size="lg" mb={4} borderRadius={8} />
                <Heading size="md" mb={2}>{item.title}</Heading>
                <Text fontSize="sm" color="gray.500" mb={2}>{item.author} | {item.publishedDate}</Text>
                <Text fontSize="md" mb={2}>{item.summary}</Text>
            </Box>
        </TouchableOpacity>
    );

    // Navigate to saved articles screen
    const navigateToSavedArticles = () => {
        navigation.navigate('SavedArticles');
    };

    return (
        <Center flex={1} p={4} bg="gray.100" mt={10}>
            {/* Search bar */}
            <View flexDirection="row" alignItems="center" mb={4}>
                <Icon
                    as={<MaterialIcons name="search" />}
                    size="sm"
                    color="gray.400"
                    mr={2}
                />
                <Input
                    flex={1}
                    placeholder="Search articles..."
                    value={searchText}
                    onChangeText={text => setSearchText(text)}
                    variant="filled"
                />
            </View>

            {/* Category filter */}
            <HStack flexWrap="wrap">
                {categories.map(category => (
                    <Pressable
                        key={category}
                        onPress={() => setSelectedCategory(category)}
                        bg={selectedCategory === category ? 'blue.500' : 'gray.200'}
                        px={4}
                        py={2}
                        mb={4} // Add vertical space here
                        borderRadius={9999}
                        minWidth={windowWidth * 0.2} // Adjust the width based on screen size
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Text color={selectedCategory === category ? 'white' : 'gray.800'}>
                            {category}
                        </Text>
                    </Pressable>
                ))}
            </HStack>

            {/* List of articles */}
            <FlatList
                data={filteredArticles}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            {/* Button to navigate to saved articles */}
            <TouchableOpacity onPress={navigateToSavedArticles} style={{ position: 'absolute', bottom: 20, right: 20 }}>
                <Text style={{ color: 'blue' }}>Go to Saved Articles</Text>
            </TouchableOpacity>
        </Center>
    );
};

export default HomeScreen;