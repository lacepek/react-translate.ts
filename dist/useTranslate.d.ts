import { Params } from "./types";
declare type Options = {
    capitalize?: boolean;
    context?: string | string[];
};
export declare function useTranslate(namespace?: string): (key: string, params?: Params, options?: Options) => any;
export {};
