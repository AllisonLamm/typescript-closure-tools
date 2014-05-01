// Generated Wed Apr 30 22:41:57 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/math/box.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/math/rect.d.ts" />
/// <reference path="../../../goog/dom/vendor.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/style/style.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventhandler.d.ts" />
/// <reference path="../../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/ui/component.d.ts" />
/// <reference path="../../../goog/events/keycodes.d.ts" />
/// <reference path="../../../goog/ui/selectionmodel.d.ts" />
/// <reference path="../../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../goog/dom/classlist.d.ts" />
/// <reference path="../../../goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/dom/tagiterator.d.ts" />
/// <reference path="../../../goog/dom/nodeiterator.d.ts" />
/// <reference path="../../../goog/ui/paletterenderer.d.ts" />
/// <reference path="../../../goog/ui/registry.d.ts" />
/// <reference path="../../../goog/ui/decorate.d.ts" />
/// <reference path="../../../goog/ui/controlcontent.d.ts" />
/// <reference path="../../../goog/events/keyhandler.d.ts" />
/// <reference path="../../../goog/ui/control.d.ts" />
/// <reference path="../../../goog/ui/palette.d.ts" />
/// <reference path="../../../goog/net/eventtype.d.ts" />
/// <reference path="../../../goog/net/imageloader.d.ts" />
/// <reference path="../../../goog/ui/emoji/emoji.d.ts" />
/// <reference path="../../../goog/ui/emoji/emojipaletterenderer.d.ts" />

declare module goog.ui.emoji {

    /**
     * A page of emoji to be displayed in an EmojiPicker.
     *
     * @param {Array.<Array>} emoji List of emoji for this page.
      * @param {?string=} opt_urlPrefix Prefix that should be prepended to all URL.
     * @param {goog.ui.PaletteRenderer=} opt_renderer Renderer used to render or
     *     decorate the palette; defaults to {@link goog.ui.PaletteRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @extends {goog.ui.Palette}
     * @constructor
     * @final
     */
    class EmojiPalette extends goog.ui.Palette {
        /**
         * A page of emoji to be displayed in an EmojiPicker.
         *
         * @param {Array.<Array>} emoji List of emoji for this page.
         * @param {?string=} opt_urlPrefix Prefix that should be prepended to all URL.
         * @param {goog.ui.PaletteRenderer=} opt_renderer Renderer used to render or
         *     decorate the palette; defaults to {@link goog.ui.PaletteRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @extends {goog.ui.Palette}
         * @constructor
         * @final
         */
        constructor(emoji: any[][], opt_urlPrefix?: string, opt_renderer?: goog.ui.PaletteRenderer, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Sends off requests for all the animated emoji and replaces their static
         * sprites when the images are done downloading.
         */
        loadAnimatedEmoji(): void;
    
        /**
         * Returns the image loader that this palette uses. Used for testing.
         *
         * @return {goog.net.ImageLoader} the image loader.
         */
        getImageLoader(): goog.net.ImageLoader;
    
        /**
         * @return {goog.ui.emoji.Emoji} The currently selected emoji from this palette.
         */
        getSelectedEmoji(): goog.ui.emoji.Emoji;
    
        /**
         * @return {number} The number of emoji managed by this palette.
         */
        getNumberOfEmoji(): number;
    
        /**
         * Returns the index of the specified emoji within this palette.
         *
         * @param {string} id Id of the emoji to look up.
         * @return {number} The index of the specified emoji within this palette.
         */
        getEmojiIndex(id: string): number;
    }
}
