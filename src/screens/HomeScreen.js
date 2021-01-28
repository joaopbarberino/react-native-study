import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Touchable } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Home Screen</Text>
      <Button
        style={styles.buttonStyle}
        title='Go to Components Demo'
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        style={styles.buttonStyle}
        title='Go to List Demo'
        onPress={() => navigation.navigate('List')}
      />
      <Button
        style={styles.buttonStyle}
        title='Go to Image Demo'
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        style={styles.buttonStyle}
        title='Go to Counter Demo'
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        style={styles.buttonStyle}
        title='Go to Color Demo'
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        style={styles.buttonStyle}
        title='Go to Square Demo'
        onPress={() => navigation.navigate('Square')}
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  )
};

const styles = StyleSheet.create({
  viewStyle: {
    padding: 15
  },
  textStyle: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20
  },
  buttonStyle: {
    marginBottom: 10,
    color: 'red'
  }
});

export default HomeScreen;
