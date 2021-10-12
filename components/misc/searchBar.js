import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function SearchBar({ value, changeHandler }){
    return(
        <View style={styles.search}>
            <TextInput
                value={value}
                placeholder='Search'
                onChangeText={changeHandler}/>
        </View>
    );
};

const styles = StyleSheet.create({
    search:{
        width: '90%',
        padding: 5,
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
    }
});