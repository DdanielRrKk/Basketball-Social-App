import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

//=================TEST
import CircleChart from '../../components/misc/circleChart';
//=================TEST

export default function EventScreen({ navigation }){
    return(
        <View style={styles.search}>
            <CircleChart 
                Progress={25}
                Size={150}
                Radius={100}/>
        </View>
    );
};

const styles = StyleSheet.create({
    
});