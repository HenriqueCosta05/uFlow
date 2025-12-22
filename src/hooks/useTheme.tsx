import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    initializeTheme,
    setThemeMode,
    toggleThemeMode,
} from '../services/theme'
import { setErrorMessage, setLoading, setTheme } from '../store/slices/UI'
import type { RootState } from '../store/store'

export const useTheme = () => {
    const dispatch = useDispatch()
    const theme = useSelector((state: RootState) => state.ui.theme)
    const isLoading = useSelector((state: RootState) => state.ui.isLoading)

    useEffect(() => {
        const loadTheme = async () => {
            dispatch(setLoading(true))
            try {
                const fetchedTheme = await initializeTheme()
                dispatch(setTheme(fetchedTheme))
            } catch (error) {
                dispatch(setErrorMessage('Failed to load theme'))
                console.error('Theme initialization error:', error)
            } finally {
                dispatch(setLoading(false))
            }
        }

        if (!theme) {
            loadTheme()
        }
    }, [dispatch, theme])

    const toggleMode = () => {
        if (theme) {
            const updatedTheme = toggleThemeMode(theme)
            dispatch(setTheme(updatedTheme))
        }
    }

    const setMode = (mode: 'light' | 'dark') => {
        if (theme) {
            const updatedTheme = setThemeMode(theme, mode)
            dispatch(setTheme(updatedTheme))
        }
    }

    return {
        theme,
        isLoading,
        currentMode: theme?.current,
        toggleMode,
        setMode,
    }
}
