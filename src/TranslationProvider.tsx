import React, { FC } from 'react';

import { Translations } from './types';
import { TranslationContext } from './TranslationContext';

export type TranslationProviderProps = {
    translations: Translations;
    locale: string;
};

export const TranslationProvider: FC<TranslationProviderProps> = ({ translations, locale, children }) => {
    return <TranslationContext.Provider value={{ translations, locale }}>{children}</TranslationContext.Provider>;
};
