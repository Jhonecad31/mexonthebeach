import en from './en.json';
import es from './es.json';
import pt from './pt.json';

const translations = {
  en,
  es,
  pt,
};

export type Lang = 'en' | 'es' | 'pt';

export function useTranslations(lang: Lang) {
  return (key: string): any => {
    const keys = key.split('.');
    let result: any = translations[lang] || translations['en'];
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        return key;
      }
    }
    return result;
  };
}
