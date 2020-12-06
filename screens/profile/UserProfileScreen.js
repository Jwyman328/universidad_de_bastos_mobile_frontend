//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import logOutUser from '../../redux/actions/user/logOutUser';

// create a component
const UserProfileScreen = () => {

    const dispatch = useDispatch()

    const navigation = useNavigation()

    function logout(){
        //set all data to null
        dispatch(logOutUser())
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
