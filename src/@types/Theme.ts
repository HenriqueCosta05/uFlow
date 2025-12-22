export interface ColorShades {
    light: string
    dark: string
    darker: string
    main: string
}

export interface BackgroundColors {
    default: string
    paper: string
}

export interface SurfaceColors {
    main: string
    hovered: string
}

export interface TextColors {
    primary: string
    secondary: string
    disabled: string
    muted: string
}

export interface BorderColors {
    main: string
    light: string
    lighter: string
}

export interface HighlightColors {
    main: string
    light: string
    dark: string
}

export interface StatusColors {
    main: string
    light: string
    dark: string
    background: string
}

export interface ShadowValues {
    small: string
    medium: string
    large: string
    extraLarge: string
}

export interface RadiusValues {
    small: string
    medium: string
    large: string
    full: string
}

export interface ThemeColors {
    primary: ColorShades
    secondary: ColorShades
    background: BackgroundColors
    surface: SurfaceColors
    text: TextColors
    border: BorderColors
    highlight: HighlightColors
    error: StatusColors
    success: StatusColors
    warning: StatusColors
    info: StatusColors
    shadow: ShadowValues
    radius: RadiusValues
}

export interface Theme {
    current: 'light' | 'dark'
    light: ThemeColors
    dark: ThemeColors
}
