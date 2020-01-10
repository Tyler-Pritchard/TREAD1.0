import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
    return <Text style={Styles.textStyle}>Here's the components Screen</Text>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});


export default ComponentsScreen;