/**
 * Copyright (C) Oranda - All Rights Reserved (January 2019 - February 2021)
 */
export declare type ModuleFactory = (imports: any) => any;
export interface ElvanLoader {
    register: (factory: ModuleFactory) => void;
}
export declare const loadFromUrl: (url: string, imports?: any) => Promise<any>;
export declare const loadFromString: (js: string, imports?: any) => Promise<any>;
