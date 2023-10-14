import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useMeuContexto } from '../../contexts/MeuContexto';

export default function Sobre(){
    const { estadoGlobal, setEstadoGlobal, nome, setNome } = useMeuContexto();

    function atualizarEstado() {
      setEstadoGlobal(estadoGlobal+1);
      setNome(nome+1);
    }
    return(
        // <View style={styles.container}>
        //     <Text>Tela Sobre</Text>
        // </View>
            <View style={{marginTop:55}}>
            <Text>Nome: {nome}berto</Text>
            <Text>Estado Global: {estadoGlobal}</Text>
            <Button title="Atualizar Estado" onPress={atualizarEstado} />
          </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})