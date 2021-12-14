import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';
import Card from '../components/shared/Card';
import Circle from '../components/shared/Circle';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';
import {useSelector} from'react-redux';

//import Svg, { Path } from 'react-native-svg';


const MyAcount = ({ navigation }) => {
const user =useSelector(state=>state.user);


    const handleLogout = async () => {
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("userId");
        navigation.dispatch(StackActions.replace("Splash"));
    }
    //const [getPhoto, setPhoto] = useState(null);
    const [getPhoto, setPhoto] = useState('');
    const [getSwitchValue, setSwitchValue] = useState(false);

    const handleChoosePhoto = () => {
        const options = {
            noData: true,
            mediaType: 'photo',


        };
        launchImageLibrary(options, response => {
            console.log('response', response.assets[0].uri);
            if (response.assets[0].uri) {
                setPhoto(response);
                console.log('ok');
                //console.log('response', getPhoto.assets[0].uri);
            }
        });
        // launchCamera(options, response => {
        //     console.log('response', response.assets[0].uri);
        //     if (response.assets[0].uri) {
        //         setPhoto(response);
        //       //  console.log('ok');
        //        
        //     }
        // });
    }

    // launchCamera(options?, callback);
    // launchImageLibrary(options?, callback)
    return (
        <View style={{ flex: 1, backgroundColor: '#f8f4f4' }}>


            {/* top profile  out card*/}
            <View style={{
                marginTop: hp('10%'),
                justifyContent: 'space-evenly', alignItems: 'center',
                flexDirection: 'row', height: hp('20%'), width: wp('100%')
            }}>

                {/* imge user */}
                <Circle >
                    {
                        getPhoto ?
                            // getPhoto !== null ?
                            (<Image source={{ uri: `${getPhoto.assets[0].uri}` }}
                                style={{ borderRadius: hp('180/2%'), resizeMode: 'cover', width: '100%', height: '100%' }} />
                            ) : (

                                <Image source={require('../assets/image/profile.jpg')}
                                    style={{ borderRadius: hp('180/2%'), resizeMode: 'cover', width: '100%', height: '100%' }} />
                            )
                    }

                    {/* {
                        getPhoto &&
                        (<Image source={{ uri: getPhoto.assets[0].uri }}
                            style={{ borderRadius: hp('180/2%'), resizeMode: 'cover', width: '100%', height: '100%' }} />
                        )

                    } */}

                </Circle>


                {/* content top right out card */}
                <View>
                    <Text style={{ color: 'lightgray', fontSize: hp('4.5%') }}>
                        {/* Matt Domon */}
                        {user.fullname}
                        </Text>

                    <Text style={{ color: 'lightgray', fontSize: hp('2%') }}>
                        {/* Actor */}
                        {user.email}
                        </Text>
                    <View style={styles.esitProfile}>
                        <TouchableOpacity onPress={handleChoosePhoto}>
                            <Text style={{ color: 'lightgray', fontSize: hp('2.5%') }}>Edit Profile</Text>

                        </TouchableOpacity>
                    </View>

                </View>


            </View>

            {/* card setting */}
            <View style={{ marginHorizontal: wp('5%'), marginTop: hp('5%'), width: wp('90%'), height: hp('90%') }}>
                <Card>
                    <Text>{getSwitchValue ? 'on' : 'off'}</Text>
                    <Switch
                        value={getSwitchValue}
                        onValueChange={(value) => setSwitchValue(value)}
                        trackColor='lightgray'
                        thumbColor='#a96909'
                    // tintColor="#000"

                    />
                    <TouchableOpacity onPress={handleLogout}>
                            <Text style={{ color: 'lightgray', fontSize: hp('2.5%') }}>Logeout</Text>

                        </TouchableOpacity>

                </Card>
            </View>

            {getSwitchValue && handleLogout()}

        </View>
    )
}
export default MyAcount;
const styles = StyleSheet.create({

    esitProfile: {
        marginTop: hp('3%'),
        width: wp('32%'),
        // padding:hp('0.5%'),
        alignItems: 'center',
        height: hp('4%'),
        borderRadius: 13,
        borderColor: '#a96909',
        borderWidth: wp('0.5%'),
        backgroundColor: '#fff',

    },










    header: {
        position: 'absolute',
        zIndex: 2,

    },
    borderBottomHeader: {

        //startttop endtop endBottom startbottom/lefttop righttop rigtBottom leftbottom


        // transform: [{ scale: 999 }],

        height: hp('27%'),
        width: wp('150%'),

        backgroundColor: '#a96909',


        // borderBottomRightRadius:wp('80%'),
        // borderBottomLeftRadius:wp('80%'),
        //52% 0% 100% 100% / 0% 51% 58% 46% 
        borderTopLeftRadius: wp('0%'),
        borderTopRightRadius: wp('0%'),
        borderBottomRightRadius: wp('100%'),
        borderBottomLeftRadius: wp('100%'),
        borderTopStartRadius: wp('0%'),
        borderTopEndRadius: wp('0%'),
        borderBottomEndRadius: wp('85%'),
        borderBottomStartRadius: wp('85%'),



    },
    main: {
        backgroundColor: '#fff',
        height: hp('60%'),
        width: wp('90%'),
        position: 'absolute',
        zIndex: 3,
        top: hp('40%'),
        borderTopLeftRadius: wp('80%'),
        borderTopRightRadius: wp('80%'),

        borderBottomRightRadius: wp('25%'),
        borderBottomLeftRadius: wp('25%'),

        borderTopStartRadius: wp('25%'),
        borderTopEndRadius: wp('25%'),

        borderBottomEndRadius: wp('10%'),
        borderBottomStartRadius: wp('10%'),


        shadowColor: "#a96909",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        //borderTop
    },
    circleLarge: {
        position: 'absolute',
        zIndex: 5,
        width: wp('38%'),
        height: hp('20%'),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Math.round(wp('38%') + hp('20%')) / 2,
        backgroundColor: "white",
        top: hp('30%'),

        shadowColor: "#a96909",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    circleSmall: {},
})
