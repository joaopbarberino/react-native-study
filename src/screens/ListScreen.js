import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1' },
        { name: 'Friend #2' },
        { name: 'Friend #3' },
        { name: 'Friend #4' },
        { name: 'Friend #5' },
        { name: 'Friend #6' },
        { name: 'Friend #7' },
        { name: 'Friend #8' },
        { name: 'Friend #9' },
    ];

    return (
        <View>
            <Text> Friends! :D </Text>
            <FlatList
                // horizontal
                // showsHorizontalScrollIndicator={false}
                keyExtractor={friend => friend.name}
                data={friends}
                renderItem={({ item, index }) => {
                    return <Text style={styles.textStyle}>{item.name}</Text>
                }}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10
    }
});

export default ListScreen;