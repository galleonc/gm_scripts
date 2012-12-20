// ==UserScript==
// @name           itokoo
// @namespace      http://www.itokoo.com/
// @include        http://www.itokoo.com/searcher.php*
// @version        120929
// @require        http://www.nerv.org/js/jquery-1.3.2.min.js
// @require        http://www.nerv.org/js/util.js?120929
// ==/UserScript==
// for phpwind v8.7

//标题,区名,查询,近期,过期
var colors = ["#e0e0e0","#d0d0d0","#fdd","#dfd","#cccccc"];
//标题
var titleArray = ["大本营"];
var titleCt = 0;
//区
var areaArray = ["星座占卜","音乐时空","体育天地","ROSI","Showtime动感小站","上海炫彩时尚摄影沙龙","在线观赏"];
var areaCt = 0;

var total = 0;
//alert(titleArray);

var div = $(".main_min #mainbox .dlA");
var arr = [];
var hiddenArr = [];
var costArr = [];
var now = new Date();
now.setHours(-50);
div.find("dl").each(function(){
	var ct = new Date();
	total++;
	var item = $(this);
	var area = item.find(".author").find("a").eq(1).text();
	if(areaArray.contains(area)){
	//区名匹配某串字符，隐藏
		hiddenArr.push(item);
		item.css({"background-color":colors[1], "margin":"2px"});
		areaCt++;
		return costArr.push(ct.elapse());
	}
	var title = item.find("dt").text();
	for(var idx=0; idx<titleArray.length; idx++){
	//标题包含某段字符，隐藏
		if(title.contains(titleArray[idx])){
			hiddenArr.push(item);
			item.css({"background-color":colors[0], "margin":"2px"});
			titleCt++;
			return costArr.push(ct.elapse());
		}
	}
	var dateStr = item.find(".author cite").text().split(" ")[0];
	var date = Date.parseDate(dateStr);
	if(date>=now){
		//近期
		item.css({"background-color":colors[3], "margin":"2px"});
	}
	costArr.push(ct.elapse());
});
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
$("#searchform .search_bg").after(msg);

//alert($("span#item_msg").length);
$("span#item_msg").click(function(){
	for(var idx=0;idx<hiddenArr.length;idx++){
		if(hiddenArr[idx].is("dl:hidden")){
			hiddenArr[idx].show();
		}else{
			hiddenArr[idx].hide();
		}
	}
});