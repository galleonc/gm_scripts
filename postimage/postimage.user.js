// ==UserScript==
// @name           postimage
// @namespace      http://postimage.org/
// @include        http://postimage.org/image/*
// @version        121012
// @require        http://www.nerv.org/js/jquery-1.3.2.min.js
// @require        http://www.nerv.org/js/util.js?121012
// ==/UserScript==
//调整图片大小
resize($("center>img").get(0),1280,1024);

$("iframe").remove();