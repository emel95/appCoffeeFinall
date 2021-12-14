import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { View, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';
const CardTopDaste = ({ navigation, nameButton, onPress }) => {


    switch (nameButton) {
        // case 'Ice':
        //     ()
        //     break;
        // case 'Coffee':
        // case 'Cake':
        // case 'Shake':
        // default:
        //     break;
    }


    return (

        // ***** card top in page daste ******

        // <View style={styles.card}>

        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Text style={styles.txt}>{nameButton}</Text>
        </TouchableOpacity>

        // </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: wp('2%'),
        width: wp('20%'),
        height: hp('8%'),
        //padding:hp('1'),
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a96909'
    },
    txt: {
        color: '#fff',
        fontSize: hp('2.5%'),
        fontWeight: 'bold'
    }
})
export default CardTopDaste;

