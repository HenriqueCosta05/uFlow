import { createSlice } from '@reduxjs/toolkit'
import type { Todo } from '../../@types'

const initialState = {
    todos: [] as Todo[],
    selectedTodoId: undefined as string | undefined,
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action: { payload: Todo }) => {
            state.todos.push(action.payload)
        },
        toggleTodo: (state, action: { payload: string }) => {
            const todo = state.todos.find((t) => t.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        },
        selectTodo: (state, action: { payload: string | undefined }) => {
            state.selectedTodoId = action.payload
        },
        setTodos: (state, action: { payload: Todo[] }) => {
            state.todos = action.payload
        },
    },
})

export const { addTodo, toggleTodo, selectTodo, setTodos } = todoSlice.actions
