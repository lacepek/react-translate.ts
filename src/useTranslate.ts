import { useContext } from "react";
import { translate } from "translate.ts";

import { TranslationContext } from "./TranslationContext";
import { Params } from "./types";

type Options = {
    capitalize?: boolean;
    context?: string | string[];
    ordinal?: boolean;
};

export function useTranslate(namespace = "") {
    const { translations, locale, options: _options } = useContext(TranslationContext);

    return function (key: string, params?: Params, options: Options = {}) {
        return translate(namespace ? `${namespace}.${key}` : key, locale, translations, params, {
            ..._options,
            ...options,
        });
    };
}
