import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ItenList = ({ tarefa, onPressTarefa }) => (
    <TouchableOpacity onPress={ onPressTarefa } >
        <View style={styles.linha} >
            <Text style={[styles.nomes, tarefa.realizada ? styles.linhaRiscada : null ]}>
                {tarefa.texto}
            </Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    linha: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        alignItems: "center",
        flexDirection: "row",
    },
    nomes: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7,

    },
    linhaRiscada:{
        textDecorationLine: "line-through"
    },
    avatar: {
        aspectRatio: 1,
        marginLeft: 15,
        borderRadius: 50,
        flex: 1,
    }

});

export default ItenList;