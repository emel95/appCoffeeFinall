import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';


const CardNewsHorintalSmall = ({ image, title, price }) => {
    return (

        //****cardHorizntal amall for home ***** 
        <View style={styles.card}>

            {/* image */}
            <Image source={image} style={styles.newImage} />

            {/* texts  */}
            <View style={styles.conteiner}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}$</Text>
            </View>

        </View>


    );
}

const styles = StyleSheet.create({
    card: {
        //flex:1,
        marginHorizontal: wp('2'),
        width: wp('31%'),
        height: hp('20.7%'),
       overflow: 'hidden',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#a75b3b',
        backgroundColor: '#fff',
    },
    conteiner: {
        paddingHorizontal: wp('1.5%'),
        paddingTop: hp('1%'),
        backgroundColor: '#3e2821',
        height: hp('6%'),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    newImage: {
        width: wp('28%'),
        height: hp('14.5%'),
        resizeMode: "center",
    },
    newsDetails: {
        // paddingTop: hp(''),
        //paddingBottom: hp(''),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: hp('2.2%'),
        fontWeight: 'bold',
        color: '#fff',
        // paddingBottom: hp('1%'),
    },
    price: {
        fontSize: hp('2.2%'),
        //fontWeight: 'bold',
        color: '#E6B566',
       // paddingTop: hp('0.7%')
    },


})


export default CardNewsHorintalSmall;