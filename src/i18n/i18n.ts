import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'

if (!i18n.isInitialized) {
    i18n.use(initReactI18next)
        .use(HttpApi)
        .init({
            lng: 'pt-BR',
            fallbackLng: 'en-US',
            backend: { loadPath: '/messages/{{lng}}.json' },
            interpolation: { escapeValue: false },
            debug: false,
        })
}

export default i18n
