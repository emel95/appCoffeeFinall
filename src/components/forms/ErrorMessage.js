import React from 'react';
import { StyleSheet,Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
 from 'react-native-responsive-screen';

const ErrorMessage =({titleError,visible}) =>{

    //******if input faal nabod ia error nabode null barmigrdone iane hich kar nakon *******
    if (!visible || !titleError) return null;

    return(
        //*****for namishe error in inputText*****
        <Text style={styles.error}>{titleError}</Text>
    );
}

export default ErrorMessage;

const styles = StyleSheet.create({
    error:{
        color:"tomato",
       fontFamily:"vazir",
       fontSize:hp('1.7%'),
    }
})
