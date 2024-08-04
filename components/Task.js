import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Task({text}) {

  return (
    <View style={styles.item}>

        <Text>{text}</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    item:{
        backgroundColor:'aliceblue',
        padding:10,
        margin: 5,
        textAlign: "center",
        fontWeight: "200",
        fontSize:200,
    }
})
