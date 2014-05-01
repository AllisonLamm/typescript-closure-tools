// Generated Wed Apr 30 22:40:07 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/uri/utils.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/uri/uri.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/promise/resolver.d.ts" />
/// <reference path="../../goog/testing/watchers.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/async/nexttick.d.ts" />
/// <reference path="../../goog/async/run.d.ts" />
/// <reference path="../../goog/promise/thenable.d.ts" />
/// <reference path="../../goog/promise/promise.d.ts" />
/// <reference path="../../goog/net/jsloader.d.ts" />

declare module goog.net.Jsonp {

    /**
     * The name of the property of goog.global under which the callback is
     * stored.
     */
    var CALLBACKS: any /*missing*/;
}

declare module goog.net {

    /**
     * Creates a new cross domain channel that sends data to the specified
     * host URL. By default, if no reply arrives within 5s, the channel
     * assumes the call failed to complete successfully.
     *
     * @param {goog.Uri|string} uri The Uri of the server side code that receives
     *     data posted through this channel (e.g.,
     *     "http://maps.google.com/maps/geo").
     *
     * @param {string=} opt_callbackParamName The parameter name that is used to
     *     specify the callback. Defaults to "callback".
     *
     * @constructor
     * @final
     */
    class Jsonp {
        /**
         * Creates a new cross domain channel that sends data to the specified
         * host URL. By default, if no reply arrives within 5s, the channel
         * assumes the call failed to complete successfully.
         *
         * @param {goog.Uri|string} uri The Uri of the server side code that receives
         *     data posted through this channel (e.g.,
         *     "http://maps.google.com/maps/geo").
         *
         * @param {string=} opt_callbackParamName The parameter name that is used to
         *     specify the callback. Defaults to "callback".
         *
         * @constructor
         * @final
         */
        constructor(uri: any /*goog.Uri|string*/, opt_callbackParamName?: string);
    
        /**
         * Sets the length of time, in milliseconds, this channel is prepared
         * to wait for for a request to complete. If the call is not competed
         * within the set time span, it is assumed to have failed. To wait
         * indefinitely for a request to complete set the timout to a negative
         * number.
         *
         * @param {number} timeout The length of time before calls are
         * interrupted.
         */
        setRequestTimeout(timeout: number): void;
    
        /**
         * Returns the current timeout value, in milliseconds.
         *
         * @return {number} The timeout value.
         */
        getRequestTimeout(): number;
    
        /**
         * Sends the given payload to the URL specified at the construction
         * time. The reply is delivered to the given replyCallback. If the
         * errorCallback is specified and the reply does not arrive within the
         * timeout period set on this channel, the errorCallback is invoked
         * with the original payload.
         *
         * If no reply callback is specified, then the response is expected to
         * consist of calls to globally registered functions. No &callback=
         * URL parameter will be sent in the request, and the script element
         * will be cleaned up after the timeout.
         *
         * @param {Object=} opt_payload Name-value pairs.  If given, these will be
         *     added as parameters to the supplied URI as GET parameters to the
         *     given server URI.
         *
         * @param {Function=} opt_replyCallback A function expecting one
         *     argument, called when the reply arrives, with the response data.
         *
         * @param {Function=} opt_errorCallback A function expecting one
         *     argument, called on timeout, with the payload (if given), otherwise
         *     null.
         *
         * @param {string=} opt_callbackParamValue Value to be used as the
         *     parameter value for the callback parameter (callbackParamName).
         *     To be used when the value needs to be fixed by the client for a
         *     particular request, to make use of the cached responses for the request.
         *     NOTE: If multiple requests are made with the same
         *     opt_callbackParamValue, only the last call will work whenever the
         *     response comes back.
         *
         * @return {Object} A request descriptor that may be used to cancel this
         *     transmission, or null, if the message may not be cancelled.
         */
        send(opt_payload?: Object, opt_replyCallback?: Function, opt_errorCallback?: Function, opt_callbackParamValue?: string): Object;
    
        /**
         * Cancels a given request. The request must be exactly the object returned by
         * the send method.
         *
         * @param {Object} request The request object returned by the send method.
         */
        cancel(request: Object): void;
    }
}
