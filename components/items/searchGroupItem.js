import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';



export default function SearchItem({ group, openGroupHandler }){
    return(
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.card}
                onPress={() => openGroupHandler()}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{uri: group.photo}}/>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{group.name}</Text>

                    <Text>{group.description}</Text>
                </View>
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

    image:{
        width: 40,
        height: 40,
        borderRadius: 20
    },

    infoContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },

    name:{
        fontSize: 16,
        fontWeight: 'bold'
    },
})