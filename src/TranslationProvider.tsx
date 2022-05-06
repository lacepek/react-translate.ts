import React, { PropsWithChildren } from "react";
import { Options } from "translate.ts";

import { Translations } from "./types";
import { TranslationContext } from "./TranslationContext";

export type TranslationProviderProps = {
    translations: Translations;
    locale: string;
    options: Options;
};

export function TranslationProvider(props: PropsWithChildren<TranslationProviderProps>) {
    const { translations, locale, children, options } = props;
    return <TranslationContext.Provider value={{ translations, locale, options }}>{children}</TranslationContext.Provider>;
};
