import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [escolha, setEscolha] = useState(1);

  function um(){
    setEscolha(1)
  }
  function dois(){
    setEscolha(2)
  }


  function renderIf(){
    let renderizar;
    if(escolha == 1){
      renderizar = <Comp01 />;
    }else{
      renderizar = <Comp02 />;
    }
    return (
      renderizar
    )
  }
  return (
    <View style={styles.container}>
      <Text>=======================================</Text>

      <Text>Testando com operador ternário (o if feio)</Text>
      {escolha == 1 ? <Comp01 /> : <Comp02 />}
      
      <Text>=======================================</Text>

      <Text>Testando com if/else</Text>
      {renderIf()}
      
      <Text>=======================================</Text>
      
      <Button 
        title='UM'
        onPress={ um }
      />
      <Text>=======================================</Text>
      <Button 
        title='DOIS'
        onPress={ dois}
      />

      <Text>=======================================</Text>
      <StatusBar style="auto" />
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



function Comp01() {
 return (
  <View>
    <Text>comp01</Text>
  </View>
  );
}
function Comp02() {
 return (
  <View>
    <Text>comp02</Text>
  </View>
  );
}
