import { configureStore } from '@reduxjs/toolkit'
import { todoSlice } from './slices/Todo'
import { uiSlice } from './slices/UI'

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
        ui: uiSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
