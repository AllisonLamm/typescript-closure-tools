/// <reference path="../../../globals.d.ts" />
/// <reference path="./mechanism/mechanism.d.ts" />

declare module goog.storage {

    class Storage extends __Storage { }
    class __Storage {
    
        /**
         * The base implementation for all storage APIs.
         *
         * @param {!goog.storage.mechanism.Mechanism} mechanism The underlying
         *     storage mechanism.
         * @constructor
         */
        constructor(mechanism: goog.storage.mechanism.Mechanism);
    
        /**
         * Sets an item in the data storage.
         *
         * @param {string} key The key to set.
         * @param {*} value The value to serialize to a string and save.
         */
        set(key: string, value: any): void;
    
        /**
         * Gets an item from the data storage.
         *
         * @param {string} key The key to get.
         * @return {*} Deserialized value or undefined if not found.
         */
        get(key: string): any;
    
        /**
         * Removes an item from the data storage.
         *
         * @param {string} key The key to remove.
         */
        remove(key: string): void;
    }
}