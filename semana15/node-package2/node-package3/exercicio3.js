const tarefas = [
    "Arrumar a casa",
    "Estudar",
    "Fazer exercicios",
]

const listaDeTarefas = tarefas.push(process.argv[2])

console.log(`Tarefa adicionada com sucesso!Tarefas:` + tarefas)