/// <reference path="../../../globals.d.ts" />

declare module goog.async.run {

    class WorkItem_ extends __WorkItem_ { }
    class __WorkItem_ {
    
        /**
         * @constructor
         * @final
         * @struct
         * @private
         *
         * @param {function()} fn
         * @param {Object|null|undefined} scope
         */
        constructor(fn: () => any /*missing*/, scope: Object);
        /**
         * @constructor
         * @final
         * @struct
         * @private
         *
         * @param {function()} fn
         * @param {Object|null|undefined} scope
         */
        constructor(fn: () => any /*missing*/, scope: any /*null*/);
    }

    /** @private {boolean} */
    var workQueueScheduled_: any /*missing*/;

    /** @private {!Array.<!goog.async.run.WorkItem_>} */
    var workQueue_: any /*missing*/;

    /**
     * Run any pending goog.async.run work items. This function is not intended
     * for general use, but for use by entry point handlers to run items ahead of
     * goog.async.nextTick.
     */
    function processWorkQueue(): void;
}

declare module goog.async {

    /**
     * Throw an item without interrupting the current execution context.  For
     * example, if processing a group of items in a loop, sometimes it is useful
     * to report an error while still allowing the rest of the batch to be
     * processed.
     * @param {*} exception
     */
    function throwException(exception: any): void;

    /**
     * Fires the provided callback just before the current callstack unwinds, or as
     * soon as possible after the current JS execution context.
     * @param {function(this:THIS)} callback
     * @param {THIS=} opt_context Object to use as the "this value" when calling
     *     the provided function.
     * @template THIS
     */
    function run<THIS>(callback: () => any /*missing*/, opt_context?: THIS): void;
}