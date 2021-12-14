import React from 'react';
import { View, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
 from 'react-native-responsive-screen';
const CustomHeader = ({children}) => {
    return (

        // *********Header custom in page home*********
        <View style={styles.card}>
            {children}
        </View>
    );
}
export default CustomHeader;

const styles = StyleSheet.create({
    card: {
        height: hp('50%'),
        width: wp('100%'),
        borderBottomStartRadius: 170,
        backgroundColor: "#a75b3b",
        

    }
})