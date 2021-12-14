import React, { useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import * as Yup from 'yup';
import FormFiledCustom from '../components/forms/FormFiledCustom';
import FormCustom from '../components/forms/FormCustom';
import FormBtnSubmit from '../components/forms/FormBtnSubmit';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Fontisto';
import { registerUser } from '../api/users';
import { SnackBarErrorOrOk } from '../utils/SnackBar';
import LayoutAcount from '../components/shared/LayoutAcount';
//import Icon from 'react-native-vector-icons/MaterialIcons';
// import IconAdd from 'react-native-vector-icons/AntDesign';

//*****validations*****
const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('نام و نام خانوادگی الزامی میباشد'),
    email: Yup.string().required('این فیلد الزامی میباشد').email('ایمیل معتبر نمی باشد'),
    password: Yup.string().required('این فیلد لزامی میباشد')
        .min(4, 'کلمه ی عبور نباید کمتر از 4 کاراکتر باشد'),
    passwordConfirmation: Yup.string().required("تکرار رمز عبور الزامی میباشد")
        .oneOf([Yup.ref('password'), null], "کلمه های عبور باید یکسان باشند"),
});

const SignUpScreen = ({ navigation }) => {
    // const [getcontentSnack, setcontentSnack] = useState({ type: '', txt: '' });
    // const [visableSnack, setVisableSnack] = useState(false);


    //***********snack bar
    // const message = () => {
    //     setVisableSnack(true);
    //     //console.log('1', visableSnack);

    //     setTimeout(() => {
    //         setVisableSnack(false);
    //         //console.log('in:', visableSnack);

    //     }, 8000);
    // }

    //********handle btn ozvit
    const handleUserRegistration = async (user) => {

        // try {
            //payam  wait dar hal ertebat ba server

            // const status = await registerUser(user);

            // message();

            // if (status === 201) {
                
            //     setcontentSnack({ txt: 'ثبت نام با موفقیت انجام شد', type: 'ok' });

                navigation.navigate('Login',{successRegister:true});

                


            // }
            // else {
                //show error
                // console.log('server error');
                // setcontentSnack({ txt: 'ثبت نام با شکست مواجه شد مجدد امتحان کنید', type: 'Error' });


                


                // navigation.navigate('Login');
        //     }

        // }
        // catch (err) {
        //     console.log(err);
        // }
    }


    //const navigation = useNavigation();

    return (

        <View style={{ flex: 1 }}>
            {/* {visableSnack ? (
                <SnackBarErrorOrOk Message={getcontentSnack.txt} Type={getcontentSnack.type} />
            ) : null} */}
            <LayoutAcount typeUi='SignUp' menuClik={() => navigation.navigate("Login")}>



                <FormCustom
                    initialValues={{ fullname: "", email: "", password: "", passwordConfirmation: "" }}
                    onSubmit={(user) => {
                        console.log(user);
                        handleUserRegistration(user);
                    }
                    }
                  
                    // validationSchema={validationSchema}
                >
                    {/* inputs custom shamle errormessage */}
                    <FormFiledCustom
                        placeholder="نام و نام خانوادگی "
                        autoCorrect={false}//chize ke minivisam ro eslah nakone
                        icon="email"
                        placeholderTextColor="lightgray"
                        name="fullname"
                    />
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
                    <FormFiledCustom
                        placeholder="تکرار رمز عبور "
                        autoCorrect={false}//chize ke minivisam ro eslah nakone
                        icon="lock-open"
                        placeholderTextColor="lightgray"
                        secureTextEntry={true}
                        name="passwordConfirmation"

                    />



                    {/*image in form  */}
                    {/* <Image source={require('./../assets/image/splash.png')}
    style={{
        backgroundColor:'red',
        resizeMode:'contain',
         width: wp('80%'),
        height: hp('16%'), marginTop: hp('5%')
    }} /> */}

                    {/* <View style={{ width:wp('80%'),height:hp('20%'),  justifyContent: "center" }}>
  

       <Icon name="coffeescript" color="#fff" size={hp('5%')} />   
      <Icon name="java" color="#fff" size={hp('5%')} />  
</View> */}

                    {/* btn custtom */}
                    <FormBtnSubmit title="ثبت نام" style={styles.btn} />


                </FormCustom>
            </LayoutAcount>

        </View>

    )
}
export default SignUpScreen;
const styles = StyleSheet.create({
    btn: {
        // marginLeft:wp('50%'),
        marginTop: hp('10%'),
        width: wp('60%'),
  
        borderRadius: 20,
       // marginRight:wp('6%'),
       // alignContent: 'center',
    }
})












//coffeescript   java     >>>>>>>  Fontisto

//cafe-sharp  ios-cafe  >>>>>>>  Ionicons

//coffee  >>>>>>> MaterialCommunityIcons
//emoji-food-beverage >>>>>>>  MaterialIcons
//cup >>>>>>>> SimpleLineIcons

