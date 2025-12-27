import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTheme } from '../hooks'
import { setTheme } from '../store/slices/UI'

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
    const { theme, currentMode } = useTheme()
    const dispatch = useDispatch()

    useEffect(() => {
        if (theme) {
            dispatch(setTheme(theme))
        }
    }, [theme, currentMode, dispatch])
    return children
}

export default ThemeWrapper
