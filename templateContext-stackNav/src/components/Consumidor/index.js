// Um componente React Native que consome o contexto
// ./src/components/Consumidor/index.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useMeuContexto } from '../../contexts/MeuContexto';

export default function Consumidor() {
  const { estadoGlobal, setEstadoGlobal, nome, setNome } = useMeuContexto();

  function atualizarEstado() {
    setEstadoGlobal(estadoGlobal+1);
    setNome(nome+1);
  }

  return (
    <View style={{marginTop:55}}>
      <Text>Nome: {nome}berto</Text>
      <Text>Estado Global: {estadoGlobal}</Text>
      <Button title="Atualizar Estado" onPress={atualizarEstado} />
    </View>
  );
}
