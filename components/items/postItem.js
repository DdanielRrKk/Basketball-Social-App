import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Video from 'react-native-video';

import { FontAwesome } from '@expo/vector-icons';



export default function PostItem({ 
                                post, 
                                openCommentsHandler,
                                openProfileHandler,
                                openRatePopupHandler }){

    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.headerLeft}
                        onPress={() => openProfileHandler(post.username)}>
                        <Image
                            style={styles.userImage}
                            source={{uri: post.userPhoto}}/>

                        <Text style={styles.userName}>{post.username}</Text>
                    </TouchableOpacity>

                    <Video
                        style={styles.feedVideo}
                        source={{uri: post.video}}
                        controls={true}
                        ref={(ref) => { this.player = ref }}    // Store reference
                        onBuffer={this.onBuffer}                // Callback when remote video is buffering
                        onError={this.videoError}               // Callback when video cannot be loaded
                        />

                    <View style={styles.infoContainer}>
                        <View style={styles.scoreContainer}>
                            <Text>Score</Text>
                            <Text style={styles.score}>{post.score}</Text>
                        </View>

                        <View>
                            <TouchableOpacity onPress={() => openRatePopupHandler(post.username)}>
                                <FontAwesome 
                                    style={styles.ratingButton}
                                    name="star" />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => openCommentsHandler(post.username)}>
                                <FontAwesome 
                                    name="comment-o"
                                    size={24} />
                            </TouchableOpacity>

                            <Text>{post.commentsCount}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container:{
        flex: 1
    },

    card:{
        marginVertical: 16
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerLeft:{
        marginLeft: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },

    userImage:{
        width: 40,
        height: 40,
        borderRadius: 20
    },

    userName:{
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10
    },

    feedVideo:{
        width: '100%',
        height: '100%',
        marginVertical: 10,
    },

    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },

    infoContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 16
    },

    scoreContainer:{
        justifyContent: 'center',
        alignItems: 'center'
    },

    score:{
        fontSize: 24,
        fontWeight: '700'
    },

    ratingButton:{
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
    }
})