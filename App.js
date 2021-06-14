import React, {useState, useEffect} from 'react';
import { StyleSheet, ActivityIndicator, View, FlatList} from 'react-native';
import { useState } from 'react';


const width = Dimensions.get('window').width 


export default function App() {
 
  


  return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color ="#0000ff" />
    </View>
    //Importante tener un KeyExtractor and, render Item
  );
}

const styles = StyleSheet.create({
  center:{
    {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  view:{
    flex:0.5
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10
  },
  input:{
    height: 40,
    width: width,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    textAlign: 'center'
  },
  item:{
    padding:10,
    fontSize:22,
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth:1
  }

  
});
