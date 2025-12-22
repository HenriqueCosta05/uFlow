import { useTranslation } from 'react-i18next'

export type Locale = 'en-US' | 'pt-BR' | 'es-ES'

const useLanguageSwitch = () => {
    const { i18n } = useTranslation()
    const locale: Locale = (i18n.language as Locale) || 'en-US'

    const switchLanguage = async (newLocale: Locale) => {
        if (locale === newLocale) return
        localStorage.setItem('i18nextLng', newLocale)
        await i18n.changeLanguage(newLocale)
    }

    return { switchLanguage, locale }
}
export default useLanguageSwitch
