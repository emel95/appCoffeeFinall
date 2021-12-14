import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet, View, ScrollView, BackHandler } from 'react-native';
import CardNewsHorintalLoarg from '../components/shared/CardNewsHorintalLoarg';
import CardNewsHorintalSmall from '../components/shared/CardNewsHorintalSmall';
import CustomHeader from '../components/shared/CustomHeader';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import { useNavigationState } from '@react-navigation/native';
import { SnackBarCusttom } from '../utils/SnackBar';


const HomeScreen = ({ navigation }) => {

 

 
    const products=useSelector(state=>state.products);

  

    const [visableSnack, setVisableSnack] = useState(false);



    // //***********snack bar
    // const message = () => {
    //     setVisableSnack(true);

    //     setTimeout(() => {
    //         setVisableSnack(false);
    //     }, 4000);
    // }

    //***********for exit ba two click
    // const screenIndex = useNavigationState(state => state.index);
    // useEffect(() => {
    //     let currentCount = 0;
    //     console.log("screenIndex",screenIndex);
    //     console.log("currentCount",currentCount);
    //     if (screenIndex <= 1) {
    //         BackHandler.addEventListener("hardwareBackPress", () => {
    //             if (currentCount === 1) {
    //                 BackHandler.exitApp();
    //                 return true;
    //             }
    //             currentCount += 1;

    //             message();
    //             setTimeout(() => {
    //                 currentCount = 0;
    //             }, 2000);

    //             return true;

    //         })
    //     }
    // }, [])





    return (

        <View style={styles.continer}>

            {/* {visableSnack ? (
                <SnackBarCusttom Message={"برای خروج دوباره دکمه برگشت را بزنید "} />
            ) : null} */}


            {/* scrolle vertical for all page  */}
            <ScrollView style={{ flex: 1 }}>



                {/* header  brown */}
                <CustomHeader >
                    <Text style={styles.titleHeder}>Coffee House</Text>
                    <Text style={styles.subtitleHeader}>Hi</Text>
                </CustomHeader>


                {/* list horizntal in header */}
                <View style={styles.scrolleHorizontalTop} >
                    <FlatList
                        // data={getcourse}
                        data={products}
                        horizontal={true}
                        keyExtractor={(product) => product._id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate("Order", item)}>
                                <CardNewsHorintalLoarg
                                    title={item.title}
                                    price={item.price}
                                image={require('../assets/image/i.jpg')}
                                />
                            </TouchableOpacity>

                        )}
                    />
                </View>




                {/*  list ha horizntal in out header */}
                <View style={styles.continerScrollHorizentalBottom}>


                    {/* list1 */}
                    <Text style={styles.titleCadresBottom}>Best Seller</Text>
                    <View style={styles.scrolleHorizontalBottoms}>
                        <FlatList
                            data={products}
                            horizontal={true}
                            keyExtractor={(product) => product._id.toString()}
                            renderItem={({ item }) => (

                                <TouchableOpacity onPress={() => navigation.navigate("Order", item)}>
                                    <CardNewsHorintalSmall
                                        title={item.title}
                                        price={item.price}

                                        image={require('../assets/image/image.jpg')}
                                    />
                                </TouchableOpacity>
                            )}
                        />
                    </View>


                    {/* list2 */}
                    <Text style={styles.titleCadresBottom}>Best Seller</Text>
                    <View style={styles.scrolleHorizontalBottoms}>
                        <FlatList
                            data={products}
                            horizontal={true}
                            keyExtractor={(product) => product._id.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => navigation.navigate("Order", item)}>
                                    <CardNewsHorintalSmall
                                        title={item.title}
                                        price={item.price}

                                        image={require('../assets/image/image.jpg')}
                                    />
                                </TouchableOpacity>

                            )}
                        />
                    </View>


                    <View style={styles.separator} />

                    {/* list3 */}
                    <Text style={styles.titleCadresBottom}>Best Seller</Text>
                    <View style={styles.scrolleHorizontalBottoms}>
                        <FlatList
                            data={products}
                            horizontal={true}
                            keyExtractor={(product) => product._id.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => navigation.navigate("Order", item)}>
                                    <CardNewsHorintalSmall
                                        title={item.title}
                                        price={item.price}

                                        image={require('../assets/image/image.jpg')}
                                    />
                                </TouchableOpacity>

                            )}
                        />

                    </View>


                    {/* list4 */}
                    <Text style={styles.titleCadresBottom}>Best Seller</Text>
                    <View style={styles.scrolleHorizontalBottoms}>
                        <FlatList
                            data={products}
                            horizontal={true}
                            keyExtractor={(product) => product._id.toString()}
                            renderItem={({ item }) => (

                                <TouchableOpacity onPress={() => navigation.navigate("Order", item)}>
                                    <CardNewsHorintalSmall
                                        title={item.title}
                                        price={item.price}

                                        image={require('../assets/image/image.jpg')}
                                    />
                                </TouchableOpacity>
                            )}
                        />
                    </View>


                    {/* list5 */}
                    <Text style={styles.titleCadresBottom}>Best Seller</Text>
                    <View style={styles.scrolleHorizontalBottoms}>
                        <FlatList
                            data={products}
                            horizontal={true}
                            keyExtractor={(product) => product._id.toString()}
                            renderItem={({ item }) => (

                                <TouchableOpacity onPress={() => navigation.navigate("Order", item)}>
                                    <CardNewsHorintalSmall
                                        title={item.title}
                                        price={item.price}

                                        image={require('../assets/image/image.jpg')}
                                    />
                                </TouchableOpacity>
                            )}
                        />
                    </View>

                </View>

            </ScrollView>
        </View>

    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: 'white'
    },
    titleHeder: {
        color: '#fff',
        fontSize: hp('6.5%'),
        paddingLeft: wp('5%'),
        fontWeight: 'bold',
        paddingTop: hp('4%'),
    },
    titleCadresBottom: {
        marginBottom: hp('0.9%'),
        color: '#a96909',
        fontSize: hp('3%'),
    },
    subtitleHeader: {
        color: '#fff',
        fontSize: hp('3%'),
        paddingLeft: wp('5%'),
    },
    scrolleHorizontalTop: {
        // width: "100%",
        flex: 1,
        paddingLeft: wp('5%'),
        position: 'absolute',
        zIndex: 1,
        top: hp('25.5%'),
    },
    scrolleHorizontalBottoms: {
        flex: 1,
        //width: '100%',
        marginBottom: hp('2%'),
    },
    continerScrollHorizentalBottom: {
        paddingLeft: wp('5%'),
        top: hp('17%'),
        marginBottom: hp('27'),
    },
    separator: {
        marginVertical: hp('5%'),
        width: wp('100%'),
        height: hp('0.18%'),
        backgroundColor: '#a75b3b'
    }
})
