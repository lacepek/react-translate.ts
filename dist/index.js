!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ReactTranslate=t(require("react")):e.ReactTranslate=t(e.react)}(self,(e=>(()=>{"use strict";var t={409:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(491),t)},491:(e,t)=>{function r(e,t){return e&&e[t]?e[t]:null}Object.defineProperty(t,"__esModule",{value:!0}),t.translate=void 0,t.translate=function(e,t,n,o,a){void 0===a&&(a={});var c=a.localeModificator;if(null==e)return null;if(o&&Object.keys(o).includes("count")){var l=new Intl.PluralRules(c&&c(t)||t),i=o.count,u=l.select(i);e+="_".concat(u)}var s=e.split(".").reduce(r,n[t]);return s?o?s instanceof Function?s(o):function(e,t,r){return Object.keys(e).reduce((function(t,n){var o=(null==r?void 0:r.prefix)||"{{",a=(null==r?void 0:r.suffix)||"}}",c="".concat(o).concat(n).concat(a);if(t.includes(c)){var l=e[n];return t.replace(c,l)}return t}),t)}(o,s,null==a?void 0:a.interpolation):s:e}},156:t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{n.r(o),n.d(o,{Translate:()=>i,TranslationProvider:()=>u,useTranslate:()=>c});var e=n(156),t=n.n(e),r=n(409),a=(0,e.createContext)({locale:"en",translations:{}});function c(t){void 0===t&&(t="");var n=(0,e.useContext)(a),o=n.translations,c=n.locale,l=n.options;return function(e,n){return(0,r.translate)(t?"".concat(t,".").concat(e):e,c,o,n,l)}}var l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)};function i(e){var r=e.params,n=e.children,o=e.namespace,a=e.textOnly,i=void 0!==a&&a,u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["params","children","namespace","textOnly"]),s=c(o)(n,r);return null==s?"".concat(s):i?s:t().createElement("div",l({},u),s)}function u(e){var r=e.translations,n=e.locale,o=e.children,c=e.options;return t().createElement(a.Provider,{value:{translations:r,locale:n,options:c}},o)}})(),o})()));
//# sourceMappingURL=index.js.map