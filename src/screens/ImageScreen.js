import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title='Killua' imageSource={require('../../assets/killua.jpeg')}/>
            <ImageDetail title='Luffy' imageSource={require('../../assets/luffy.jpeg')}/>
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageScreen;