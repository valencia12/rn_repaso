import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

const Texto = () =>{
  /*Para hacer que cambie el texto hay que manderla la funcion como propiedad*/
 
  const [texto, setTexto] = useState("Hola mundoo")
   const updateText = () =>{
    setTexto('Adios mundito')
  }
  return(  
    <Text onPress={updateText} >{texto}</Text>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
     <Texto/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
