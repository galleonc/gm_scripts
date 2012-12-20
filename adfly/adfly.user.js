// ==UserScript==
// @name           adfly
// @namespace      http://adf.ly/
// @include        http://adf.ly/*
// @version        121010
// @require        http://www.nerv.org/js/jquery-1.3.2.min.js
// @require        http://www.nerv.org/js/util.js?121010
// ==/UserScript==
if(location.href.match(/adf.ly\/\w+$/ig)){

	var a = _("skip_button");
	if(a){
		a.style.display="";
		unsafeWindow.countdown = 0;
		unsafeWindow.startCounter();
		unsafeWindow.counter();
		unsafeWindow.skipButton();
		//unsafeWindow.location.href=a.href;
	}else{
		$("#adfly_bar").remove();
		var body = _("home");
		if(body)
		body.style.padding="0px 0px";
	}
}else{
	//GM_log(location.href+"->"+location.href.match(/adf.ly\/\w+$/ig));
}