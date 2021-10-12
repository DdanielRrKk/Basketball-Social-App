import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';



export default function SearchItem({ isMainUser, account, openPersonsProfileHandler, openProfileHandler }){                            

    if(isMainUser){
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.card}
                    onPress={() => openProfileHandler()}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.userImage}
                            source={{uri: account.userPhoto}}/>
                    </View>
    
                    <Text style={styles.userName}>{account.username}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.card}
                onPress={() => openPersonsProfileHandler(account.userName)}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.userImage}
                        source={{uri: account.userPhoto}}/>
                </View>

                <Text style={styles.userName}>{account.username}</Text>
            </TouchableOpacity>
        </View>
    );
};



const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
    },

    card:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 10
    },

    imageContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },

    commentContainer:{
        flex: 1
    },

    userImage:{
        width: 40,
        height: 40,
        borderRadius: 20
    },

    userName:{
        fontSize: 16,
        fontWeight: 'bold'
    },
})