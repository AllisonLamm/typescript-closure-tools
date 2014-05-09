/// <reference path="../../../globals.d.ts" />
/// <reference path="./containerrenderer.d.ts" />

declare module goog.ui {

    class MenuBarRenderer extends goog.ui.ContainerRenderer {
    
        /**
         * Default renderer for {@link goog.ui.menuBar}s, based on {@link
         * goog.ui.ContainerRenderer}.
         * @constructor
         * @extends {goog.ui.ContainerRenderer}
         * @final
         */
        constructor();
    }
}

declare module goog.ui.MenuBarRenderer {

    /**
     * Default CSS class to be applied to the root element of elements rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
