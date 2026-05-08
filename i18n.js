import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import FormEng from './src/localization/en/form.json'
import NavEng from './src/localization/en/nav.json'
import FormAr from './src/localization/ar/form.json'
import NavAr from './src/localization/ar/nav.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        form: FormEng,
        nav: NavEng
      },
      ar: {
        form: FormAr,
        nav: NavAr
      },
    },
    lng: "en",
    fallbackLng: "en",
    ns: ['form', 'nav'],
    defaultNs: 'form',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
