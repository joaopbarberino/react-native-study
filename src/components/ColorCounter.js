import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = props => {
    const { colorName, onIncrease, onDecrease } = props;

    return (
        <View>
            <Text style={styles.textStyle}>{colorName}</Text>
            <Button title={`Increase ${colorName}`} onPress={() => onIncrease()} />
            <Button title={`Decrease ${colorName}`} onPress={() => onDecrease()} />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

export default ColorCounter;