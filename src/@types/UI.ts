import type { Theme } from './Theme'

export interface UI {
    isLoading: boolean
    errorMessage: string | undefined
    theme?: Theme
}
