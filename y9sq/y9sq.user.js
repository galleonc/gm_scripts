// ==UserScript==
// @name           y9sq
// @namespace      http://www.y9sq.com/
// @include        http://www.y9sq.com/search.php*
// @version        120921
// @require        http://www.nerv.org/js/jquery-1.3.2.min.js
// @require        http://www.nerv.org/js/util.js?120922
// @description    for Discuz! 7.2
// ==/UserScript==

//标题,区名,查询,近期,过期
var colors = ["#e0e0e0","#d0d0d0","#fdd","#dfd","#cccccc"];
//标题
var titleArray = ["動感之星","动感之星","国模","動感小站","动感小站","tpimage","rosi","国内名模"];
var titleCt = 0;
//查询高亮
var effectArray = ["希志"];
var effectCt = 0;
//区
var areaArray = ["新手试帖区","版主申请区","勋章申请区","水漫金山","开心澡堂","万能求购区","精品文库[电子书]","Tpimage专区"];
var areaCt = 0;

var total = 0;
//alert(titleArray);

var tab = $("table.datatable");
var arr = [];
var hiddenArr = [];
var costArr = [];
var now = new Date();
now.setHours(-50);
tab.find("tbody tr").each(function(){
	var ct = new Date();
	total++;
	var item = $(this);
	var area = item.find("td.forum").find("a").text();
	if(areaArray.contains(area)){
		//区名匹配某串字符，隐藏
		hiddenArr.push(item);
		item.css({"background-color":colors[1], "margin":"2px"});
		areaCt++;
		return costArr.push(ct.elapse());
	}
	var title = item.find("th.subject").find("a").text();
	for(var idx=0; idx<titleArray.length; idx++){
		//标题包含某段字符，隐藏
		if(title.toLowerCase().contains(titleArray[idx])){
			hiddenArr.push(item);
			item.css({"background-color":colors[0], "margin":"2px"});
			titleCt++;
			return costArr.push(ct.elapse());
		}
	}
	for(var idx=0; idx<effectArray.length; idx++){
	//高亮
		if(title.contains(effectArray[idx])){
			item.css({"background-color":colors[2], "margin":"2px"});
			return costArr.push(ct.elapse());
		}
	}
	var dateStr = item.find("td.author").find("em").text();
	var date = Date.parseDate(dateStr);
	if(date>=now){
		//近期
		item.css({"background-color":colors[3], "margin":"2px"});
	}
	if(date.getFullYear()<now.getFullYear()){
		//去年以前
		item.css({"background-color":colors[4], "margin":"2px"});
	}
	costArr.push(ct.elapse());
});
if(total){
	$("#search_option").remove();
}
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
var msg = "&nbsp;&nbsp;<span style='line-height: 32px;font-size:14px;cursor:pointer' id='item_msg'>"+msgArr.join("/")+"</span>";
$("p.searchkey").append(msg);

$("span#item_msg").click(function(){
	for(var idx=0;idx<hiddenArr.length;idx++){
		if(hiddenArr[idx].is("tr:hidden")){
			hiddenArr[idx].show();
		}else{
			hiddenArr[idx].hide();
		}
	}
});