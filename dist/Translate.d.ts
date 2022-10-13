import { HTMLProps, ReactElement } from "react";
export interface TranslateProps extends HTMLProps<HTMLDivElement> {
    params?: {
        [key: string]: any;
    };
    namespace?: string;
    textOnly?: boolean;
    children?: string;
    element?: string;
    components?: TranslateComponents;
}
export declare type TranslateComponents = {
    [key: string]: ReactElement;
};
export declare function Translate(props: TranslateProps): any;
