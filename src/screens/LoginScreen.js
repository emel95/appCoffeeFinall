import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';
import FormFiledCustom from '../components/forms/FormFiledCustom';
import FormCustom from '../components/forms/FormCustom';
import FormBtnSubmit from '../components/forms/FormBtnSubmit';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import LayoutAcount from '../components/shared/LayoutAcount';
import { loginUser } from '../api/users';
import { SnackBarErrorOrOk } from '../utils/SnackBar';


//*****validations*****
const validationSchema = Yup.object().shape({
    email: Yup.string().required('این فیلد الزامی هس').email('ایمیل معتبر نمیباشه'),
    password: Yup.string().required('این فیلد الزامی هس').min(4, 'نباید کمتر از 4 کاراکتر باشه').max(10, 'نباید بیشتر از 10 کاراکتر باشد'),
})



const LoginScreen = ({ navigation,route }) => {

   // const [getcontentSnack, setcontentSnack] = useState({ type: '', txt: '' });
   // const [visableSnack, setVisableSnack] = useState(false);

    //***********snack bar
    // const message = () => {
    //     setVisableSnack(true);

    //     setTimeout(() => {
    //         setVisableSnack(false);
    //     }, 8000);
    // }


    useEffect(() => {
        if (route.params.successRegister){
            message();
            //setcontentSnack({ txt: 'ثبت نام با موفقیت انجام شد', type: 'ok' });

        }
            
    }, [])


    //*********click btn vrod
    const handleUserLogin = async (user) => {
        // try {
        //     const status = await loginUser(user);
        //     if (status === 200) {

                //success mess
                navigation.reset({
                    index: 0,
                    routes: [{ name: "Home" }]
                })


            // } else {
                //faild mess
        //         message();
        //         setcontentSnack({ txt: 'نام کاربری یا رمز عبور نادرست میباشد', type: 'Error' });
        //     }
        // }
        // catch (err) {
        //     console.log(err);
        //     message();
        //     setcontentSnack({ txt: 'مشکلی در ارتباط با سرور رخ داده', type: 'Error' });
        // }
    }

    return (
        <View style={{ flex: 1 }}>

            {/* {visableSnack ? (
                <SnackBarErrorOrOk Message={getcontentSnack.txt} Type={getcontentSnack.type} />
            ) : null} */}
            <LayoutAcount typeUi='login' menuClik={() => navigation.navigate("SingUp")} >



                <FormCustom
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(user) => {
                        handleUserLogin(user);
                    }}
                    // validationSchema={validationSchema}
                >
                    {/* inputs custom shamle errormessage */}
                    <FormFiledCustom
                        placeholder="ایمیل"
                        autoCompleteType="email"
                        autoCorrect={false}
                        keyboardType="email-address"
                        icon="email"
                        name="email"
                        placeholderTextColor="lightgray"
                    />
                    <FormFiledCustom
                        placeholder="رمزعبور"
                        autoCompleteType="password"
                        autoCorrect={false}
                        icon="lock-open"
                        name="password"
                        placeholderTextColor="lightgray"
                        secureTextEntry
                    />
                    {/* btn custtom */}
                    <FormBtnSubmit title="ورود" style={styles.btn} />


                </FormCustom>



            </LayoutAcount>

        </View>
    )
}
export default LoginScreen;
const styles = StyleSheet.create({
    btn: {
        marginTop: hp('10%'),
        width: wp('60%'),
        // transform: [
        //     { perspective: 200 },
        //     { rotateY: '30deg' },
        //     //{skewX:'10deg'}
        // ],
        borderRadius: 20,
       // marginRight:wp('6%'),
       // alignContent: 'center',

    }
})