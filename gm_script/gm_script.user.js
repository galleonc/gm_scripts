// ==UserScript==
// @name           千军万马
// @namespace      http://qjwm.com/
// @include        http://*.qjwm.com/down_*.html
// @include        http://*.qjwm.com/download_*.html
// @version    20121107
// @description    千军万马
// @require        http://www.nerv.org/js/jquery-1.3.2.min.js
// @require        http://www.nerv.org/js/util.js?20121107
// ==/UserScript==

route("down_",function(){
	var li = $("div#main").find("div.downsubmit").find("li");
	//GM_log(li.length);
	location.href=li.eq(2).find("a").attr("href");
});
route("download_",function(){
	var imageMap = new Map();
	imageMap.put("a4.jpg","百助");
	imageMap.put("a5.jpg","百助");
	imageMap.put("a6.jpg","画皮");
	imageMap.put("a7.jpg","画皮");
	imageMap.put("a8.jpg","画皮");
	imageMap.put("a9.jpg","画皮");
	imageMap.put("a1.jpg","千军万马");
	var img = $("#my_yzm").find("img").attr("src")||"";
	GM_log(img);
	img = img.replace("http://ad.qjwm.com/img/","");
	var word = imageMap.get(img)||"";
	$("#downinput").val(word);
	if(word!=""){
		//check_yzm('downinput');
		fireAEvent(_('downinput'),"keyup");
	}
});