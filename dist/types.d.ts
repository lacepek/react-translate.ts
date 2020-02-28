export declare type Params = {
    [key: string]: any;
};
export declare type Translations = {
    [key: string]: any | TranslationCallback;
};
export declare type TranslationCallback = (params: Params) => string;
