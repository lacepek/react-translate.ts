export type Params = {
    [key: string]: any;
};

export type Translations = {
    [key: string]: any | TranslationCallback;
};

export type TranslationCallback = (params: Params) => string;
