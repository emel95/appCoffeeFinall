import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Fontisto';


const LayoutAcount = ({ typeUi, children, menuClik }) => {

    //const [visibleUi, setVisibleUi] = useState(typeUi);



    //*************click menu

    const handelmenuitem = (visibleUi) => {
        if (typeUi !== visibleUi) {
            console.log('ok');
            menuClik();
            setVisibleUi(visibleUi)
            // setclick(true);
        }
        // typeUi !== visableUi && menuClik;
    }


    return (
        <View style={{ flex: 1,justifyContent:'center' }}>

            {/* content Right */}
            <View style={styles.topInContentsTexts}>

                <Icon name="java" color="#fff" size={hp('14%')} />
                {/* top Right  content text */}

                <Text style={styles.textTitleRight}>Welcome back </Text>
                <Text style={styles.textSubtitleRight}>A mide register of recuecty{'\n'}
                    coffee true and fjmnhg hghg</Text>
            </View>


            {/* navar amode left for menu */}
            {/* <View style={styles.navarLeftMenu}> */}

                {/* sign in */}
                {/* <TouchableOpacity style={styles.touch}
                  
                    onPress={() => {
                        setVisibleUi('login');

                        console.log(visibleUi);

                        { typeUi !== visibleUi && menuClik() };
                        { typeUi !== visibleUi && setVisibleUi('SignUp') };
                    }}
                >
             
                    <Text style={[styles.txtLeftMenu,
                    visibleUi === 'login' ? styles.visibleStyle : null]}>
                        Sign in</Text>
                </TouchableOpacity> */}


                {/* sign up */}
                {/* <TouchableOpacity style={styles.touch} onPress={() => {
                    setVisibleUi('SignUp');
                    console.log(visibleUi);
                    { typeUi !== visibleUi && menuClik() };
                    { typeUi !== visibleUi && setVisibleUi('login') };
                }}>
             
                    <Text style={[styles.txtLeftMenu,
                    visibleUi === 'SignUp' ? styles.visibleStyle : null]}>
                        Sign Up</Text>
                </TouchableOpacity> */}

            {/* </View> */}


            {/* right content for showe items signin or signup */}
            <View style={styles.contentRight}>

                {children}

            </View>

            {/* {visableUi === 'login' && (
                    //navigation.navigate("Login")
                   <LoginScreen onPress={() => navigation.navigate("Home")} />
                    //  <LoginScreen onPress={() =>SnackBar}  />
                )} */}
            {/* {visableUi === 'SignUp' && (
                     //navigation.navigate("SingUp")
                    <SignUpScreen onPress={() => navigation.navigate("Home")} />
                )} */}




        </View>
    );
}
export default LayoutAcount;

const styles = StyleSheet.create({
    //Math.round(wp('38%') + hp('20%')) / 2
    navarBrowneBottom: {
        marginTop: hp('68%'),
        backgroundColor: '#a75b3b',
        height: hp('8%'),
        width: wp('100%')
    },
    textSubtitleRight: {
        lineHeight: hp('3.5%'),
        color: 'lightgray',
        fontSize: hp('2%')
    },
    textTitleRight: {
        lineHeight: hp('9.5%'),
        color: 'gray',
        fontSize: hp('3%')
    },
    topInContentsTexts: {
       
        alignItems: 'center',
        paddingTop: hp('6%'),
        //paddingLeft: wp('15%'),
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: '#3e2821'
    },
    navarLeftMenu: {

        //left:wp('5%'),
        alignSelf: 'flex-start',
        justifyContent: 'space-evenly',
        width: wp('17%'),
        height: hp('100%'),
        //backgroundColor: '#a75b3b',
       backgroundColor: '#723318',
       
       borderBottomLeftRadius: wp('0%'),
       borderBottomRightRadius: wp('70%'),
       borderTopRightRadius: wp('70%'),
       borderTopLeftRadius: wp('0%'),
       borderBottomStartRadius: wp('0%'),
       borderBottomEndRadius: wp('85%'),
       borderTopEndRadius: wp('85%'),
       borderTopStartRadius: wp('0%'),


        position: 'absolute',
        zIndex: 4

    },
    touch: {
        // alignItems: 'center',
        // width: wp('25%'),
        //height: hp('100%'),
        alignContent: 'center',
        //height:hp('35%'),
        // backgroundColor: 'green',
        transform: [{ rotate: '270deg' }],
        // justifyContent: 'flex-end'
    },
    txtLeftMenu: {
        // width: wp('20%'),
        width: wp('25%'),
        textAlign: 'center',
        // width: wp('20%'),
        //paddingVertical: hp('2%'),
        color: '#fff',
        backgroundColor: '#a75b3b',
        fontSize: hp('2%'),
        fontWeight: 'bold',


    },
    contentRight: {
       alignItems:'center',
        backgroundColor: '#3e2821',
        height: hp('60%'),
        width: wp('100%'),
        //alignItems: 'flex-end',
        top: hp('40%'),
        paddingLeft: wp('5%'),
        paddingTop: hp('5%'),
        position: 'absolute',
        zIndex: 2
        // alignItems: 'center'
    },
    visibleStyle: {
        
        height: hp('13%'),
        width: wp('28%'),
        // borderRadius:55,
        borderRadius: Math.round(wp('28%') + hp('13%')) / 2,
        paddingTop: hp('5%'),
        backgroundColor: '#a75b3b',
    }


})


