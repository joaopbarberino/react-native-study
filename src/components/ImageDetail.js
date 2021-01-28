import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = props => {
    const { title, imageSource } = props;
    
    return (
        <View>
            <Image source={imageSource} />
            <Text>{title}</Text>    
        </View>
    ) 
    
};

const styles = StyleSheet.create({});

export default ImageDetail;