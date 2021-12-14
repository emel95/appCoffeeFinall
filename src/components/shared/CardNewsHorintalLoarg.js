import React from 'react';
import { ImageBackground, View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';


const CardNewsHorintalLoarg = ({ image, title, price }) => {
    return (

        //****cardHorizntal lorge for home ***** 
        <View style={styles.card}>

            {/* background image */}
            <ImageBackground 
            //source={image}
            source={{ uri:`https://rnapi.ghorbany.dev/${image}`,}}
             style={styles.newImage} >

                {/* siee or opacity for image background */}
                <View style={styles.siee} />

                {/* texts  */}
                <View style={styles.continer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>{price}$</Text>
                </View>

            </ImageBackground>

        </View>


    );
}

const styles = StyleSheet.create({
    card: {
        //flex:1,
        marginHorizontal: wp('2%'),
        width: wp('53.5%'),
        height: hp('35.6%'),
       overflow: 'hidden',
        borderRadius: 15,
        borderWidth: 4,
        borderColor: '#3e2821',
    },
    newImage: {
        width: '100%',
        height: '100%',
        //resizeMode: "cover",
        // resizeMode: "contain",
        // resizeMode: "stretch",
        //resizeMode: "repeat",
        resizeMode: "center",
    },
    siee: {
        backgroundColor: '#000',
        opacity: 0.2,
        height: hp('35.3%'),
    },
    continer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: "absolute",
        zIndex: 2,
        width: wp('52%'),
        top: hp('25.5%'),
        bottom: 0,
        // paddingLeft: wp('3.5%'),
        paddingTop: hp('2%'),
        paddingHorizontal: wp('2%'),
        backgroundColor: '#3e2821',
        opacity: 0.6,
        height: hp('35.3%'),


        paddingBottom: hp('1%'),
    },
    // newsDetails: {
    //     paddingTop: hp('4%'),
    //     paddingBottom: hp('1%'),
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    // },
    title: {
        fontSize: hp('4%'),
        fontWeight: 'bold',
        //alignSelf: 'flex-start',
        color: '#fff',
        paddingBottom: hp('1%'),
    },
    price: {
        fontSize: hp('2.5%'),
        color: '#fff',
        fontWeight:'bold',
        paddingTop:hp('1.5%')
    },


})


export default CardNewsHorintalLoarg;