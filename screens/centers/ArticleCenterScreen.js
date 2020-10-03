//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ArticleCard from '../../components/cards/articles/ArticleCard';

// create a component
const ArticleCenterScreen = () => {
    return (
        <View style={styles.container}>
            <Text>ArticleCenterScreen</Text>
            <ArticleCard></ArticleCard>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ArticleCenterScreen;
