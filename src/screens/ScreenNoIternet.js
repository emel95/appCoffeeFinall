import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';
  //import NetInfo from "@react-native-community/netinfo";
const ScreenNoIternet = ({ navigation }) => {


  //*********check internet********
  // const unsubscribe = NetInfo.addEventListener(state => {
  //   if(state.isConnected){
  //       navigation.navigate("Home");
      
  //   }
  //   else{
  //     console.log('error')
  //   }
 

  // });

  // useEffect(() => {
  
  //   unsubscribe();

  // });
  return (


    // ****imge for splash
    <View style={{ flex: 1 }}>
      <View style={{ width: wp('100%'), height: hp('60%'), alignItems: 'center', justifyContent: "center" }}>
        <LottieView
          //style={{ width: 300, height: 500 }}
          // source={require('./../assets/lottie/7143-coffee.json')}
          // source={require('./../assets/lottie/6305-coffee-cup.json')}
          source={require('../assets/lottie/23921-error-coffee-spilled.json')}
          // source={require('./../assets/lottie/21901-coffee-time.json')}
          // source={require('./../assets/lottie/19669-coffee-meditation.json')}

          autoPlay
          loop />
      </View>
      <View style={{alignItems:'center'}}>
        <Text style={{fontSize:hp('3%'),color:'lightgray'}}>No Internrt , You are Offline</Text>
        <TouchableOpacity style={{marginTop:hp('3%'),padding:hp('1%'),borderWidth:1,borderColor:'gray'}} onPress={()=>{}}>
          <Text style={{fontSize:hp('3%'),color:'gray'}}>Try again</Text>
        </TouchableOpacity>
      </View>

    </View>



  )
}
export default ScreenNoIternet;

// yarn react-native generate-bootsplash .\app\assets\image\splasht.png --background-color=3e2821  --logo-width=300  --assets-path=assets --flavor=main