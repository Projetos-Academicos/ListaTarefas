import {ADICIONAR_TAREFA, TAREFA_REALIZADA} from '.././actions';

var nextId = 1;

const listTarefaReducer = (state = [] , action) => {
    switch ( action.type ) {
        case ADICIONAR_TAREFA:
           const novaTarefa = {
                id: nextId ++,
                texto: action.texto,
                tarefa: false
            } 
            // juntar 2 arrays colocando novaTarefa no final do array
            return [... state, novaTarefa]
        case TAREFA_REALIZADA:
            action.idTarefa
            return state.map(tarefa =>{
                if(tarefa.id === action.idTarefa){
                    return Object.assign({}, tarefa, { realizada: !tarefa.realizada }) // modo c/object assign
                    // return {
                    //     ... state,           // NÃO FUNCIONOU CORRETAMENTE, VERIFICAR POSTERIORMENTE
                    //     realizada: !tarefa.realizada
                    // };
               }else{
                   return tarefa;
               }
            });
        default:
            return state;
    }
}

export default listTarefaReducer;