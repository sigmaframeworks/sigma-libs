// Global methods
declare var __seed;
declare var Constants;

declare function isTrue(b: any): boolean;
declare function isFalse(b: any): boolean;
declare function isEmpty(a: any): boolean;
declare function isFunction(a: any): boolean;

declare function getParentByTag(element: Element, selector: string): HTMLElement;
declare function getParentByClass(element: Element, selector: string, lastElement?: string): HTMLElement;

declare function convertToPx(size, context?);

declare function escape(v: string): string;
declare function unescape(v: string): string;


declare interface ICountry {
    continent: string;
    iso3: string;
    iso2: string;
    name: string;
    tld: string;
    currency: string;
    phone: number;
}

declare interface Window {
    isTrue;
    isFalse;
    isEmpty;
    isFunction;

    getParentByTag;
    getParentByClass;

    convertToPx;

    countries: Array<ICountry>;
    currencies;
    filetypes;

    escape;
    unescape;
}
declare interface Element {
    au: any;
}
