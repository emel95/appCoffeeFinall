import http from './index';
import AsyncStorage from '@react-native-async-storage/async-storage';


//***********ozvit user 
export const registerUser = async (user) => {
    try {
        // const { data } = await http.post(`${http.url}/register`, JSON.stringify(user));
        const { status } = await http.post(
            `${http.url}/register`,
            JSON.stringify(user)
        );
        console.log(status);
        return status;
    }
    catch (err) {
        console.log(err);
    }
}

//*********logi user
export const loginUser = async (user) => {
    try {
        const { data, status } = await http.post(
            `${http.url}/login`,
            JSON.stringify(user)
        );
        //console.log("Data Is >>>>",data);
        // console.log("status Is >>>>",status);
        await AsyncStorage.setItem("token", JSON.stringify(data.token));
        await AsyncStorage.setItem("userId",JSON.stringify(data.userId));
       // const token = await AsyncStorage.getItem("token");
        //console.log(token);
        return status;
    }
    catch (err) {
        console.log(err);
    }
}