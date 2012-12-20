// ==UserScript==
// @name           imagebam
// @namespace      http://www.imagebam.com/image/
// @include        http://www.imagebam.com/image/*
// @version        121108
// @require        http://www.nerv.org/js/jquery-1.3.2.min.js
// @require        http://www.nerv.org/js/util.js?121108
// ==/UserScript==


$("#redirect-ad").remove();
//$("#banner_top").remove();
var img = null;
$("div#imageContainer").find("img").each(function(){
	if(this.alt=="loading"){
		img = this;
	}
});
if(img){
	$(img).load(function(){
		resize(img,1280,960);
	});
}
// GM_log($("div#imageContainer").find("img").length);
