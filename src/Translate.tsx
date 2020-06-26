import React, { FC, HTMLProps } from 'react';

import { useTranslate } from './useTranslate';

export interface TranslateProps extends HTMLProps<HTMLDivElement> {
  params?: { [key: string]: any };
  namespace?: string;
  textOnly?: boolean;
  children: string;
}

export const Translate: FC<TranslateProps> = ({ params, children, namespace, textOnly = false, ...rest }) => {
  const translate = useTranslate(namespace);
  const translation = translate(children, params);

  if (translation === null || translation === undefined) {
    return `${translation}`;
  }

  if (textOnly) {
    return translation;
  }

  return <div {...rest}>{translation}</div>;
};
