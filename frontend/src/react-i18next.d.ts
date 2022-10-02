import 'react-i18next';
import { resources } from './src/services/LanguagesService.ts';

declare module 'react-i18next' {
  type DefaultResources = typeof resources['zh'];
  interface Resources extends DefaultResources {}
}