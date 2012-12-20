// ==UserScript==
// @name           imageporter
// @namespace      http://www.imageporter.com/
// @include        http://imageporter.com/*/*.html
// @include        http://www.imageporter.com/*/*.html
// @version        121010
// @require        http://www.nerv.org/js/jquery-1.3.2.min.js
// @require        http://www.nerv.org/js/util.js?121010
// ==/UserScript==
if(location.href.match(/\/\w+\/.+html/ig)){
	if(unsafeWindow.splashpage&&unsafeWindow.splashpage.moveuptimer){
		clearInterval(unsafeWindow.splashpage.moveuptimer);
	}
}
setTimeout(function(){
	$("div.fr4me").find("div:has('img.banner')").remove();
	$("#firopage").remove();
	resize($("center>div>a>img").get(0),1280,960);
},1000);
