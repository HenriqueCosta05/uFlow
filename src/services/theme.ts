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

    const root = document.documentElement;

    root.style.setProperty('--primary', colors.primary.main);
    root.style.setProperty('--primary-light', colors.primary.light);
    root.style.setProperty('--primary-dark', colors.primary.dark);
    root.style.setProperty('--primary-darker', colors.primary.darker);

    root.style.setProperty('--secondary', colors.secondary.main);
    root.style.setProperty('--secondary-light', colors.secondary.light);
    root.style.setProperty('--secondary-dark', colors.secondary.dark);
    root.style.setProperty('--secondary-darker', colors.secondary.darker);

    root.style.setProperty('--background', colors.background.default);
    root.style.setProperty('--background-elevated', colors.background.paper);

    root.style.setProperty('--surface', colors.surface.main);
    root.style.setProperty('--surface-hover', colors.surface.hovered);

    root.style.setProperty('--text', colors.text.primary);
    root.style.setProperty('--text-secondary', colors.text.secondary);
    root.style.setProperty('--text-muted', colors.text.muted);
    root.style.setProperty('--text-disabled', colors.text.disabled);

    root.style.setProperty('--border', colors.border.main);
    root.style.setProperty('--border-light', colors.border.light);
    root.style.setProperty('--border-lighter', colors.border.lighter);

    root.style.setProperty('--highlight', colors.highlight.main);
    root.style.setProperty('--highlight-light', colors.highlight.light);
    root.style.setProperty('--highlight-dark', colors.highlight.dark);

    root.style.setProperty('--error', colors.error.main);
    root.style.setProperty('--error-light', colors.error.light);
    root.style.setProperty('--error-dark', colors.error.dark);
    root.style.setProperty('--error-bg', colors.error.background);

    root.style.setProperty('--success', colors.success.main);
    root.style.setProperty('--success-light', colors.success.light);
    root.style.setProperty('--success-dark', colors.success.dark);
    root.style.setProperty('--success-bg', colors.success.background);

    root.style.setProperty('--warning', colors.warning.main);
    root.style.setProperty('--warning-light', colors.warning.light);
    root.style.setProperty('--warning-dark', colors.warning.dark);
    root.style.setProperty('--warning-bg', colors.warning.background);

    root.style.setProperty('--info', colors.info.main);
    root.style.setProperty('--info-light', colors.info.light);
    root.style.setProperty('--info-dark', colors.info.dark);
    root.style.setProperty('--info-bg', colors.info.background);

    root.style.setProperty('--shadow-sm', colors.shadow.small);
    root.style.setProperty('--shadow-md', colors.shadow.medium);
    root.style.setProperty('--shadow-lg', colors.shadow.large);
    root.style.setProperty('--shadow-xl', colors.shadow.extraLarge);

    root.style.setProperty('--radius-sm', colors.radius.small);
    root.style.setProperty('--radius-md', colors.radius.medium);
    root.style.setProperty('--radius-lg', colors.radius.large);
    root.style.setProperty('--radius-xl', colors.radius.large);
    root.style.setProperty('--radius-full', colors.radius.full);
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
        applyThemeToDOM(theme);
        return theme;
    } catch (error) {
        console.error('Failed to fetch theme:', error);
        throw error;
    }
};
