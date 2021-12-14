
import React, { useEffect } from 'react';
import { I18nManager } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from './src/containers/StackNavigator';
import RNBootSplash from "react-native-bootsplash";
import { Provider } from 'react-redux';
import { NetworkProvider } from 'react-native-offline';
import {store} from './src/redux/store'

//I18nManager.forceRTL(true);
// I18nManager.isRTL


const App = () => {

  useEffect(() => {
    //? splash Hide
    RNBootSplash.hide({ fade: true });
  })
  return (
    <NetworkProvider>
      <NavigationContainer>
        
        <Provider store={store}>
          <StackNavigator />
        </Provider>


      </NavigationContainer>
    </NetworkProvider>


  );
};


export default App;

