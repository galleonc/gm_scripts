// ==UserScript==
// @name           imgchili
// @namespace      http://imgchili.com/
// @include        http://imgchili.com/show/*
// @version        121012
// @require        http://www.nerv.org/js/jquery-1.3.2.min.js
// @require        http://www.nerv.org/js/util.js?121012
// ==/UserScript==
// GM_addStyle("div#id { display: none }");

$("#popads_topmost").remove();
$("iframe").remove();
$("#ad").remove();
$("#all").show();
