import { createContext } from "react";
import { Options } from "translate.ts";

import { Translations } from "./types";

const defaultContext = { locale: "en", translations: {} } as {
    translations: Translations;
    locale: string;
    options?: Options;
};

export const TranslationContext = createContext(defaultContext);
