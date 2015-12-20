// ==UserScript== 
// @name Disable plugin enum 
// @author Mechazawa 
// @namespace pluginenum 
// @description Disables plugin enumeration 
// @license WTFPl 
// @version 1 
// @include * 
// @run-at document-start 
// @updateURL https://raw.githubusercontent.com/Mechazawa/Firefox-plugin-enum-disable/master/DisablePluginEnum.user.js
// @grant none 
// ==/UserScript==

Object.defineProperty(navigator, "plugins", {value: []});x
