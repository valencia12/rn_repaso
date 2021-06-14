import React, {useState, useEffect} from 'react';
import { StyleSheet, Alert, View, FlatList, Button} from 'react-native';
import { useState } from 'react';


const width = Dimensions.get('window').width 
const crearDialogo = () => Alert.alert(
  'Titulo',
  'Subtitulo o mensajes que podemos agregar a este dialogo..'
  [
    {
      text: 'Canelar',
      onPress: ()=> {},
      style: "cancel",
    },
    {
      text: 'Aceptar',
      onPress: () => console.log('boton presionado')
    }
  ],
  {cancelable: false},
)

export default function App() {
  const [modal, setModal] = setState(false)
  
  return (
    <View>
      <Button title = "Abrir dialogo" onPress = {crearDialogo}/>
    </View>
  );

}

const styles = StyleSheet.create({
  center:{
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
