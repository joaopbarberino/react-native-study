import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.viewStyle}>
            <Text>Current Count: {counter}</Text>
            <Button
                title='Increase'
                onPress={() => setCounter(counter + 1)}
            />
            <Button
                title='Decrease'
                onPress={() => setCounter(counter - 1)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        padding: 20
    }
});

export default CounterScreen;