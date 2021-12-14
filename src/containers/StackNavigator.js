import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabsNavigator from './BottomTabsNavigator';
import OrderNowScreen from '../screens/OrderNowScreen';
import ScreenNoIternet from '../screens/ScreenNoIternet';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {

    return (

        // ********* stack navigation is navigtion parent **********
        <Stack.Navigator screenOptions={{ headerShown: false }}>


            <Stack.Screen name="Splash" component={SplashScreen} />
            {/* <Stack.Screen name="Loading" component={LoadingScreen} /> */}
            <Stack.Screen name="SingUp" component={SignUpScreen} />
            <Stack.Screen name="Login" component={LoginScreen}
            initialParams={{successRegister:false}} />
         
            <Stack.Screen name="Home" component={BottomTabsNavigator} />
     
        
            <Stack.Screen name="Order" component={OrderNowScreen} />
            <Stack.Screen name="Internet" component={ScreenNoIternet} />



            {/* <Stack.Screen name="Snack" component={SnackBar} /> */}
        </Stack.Navigator>
    )
}
export default StackNavigator;