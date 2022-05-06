import React, { PropsWithChildren, createContext } from "react";
import { Options } from "translate.ts";

export type TranslationProviderProps<T = unknown> = {
    translations: T;
    locale: string;
    options?: Options;
};

export const TranslationContext = createContext<TranslationProviderProps<unknown>>({ locale: "en", translations: {} });

export function TranslationProvider<T = unknown>(props: PropsWithChildren<TranslationProviderProps<T>>) {
    const { translations, locale, children, options } = props;
    return (
        <TranslationContext.Provider value={{ translations, locale, options }}>{children}</TranslationContext.Provider>
    );
}
