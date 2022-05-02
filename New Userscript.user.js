// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  para sa mga batang makukulet
// @author       You
// @match        https://web.roblox.com/*
// @match        https://www.roblox.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
        //top all network request
        window.stop();
        //remove body.
        document.querySelector('body').remove();
})();