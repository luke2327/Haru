import I18n from 'react-native-i18n';
import en from './en';
import ko from './ko';

I18n.fallbacks = true;
I18n.translations = {
  en,
  ko,
};

I18n.defaultLocale = 'ko';
I18n.locale = 'ko';
I18n.currentLocale();

export default I18n;