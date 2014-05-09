/// <reference path="../../../globals.d.ts" />
/// <reference path="../events/eventtarget.d.ts" />

declare module goog.net {

    class IframeLoadMonitor extends __IframeLoadMonitor { }
    class __IframeLoadMonitor extends goog.events.__EventTarget {
    
        /**
         * The correct way to determine whether a same-domain iframe has completed
         * loading is different in IE and Firefox.  This class abstracts above these
         * differences, providing a consistent interface for:
         * <ol>
         * <li> Determing if an iframe is currently loaded
         * <li> Listening for an iframe that is not currently loaded, to finish loading
         * </ol>
         *
         * @param {HTMLIFrameElement} iframe An iframe.
         * @param {boolean=} opt_hasContent Does the loaded iframe have content.
         * @extends {goog.events.EventTarget}
         * @constructor
         * @final
         */
        constructor(iframe: HTMLIFrameElement, opt_hasContent?: boolean);
    
        /**
         * Returns whether or not the iframe is loaded.
         * @return {boolean} whether or not the iframe is loaded.
         */
        isLoaded(): boolean;
    
        /**
         * Returns the iframe whose load state this IframeLoader monitors.
         * @return {HTMLIFrameElement} the iframe whose load state this IframeLoader
         *     monitors.
         */
        getIframe(): HTMLIFrameElement;
    }
}

declare module goog.net.IframeLoadMonitor {

    /**
     * Event type dispatched by a goog.net.IframeLoadMonitor when it internal iframe
     * finishes loading for the first time after construction of the
     * goog.net.IframeLoadMonitor
     * @type {string}
     */
    var LOAD_EVENT: string;
}