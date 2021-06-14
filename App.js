import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { useState } from 'react';


const width = Dimensions.get('window').width /*Aqui se obtiene el ancho del dispositivo con Dimensions.  */
//const {width, height} = Dimensions.get('window')

//Shadow Variable, tiene el mismo nombre las variables. Pero se toma el valor que hace referencia

//Buena practica no tener tantas, variables como shadows, por que no se confunde.
export default function App() {
  //Aqui se cambia, y se envia. Se actualiza y a la misma vez se actualiza 
  //U
  
  const [text, setText] = useState('Happy Snorlax')
  const [submit, setSubmit] = useState('')
  return (
    <View style={styles.container}>
      <FlatList style={style.container}
      data={[
        {key: '1', name:'Jorge'},
        {key: '2', name:'Miranda'},
        {key: '3', name:'Ruben'},
        {key: '4', name:'Valencia'},
        {key: '5', name:'Abri'},
        {key: '6', name:'Jorge'},
        {key: '7', name:'Miranda'},
        {key: '8', name:'Ruben'},
        {key: '9', name:'Valencia'},
        {key: '10', name:'Abri'},
        {key: '11', name:'Jorge'},
        {key: '12', name:'Miranda'},
        {key: '13', name:'Ruben'},
        {key: '14', name:'Valencia'},
        {key: '15', name:'Abri'},
      ]}
      renderItem={({item}) => <Text>{item.key}</Text>} 
      />
    
    </View>
    
  );
}

const styles = StyleSheet.create({
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
