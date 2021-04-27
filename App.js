import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';


const Texto = ({style}) =>{
  /*Para hacer que cambie el texto hay que manderla la funcion como propiedad*/
 /*Se usara el componenete text como componente papa*/
 const text1 = "Hola mundo!!"
 const text2 = "Adios :D"

 const [texto, setTexto] = useState(text1) 

 const updateText = () =>{
  setTexto(text2)

  if(texto == text2){
    setTexto(text1)
  }
}
 return(
    <Text style={[styles.Texto, style]} onPress={updateText} >{texto}</Text>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
     <Texto style={styles.red}/>
     <Texto style={styles.green}/>
     <Texto style={styles.blue}/>
    </View>
  );
}

const styles = StyleSheet.create({
  Texto:{

    fontSize: 25,
    color: 'white',
    height: 100,
    width: 100
  },
  red:{ //3 + 2 + 1 = 6
    flex: 1,
    backgroundColor: 'red',
  },
  green:{
    flex: 2,
    backgroundColor: 'green',
  },
  blue:{
    flex: 3,
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    flexDirection: 'row-reverse',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
