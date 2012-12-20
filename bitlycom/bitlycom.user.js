// ==UserScript==
// @name           bitly.com
// @namespace      https://bitly.com/bundles/
// @include        https://bitly.com/bundles/
// @require        http://cache.soso.com/post/js/jquery.js?1.2.6
// @require        http://www.nerv.org/js/util.js
// ==/UserScript==

$("a").each(function(){
	if(this.href.contains("http://bitly.com")){
		this.href = this.href.replace("http://bitly.com","https://bitly.com");
	}
});

