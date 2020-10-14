//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GlobalDataContext from '../../data/global/globalContext';

// create a component
const UserProfileScreen = () => {

    const navigation = useNavigation()
    const globalContext =  useContext(GlobalDataContext)

    function logout(){
        globalContext.token.setValue(undefined)

        console.log(globalContext, 'gc')

        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <Text>Log out</Text>
            <TouchableOpacity onPress={logout}>
                <View>
                    <Text>
                        Log out
                    </Text>
                </View>
            </TouchableOpacity>
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
export default UserProfileScreen;
