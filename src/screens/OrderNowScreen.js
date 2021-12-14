import React, { useState } from 'react';
import { ImageBackground, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';
import IconBack from 'react-native-vector-icons/MaterialIcons';
import IconAdd from 'react-native-vector-icons/AntDesign';
import ButtonKaj from '../components/shared/ButtonKaj';
import { AirbnbRating } from 'react-native-ratings';
import AsyncStorage from '@react-native-async-storage/async-storage';



// const  b = [];
const OrderNowScreen = ({ navigation, route }) => {

    if (!route.params) return null;

    const { price, title, description } = route.params;
    const [getAdd, setAdd] = useState(1);
    //console.log(price,title);


    const handelAddOrder = async () => {
        // await AsyncStorage.removeItem('basket');

        //      b = await AsyncStorage.getItem('basket');
        //     if(b===null){
        //          await AsyncStorage.setItem("basket", JSON.stringify(route.params)); 

        //      }
        //       else{
        //           b.push(route.params);
        //       await AsyncStorage.mergeItem("basket", JSON.stringify(b)); 

        //      }



        // const i=await AsyncStorage.getItem('basket');
        //   console.log(i);

    }


    // if (getAdd <= 0) { return null }
    return (

        //  backgroundColor: '#e2d7be'
        <View style={styles.continer}>

            {/* top brown */}
            <View style={styles.cardTop}>

                {/*icon back */}
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IconBack name="keyboard-arrow-left" color="lightgray" size={hp('4%')} />
                </TouchableOpacity>

            </View>



            {/* imge cup */}
            <ImageBackground source={require('../assets/image/cup.png')}

                style={styles.imageCup}>

            </ImageBackground>


            {/* center white */}
            <View style={styles.cardeCenter}>

                {/* add count */}
                <View style={styles.countAdd}>

                    {/* icon mines */}
                    <TouchableOpacity onPress={() => setAdd(getAdd - 1)}>
                        <IconAdd name="minus" color="#a75b3b" size={hp('2.1%')} />
                    </TouchableOpacity>

                    <Text style={styles.txtAdd}> {getAdd}</Text>

                    {/*icon plass */}
                    <TouchableOpacity onPress={() => setAdd(getAdd + 1)}>
                        <IconAdd name="plus" color="#a75b3b" size={hp('2.1%')} />
                    </TouchableOpacity>

                </View>

                {/* texts */}
                <View style={styles.viewTxts}>
                    <Text style={styles.txtTitle}>{title}</Text>
                    <Text style={styles.txtDescription}>
                        {/* {`Here is an other way to
uiiuhyoiuyiuoiiou iuhiuhiou`} */}
                        {/* Here is an other way to{'\n'}
                        uiiuhyoiuyiuoiiou iuhiuhiou {'\n'}
                        hghgjkgkg */}

                        {description.length <= 150 ? description : `${description.substring(0, 150)}...`}
                    </Text>
                </View>


                {/* stare */}
                <View style={{alignItems:'flex-start'}}>
                     <AirbnbRating
                    count={5}
                    //  reviews={["Bad", "OK", "Good", "Very Good", "Wow"]}
                    defaultRating={1}
                    size={20}
                    selectedColor='#f1c40f'
                    unSelectedColor='#eee8aa'
                    // reviewSize={25}
                    // reviewColor='red'
                    showRating={false}
                    
                />
                </View>
               


            </View>



            {/* bottom brown */}
            <View style={styles.cardBottm}>

                {/* price */}
                <Text style={styles.price}>
                    {getAdd * price}$
                </Text>

                {/* button kaj  */}
                <ButtonKaj onPress={handelAddOrder} />


            </View>



        </View>

    )
}

export default OrderNowScreen;

const styles = StyleSheet.create({
    cardTop: {
        zIndex: 3,
        position: 'absolute',
        backgroundColor: '#a75b3b',
        height: hp('35%'),
        width: wp('100%'),
        borderBottomLeftRadius: 60,
        paddingTop: hp('3%')
    },
    cardBottm: {
        top: hp('87%'),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    cardeCenter:
    {
       //alignItems: 'flex-start',
        height: hp('60%'),
        width: wp('100%'),
        top: hp('22%'),
        zIndex: 2,
        position: 'absolute',
        paddingLeft: wp('6%'),
        paddingTop: hp('23%'),
        backgroundColor: '#fff',
        borderBottomLeftRadius: 60
    },
    countAdd: {
        // marginTop:hp('2%') ,
        // marginHorizontal: wp('4'),
        alignSelf:'flex-start',
        width: wp('32%'),
        marginBottom: hp('3.5%'),
        height: hp('3.5%'),
        borderRadius: 10,
        shadowColor: "#000",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    continer: {
        backgroundColor: '#a75b3b',
        flex: 1,
        // width: wp('100%'),
    },
    txtTitle: {
        fontSize: hp('4%'),
        fontWeight: 'bold',
        color: '#000',
        paddingBottom: hp('1.5%'),
    },
    txtDescription: {
        //backgroundColor:'red',
        width: wp('80%'),
        fontSize: hp('2%'),
        color: 'gray',
        lineHeight: hp('3.7%'),
        //  textAlign: 'auto'
        // textAlign:'justify',

    },
    price: {
        fontSize: hp('3%'),
        fontWeight: 'bold',
        color: '#fff',
    },
    imageCup: {

        height: hp('60%'),
        width: wp('110%'),
        zIndex: 6, position: 'absolute',
        marginLeft: wp('37%'),
        alignItems: 'center',
        justifyContent: 'center',

    },
    txtAdd: {
        color: '#a75b3b',
        fontSize: hp('2.5%')
    },
    viewTxts: {
        marginBottom: hp('1.5%'),
        alignItems: 'flex-end',
        paddingRight: wp('7%'),
    }
})
