import React,{useState} from 'react'
import { View, Button, Text, TextInput, StyleSheet } from 'react-native'

const App=()=>
 {
  const [poids,setpoids]= useState();
  const [taille,settaille]= useState();
  const [Message,setMessage]= useState();

  return (
  <View style={styles.container}>
    <TextInput placeholder="Poids (kg)" onChangeText={(poids)=>setpoids(poids)} />
    <TextInput placeholder="Taille (m²)" onChangeText={(taille)=>settaille(taille)} />
    <Button title="Valider" onPress={ (Message)=>setMessage(poids / taille)} />
      { 
  
      /***** Start Condition State *****/
        Message!= null?
          Message < 16 ?
              <Text>Sévèrement maigre</Text>:
                Message > 17 && Message <18.5 ?
                  <Text>maigre</Text>:
                    Message < 25 ?
                      <Text>Normal </Text>:
                        Message > 24 && Message <30 ?
                              <Text>Surpoids </Text>:  
              <Text>Surpoids</Text> :
              <Text></Text>
              /***** End Condition State *****/
      }
      <Text>{Message}</Text>
  </View>
)
  }

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App ;