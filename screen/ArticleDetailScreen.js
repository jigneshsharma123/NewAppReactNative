import React from 'react';
import { View, Text } from 'react-native';

const ArticleDetailScreen = ({ route }) => {
  const { article } = route.params;

  return (
    <View>
      <Text>Title: {article.title}</Text>
      <Text>Content: {article.content}</Text>
      <Text>Author: {article.author}</Text>
      <Text>Publication Date: {article.publicationDate}</Text>
    </View>
  );
};

export default ArticleDetailScreen;
