export type Todo = {
    id: string
    title: string
    completed: boolean
}

export type TodoState = {
    todos: Todo[]
    selectedTodoId: string | undefined
}
