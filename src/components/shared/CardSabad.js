import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';


const CardSabad = ({ imageLeft, title, price, tedad = 1 }) => {

    const [getAdd, setAdd] = useState(tedad);

    //******if tedad kamtar eke shode on Order kolan delete mishe
    if (getAdd <= 0) { return null }

    return (
        <View style={styles.card}>

            {/* imageLeft */}
            <View style={styles.imageLeft}>
                <Image source={imageLeft} style={styles.img} />
            </View>



            {/* Conteinertext */}
            <View style={styles.conteinerText}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price*getAdd}$ </Text>
            </View>


            {/*contentLeft  */}
            <View style={styles.contentLeft}>

                <Text style={styles.textnum}>
                    {getAdd}
                </Text>

                {/* icon mines */}
                <TouchableOpacity style={styles.mines} onPress={() => setAdd(getAdd - 1)}>
                    <Icon name="minus" color="#a75b3b" size={hp('2.1%')} />
                </TouchableOpacity>

                {/*icon plass */}
                <TouchableOpacity style={styles.pluse} onPress={() => setAdd(getAdd + 1)}>
                    <Icon name="plus" color="#a75b3b" size={hp('2.1%')} />
                </TouchableOpacity>

            </View>


        </View>







    );
}

const styles = StyleSheet.create({
    card: {
        //marginBottom: hp('4%'),
        flexDirection: 'row',
        width: wp('100%'),
        height: hp('15%'),
        paddingTop: hp('2.5%'),
        paddingHorizontal: wp('8%'),
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        backgroundColor: "white",

    },

    conteinerText: {
        paddingHorizontal: wp('2%'),
        //  backgroundColor: 'red',
        width: wp('33%'),
        height: hp('10%'),
        marginTop: hp('3.5%'),

    },


    title: {
        fontSize: hp('2.7%'),
        fontWeight: 'bold',
        color: '#a96909',
        paddingBottom: hp('0.5%'),
    },
    price: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
        color: '#3e2821',

    },

    imageLeft: {
        //  backgroundColor: 'green',
        width: wp('18.5%'),
        height: hp('10%'),
        paddingHorizontal: wp('1%'),
        paddingVertical: hp('1%'),
    },
    contentLeft: {
        paddingHorizontal: wp('2%'),
        alignItems: 'center',
        // backgroundColor: 'green',
        flexDirection: 'row',
        width: wp('30%'),


    },
    pluse: {
        marginLeft: wp('3%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#3e2821',
        borderWidth: 1,
        width: wp('12%'),
        height: hp('5'),
        borderTopRightRadius: hp('50%'),
        borderBottomRightRadius: hp('50%'),
    },
    mines: {
        marginLeft: wp('3%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#3e2821',
        borderWidth: 1,
        width: wp('12%'),
        height: hp('5'),
        borderTopLeftRadius: hp('50%'),
        borderBottomLeftRadius: hp('50%'),
    },
    textnum: {
        fontSize: hp('3%'),
        color: '#3e2821'
    },
    img: {
        width: wp('10%'),
        height: hp('10%')
    }

})


export default CardSabad;