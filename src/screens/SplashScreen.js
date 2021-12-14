import React, { useState, useEffect } from 'react';
import { View, Image, BackHandler } from 'react-native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions, useNavigationState } from '@react-navigation/native';
//import NetInfo from "@react-native-community/netinfo";
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';
import { useIsConnected } from 'react-native-offline';
import { decodeToken } from './../utils/jwt';
import { useDispatch } from 'react-redux';
import {userAction} from './../redux/actions/users';


const SplashScreen = ({ navigation }) => {

    //const [visableSnack, setVisableSnack] = useState(false);

    const screenIndex = useNavigationState(state => state.index);
    const dispatch = useDispatch();

    //*** exit app with two zadane back
    useEffect(() => {
        let currentCount = 0;
        console.log("screenIndex", screenIndex);
        console.log("currentCount", currentCount);
        if (screenIndex <= 0) {
            BackHandler.addEventListener("hardwareBackPress", () => {
                if (currentCount === 1) {
                    BackHandler.exitApp();
                    return true;
                }

                currentCount += 1;
              //  message();

                setTimeout(() => {
                    currentCount = 0;
                }, 2000);

                return true;

            })
        }
    }, [])

    //***********snack bar
    const message = () => {
        setVisableSnack(true);

        setTimeout(() => {
            setVisableSnack(false);
        }, 4000);
    }


    //********for check internet orginal
    // *******check conection internt********
    const isConnected = useIsConnected();
    useEffect(() => {
        const checkForNetAndLogin = async () => {

            // await AsyncStorage.removeItem("token");
            // await AsyncStorage.removeItem("userId");

            if (!isConnected) {
                navigation.navigate("Internet");
            }
            else {
                const token = await AsyncStorage.getItem("token");
                const userId = JSON.parse(await AsyncStorage.getItem("userId"));

                if (token !== null && userId !== null) {
                    const decodedToken = decodeToken(token);
                    //console.log(decodedToken);
                    // console.log(userId);

                    dispatch(userAction(decodedToken.user));

                    if (decodedToken.user.userId === userId) {
                        //  navigation.navigate("Home");
                        navigation.dispatch(StackActions.replace("Home"));
                    }
                    else {
                        await AsyncStorage.removeItem("token");
                        await AsyncStorage.removeItem("userId");
                        navigation.navigate("Login");
                    }
                }
                else {
                   //navigation.navigate("Login");
                   navigation.navigate("SingUp");
                   
                }

            }
        }
        checkForNetAndLogin();

    }, [])




    //bdone packege
    // *******check conection internt********
    // const unsubscribe = NetInfo.addEventListener(state => {
    //     if(state.isConnected){
    //         navigation.navigate("Internet");
    //     }
    //    console.log("Connection type", state.type);
    //   console.log("Is connected?", state.isConnected);
    //   });
    //   unsubscribe();




    return (


        // ****imge for splash
        <View style={{ flex: 1, backgroundColor: '#3e2821' }}>

            {/* {visableSnack ? (
                <SnackBarCusttom Message={"برای خروج دوباره دکمه برگشت را بزنید "} />
            ) : null} */}

            <View style={{ paddingTop: hp('11%'), paddingLeft: wp('3%'), width: wp('100%'), height: hp('60%') }}>
                <Image source={require('../assets/image/imageSplash.png')} style={{ height: hp('30%'), width: wp('70%') }} />
            </View>
            <View style={{ paddingLeft: wp('11%'), paddingTop: hp('5%') }}>
                <LottieView
                    style={{ width: wp('20%'), height: hp('50%') }}

                    source={require('../assets/lottie/20165-loading.json')}
                    //source={require('../assets/lottie/10344-loading-ball.json')}
                    autoPlay
                    loop />
            </View>

        </View>



    )
}
export default SplashScreen;
