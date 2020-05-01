import React from 'react';
import {Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const homeScreen = (props) => {
    console.log(props)
    return (
    <View style={styles.parrentView}>
        <Button title="Go to Listing" onPress={() => props.navigate("Listing")} />
        <TouchableOpacity onPress={() => console.log("TouchableOpacity pressed!")}>
            <Text style={styles.Btn2Style}>Go to Modren Listing</Text>
        </TouchableOpacity>
    </View>
        );

}

const styles = StyleSheet.create({

    parrentView:{
        margin: 16,
    },
    Btn2Style: {
        marginTop: 16,
        backgroundColor: '#008000',
        color: Colors.white,
        borderRadius: 5,
        padding:10,
        textAlign: 'center',
        paddingTop: 8,
        fontSize: 14,
     }

});

export default homeScreen