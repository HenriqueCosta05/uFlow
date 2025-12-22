import { createSlice } from '@reduxjs/toolkit'
import type { UI } from '../../@types/UI'
import type { Theme } from '../../@types'

const initalUI: UI = {
    isLoading: false,
    errorMessage: undefined,
    theme: undefined,
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState: initalUI,
    reducers: {
        setLoading: (state, action: { payload: boolean }) => {
            state.isLoading = action.payload
        },
        setErrorMessage: (state, action: { payload: string | undefined }) => {
            state.errorMessage = action.payload
        },
        setTheme: (state, action: { payload: Theme }) => {
            state.theme = action.payload
        },
    },
})

export const { setLoading, setErrorMessage, setTheme } = uiSlice.actions
