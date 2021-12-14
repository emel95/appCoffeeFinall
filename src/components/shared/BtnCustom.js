import React from 'react';
import { StyleSheet ,Text,TouchableOpacity} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';

const BtnCustom =({title,onPress,color="#3e2821",styleCusttom})=>{
    return(
        // ******** botton custtom for estefade in form login and sing up  **********
        <TouchableOpacity style={[styles.button,styleCusttom,{backgroundColor:color}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}
export default BtnCustom;
const styles = StyleSheet.create({
    button:{
       // borderRadius:13,
        justifyContent:"center",
        alignItems:"center",
       // padding:hp('2%'),
        width:wp("70.5%"),
        height:hp('7%')
      
     
    },
    text:{
        color:"#3e2821",
        fontSize:hp('2.5%'),
        fontFamily:"Irannastaliq"
    },
})
