/// <reference path="../../../globals.d.ts" />
/// <reference path="./sha2.d.ts" />

declare module goog.crypt {

    class Sha224 extends __Sha224 { }
    class __Sha224 extends goog.crypt.__Sha2 {
    
        /**
         * SHA-224 cryptographic hash constructor.
         *
         * @constructor
         * @extends {goog.crypt.Sha2}
         * @final
         * @struct
         */
        constructor();
    }
}