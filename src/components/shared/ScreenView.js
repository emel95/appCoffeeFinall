import React from 'react';
import { View, StyleSheet } from 'react-native';

const ScreenView = ({ children, style }) => {
    return (

        //******screen for fasle az tolbar in all page*******
        <View style={[styles.screen, style]}>
            {children}
        </View>
    );
}
export default ScreenView;

const styles = StyleSheet.create({
    screen: {
        //marginTop:100,
        flex: 1,
    }
})
