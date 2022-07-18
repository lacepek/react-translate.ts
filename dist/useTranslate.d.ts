import { Params } from "./types";
declare type Options = {
    capitalize?: boolean;
    context?: string | string[];
    ordinal?: boolean;
};
export declare function useTranslate(namespace?: string): (key: string, params?: Params, options?: Options) => any;
export {};
