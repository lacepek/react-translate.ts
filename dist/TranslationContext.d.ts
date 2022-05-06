/// <reference types="react" />
import { Options } from "translate.ts";
import { Translations } from "./types";
export declare const TranslationContext: import("react").Context<{
    translations: Translations;
    locale: string;
    options: Options;
}>;
