import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import ItenList from './ItenList';
import { tarefaRealizada } from '../actions';


  const List = ({ tarefas, dispatchTarefaRealizada }) => (

    <View style={styles.container}>
        {tarefas.map(tarefa => (
            <ItenList 
                key = {tarefa.id} 
                tarefa = {tarefa} 
                onPressTarefa = {() => dispatchTarefaRealizada(tarefa.id)}
            />
        ))}
    </View>
  );   
 

const styles = StyleSheet.create({
    container:{
        
    },
});

const stateToProps = state => {
    const { tarefas } = state;
    return { tarefas }; 
}
const dispatchToProps = {
    dispatchTarefaRealizada: tarefaRealizada
}

export default connect( stateToProps, dispatchToProps )(List);