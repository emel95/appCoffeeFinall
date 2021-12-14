import React, { useState } from 'react';
import { Alert, View, FlatList, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Swipable from 'react-native-gesture-handler/Swipeable'
import CardSabad from '../components/shared/CardSabad';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SnackBarCusttom, SnackBarErrorOrOk } from '../utils/SnackBar';

// ********alert for delete Order***********
const confirmationAlert = (Order, onPress) => {
    return Alert.alert(Order.title, `مطمئنی میخوای ${Order.title} رو از لیست سفارشات پاک کنی ؟  `,
        [
            {
                text: 'انصراف',
                onPress: () => { },
                style: 'cancel'
            },
            {
                text: ' پاک کن',
                onPress: onPress
            },
        ],
        {
            //*******iane har jaie dige ke klick kone alert baste nashe fagat ba klick ro btns alert baste beshe********
            cancelable: false
        }
    )

}

//*******ui swipeable for show  icon delete**********
const deleteAction = (Order, onPress) => {
    return (
        <TouchableOpacity onPress={() => confirmationAlert(Order, onPress)}>
            <View style={styles.delete}>
                <Icon name="trash" color="#fff" size={hp('4.1%')} />
            </View>
        </TouchableOpacity>
    )

}



const Sabad = () => {

    const [visableSnack, setVisableSnack] = useState(false);

    const [getOrders, setOrder] = useState([
        { id: '1', title: "coffee", price: 20 },
        { id: '2', title: "tee", price: 10 },
        { id: '3', title: "milke", price: 5 },
        { id: '4', title: "coffee", price: 20 },
        // {id: '5', title: "coffee", price: '$20' },
        // {id: '6', title: "tee", price: '$10' },
        // {id: '7', title: "milke", price: '$5' },
        // {id: '8', title: "coffee", price: '$20' },
        // {id: '9', title: "coffee", price: '$20' },
        // {id: '10', title: "tee", price: '$10' },
        // {id: '11', title: "milke", price: '$5' },
        // {id: '12', title: "coffee", price: '$20' },

    ]);



    // *********amaliate delete har Order az state
    const handleDlete = (Order) => {
        //******dorste ke mostagim nmitonam state ro edit koname and baiad ba copye on kar konim  vale inja metode filter miade eke  araie jadid misaze and barmigrdone 
        setOrder(getOrders.filter(O => O.id !== Order.id));
    }


    //***********snack bar
    const message = () => {
        setVisableSnack(true);
        //console.log('1', visableSnack);

        setTimeout(() => {
            setVisableSnack(false);
            //console.log('in:', visableSnack);

        }, 8000);
    }

    // const handelSnack =()=>{
    //     console.log('2', visableSnack);
    //     if (visableSnack){
    //         return (<SnackBarErrorOrOk Message='message' Type='Error' />);
    //       }else{
    //         return (null);
    //       }

    // }



    return (
        <View style={{ flex: 1 }}>


            {visableSnack ?
                (
                    <SnackBarErrorOrOk Message='message' Type='Ok' />
                )
                :
                (null)}

            {/* {visableSnack ? (
                <SnackBarCusttom Message='message' />
            ) : null} */}


            {/* list Items */}
            <View style={{ flex: 1 }} >
                <FlatList
                    data={getOrders}
                    keyExtractor={(Order) => Order.id}
                    renderItem={({ item }) => (

                        <Swipable renderRightActions={() => deleteAction(item, () => handleDlete(item))}>
                            <CardSabad
                                tedad={2}
                                title={item.title}
                                price={item.price}
                                // description={item.description}
                                imageLeft={require('../assets/image/glasse.png')}

                            />
                        </Swipable>


                    )}
                />
            </View>

            {/* <SnackBarErrorOrOk Message='message' Type='Ok' /> */}
            {/* bottom fix */}
            <View style={styles.bottom}>

                {/* price */}
                <View style={styles.totalPrice}>
                    <Text style={styles.price}>Total:</Text>
                    <Text style={styles.price}>42 $</Text>
                </View>

                {/* button */}
                <TouchableOpacity style={styles.button} onPress={ message}>
               {/* // onPress={() => {
                   
                    //  (<SnackBarErrorOrOk Message='message' Type='Ok' />)


                    //console.log('ok');
                    // setVisableSnack(true);
                    //console.log('1', visableSnack);

                    // setTimeout(() => {
                    //     setVisableSnack(false);
                    //    //console.log('in:', visableSnack);

                    // }, 8000);
                    // console.log('2', visableSnack);
               // }}> */}
                    <Text style={styles.textbtn}>Order</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}



export default Sabad;

const styles = StyleSheet.create({
    totalPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp('5%'),
        width: wp('100%'),
        //height:hp('%'),
        paddingVertical: hp('1.5%')
    },
    bottom: {
        backgroundColor: '#fff',
        width: wp('100%'),
        height: hp('24%'),
        alignItems: 'center'
    },
    price: {
        fontSize: hp('3%'),
        color: '#3e2821'
    },

    button: {
        // borderRadius:13,
        justifyContent: "center",
        alignItems: "center",
        padding: hp('2%'),
        width: wp("90%"),
        backgroundColor: '#a75b3b',
        borderRadius: 30,


    },
    textbtn: {
        color: "#fff",
        fontSize: hp('2.5%'),
        fontFamily: "Irannastaliq"
    },
    delete: {
        backgroundColor: 'tomato',
        width: wp('13%'),
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});