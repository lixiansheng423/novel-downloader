import { Chapter } from "../../main/Chapter";
import { BaseRuleClass } from "../../rules";
export declare function baseOnePage(introDomPatch: (introDom: HTMLElement) => HTMLElement, concurrencyLimit?: number, sleepTime?: number, maxSleepTime?: number, overRide?: (classThis: BaseRuleClass) => any, postHook?: (chapter: Chapter) => Chapter | void): {
    aList: NodeListOf<Element>;
    sections: NodeListOf<Element>;
    getSName: (sElem: Element) => string;
    bookUrl: string;
    bookname: string;
    author: string;
    introDom: HTMLElement;
    introDomPatch: (introDom: HTMLElement) => HTMLElement;
    coverUrl: string;
    postHook: (chapter: Chapter) => void | Chapter;
    concurrencyLimit: number | undefined;
    sleepTime: number | undefined;
    maxSleepTime: number | undefined;
    overrideConstructor: (classThis: BaseRuleClass) => BaseRuleClass;
};
export declare function baseMultiIndex(introDomPatch: (introDom: HTMLElement) => HTMLElement, concurrencyLimit?: number, sleepTime?: number, maxSleepTime?: number, overRide?: (classThis: BaseRuleClass) => any, postHook?: (chapter: Chapter) => Chapter | void): {
    getIndexUrls: () => string[];
    getAList: (doc: Document) => NodeListOf<Element>;
    bookUrl: string;
    bookname: string;
    author: string;
    introDom: HTMLElement;
    introDomPatch: (introDom: HTMLElement) => HTMLElement;
    coverUrl: string;
    postHook: (chapter: Chapter) => void | Chapter;
    concurrencyLimit: number | undefined;
    sleepTime: number | undefined;
    maxSleepTime: number | undefined;
    overrideConstructor: (classThis: BaseRuleClass) => BaseRuleClass;
};
export declare function mkBiquge(introDomPatch: (introDom: HTMLElement) => HTMLElement, contentPatch: (content: HTMLElement) => HTMLElement, chapterContentSelector?: string, concurrencyLimit?: number, sleepTime?: number, maxSleepTime?: number, overRide?: (classThis: BaseRuleClass) => any, postHook?: (chapter: Chapter) => Chapter | void): import("../../lib/misc").PublicConstructor<BaseRuleClass>;
export declare function mkBiqugeNextPage(introDomPatch: (introDom: HTMLElement) => HTMLElement, contentPatch: (content: HTMLElement, doc: Document) => HTMLElement, getNextPage: (doc: Document) => string, continueCondition: (content: HTMLElement, nextLink: string) => boolean, concurrencyLimit?: number, sleepTime?: number, maxSleepTime?: number, overRide?: (classThis: BaseRuleClass) => any, postHook?: (chapter: Chapter) => Chapter | void, chapterContenSelector?: string): import("../../lib/misc").PublicConstructor<BaseRuleClass>;
export declare function mkBiqugeMultiIndexNextPage(introDomPatch: (introDom: HTMLElement) => HTMLElement, contentPatch: (content: HTMLElement, doc: Document) => HTMLElement, getNextPage: (doc: Document) => string, continueCondition: (content: HTMLElement, nextLink: string) => boolean, concurrencyLimit?: number, sleepTime?: number, maxSleepTime?: number, overRide?: (classThis: BaseRuleClass) => any, postHook?: (chapter: Chapter) => Chapter | void, chapterContenSelector?: string): import("../../lib/misc").PublicConstructor<BaseRuleClass>;
export declare function mkBiqugeMultiIndex(introDomPatch: (introDom: HTMLElement) => HTMLElement, contentPatch: (content: HTMLElement) => HTMLElement, concurrencyLimit?: number, sleepTime?: number, maxSleepTime?: number, overRide?: (classThis: BaseRuleClass) => any, postHook?: (chapter: Chapter) => Chapter | void, chapterContenSelector?: string): import("../../lib/misc").PublicConstructor<BaseRuleClass>;
