import { useNavigation } from '@react-navigation/native';
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import VideoCard from '../../components/cards/video/videoCard';

// create a component
const VideoCenterScreen = () => {
    const navigation = useNavigation()

    function navigateToPage(){
        navigation.navigate('VideoPlayerScreen')
    }
    return (
        <View style={styles.container}>
            <Text>VideoCenterScreen</Text>
            <TouchableHighlight onPress={navigateToPage}>
                <View>
                    <Text>
                    Go To Individual Video
                    </Text>
                </View>
            </TouchableHighlight>
            <VideoCard>

            </VideoCard>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default VideoCenterScreen;
