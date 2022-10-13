import React, { cloneElement, createElement, Fragment, HTMLProps, ReactElement } from "react";

import { useTranslate } from "./useTranslate";

export interface TranslateProps extends HTMLProps<HTMLDivElement> {
    params?: { [key: string]: any };
    namespace?: string;
    textOnly?: boolean;
    children?: string;
    element?: string;
    components?: TranslateComponents;
}

export type TranslateComponents = { [key: string]: ReactElement };

export function Translate(props: TranslateProps) {
    const { params, children, namespace, textOnly = false, element = "div", components, ...rest } = props;
    const translate = useTranslate(namespace);
    let translation = translate(children || "", params);

    if (textOnly) {
        return translation;
    }

    if (components && Object.keys(components).length > 0) {
        translation = insertComponentToTranslation(translation, components);
    }

    return createElement(element, { ...rest }, translation);
}

function insertComponentToTranslation(translation: string, components: TranslateComponents) {
    let localTranslation = new String(translation);
    let parts: ReactElement[] = [];
    const keys = Object.keys(components);
    let elementKey = 0;

    for (let i = 0, n = keys.length; i < n; i++) {
        const key = keys[i];
        const regex = new RegExp(`<${key}>(.*?)</${key}>`, "gi");

        const index = localTranslation.search(regex);
        if (index >= 0) {
            const match = localTranslation.match(regex)?.[0];
            if (match) {
                const length = match.length || 0;
                if (length > 0) {
                    parts.push(<Fragment key={elementKey}>{localTranslation.substring(0, index)}</Fragment>);
                    elementKey++;
                    const value = match.replace(/<.*?>/gi, "");
                    const component = components[key];
                    const newElement = cloneElement(component, {
                        ...component.props,
                        children: value,
                        key: elementKey,
                    });
                    parts.push(newElement);
                    elementKey++;
                    localTranslation = localTranslation.substring(index + length);

                    // include rest of the string after last component
                    if (i === n - 1) {
                        parts.push(<Fragment key={elementKey}>{localTranslation}</Fragment>);
                    }
                }
            }
        }
    }

    return parts;
}
