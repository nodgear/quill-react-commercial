import Quill from 'quill';
import Delta from 'quill-delta';
export declare function isUrl(url: string): boolean;
export declare function isEmail(url: string): boolean;
export declare function isMobile(): boolean;
export declare function setContent(content: Delta | string, quill: Quill): void;
export declare const optionDisableToggle: (quill: Quill, blockList: string[], disable: boolean) => void;
export declare const throttle: (fn: () => void, delay?: number) => () => void;
export declare function htmlDecode(str: string): string;
