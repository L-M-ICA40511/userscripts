// ==UserScript==
// @name         Visible Scrollbar - Invision
// @namespace    https://github.com/L-M-ICA40511/userscripts
// @version      1.0
// @description  Makes Invision's Inspect page scrollbars actually visible by altering the color. Uses ::-webkit-scrollbar-thumb and !important css styling. It inserts a style element before the first linked stylesheet.
// @author       Liam Mehl
// @license      GPL-3.0
// @resource     license https://raw.githubusercontent.com/L-M-ICA40511/userscripts/master/LICENSE
// @match        https://projects.invisionapp.com/*
// @grant GM_addStyle
// @grant GM_getValue
// @grant GM_setValue
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';
    var style = document.createElement("style");
    style.innerHTML = "#inspect .canvas::-webkit-scrollbar-thumb{background:rgba(255, 4, 4, 0.8)!important}";
    document.querySelectorAll("link[rel='stylesheet']")[0].before(style);
})();