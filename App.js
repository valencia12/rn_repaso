import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { useState } from 'react';


const width = Dimensions.get('window').width /*Aqui se obtiene el ancho del dispositivo con Dimensions.  */
//const {width, height} = Dimensions.get('window')

//Shadow Variable, tiene el mismo nombre las variables. Pero se toma el valor que hace referencia

//Buena practica no tener tantas, variables como shadows, por que no se confunde.


export default function App() {
 
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true) 

  //{} contiene los efectos,[] contiene la data
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      setUsers(data)
      setLoading(false)
    })
  }, [])

  if(loading){
    return <View><Text>Loading... </Text></View>
  }


  return (
    <View style={styles.container}>
      <Text>Loaded</Text>
      <FlatList 
        data = {users}
        rendetItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor = {item => String(item.id)}
      />
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
