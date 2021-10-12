import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



export default function ProfileScreen({ navigation }){
    const [user, setUser] = React.useState(null);

    const openSettingsScreen = () => navigation.navigate('MainSettingsScreen');
    const openEditProfileScreen = () => navigation.navigate('EditProfileScreen', {image: user.userPhoto, name: user.name, description: user.description});

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.settingsButton}
                    onPress={openSettingsScreen}>
                    <AntDesign 
                        name="setting" 
                        size={24} />
                </TouchableOpacity>
            </View>

            <View style={styles.userDataContainer}>
                <View style={styles.userData}>
                    <Image style={styles.userImage}/>

                    <View style={styles.userDetails}>
                        <Text>{user.username}</Text>
                        
                        <Text>{user.name}</Text>

                        <Text>{user.username}</Text>
                    </View>
                </View>

                <Text style={styles.userDescription}>{user.description}</Text>

                <View style={styles.userInfoContainer}>
                    <View style={styles.info}>
                        <Text>{user.followersCount}</Text>
                        
                        <Text>Followers</Text>
                    </View>

                    <View style={styles.info}>
                        <Text>{user.followingCount}</Text>
                        
                        <Text>Following</Text>
                    </View>

                    <TouchableOpacity onPress={openEditProfileScreen}>
                        <Feather 
                            name="edit-2" 
                            size={24} />
                    </TouchableOpacity>

                </View>
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

    header:{
        marginTop: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    settingsButton:{
        marginRight: 20
    },

    userDataContainer:{
        flex: 1,
        width: '100%'
    },

    userData:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    userImage:{
        height: 100,
        width: 100,
        borderRadius: 50,
    },

    userDetails:{
        justifyContent: 'center',
        alignItems: 'center',
    },

    userDescription:{
        width: '100%',
        margin: 20
    },

    userInfo:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    info:{
        alignItems: 'center'
    },
});