import React from 'react';
import { View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';

const Card = ({ children }) => {
    return (
        //******card moraba ba width and heghit delkhah*******
        <View style={styles.card}>
            {children}
        </View>
    );
}
export default Card;

const styles = StyleSheet.create({
    card: {
       
        paddingBottom:hp('3%'),
        paddingTop:hp('17%'),
        paddingHorizontal:wp('5%'),
        borderRadius: 15,
        backgroundColor: "white",
        alignItems:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        // marginBottom:20,
        //overflow:"hidden",
    }
})
