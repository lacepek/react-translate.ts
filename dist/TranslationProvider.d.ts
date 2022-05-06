import React, { PropsWithChildren } from "react";
import { Options } from "translate.ts";
export declare type TranslationProviderProps<T = unknown> = {
    translations: T;
    locale: string;
    options?: Options;
};
export declare const TranslationContext: React.Context<TranslationProviderProps<unknown>>;
export declare function TranslationProvider<T = unknown>(props: PropsWithChildren<TranslationProviderProps<T>>): JSX.Element;
