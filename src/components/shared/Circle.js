import React from 'react';
import { View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';
const Circle = ({ children }) => {
    return (

        // create cicle card
        <View style={styles.card}>
            {children}
        </View>
    );
}
export default Circle;

const styles = StyleSheet.create({
    card: {
        width: wp('38%'),
        height: hp('20%'),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Math.round(wp('38%') + hp('20%')) / 2,
        backgroundColor: "white",

        shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        // },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,

    }
})
