import { useContext } from "react";
import { Options, translate } from "translate.ts";

import { TranslationContext } from "./TranslationContext";
import { Params } from "./types";

export function useTranslate(namespace = "") {
    const { translations, locale, options: _options } = useContext(TranslationContext);

    return function (key: string, params?: Params, options: Options = {}) {
        return translate(namespace ? `${namespace}.${key}` : key, locale, translations, params, {
            ..._options,
            ...options,
        });
    };
}
