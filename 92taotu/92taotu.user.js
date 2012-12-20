// ==UserScript==
// @name           92taotu
// @namespace      http://www.92taotu.com/
// @include        http://www.92taotu.com/forum.php?mod=guide&view=new*
// @include        http://www.92taotu.com/forum-*.html
// @version        120925
// @require        http://www.nerv.org/js/jquery-1.3.2.min.js
// @require        http://www.nerv.org/js/util.js?120925
// @description    for Discuz! X2.5
// ==/UserScript==

//$("div#threadlist").find("ul li").find("h3.ptn").css({"height":"45px","white-space":"normal","line-height":"21px"});
GM_addStyle(".mlt h3{height:45px;white-space:normal;line-height:21px}");

//标题,区名,查询,近期,过期
var colors = ["#e0e0e0","#d0d0d0","#fdd","#dfd","#cccccc"];
//标题
var titleArray = ["動感之星","动感之星","国模","動感小站"];
var titleCt = 0;
//高亮
var effectArray = ["希志"];
var effectCt = 0;
//区
var areaArray = ["新手报到","Rosi"];
var areaCt = 0;

var total = 0;
//alert(titleArray);

var div = $("div#threadlist div.bm_c");
var arr = [];
var hiddenArr = [];
var costArr = [];

div.find("tbody tr").each(function(){
	var ct = new Date();
	total++;
	var item = $(this);
	var area = item.find("th.common").next().text();
	if(areaArray.contains(area)){
		//区名匹配某串字符，隐藏
		hiddenArr.push(item);
		item.css({"background-color":colors[1], "margin":"2px"});
		areaCt++;
		return costArr.push(1+"_"+ct.elapse());
	}
	var title = item.find("th.common a.xst").text();
	for(var idx=0; idx<titleArray.length; idx++){
	//标题包含某段字符，隐藏
		if(title.contains(titleArray[idx])){
			hiddenArr.push(item);
			item.css({"background-color":colors[0], "margin":"2px"});
			titleCt++;
			return costArr.push(2+"_"+ct.elapse());
		}
	}
	for(var idx=0; idx<effectArray.length; idx++){
	//高亮
		if(title.contains(effectArray[idx])){
			item.css({"background-color":colors[2], "margin":"2px"});
			return costArr.push(3+"_"+ct.elapse());
		}
	}
	var date = item.find("td.by em>span").text();
	if(date.contains("昨天")||date.contains("前天")||date.contains("小时")){
		item.css({"background-color":colors[3], "margin":"2px"});
	}
	return costArr.push(4+"_"+ct.elapse());
});
//alert(arr);
//隐藏匹配的元素
for(var idx=0;idx<hiddenArr.length;idx++){
	hiddenArr[idx].hide();
}
GM_log(costArr);
//alert(arr);
var msgArr = [];
msgArr.push("<span style='background-color:"+colors[0]+"'>" + titleCt.fix(2) + "</span>");
msgArr.push("<span style='background-color:"+colors[1]+"'>" + areaCt.fix(2) + "</span>");
msgArr.push(total.fix(2));
var msg = "<li><a href='javascript:' id='item_msg'>"+msgArr.join("/")+"</a></li>";
$("ul#thread_types").append(msg);

$("a#item_msg").click(function(){
	for(var idx=0;idx<hiddenArr.length;idx++){
		if(hiddenArr[idx].is("tr:hidden")){
			hiddenArr[idx].show();
		}else{
			hiddenArr[idx].hide();
		}
	}
});