import React,{useEffect} from 'react';
import { Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MyAcount from '../screens/MyAccount';
import Sabad from '../screens/Sabad';
import Daste from '../screens/Daste';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import {getProducts} from './../redux/actions/product';


const tab = createBottomTabNavigator();


const BottomTabsNavigator = () => {

 //const [getloading, setLoading] = useState(true);
 
 const dispatch = useDispatch();

 useEffect(() => {
     
     const fetchData = async () =>{
     dispatch(getProducts());
         // setLoading(false);
     }
     fetchData();   
        
 }, []);


    return (
      


            <tab.Navigator initialRouteName="HomeScreen"

                // screenOptions={({route,navigation})=>{
                //     return{ tabBarLabel : navigation.isFocused()?route.name:''}
                // }}


                //********options(example: icon ,namelable) for tabbar*******
                screenOptions={({ route }) => ({

                    //**********text or label in tabbar***********
                    tabBarLabel: ({ focused, color, position }) => {
                        let lablName;

                        if (route.name === 'Sabad') {
                            lablName = focused ? 'سبد' : ''
                        }
                        else if (route.name === 'MyAcount') {
                            lablName = focused ? 'پروفایل' : ''

                        } else if (route.name === 'HomeScreen') {
                            lablName = focused ? 'خانه' : ''
                        }
                        else if (route.name === 'Daste') {
                            lablName = focused ? 'دسته' : ''
                        }
                        return (<Text style={[{ color: color }, styles.txt]}>{lablName}</Text>)
                    },

                    //******** icon in tabbar*******
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Sabad') {
                            //iconName = focused ? 'windows-store' : 'youtube'
                            iconName = 'shopping-cart'
                        }
                        else if (route.name === 'MyAcount') {
                            // iconName = focused ? 'user' : 'users'
                            iconName = 'user'
                        }
                        else if (route.name === 'HomeScreen') {
                            //iconName = focused ? 'phone' : 'pencil' 
                            iconName = 'home'
                        }
                        else if (route.name === 'Daste') {
                            //   iconName = focused ? 'instagram' : 'info'
                            iconName = 'grid'
                        }

                        return (<Icon name={iconName} color={color} size={size} />)
                    },

                }
                )}


                //*******styles for tabbar*******
                tabBarOptions={{


                    //***** style for khode tabbar *********
                    style: {
                        backgroundColor: '#3e2821',
                        paddingVertical: hp('0.5%'),
                        overflow: 'hidden',
                        position: 'absolute',
                        // left: 0,
                        // bottom: 0,
                        // right: 0,
                        // overflow:'hidden',
                        // borderTopWidth: 0,
                        borderTopRightRadius: 27,
                        borderTopLeftRadius: 27,
                        height: hp('8%'),
                        elevation: 0,
                    },

                    //******style for har tab in tabbar*********
                    activeTintColor: '#E6B566',
                    inactiveTintColor: 'white',
                    //activeBackgroundColor: 'lightcyan',

                    //*******style for text har tabbar********
                    labelStyle: {
                        // fontFamily:"",
                        fontSize: hp('2.5%'),

                    }
                }}


            >


                {/* tabbar navigation */}
                <tab.Screen name="Sabad" component={Sabad} options={{
                    tabBarBadge: 4,
                    //   tabBarIcon: ({ color }) => (
                    //     <Icon name="cake" color={color} size={20} />
                    //   )
                }} />
                <tab.Screen name="HomeScreen" component={HomeScreen} />
                <tab.Screen name="MyAcount" component={MyAcount} options={{
                    // tabBarVisible:false
                }} />
                <tab.Screen name="Daste" component={Daste} />


            </tab.Navigator>
      


    )
}
export default BottomTabsNavigator;


const styles = StyleSheet.create({
    txt: {
        fontSize: hp('2.5%'),
        fontWeight: 'bold'
    },
})