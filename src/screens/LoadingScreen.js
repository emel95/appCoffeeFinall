import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';


const LoadingScreen = () => {

    return (


        // ****imge for loading
        <View style={{
           // flex: 1,
           // backgroundColor: '#000',
           // opacity: 0.2,
            //height: hp('35.3%'),
            // paddingTop: hp('43%'),
            // paddingLeft: wp('35%'),
            left:wp('40%'),
            top:hp('40%'),
            position:'absolute',
            zIndex: 9,
        
        }}>

            <LottieView
                style={{ width: wp('3%'), height: hp('7%') }}
               // source={require('../assets/lottie/loadingScreen1.json')}
                source={require('../assets/lottie/10344-loading-ball.json')}


                
                //source={require('../assets/lottie/loadingScreen2.json')}
                autoPlay
                loop />


        </View>



    )
}
export default LoadingScreen;
