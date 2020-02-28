import { FC } from 'react';
import { Translations } from './types';
export declare type TranslationProviderProps = {
    translations: Translations;
    locale: string;
};
export declare const TranslationProvider: FC<TranslationProviderProps>;
