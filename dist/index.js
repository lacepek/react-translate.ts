!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ReactTranslate=t(require("react")):e.ReactTranslate=t(e.react)}(self,(e=>(()=>{"use strict";var t={409:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(491),t)},491:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.translate=void 0;function r(e,t){return e&&e[t]?e[t]:null}t.translate=function(e,t,n,o,a){void 0===a&&(a={});var c=a.localeModificator;if(null==e)return null;if(o){var i=Object.keys(o);if(i.includes("context")){var l=o.context;e+="_".concat(l)}if(i.includes("count")){var u=new Intl.PluralRules(c&&c(t)||t),s=o.count,f=u.select(s);e+="_".concat(f)}}var p=e.split(".").reduce(r,n[t]);if(!p)return e;if(o){if(p instanceof Function)return p(o);p=function(e,t,r){return Object.keys(e).reduce((function(t,n){var o=(null==r?void 0:r.prefix)||"{{",a=(null==r?void 0:r.suffix)||"}}",c="".concat(o).concat(n).concat(a);if(t.includes(c)){var i=e[n];return t.replace(c,i)}return t}),t)}(o,p,null==a?void 0:a.interpolation),Object.keys(o).includes("capitalize")&&!0===o.capitalize&&"string"==typeof p&&(p=p.charAt(0).toUpperCase()+p.slice(1))}return p}},156:t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{n.r(o),n.d(o,{Translate:()=>l,TranslationProvider:()=>u,useTranslate:()=>c});var e=n(156),t=n.n(e),r=n(409),a=(0,e.createContext)({locale:"en",translations:{}});function c(t){void 0===t&&(t="");var n=(0,e.useContext)(a),o=n.translations,c=n.locale,i=n.options;return function(e,n){return(0,r.translate)(t?"".concat(t,".").concat(e):e,c,o,n,i)}}var i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function l(e){var r=e.params,n=e.children,o=e.namespace,a=e.textOnly,l=void 0!==a&&a,u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["params","children","namespace","textOnly"]),s=c(o)(n,r);return null==s?"".concat(s):l?s:t().createElement("div",i({},u),s)}function u(e){var r=e.translations,n=e.locale,o=e.children,c=e.options;return t().createElement(a.Provider,{value:{translations:r,locale:n,options:c}},o)}})(),o})()));
//# sourceMappingURL=index.js.map