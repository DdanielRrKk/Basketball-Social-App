import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView } from 'react-native';

import AuthTextInput from '../../components/misc/authTextInput';
import AuthButton from '../../components/misc/authButton';

import {
    ValidateEmpty, 
    ValidateMaxLength,
    ValidateMinLength, 
    ValidateSpecialChars, 
    ValidateEmail, 
    ValidatePasswords} from '../../helpers/validations';

import { SignUp } from '../../database/authServices';
import { SaveUser } from '../../database/storeServices';



export default function SignupScreen({ navigation }){

    const [firstName, setFirstName] = React.useState(null);
    const [lastName, setLastName] = React.useState(null);
    const [username, setUsername] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [confirmPassword, setConfirmPassword] = React.useState(null);

    const [firstNameError, setFirstNameError] = React.useState(null);
    const [lastNameError, setLastNameError] = React.useState(null);
    const [usernameError, setUsernameError] = React.useState(null);
    const [emailError, setEmailError] = React.useState(null);
    const [passwordError, setPasswordError] = React.useState(null);
    const [confirmPasswordError, setConfirmPasswordError] = React.useState(null);

    const changeFirstNameHandler = (value) => setFirstName(value);
    const changeLastNameHandler = (value) => setLastName(value);
    const changeUsernameHandler = (value) => setUsername(value.toLowerCase());
    const changeEmailHandler = (value) => setEmail(value);
    const changePasswordHandler = (value) => setPassword(value);
    const changeConfirmPasswordHandler = (value) => setConfirmPassword(value);

    const ValidateFirstNameField = (value) => {
        if(ValidateEmpty(value)){setFirstNameError('Required'); return true;}
        if(ValidateMinLength(value, 1)){ setFirstNameError('First name should contain more than 1 letter'); return true; }
        if(ValidateMaxLength(value, 31)){ setFirstNameError('First name should contain less than 31 letters'); return true; }
        if(ValidateSpecialChars(value)){ setFirstNameError('First name shouldnt contain special characters'); return true; }
        setFirstNameError(null);
        return false;
    }
    
    const ValidateLastNameField = (value) => {
        if(ValidateEmpty(value)){setLastNameError('Required'); return true;}
        if(ValidateMinLength(value, 2)){ setLastNameError('Last name should contain more than 2 letter'); return true; }
        if(ValidateMaxLength(value, 31)){ setLastNameError('Last name should contain less than 31 letters'); return true; }
        if(ValidateSpecialChars(value)){ setLastNameError('Last name shouldnt contain special characters'); return true; }
        setLastNameError(null);
        return false;
    }
    
    const ValidateUsernameField = (value) => {
        if(ValidateEmpty(value)){setUsernameError('Required'); return true;}
        if(ValidateMinLength(value, 3)){ setUsernameError('Username should contain more than 3 letters'); return true; }
        if(ValidateMaxLength(value, 35)){ setUsernameError('Username should contain less than 35 letters'); return true; }
        setUsernameError(null);
        return false;
    }
    
    const ValidateEmailField = (value) => {
        if(ValidateEmpty(value)){setEmailError('Required'); return true;}
        if(ValidateEmail(value)){ setEmailError('Invalid Email'); return true; }
        setEmailError(null);
        return false;
    }
    
    const ValidatePasswordField = (value) => {
        if(ValidateEmpty(value)){setPasswordError('Required'); return true;}
        if(ValidateMinLength(value, 4)){ setPasswordError('Password should contain more than 4 letters'); return true; }
        if(ValidateMaxLength(value, 133)){ setPasswordError('Password should contain less than 133 letters'); return true; }
        setPasswordError(null);
        return false;
    }
    
    const ValidateConfirmPasswordField = (value1, value2) => {
        if(ValidateEmpty(value2)){setConfirmPasswordError('Required'); return true;}
        if(ValidatePasswords(value1, value2)){ setConfirmPasswordError('Password confirmation was unsuccessful'); return true; }
        setConfirmPasswordError(null);
        return false;
    }

    const signupHandler = () =>{
        let errorCount = 0;
        if(ValidateFirstNameField(firstName)) errorCount++;
        if(ValidateLastNameField(lastName)) errorCount++;
        if(ValidateUsernameField(username)) errorCount++;
        if(ValidateEmailField(email)) errorCount++;
        if(ValidatePasswordField(password)) errorCount++;
        if(ValidateConfirmPasswordField(password, confirmPassword)) errorCount++;
        if(errorCount != 0) return;

        const uid = SignUp(email, password);
        SaveUser(uid, firstName, lastName, username, email);
    }
    const backHandler = () => navigation.goBack();

    return(
        <KeyboardAvoidingView style={styles.container}> 
            <ScrollView>
                <View style={styles.containerView}>
                    <Text style={styles.title}>Sign Up your Account</Text>
                    

                    <AuthTextInput 
                            placeholder='First name'
                            changeHandler={changeFirstNameHandler}/>
                    {firstNameError && <Text style={styles.error}>{firstNameError}</Text>}

                    <AuthTextInput 
                            placeholder='Last name'
                            changeHandler={changeLastNameHandler}/>
                    {lastNameError && <Text style={styles.error}>{lastNameError}</Text>}

                    <AuthTextInput 
                        placeholder='Username'
                        changeHandler={changeUsernameHandler}/>
                    {usernameError && <Text style={styles.error}>{usernameError}</Text>}

                    <AuthTextInput 
                        placeholder='Email'
                        changeHandler={changeEmailHandler}/>
                    {emailError && <Text style={styles.error}>{emailError}</Text>}

                    <AuthTextInput 
                        placeholder='Password'
                        isPassword={true}
                        changeHandler={changePasswordHandler}/>
                    {passwordError && <Text style={styles.error}>{passwordError}</Text>}

                    <AuthTextInput 
                        placeholder='Confirm Password'
                        isPassword={true}
                        changeHandler={changeConfirmPasswordHandler}/>
                    {confirmPasswordError && <Text style={styles.error}>{confirmPasswordError}</Text>}

                    <View style={styles.buttonsContainer}>
                        <AuthButton 
                            title='CANCEL'
                            pressHandler={backHandler}/>

                        <AuthButton 
                            title='SIGN UP'
                            pressHandler={signupHandler}/>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};



const styles = StyleSheet.create({
    containerView:{
        flex: 1,
        alignItems: 'center',
        marginVertical: 40
    },

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    title:{
        fontSize: 20,
    },

    entryContainer:{
        flexDirection: 'row',
    },

    buttonsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    error:{
        color: 'red'
    },
});