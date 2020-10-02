//import liraries
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainHeader from '../../components/headers/MainHeader';
import GlobalDataContext from '../../data/global/globalContext';

// create a component
const HomepageScreen = () => {
    const globalContext = useContext(GlobalDataContext)
    const token = globalContext.token.value
    return (
        <View style={styles.container}>
            <MainHeader></MainHeader>
            <Text>{token}</Text>
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
export default HomepageScreen;
