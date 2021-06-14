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
        {key: 1},
        {key: 2},
        {key: 3},
        {key: 4},
        {key: 5},
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
  },
  input:{
    height: 40,
    width: width,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    textAlign: 'center'
  },

  
});
