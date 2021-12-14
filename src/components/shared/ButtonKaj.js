import React from 'react';
import { Text,StyleSheet, TouchableOpacity } from 'react-native';
import Iconarrow from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';

const ButtonKaj = ({onPress}) => {
    return (

        // ********create btn kaj*********
        <TouchableOpacity style={styles.box } onPress={onPress}>
            <Text style={styles.text}>Order Now</Text>
            <Iconarrow name="arrowright" color="#000" size={hp('4%')} />
        </TouchableOpacity>
    )

}
export default ButtonKaj;
const styles = StyleSheet.create({

    box: {
        height:hp('6%'),
        width: wp('50%'),
        borderRadius: 17,
        flexDirection: 'row',
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-evenly",
        transform: [{ perspective: 200 }, { rotateY: '25deg' }]
    },
    text: {
        fontSize: hp('2.5%'),
        // fontWeight: "bold",
        color: "#000",
        textAlign: "center"
    }
})