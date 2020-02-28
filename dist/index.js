'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var translator = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
function translate(key, locale, translations, params) {
    var keys = key.split('.');
    var translation = keys.reduce(searchForKey, translations[locale]);
    if (!translation) {
        return key;
    }
    if (params) {
        if (translation instanceof Function) {
            return translation(params);
        }
        return injectParamsToTranslation(params, translation);
    }
    return translation;
}
exports.translate = translate;
function searchForKey(current, key) {
    if (!current || !current[key]) {
        return null;
    }
    return current[key];
}
function injectParamsToTranslation(params, translation) {
    var keys = Object.keys(params);
    return keys.reduce(function (accumulator, key) {
        var needle = "{{" + key + "}}";
        if (accumulator.includes(needle)) {
            var value = params[key];
            return accumulator.replace(needle, value);
        }
        return accumulator;
    }, translation);
}
});

unwrapExports(translator);
var translator_1 = translator.translate;

var dist = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(translator);
});

unwrapExports(dist);
var dist_1 = dist.translate;

var defualtContext = { locale: 'en', translations: {} };
var TranslationContext = React.createContext(defualtContext);

function useTranslate(namespace) {
    if (namespace === void 0) { namespace = ''; }
    var _a = React.useContext(TranslationContext), translations = _a.translations, locale = _a.locale;
    return function (key, params) {
        return dist_1(namespace ? namespace + "." + key : key, locale, translations, params);
    };
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var Translate = function (_a) {
    var params = _a.params, children = _a.children, namespace = _a.namespace, _b = _a.textOnly, textOnly = _b === void 0 ? false : _b, rest = __rest(_a, ["params", "children", "namespace", "textOnly"]);
    var translate = useTranslate(namespace);
    var translation = translate(children, params);
    if (textOnly) {
        return translation;
    }
    return React__default.createElement("div", __assign({}, rest), translation);
};

var TranslationProvider = function (_a) {
    var translations = _a.translations, locale = _a.locale, children = _a.children;
    return React__default.createElement(TranslationContext.Provider, { value: { translations: translations, locale: locale } }, children);
};

exports.Translate = Translate;
exports.TranslationProvider = TranslationProvider;
exports.useTranslate = useTranslate;
//# sourceMappingURL=index.js.map
