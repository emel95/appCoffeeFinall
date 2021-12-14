import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import {useSelector} from 'react-redux';
import CardDaste from '../components/shared/CardDaste';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';
import CardTopDaste from '../components/shared/CardTopDaste';


const Daste = ({ navigation }) => {

    const [getTabs, setTabs] = useState('Cake');

const products=useSelector(state=>state.products);

    console.log(getTabs);

  

    return (
        <View style={{ flex: 1 }}>

            {/*  name daste in top */}
            <View style={styles.headerDaste}>
                <CardTopDaste nameButton="Ice" onPress={() => setTabs('Ice')} />
                <CardTopDaste nameButton="Coffee" onPress={() => setTabs('Coffee')} />
                <CardTopDaste nameButton="Cake" onPress={() => setTabs('Cake')} />
                <CardTopDaste nameButton="Shake" onPress={() => setTabs('Shake')} />
            </View>

            {/*show list har daste */}
            <View style={styles.Content} >
                <FlatList
                    data={products}
                    keyExtractor={(product) => product._id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate("Order", item)}>
                            <CardDaste
                                title={item.title}
                                price={item.price}
                                description={item.description}
                                imageLeft={require('../assets/image/glasse.png')}
                           
                            />

                        </TouchableOpacity>

                    )}
                />
            </View>


        </View>
    );
}
export default Daste;
const styles = StyleSheet.create({
    headerDaste: {
        marginVertical: hp('4%'),
        height: hp('10%'),
        width: wp('90%'),
        flexDirection: 'row'
    },
    Content:{
        flex:1,
       // backgroundColor:'pink',
        paddingTop:hp('2%'),
        paddingBottom:hp('8%')
    }
});