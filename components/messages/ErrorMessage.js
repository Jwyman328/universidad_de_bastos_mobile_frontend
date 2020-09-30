
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const ErrorMessage = ({errorMessage}) => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.errorText}>*{errorMessage}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: .4,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#2c3e50',
        width:'100%',
        marginBottom: 15,
    },
    errorText: {
        color:'white',
        fontSize:15,
    }
});

//make this component available to the app
export default ErrorMessage;
