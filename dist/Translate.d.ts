import { HTMLProps } from "react";
export interface TranslateProps extends HTMLProps<HTMLDivElement> {
    params?: {
        [key: string]: any;
    };
    namespace?: string;
    textOnly?: boolean;
    children: string;
}
export declare function Translate(props: TranslateProps): any;
