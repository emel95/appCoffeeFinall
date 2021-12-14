import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
 from 'react-native-responsive-screen';

const InputCustom = ({ icon, ...otherProps }) => {
    return (

        // ****input custom for page login and sign up*****
        <View style={styles.container}>

            <TextInput style={styles.text} {...otherProps} />
            {/* {icon && (<Icon name={icon} color="#e3a92c" size={hp('3%')} />
            )} */}
            
        </View>
    );
}
export default InputCustom;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#3e2821",
       // borderRadius: 13,
        flexDirection: "row",
        width: wp('70.5%'),
        //marginVertical: 10,
        paddingHorizontal: wp('5%'),
        paddingVertical:hp('0.2%') ,
        marginBottom:hp('1.5%') ,
        borderBottomColor: "lightgray",
        borderBottomWidth: 2,
        //justifyContent:'center',
        alignItems:"center",
        display:'flex',
    },
   
    text: {
        fontSize:hp('2%') ,
        fontFamily:"Irannastaliq",
        color: "#fff",
        textAlign: "center",
        width: wp('55.5%'),
    },
})
