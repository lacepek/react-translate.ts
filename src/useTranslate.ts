import { useContext } from "react";
import { translate } from "translate.ts";

import { TranslationContext } from "./TranslationContext";
import { Params } from "./types";

export function useTranslate(namespace = "") {
    const { translations, locale, options } = useContext(TranslationContext);

    return function (key: string, params?: Params) {
        return translate(namespace ? `${namespace}.${key}` : key, locale, translations, params, options);
    };
}
