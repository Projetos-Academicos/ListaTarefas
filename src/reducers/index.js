
import { combineReducers } from 'redux';
import listTarefaReducer from './listTarefaReducer';


const combinacaoReducers =  combineReducers ({
    tarefas: listTarefaReducer
})

export default combinacaoReducers;