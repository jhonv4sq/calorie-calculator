import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import global_es from './locale/es/global.json'
import global_en from './locale/en/global.json'

i18next.use(initReactI18next).init({
    interpolation: { escapeValue: false },
    lng: navigator.language || 'en',
    fallbackLng: 'en',
    resources: {
      es: {
        global: global_es,
      },
      en: {
        global: global_en,
      },
    }
})

export default i18next
