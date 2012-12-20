// ==UserScript==
// @name           52bt
// @namespace      http://www.52bt.org/
// @include        http://www.52bt.org/bbs/search.php*
// @version        120925
// @require        http://www.nerv.org/js/jquery-1.3.2.min.js
// @require        http://www.nerv.org/js/util.js?120925
// ==/UserScript==
// for Discuz! X2

//标题,区名,查询,近期,过期
var colors = ["#e0e0e0","#d0d0d0","#fdd","#dfd","#cccccc"];
//标题
var titleArray = ["動感之星","动感之星","国模","動感小站","[ROSI"];
var titleCt = 0;
//区
var areaArray = ["新手报到"];
var areaCt = 0;

var total = 0;
//alert(titleArray);

var div = $("div#threadlist");
var arr = [];
var hiddenArr = [];
var costArr = [];
var now = new Date();
now.setHours(-50);
//alert(div.length);
div.find("ul li").each(function(){
	var ct = new Date();
	total++;
	var item = $(this);
	var area = item.find("p a.xi1").text();
	if(areaArray.contains(area)){
	//区名匹配某串字符，隐藏
		hiddenArr.push(item);
		item.css({"background-color":colors[1], "margin":"2px"});
		areaCt++;
		return costArr.push(1+"_"+ct.elapse());
	}
	var title = item.find("h3").text();
	for(var idx=0; idx<titleArray.length; idx++){
	//标题包含某段字符，隐藏
		if(title.contains(titleArray[idx])){
			hiddenArr.push(item);
			item.css({"background-color":colors[0], "margin":"2px"});
			titleCt++;
			return costArr.push(2+"_"+ct.elapse());
		}
	}
	var dateStr = item.find("p span:first-child").text().split(" ")[0];
	var date = Date.parseDate(dateStr);
	if(date>=now){
		//近期
		item.css({"background-color":colors[3], "margin":"2px"});
	}
	costArr.push(3+"_"+ct.elapse());
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
msgArr.push(total.fix(2)+"&nbsp;&nbsp;");
var msg = "&nbsp;&nbsp;<span style='line-height: 32px;font-size:14px;cursor:pointer' id='item_msg'>"+msgArr.join("/")+"</span>";
$("table#scform_form td.td_srchtxt").append(msg);

//alert($("span#item_msg").length);
$("span#item_msg").click(function(){
	for(var idx=0;idx<hiddenArr.length;idx++){
		if(hiddenArr[idx].is("li:hidden")){
			hiddenArr[idx].show();
		}else{
			hiddenArr[idx].hide();
		}
	}
});