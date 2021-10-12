import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';

import Logo from '../../assets/logo/basketeer.png';
import AuthTextInput from '../../components/misc/authTextInput';
import AuthButton from '../../components/misc/authButton';

import { ValidateEmpty } from '../../helpers/validations';
import { SignIn } from '../../database/authServices';



export default function SigninScreen({ navigation }){
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    const [emailError, setEmailError] = React.useState(null);
    const [passwordError, setPasswordError] = React.useState(null);

    const changeEmailHandler = (value) => setEmail(value);
    const changePasswordHandler = (value) => setPassword(value);

    const ValidateEmailField = (value) => {
        if(ValidateEmpty(value)){setEmailError('Required'); return true;}
        setEmailError(null);
        return false;
    }

    const ValidatePasswordField = (value) => {
        if(ValidateEmpty(value)){setPasswordError('Required'); return true;}
        setPasswordError(null);
        return false;
    }

    const signinHandler = () =>{
        let errorCount = 0;
        if(ValidateEmailField(email)) errorCount++;
        if(ValidatePasswordField(password)) errorCount++;
        if(errorCount != 0) return;

        SignIn(email, password);
    }
    const openSignupScreen = () => navigation.push('SignupScreen');
    const openForgotPasswordScreen = () => console.log('ForgotPasswordScreen');

    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={Logo}/>
            </View>

            <Text style={styles.title}>Log into the App</Text>

            <AuthTextInput
                placeholder='Email'
                changeHandler={changeEmailHandler}/>
            {emailError && <Text style={styles.error}>{emailError}</Text>}

            <AuthTextInput
                placeholder='Password'
                isPassword={true}
                changeHandler={changePasswordHandler}/>
            {passwordError && <Text style={styles.error}>{passwordError}</Text>}

            <TouchableOpacity 
                style={styles.forgotPass}
                onPress={openForgotPasswordScreen}>
                <Text>Forgot password?</Text>
            </TouchableOpacity>

            <View style={styles.buttonsContainer}>
                <AuthButton 
                    title='SIGN UP'
                    pressHandler={openSignupScreen}/>

                <AuthButton 
                    title='SIGN IN'
                    pressHandler={signinHandler}/>
            </View>
        </KeyboardAvoidingView>
    );
};



const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: '100%',
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

    forgotPass:{
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'flex-start'
    },

    buttonsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    error:{
        color: 'red'
    }
});