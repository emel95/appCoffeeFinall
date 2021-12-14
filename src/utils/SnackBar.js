
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Animated, View, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';


// ****Snack Bar  Error or Ok *****
export const SnackBarErrorOrOk = ({ Message, Type }) => {

    const [close, setClose] = useState(false);

    if (close) {
        return (null)
    }
    // setTimeout(() => {
    //    return null

    // }, 8000);

    //const [getAnimated, setAnimated] = useState(new Animated.Value(0));
    //const [getShown, setShown] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => toggleBar(), 4000)

    // }, []);

    // const toggleBar = () => {
    //   setTimeout(() => {
    //          const newState = !getShown;
    //         setShown(newState);
    //         Animated.timing(getAnimated, {
    //             // toValue: newState ? 1 : 0,
    //             toValue: 1,
    //             duration: 500,
    //             useNativeDriver: newState,
    //        }).start()
    //     //   }).start(newState ? hideBar() : null)
    //     }, 4000)



    // }



    //toggleBar();



    //    const hideBar = () => {
    //         setTimeout(() => toggleBar(), 4000)
    //        // setShown(false);
    //     }



    return (

        <View style={styles.cardSnack}>
            {Type === 'Error' ? (<View style={styles.leftRed} />) : (
                <View style={styles.leftGreen} />
            )}

            <View style={styles.conteiner}>

                {Type === 'Error' ? (<Icon name="closecircleo" color="tomato" size={hp('4.1%')} />) : (
                    <Icon name="checkcircleo" color="#32cd32" size={hp('4.1%')} />
                )}

                <Text numberOfLines={1} style={styles.txtMessage}>{Message} </Text>
                <TouchableOpacity onPress={() => { setClose(true) }}>
                    <Icon name="close" color="#fff" size={hp('3%')} />

                </TouchableOpacity>

            </View>
        </View>


    )
}




// ****Snack Bar  Custom*****
export const SnackBarCusttom = ({ Message }) => {


    // const [close, setClose] = useState(false);
    // if (close) {
    //     return (null)
    // }

    return (

        <View style={[styles.cardSnack, { paddingHorizontal: wp('3%'), alignItems: 'center', }]}>

            <Text numberOfLines={1} style={styles.txtMessage}>{Message} </Text>
            {/* <TouchableOpacity onPress={() => { setClose(true) }}>
                <Icon name="close" color="#fff" size={hp('3%')} />
            </TouchableOpacity> */}

        </View>

    )
}


const styles = StyleSheet.create({


    cardSnackCustom:{
        backgroundColor: '#000',
        position: 'absolute',
        zIndex: 10,
        width: wp('90%'),
        top: hp('2%'),
        marginHorizontal: wp('4%'),
        height: hp('7%'),
        flexDirection: 'row',
    },
    cardSnack: {
        backgroundColor: '#000',
        position: 'absolute',
        zIndex: 10,
        width: wp('90%'),
        top: hp('2%'),
        marginHorizontal: wp('4%'),
        height: hp('7%'),
        flexDirection: 'row',
        // transform: [
        //     {
        //         translateY:100

        //     }
        // ]
    },

    leftRed: {
        backgroundColor: 'tomato',
        width: wp('3%')
    },
    leftGreen: {
        backgroundColor: '#32cd32',
        width: wp('3%')
    },
    conteiner: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: wp('3%'),
        alignItems: 'center',
    },
    txtMessage: {
        paddingLeft: wp('3%'),
        flex: 1,
        color: '#fff',
        fontSize: hp('2%'),
        fontWeight: 'bold'
    },

})
