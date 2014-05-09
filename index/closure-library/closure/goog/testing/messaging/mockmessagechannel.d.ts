/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../messaging/abstractchannel.d.ts" />
/// <reference path="../mockcontrol.d.ts" />

declare module goog.testing.messaging {

    class MockMessageChannel extends __MockMessageChannel { }
    class __MockMessageChannel extends goog.messaging.__AbstractChannel {
    
        /**
         * Class for unit-testing code that communicates over a MessageChannel.
         * @param {goog.testing.MockControl} mockControl The mock control used to create
         *   the method mock for #send.
         * @extends {goog.messaging.AbstractChannel}
         * @constructor
         * @final
         */
        constructor(mockControl: goog.testing.MockControl);
    
        /**
         * Mocks the receipt of a message. Passes the payload the appropriate service.
         * @param {string} serviceName The service to run.
         * @param {string|!Object} payload The argument to pass to the service.
         */
        receive(serviceName: string, payload: string): void;
        /**
         * Mocks the receipt of a message. Passes the payload the appropriate service.
         * @param {string} serviceName The service to run.
         * @param {string|!Object} payload The argument to pass to the service.
         */
        receive(serviceName: string, payload: Object): void;
    }
}