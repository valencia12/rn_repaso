import React from 'react';
import { StyleSheet, Text, View, FlatList, SectionList} from 'react-native';
import { useState } from 'react';


const width = Dimensions.get('window').width /*Aqui se obtiene el ancho del dispositivo con Dimensions.  */
//const {width, height} = Dimensions.get('window')

//Shadow Variable, tiene el mismo nombre las variables. Pero se toma el valor que hace referencia

//Buena practica no tener tantas, variables como shadows, por que no se confunde.
const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
export default function App() {
 
  
  const [text, setText] = useState('Happy Snorlax')
  const [submit, setSubmit] = useState('')
  return (
    <View style={styles.container}>
      <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
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
