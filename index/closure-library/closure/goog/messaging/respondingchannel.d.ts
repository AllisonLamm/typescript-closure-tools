/// <reference path="../../../globals.d.ts" />
/// <reference path="../disposable/disposable.d.ts" />
/// <reference path="./messagechannel.d.ts" />

declare module goog.messaging {

    class RespondingChannel extends goog.Disposable {
    
        /**
         * Creates a new RespondingChannel wrapping a single MessageChannel.
         * @param {goog.messaging.MessageChannel} messageChannel The messageChannel to
         *     to wrap and allow for responses. This channel must not have any existing
         *     services registered. All service registration must be done through the
         *     {@link RespondingChannel#registerService} api instead. The other end of
         *     channel must also be a RespondingChannel.
         * @constructor
         * @extends {goog.Disposable}
         */
        constructor(messageChannel: goog.messaging.MessageChannel);
    
        /**
         * Sends a message over the channel.
         * @param {string} serviceName The name of the service this message should be
         *     delivered to.
         * @param {string|!Object} payload The value of the message. If this is an
         *     Object, it is serialized to a string before sending if necessary.
         * @param {function(?Object)} callback The callback invoked with
         *     the result of the service call.
         */
        send(serviceName: string, payload: string, callback: (_0: Object) => any /*missing*/): void;
        /**
         * Sends a message over the channel.
         * @param {string} serviceName The name of the service this message should be
         *     delivered to.
         * @param {string|!Object} payload The value of the message. If this is an
         *     Object, it is serialized to a string before sending if necessary.
         * @param {function(?Object)} callback The callback invoked with
         *     the result of the service call.
         */
        send(serviceName: string, payload: Object, callback: (_0: Object) => any /*missing*/): void;
    
        /**
         * Registers a service to be called when a message is received.
         * @param {string} serviceName The name of the service.
         * @param {function(!Object)} callback The callback to process the
         *     incoming messages. Passed the payload.
         */
        registerService(serviceName: string, callback: (_0: Object) => any /*missing*/): void;
    }
}
