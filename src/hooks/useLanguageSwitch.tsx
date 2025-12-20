import { useEffect, useState } from 'react'
import { getUserLocale, setUserLocale } from '../services'

type Locale = 'en-US' | 'pt-BR' | 'es-ES'

const useLanguageSwitch = () => {
    const [locale, setLocale] = useState<Locale>('pt-BR')

    useEffect(() => {
        const fetchLocale = async () => {
            const userLocale = await getUserLocale().then(
                (locale) => locale as Locale
            )
            setLocale(userLocale)
        }

        fetchLocale()
    }, [])

    const switchLanguage = async (newLocale: Locale) => {
        await setUserLocale(newLocale)
        setLocale(newLocale)
    }

    return { switchLanguage, locale }
}
export default useLanguageSwitch
