import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Entypo';

const CardDaste = ({ imageLeft, title, price, description }) => {
    return (

        <View style={styles.conteiner}>

            {/* icon Right */}
            <View style={styles.imageRight}>
                <Icon name='squared-plus' color="#a96909" size={hp('4.5%')} />
            </View>


            {/* icon Left */}
            <View style={styles.imageLeft}>
                <Image source={imageLeft} style={styles.img} />
            </View>


            {/* card  */}
            <View style={styles.card}>


                <View style={styles.conteinerText}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>{price}$</Text>
                </View>

                {/* check tedad char in description */}
                {description.length <= 30 ?
                    (<Text style={styles.description}>{description}</Text>
                    ) :
                    (<Text style={styles.description}>{description.substring(0, 30)} ...</Text>
                    )
                }



            </View>


        </View>

    );
}

const styles = StyleSheet.create({
    card: {

        //marginBottom: hp('4%'),
        width: wp('80%'),
        //marginLeft:wp('20%'),
       // marginBottom:hp('2%'),
        height: hp('10%'),
        paddingTop: hp('2.5%'),
        paddingLeft: wp('9%'),
        paddingRight: wp('7%'),
        borderRadius: 25,
        backgroundColor: "white",
      //  transform: [{ perspective: -200 }, { rotateY: '20deg' }],
       // transform: [{ perspective: 200 }, { rotateX: '15deg' }]

    },
    conteiner: {
        alignItems: 'center',
        paddingHorizontal: wp('1.5%'),
        paddingVertical: hp('1.9%'),
    },
    conteinerText: {

        flexDirection: 'row',
        justifyContent: 'space-between',

    },


    title: {
        fontSize: hp('2.2%'),
        fontWeight: 'bold',
        color: '#4a4844',
        //  paddingBottom: hp('1%'),
    },
    price: {
        fontSize: hp('3%'),
        fontWeight: 'bold',
        color: '#4a4844',

    },
    description: {
        fontSize: hp('1.5%'),
        fontWeight: 'bold',
        color: '#4a4844',
    },
    imageLeft: {
        position: "absolute",
        zIndex: 2,
        left: wp('4.9%'),
        bottom: hp('2%'),
        // width: wp('1%'),
        // height: hp('0.5%')
    },
    imageRight: {
        position: "absolute",
        zIndex: 2,
        right: wp('6%'),
        top: hp('4.5%')
    },
    img: {
        width: wp('10%'),
        height: hp('12.7%')
    }

})


export default CardDaste;