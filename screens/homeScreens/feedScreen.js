import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';

import PostItem from '../../components/items/postItem';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



export default function HomeScreen({ navigation }){
    const [feedData, setFeedData] = React.useState(null);
    const [moreFlag, setMoreFlag] = React.useState(false);
    const [filterFlag, setFilterFlag] = React.useState(false);
    const [rateFlag, setRateFlag] = React.useState(false);
    const [post, setPost] = React.useState(false);

    const openPlayScreen = () => navigation.navigate('Tabs', {screen: 'PlayScreen'});
    const openEventScreen = () => navigation.navigate('Tabs', {screen: 'EventScreen'});
    const openProfileScreen = () => navigation.navigate('Tabs', {screen: 'ProfileScreen'});

    const openPostCommentsScreen = (postUsername) => navigation.navigate('PostCommentsScreen', {username: postUsername});
    const openPersonsProfileScreen = (postUsername) => navigation.navigate('PersonsProfileScreen', {username: postUsername});
    
    const openNotificationsScreen = () => console.log('openNotificationsScreen');
    const openFilterPopup = () => setFilterFlag(true);
    const openRatePopup = () => setRateFlag(true);

    const openMorePopupHandler = (item) => {
        setPost(item);
        setMoreFlag(true);
    }

    const openEditPostScreen = () =>{
        closePopup();
        navigation.navigate('EditPostScreen', {image: post.photo, description: post.description, tags: post.tags});
    }
    const deletePostHandler = () =>{
        closePopup();
        console.log('deletePostHandler');
    }
    const closePopups = () => {
        setMoreFlag(false);
        setFilterFlag(false);
        setRateFlag(false);
    }


    return(
        <View style={styles.container}>

            {/* <Modal 
                transparent={true}
                visible={moreFlag}
                animationType='fade'
                onRequestClose={closePopup}>
                <TouchableOpacity 
                    style={styles.popupContainer}
                    onPress={closePopup}>
                    <View style={styles.popup}>
                        <TouchableOpacity 
                            style={styles.popupButton}
                            onPress={openEditPostScreen}>
                            <Text>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.popupButton}
                            onPress={deletePostHandler}>
                            <Text>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal> */}

            <Modal 
                transparent={true}
                visible={filterFlag}
                animationType='fade'
                onRequestClose={closePopups}>
                <TouchableOpacity 
                    style={styles.popupContainer}
                    onPress={closePopups}>
                    <View style={styles.popup}>
                        <Text>Filter</Text>

                        <TouchableOpacity 
                            style={styles.popupButton}
                            onPress={openEditPostScreen}>
                            <Text>Edit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.popupButton}
                            onPress={deletePostHandler}>
                            <Text>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>

            <Modal 
                transparent={true}
                visible={rateFlag}
                animationType='fade'
                onRequestClose={closePopups}>
                <TouchableOpacity 
                    style={styles.popupContainer}
                    onPress={closePopups}>
                    <View style={styles.popup}>
                        <Text>Rate</Text>

                        <View style={styles.ratingsContainer}>
                            <TouchableOpacity 
                                style={styles.ratingButton}
                                onPress={openEditPostScreen}>
                                <Text>5</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={styles.ratingButton}
                                onPress={openEditPostScreen}>
                                <Text>6</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={styles.ratingButton}
                                onPress={openEditPostScreen}>
                                <Text>7</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={styles.ratingButton}
                                onPress={openEditPostScreen}>
                                <Text>8</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={styles.ratingButton}
                                onPress={openEditPostScreen}>
                                <Text>9</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={styles.ratingButton}
                                onPress={openEditPostScreen}>
                                <Text>10</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>

            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity
                        style={styles.filterButton}
                        onPress={openFilterPopup}>
                        <Ionicons 
                            name="filter-outline" 
                            size={24} />
                    </TouchableOpacity>

                    <Text style={styles.title}>My Feed</Text>
                </View>

                <TouchableOpacity
                    style={styles.notifyButton}
                    onPress={openNotificationsScreen}>
                    <AntDesign 
                        name="bulb1" 
                        size={24} />
                </TouchableOpacity>
            </View>

            <FlatList 
                style={styles.list}
                data={feedData}
                renderItem={({item}) => (
                    <PostItem 
                        //isMainUser={(item.username == currentUser.username)? true : false}
                        isMainUser={true}
                        isFeed={true}
                        post={item} 
                        openPostCommentsHandler={openPostCommentsScreen}
                        openPersonsProfileHandler={openPersonsProfileScreen}
                        openProfileHandler={openProfileScreen}
                        openMorePopupHandler={openMorePopupHandler}/>
                )}/>
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
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerLeft:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    filterButton:{
        marginLeft: 20,
        alignSelf: 'flex-start'
    },

    title:{
        marginLeft: 40,
        alignSelf: 'flex-start',
        fontWeight: '600',
        fontSize: 24,
        fontFamily: 'sans-serif-light'
    },

    notifyButton:{
        marginRight: 20,
        alignSelf: 'flex-end'
    },

    list:{
        width: '100%'
    },

    popupContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },

    popup:{
        height: '25%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    popupButton:{
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        padding: 10,
        margin: 10,
    },

    ratingsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    ratingButton:{
        padding: 5,
        borderWidth: 1,
        borderRadius: 20,
    },
});