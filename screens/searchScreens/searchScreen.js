import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';

import SearchBar from '../../components/misc/searchBar';
import SearchAccountItem from '../../components/items/searchAccountItem';
import SearchGroupItem from '../../components/items/searchGroupItem';




export default function SearchScreen({ navigation }){
    const [searchData, setSearchData] = React.useState(null);
    const [searchValue, setSearchValue] = React.useState('');

    const [accountsFlag, setAccountsFlag] = React.useState(true);

    const changeSearchValueHandler = (value) => setSearchValue(value);

    const openPersonsProfileScreen = (username) => navigation.navigate('PersonsProfileScreen', {username: username});
    const openProfileScreen = () => navigation.navigate('Tabs', {screen: 'ProfileScreen'});
    const openGroupScreen = (group) => navigation.navigate('GroupScreen', {group: group});

    const filterAccountsHandler = () => setAccountsFlag(true);
    const filterGroupsHandler = () => setAccountsFlag(false);

    const filterSearchHandler = (item) => {
        if(accountsFlag) return (
            <SearchAccountItem 
                isMainUser={(item.username == currentUser.username)? true : false}
                account={item} 
                openPersonsProfileHandler={openPersonsProfileScreen}
                openProfileHandler={openProfileScreen}/>
        );

        return (
            <SearchGroupItem 
                group={item} 
                openGroupHandler={openGroupScreen}/>
        )
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <SearchBar 
                    value={searchValue}
                    changeHandler={changeSearchValueHandler}/>
            </View>

            <FlatList 
                style={styles.list}
                data={searchData}
                renderItem={({item}) => filterSearchHandler(item)}
                ListHeaderComponent={
                    <View style={styles.listContainer}>
                        <TouchableOpacity
                            style={accountsFlag ? styles.filterSelected : styles.filter}
                            onPress={filterAccountsHandler}>
                            <Text>Accounts</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity
                            style={!accountsFlag ? styles.filterSelected : styles.filter}
                            onPress={filterGroupsHandler}>
                            <Text>Groups</Text>
                        </TouchableOpacity>
                    </View>
                }/>
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
        justifyContent: 'center',
        alignItems: 'center',
    },

    backButton:{
        marginHorizontal: 10
    },

    searchBar:{
        flex: 1,
        marginHorizontal: 10,
        backgroundColor: 'white'
    },

    list:{
        width: '100%'
    },

    listContainer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 20
    },

    filter:{
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    filterSelected:{
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
    }
});