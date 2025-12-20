export async function getUserLocale(): Promise<string> {
    const defaultLocale = 'pt-BR';
    return (await document.cookie.match(/locale=([^;]+)/)?.[1]) || defaultLocale;
}

/*eslint-disable unicorn/no-document-cookie */
export async function setUserLocale(locale: string): Promise<void> {
    document.cookie = `locale=${locale}; path=/; max-age=31536000`; // 1 year
}
