//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import authCardStyles from '../cards/auth/styles';

// create a component
const TextButtonSeparator = () => {
    return (
        <View style={authCardStyles.buttonSeparatorTextContainer}>
            <Text style={authCardStyles.buttonSeparatorText}>Or</Text>
        </View>
    );
};

//make this component available to the app
export default TextButtonSeparator;
