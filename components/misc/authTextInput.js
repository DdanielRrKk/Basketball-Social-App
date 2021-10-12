import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function AuthTextInput({ isPassword, placeholder, value, changeHandler }){
    if(isPassword) {
        return(
            <View 
                style={styles.entry}
                width={'90%'}>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    secureTextEntry={true}
                    onChangeText={changeHandler}/>
            </View>
        );
    }
    
    return(
        <View 
            style={styles.entry}
            width={'90%'}>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={changeHandler}/>
        </View>
    );
};

const styles = StyleSheet.create({
    entry:{
        padding: 10,
        margin: 20,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
    }
});