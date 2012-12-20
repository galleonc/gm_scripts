// ==UserScript==
// @name           soul-plus
// @namespace      http://bbs.soul-plus.net
// @include        http://bbs.soul-plus.net/thread.php?fid=*
// @version        121016
// @require        http://www.nerv.org/js/jquery-1.3.2.min.js
// @require        http://www.nerv.org/js/util.js?121016
// ==/UserScript==

//标题,区名,查询,近期,过期
var colors = ["#eee","#ddd","#fdd","#dfd","#ddf","#cccccc"];
var uncensored = ["无码","无修","無修"];
var div = $("table#ajaxtable");

var title = div.find("tbody").children("tr.tr2");
GM_log(title.nextAll("tr.tr3").length);
var arr = [];
var costArr = [];
title.nextAll("tr.tr3").each(function(){
	var ct = new Date();
	var item = $(this);
	var td = item.children("td[id]");
	//分组类别
	var type = td.children("a[class]").text();
	if(type==""){
		return;
	}
	//标题
	var name = td.find("a[id]").text();
	//全名
	var full = type+name;
	for(var idx=0; idx<uncensored.length; idx++){
		if(full.contains(uncensored[idx])){
			item.css({"background-color":colors[3], "margin":"2px"});
			return costArr.push(ct.elapse());
		}
	}
	if(full.contains("丝")){
		item.css({"background-color":colors[2], "margin":"2px"});
	}else if(type=="[日文]"||type=="[RAW]"){
		item.css({"background-color":colors[1], "margin":"2px"});
	}else if(type=="[合集]"){
		item.css({"background-color":colors[4], "margin":"2px"});
	}
	costArr.push(ct.elapse());
});
GM_log(costArr);