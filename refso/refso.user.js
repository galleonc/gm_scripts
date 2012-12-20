// ==UserScript==
// @name           ref.so
// @namespace      http://ref.so/
// @include        http://ref.so/*
// @require        http://www.nerv.org/js/jquery-1.3.2.min.js
// ==/UserScript==

location.href=$("div#btn_open").find("a")[0].href;