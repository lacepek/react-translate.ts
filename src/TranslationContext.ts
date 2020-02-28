import { createContext } from 'react';

import { Translations } from './types';

const defualtContext = { locale: 'en', translations: {} } as {
    translations: Translations;
    locale: string;
};

export const TranslationContext = createContext(defualtContext);
