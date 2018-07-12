 export const ADICIONAR_TAREFA = "ADICIONAR_TAREFA";
 export const adicionarTarefa = texto => ({
     type: ADICIONAR_TAREFA,
     texto: texto
 });

 export const TAREFA_REALIZADA = "TAREFA_REALIZADA";
 export const tarefaRealizada = idTarefa => ({
     type: TAREFA_REALIZADA,
     idTarefa
 });

