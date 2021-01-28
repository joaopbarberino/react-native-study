import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    let greeting = <Text>Hello!</Text>

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>ComponentsScreen</Text>
            <Text>Yo</Text>
            {greeting}

        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    viewStyle: {
        padding: 20
    }
});

export default ComponentsScreen;