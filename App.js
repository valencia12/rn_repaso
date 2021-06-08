import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Button, TouchableHighlight } from 'react-native';
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
     <Text>Texto: {text} </Text>
     <TextInput style={styles.input}  
                placeholder='Write a message' 
                onChangeText = {t => setText(t)}
                defaultValue= {text}
      /> 

      <TouchableHighlight
        underlayColor={'#999'}
        activeOpacity={0.9}
        onPress={() => {
        setSubmit(text)
        alert('Texto enviado')
      }}>
      <Text>Aceptar</Text>
      </TouchableHighlight>
    
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
  input:{
    height: 40,
    width: width,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    textAlign: 'center'
  }
  
});
