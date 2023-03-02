import { PropsWithChildren } from "react";
import { Options } from "translate.ts";
import { Translations } from "./types";
export type TranslationProviderProps = {
    translations: Translations;
    locale: string;
    options?: Options;
};
export declare function TranslationProvider(props: PropsWithChildren<TranslationProviderProps>): JSX.Element;
