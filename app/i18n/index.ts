
"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import da from './locales/da/translation.json';

i18n
   .use(initReactI18next)
  .init({
    lng: "da",  
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: en },
      da: { translation: da },
    },
  });

export default i18n;
