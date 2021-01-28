import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import ColorCounter from '../components/ColorCounter';

const COLOR_INC = 5;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    console.log(red, green, blue);

    const setColor = (colorValue, changeValue, setter) => {
        // Ternary version
        // colorValue + changeValue < 0 || colorValue + changeValue > 255 ? null : setter(colorValue + changeValue);
        
        if (colorValue + changeValue < 0 || colorValue + changeValue > 255) {
            return;
        }

        setter(colorValue + changeValue);
    };

    return (
        <View>
            <ColorCounter
                colorName='Red'
                onIncrease={() => setColor(red, COLOR_INC, setRed)}
                onDecrease={() => setColor(red, COLOR_INC * -1, setRed)}
            />
            <ColorCounter
                colorName='Green'
                onIncrease={() => setColor(green, COLOR_INC, setGreen)}
                onDecrease={() => setColor(green, COLOR_INC * -1, setGreen)}
            />
            <ColorCounter
                colorName='Blue'
                onIncrease={() => setColor(blue, COLOR_INC, setBlue)}
                onDecrease={() => setColor(blue, COLOR_INC * -1, setBlue)}
            />
            <Text style={styles.textStyle}>Current color: RGB({red},{green},{blue})</Text>

            <View style={{ height: '100%', width: '100%', backgroundColor: `rgb(${red},${green},${blue})` }} />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

export default SquareScreen;