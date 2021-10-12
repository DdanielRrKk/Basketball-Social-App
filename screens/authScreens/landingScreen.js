import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Logo from '../../assets/logo/basketeer.png';
import AuthButton from '../../components/misc/authButton';



export default function LandingScreen({ navigation }){
    const openSigninScreen = () => navigation.push('SigninScreen');
    const openSignupScreen = () => navigation.push('SignupScreen');
 
    return(
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={Logo}/>
            </View>

            <Text style={styles.title}>Welcome to Basketeer</Text>

            <Text style={{marginBottom: 20}}>Basketball social app for all the hoopers around the world</Text>
            <Text style={{marginBottom: 20}}>The creator of Basketeer is Daniel Kostov</Text>

            <View style={styles.buttonsContainer}>
                <AuthButton 
                    title='SIGN UP'
                    pressHandler={openSignupScreen}/>

                <AuthButton 
                    title='SIGN IN'
                    pressHandler={openSigninScreen}/>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title:{
        fontSize: 20,
        marginBottom: 10
    },

    imageContainer:{
        height: '35%',
        width: '100%',
        marginBottom: 40
    },

    image:{
        height: '100%',
        width: '100%'
    },

    buttonsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'flex-end'
    },
});