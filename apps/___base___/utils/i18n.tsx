import * as i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';
import { get, includes, keys } from 'lodash';

import translationEN from '../public/locales/en/translation.json';
import translationES from '../public/locales/es/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

const getDefaultLanguage = () => {
  const search = get(window, 'location.search');
  const params = new URLSearchParams(search);
  const language = params.get('intl');

  return includes(keys(resources), language) ? language : 'en';
};

i18n
  .use(detector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: getDefaultLanguage(),
    fallbackLng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome
    nsSeparator: false, // we are not namespacing

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
