import { createSlice } from '@reduxjs/toolkit'
import type { UI } from '../../@types/UI'

const initalUI: UI = {
    isLoading: false,
    errorMessage: undefined,
    theme: {
        type: 'light',
        colors: {
            primaryColor: '#6200EE',
            secondaryColor: '#03DAC6',
            backgroundColor: '#FFFFFF',
            textColor: '#000000',
        },
    },
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
        setTheme: (state, action: { payload: UI['theme'] }) => {
            state.theme = action.payload
        },
    },
})

export const { setLoading, setErrorMessage, setTheme } = uiSlice.actions
