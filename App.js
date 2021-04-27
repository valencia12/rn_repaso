import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';


const Texto = () =>{
  /*Para hacer que cambie el texto hay que manderla la funcion como propiedad*/
 /*Se usara el componenete text como componente papa*/
 
 const [texto, setTexto] = useState("Hola mundo!") 
 const updateText = () =>{
  setTexto("Adios :D")
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
