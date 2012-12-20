// ==UserScript==
// @name           galgame
// @namespace      http://www.galgame.net/
// @version        121028
// @include        http://www.galgame.net/bbs/forumdisplay.php*
// @include        http://www.galgame.net/bbs/search.php?*
// @require        http://www.nerv.org/js/jquery-1.3.2.min.js
// @require        http://www.nerv.org/js/util.js?121028
// @description    for Discuz! 7.0.0
// ==/UserScript==

//非今年,区名,近期,过期
var colors = ["#e0e0e0","#d0d0d0","#fdd","#dfd","#cccccc"];

var arr = [];
var now = new Date();
var year = now.getFullYear();
var url = location.href;
var total = new Date();
now.setHours(-50);
if(url.contains("/bbs/forumdisplay.php?")){
	$("form#moderate tbody").each(function(){
		if(!this.id.contains("normalthread")){
			//非普通帖
			return;
		}
		var st = new Date();
		var item = $(this);
		var title = item.find("th.subject span[id^='thread']").text();
		//arr.push(title);
		
		//var date = item.find("td.author em").text();
		var dateStr = item.find("th.subject").next().find("em").text();
		var date = Date.parseDate(dateStr);
		//非今年的
		if(dateStr.contains("2010")){
			item.remove();
		}else if(!dateStr.contains(year)){
			item.css({"background-color":colors[0], "margin":"2px"});
		}else if(date>=now){
			//最近几天
			item.css({"background-color":colors[2], "margin":"2px"});
		}
		arr.push(st.elapse());
	});
}else if(url.contains("bbs/search.php?")){
	$("div.searchlist table.datatable tbody").each(function(){
		var st = new Date();
		var item = $(this);
		var title = item.find("th.subject").children("a").text();
		//arr.push(title);
		
		var dateStr = item.find("td.author em").text();
		var date = Date.parseDate(dateStr);
		//非今年的
		if(!dateStr.contains(year)){
			item.css({"background-color":colors[0], "margin":"2px"});
		}else if(date>=now){
			//最近几天
			item.css({"background-color":colors[2], "margin":"2px"});
		}
		arr.push(st.elapse());
	});
}
arr.unshift("t:"+total.elapse());
GM_log(arr);