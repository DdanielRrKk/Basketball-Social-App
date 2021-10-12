import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

//=================TEST
import CircleChart from '../../components/misc/circleChart';
//=================TEST

export default function EventScreen({ navigation }){
    return(
        <View style={styles.container}>
            <CircleChart 
                //ProgressPercentage={25}
                Size={150}
                StrokeWidth={10} 
                Text='test'
                TextSize={16}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});