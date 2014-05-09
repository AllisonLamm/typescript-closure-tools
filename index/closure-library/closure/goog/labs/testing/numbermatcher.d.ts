/// <reference path="../../../../globals.d.ts" />
/// <reference path="./matcher.d.ts" />

declare module goog.labs.testing {

    class GreaterThanMatcher implements goog.labs.testing.Matcher {
    
        /**
         * The GreaterThan matcher.
         *
         * @param {number} value The value to compare.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(value: number);
    
        /**
         * Determines whether a value matches the constraints of the match.
         *
         * @param {*} value The object to match.
         * @return {boolean} Whether the input value matches this matcher.
         */
        matches(value: any): boolean;
    
        /**
         * Describes why the matcher failed.
         *
         * @param {*} value The value that didn't match.
         * @param {string=} opt_description A partial description to which the reason
         *     will be appended.
         *
         * @return {string} Description of why the matcher failed.
         */
        describe(value: any, opt_description?: string): string;
    }

    class LessThanMatcher implements goog.labs.testing.Matcher {
    
        /**
         * The lessThan matcher.
         *
         * @param {number} value The value to compare.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(value: number);
    
        /**
         * Determines whether a value matches the constraints of the match.
         *
         * @param {*} value The object to match.
         * @return {boolean} Whether the input value matches this matcher.
         */
        matches(value: any): boolean;
    
        /**
         * Describes why the matcher failed.
         *
         * @param {*} value The value that didn't match.
         * @param {string=} opt_description A partial description to which the reason
         *     will be appended.
         *
         * @return {string} Description of why the matcher failed.
         */
        describe(value: any, opt_description?: string): string;
    }

    class GreaterThanEqualToMatcher implements goog.labs.testing.Matcher {
    
        /**
         * The GreaterThanEqualTo matcher.
         *
         * @param {number} value The value to compare.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(value: number);
    
        /**
         * Determines whether a value matches the constraints of the match.
         *
         * @param {*} value The object to match.
         * @return {boolean} Whether the input value matches this matcher.
         */
        matches(value: any): boolean;
    
        /**
         * Describes why the matcher failed.
         *
         * @param {*} value The value that didn't match.
         * @param {string=} opt_description A partial description to which the reason
         *     will be appended.
         *
         * @return {string} Description of why the matcher failed.
         */
        describe(value: any, opt_description?: string): string;
    }

    class LessThanEqualToMatcher implements goog.labs.testing.Matcher {
    
        /**
         * The LessThanEqualTo matcher.
         *
         * @param {number} value The value to compare.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(value: number);
    
        /**
         * Determines whether a value matches the constraints of the match.
         *
         * @param {*} value The object to match.
         * @return {boolean} Whether the input value matches this matcher.
         */
        matches(value: any): boolean;
    
        /**
         * Describes why the matcher failed.
         *
         * @param {*} value The value that didn't match.
         * @param {string=} opt_description A partial description to which the reason
         *     will be appended.
         *
         * @return {string} Description of why the matcher failed.
         */
        describe(value: any, opt_description?: string): string;
    }

    class EqualToMatcher implements goog.labs.testing.Matcher {
    
        /**
         * The EqualTo matcher.
         *
         * @param {number} value The value to compare.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(value: number);
    
        /**
         * Determines whether a value matches the constraints of the match.
         *
         * @param {*} value The object to match.
         * @return {boolean} Whether the input value matches this matcher.
         */
        matches(value: any): boolean;
    
        /**
         * Describes why the matcher failed.
         *
         * @param {*} value The value that didn't match.
         * @param {string=} opt_description A partial description to which the reason
         *     will be appended.
         *
         * @return {string} Description of why the matcher failed.
         */
        describe(value: any, opt_description?: string): string;
    }

    class CloseToMatcher implements goog.labs.testing.Matcher {
    
        /**
         * The CloseTo matcher.
         *
         * @param {number} value The value to compare.
         * @param {number} range The range to check within.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(value: number, range: number);
    
        /**
         * Determines whether a value matches the constraints of the match.
         *
         * @param {*} value The object to match.
         * @return {boolean} Whether the input value matches this matcher.
         */
        matches(value: any): boolean;
    
        /**
         * Describes why the matcher failed.
         *
         * @param {*} value The value that didn't match.
         * @param {string=} opt_description A partial description to which the reason
         *     will be appended.
         *
         * @return {string} Description of why the matcher failed.
         */
        describe(value: any, opt_description?: string): string;
    }
}
