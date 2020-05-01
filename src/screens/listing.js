import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ListItem from '../components/List_item';


const ListScreen = () => {
    const friends = [
        {name: 'friend #1', age: '12'},
        {name: 'friend #2', age: '17'},
        {name: 'friend #3', age: '39'},
        {name: 'friend #4', age: '36'},
        {name: 'friend #5', age: '48'},
        {name: 'friend #6', age: '36'},
        {name: 'friend #7', age: '78'},
        {name: 'friend #8', age: '44'},
        {name: 'friend #9', age: '22'},
        ];
        
        return <FlatList 
        // horizontal
        // showsHorizontalScrollIndicator={false}
        keyExtractor = {(friends) => friends.name}
        data={friends}
        renderItem={({item}) => {
        return(
            <View>
            <Text style={styles.textItemStyle}>{item.name} - {item.age}</Text>
            <View style={styles.bottomLineStyle}></View>
            </View>
        );
        }}/>

};

const styles = StyleSheet.create({

    textItemStyle: {
        marginVertical: 10,
        fontSize: 16
    },
    bottomLineStyle: {
        height: 1,
        backgroundColor: Colors.black
    }

});

export default ListScreen

