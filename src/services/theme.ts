import type { Theme } from '../@types/Theme';
import { uFlowAPI } from './API';

const defaults = (globalThis as any).defaults; // eslint-disable-line @typescript-eslint/no-explicit-any

export const fetchTheme = async (themeName: string): Promise<Theme> => {
    const response = await uFlowAPI.get<Theme>(`/themes/${themeName}.json`);
    return response.data;
};

export const applyThemeToDOM = (theme: Theme): void => {
    const mode = theme.current;
    const colors = theme[mode];

    if (!colors) {
        console.error(`Theme mode "${mode}" not found in theme object`);
        return;
    }

    const stylesheet = document.styleSheets[0];

    stylesheet.insertRule(
        `:root { --primary: ${colors.primary.main}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --primary-light: ${colors.primary.light}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --primary-dark: ${colors.primary.dark}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --primary-darker: ${colors.primary.darker}; }`,
        stylesheet.cssRules.length
    );

    stylesheet.insertRule(
        `:root { --secondary: ${colors.secondary.main}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --secondary-light: ${colors.secondary.light}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --secondary-dark: ${colors.secondary.dark}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --secondary-darker: ${colors.secondary.darker}; }`,
        stylesheet.cssRules.length
    );

    stylesheet.insertRule(
        `:root { --background: ${colors.background.default}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --background-elevated: ${colors.background.paper}; }`,
        stylesheet.cssRules.length
    );

    stylesheet.insertRule(
        `:root { --surface: ${colors.surface.main}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --surface-hover: ${colors.surface.hovered}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --text: ${colors.text.primary}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --text-secondary: ${colors.text.secondary}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --text-muted: ${colors.text.muted}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --text-disabled: ${colors.text.disabled}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --border: ${colors.border.main}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --border-light: ${colors.border.light}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --border-lighter: ${colors.border.lighter}; }`,
        stylesheet.cssRules.length
    );

    stylesheet.insertRule(
        `:root { --highlight: ${colors.highlight.main}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --highlight-light: ${colors.highlight.light}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --highlight-dark: ${colors.highlight.dark}; }`,
        stylesheet.cssRules.length
    );

    stylesheet.insertRule(
        `:root { --error: ${colors.error.main}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --error-light: ${colors.error.light}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --error-dark: ${colors.error.dark}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --error-bg: ${colors.error.background}; }`,
        stylesheet.cssRules.length
    );

    stylesheet.insertRule(
        `:root { --success: ${colors.success.main}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --success-light: ${colors.success.light}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --success-dark: ${colors.success.dark}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --success-bg: ${colors.success.background}; }`,
        stylesheet.cssRules.length
    );

    stylesheet.insertRule(
        `:root { --warning: ${colors.warning.main}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --warning-light: ${colors.warning.light}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --warning-dark: ${colors.warning.dark}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --warning-bg: ${colors.warning.background}; }`,
        stylesheet.cssRules.length
    );

    stylesheet.insertRule(
        `:root { --info: ${colors.info.main}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --info-light: ${colors.info.light}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --info-dark: ${colors.info.dark}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --info-bg: ${colors.info.background}; }`,
        stylesheet.cssRules.length
    );

    stylesheet.insertRule(
        `:root { --shadow-sm: ${colors.shadow.small}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --shadow-md: ${colors.shadow.medium}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --shadow-lg: ${colors.shadow.large}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --shadow-xl: ${colors.shadow.extraLarge}; }`,
        stylesheet.cssRules.length
    );

    stylesheet.insertRule(
        `:root { --radius-sm: ${colors.radius.small}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --radius-md: ${colors.radius.medium}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --radius-lg: ${colors.radius.large}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --radius-xl: ${colors.radius.large}; }`,
        stylesheet.cssRules.length
    );
    stylesheet.insertRule(
        `:root { --radius-full: ${colors.radius.full}; }`,
        stylesheet.cssRules.length
    );
};

export const toggleThemeMode = (theme: Theme): Theme => {
    const newMode =
        theme.current === 'light' ? 'dark' : ('light' as 'light' | 'dark');
    const updatedTheme = { ...theme, current: newMode };
    applyThemeToDOM(updatedTheme);
    return updatedTheme;
};

export const setThemeMode = (theme: Theme, mode: 'light' | 'dark'): Theme => {
    const updatedTheme = { ...theme, current: mode };
    applyThemeToDOM(updatedTheme);
    return updatedTheme;
};

export const initializeTheme = async (): Promise<Theme> => {
    try {
        const theme = await fetchTheme(defaults.theme || 'dark-blue');
        console.log('Initialized theme:', theme);
        applyThemeToDOM(theme);
        return theme;
    } catch (error) {
        console.error('Failed to fetch theme:', error);
        throw error;
    }
};
