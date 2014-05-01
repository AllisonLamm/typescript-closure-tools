// Generated Wed Apr 30 22:43:51 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/graphics/ext/coordinates.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/graphics/ext/element.d.ts" />
/// <reference path="../../../goog/graphics/ext/group.d.ts" />

declare module goog.graphics.ext {

    /**
     * Wrapper for a graphics surface.
     * @param {string|number} width The width in pixels.  Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {string|number} height The height in pixels.  Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {?number=} opt_coordWidth The coordinate width - if
     *     omitted or null, defaults to same as width.
     * @param {?number=} opt_coordHeight The coordinate height. - if
     *     omitted or null, defaults to same as height.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @param {boolean=} opt_isSimple Flag used to indicate the graphics object will
     *     be drawn to in a single pass, and the fastest implementation for this
     *     scenario should be favored.  NOTE: Setting to true may result in
     *     degradation of text support.
     * @constructor
     * @extends {goog.graphics.ext.Group}
     * @final
     */
    class Graphics extends goog.graphics.ext.Group {
        /**
         * Wrapper for a graphics surface.
         * @param {string|number} width The width in pixels.  Strings
         *     expressing percentages of parent with (e.g. '80%') are also accepted.
         * @param {string|number} height The height in pixels.  Strings
         *     expressing percentages of parent with (e.g. '80%') are also accepted.
         * @param {?number=} opt_coordWidth The coordinate width - if
         *     omitted or null, defaults to same as width.
         * @param {?number=} opt_coordHeight The coordinate height. - if
         *     omitted or null, defaults to same as height.
         * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
         *     document we want to render in.
         * @param {boolean=} opt_isSimple Flag used to indicate the graphics object will
         *     be drawn to in a single pass, and the fastest implementation for this
         *     scenario should be favored.  NOTE: Setting to true may result in
         *     degradation of text support.
         * @constructor
         * @extends {goog.graphics.ext.Group}
         * @final
         */
        constructor(width: any /*string|number*/, height: any /*string|number*/, opt_coordWidth?: number, opt_coordHeight?: number, opt_domHelper?: goog.dom.DomHelper, opt_isSimple?: boolean);
    
        /**
         * @return {goog.graphics.AbstractGraphics} The graphics implementation layer.
         */
        getImplementation(): goog.graphics.AbstractGraphics;
    
        /**
         * Changes the coordinate size.
         * @param {number} coordWidth The coordinate width.
         * @param {number} coordHeight The coordinate height.
         */
        setCoordSize(coordWidth: number, coordHeight: number): void;
    
        /**
         * @return {goog.math.Size} The coordinate size.
         */
        getCoordSize(): goog.math.Size;
    
        /**
         * Changes the coordinate system position.
         * @param {number} left The coordinate system left bound.
         * @param {number} top The coordinate system top bound.
         */
        setCoordOrigin(left: number, top: number): void;
    
        /**
         * @return {goog.math.Coordinate} The coordinate system position.
         */
        getCoordOrigin(): goog.math.Coordinate;
    
        /**
         * Change the size of the canvas.
         * @param {number} pixelWidth The width in pixels.
         * @param {number} pixelHeight The height in pixels.
         */
        setPixelSize(pixelWidth: number, pixelHeight: number): void;
    
        /**
         * @return {goog.math.Size?} Returns the number of pixels spanned by the
         *     surface, or null if the size could not be computed due to the size being
         *     specified in percentage points and the component not being in the
         *     document.
         */
        getPixelSize(): goog.math.Size;
    
        /**
         * @return {Element} The root element of the graphics surface.
         */
        getElement(): Element;
    
        /**
         * Renders the underlying graphics.
         *
         * @param {Element} parentElement Parent element to render the component into.
         */
        render(parentElement: Element): void;
    }
}
