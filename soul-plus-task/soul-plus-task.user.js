// ==UserScript==
// @name           soul-plus-task
// @namespace      http://bbs.soul-plus.net
// @include        http://bbs.soul-plus.net/hack.php?H_name=tasks*
// @version        121015
// @require        http://www.nerv.org/js/jquery-1.3.2.min.js
// @require        http://www.nerv.org/js/util.js?121015
// ==/UserScript==

var todoArray = ["hack/tasks/image/sh.png"];
var doneArray = ["hack/tasks/image/god.png"];
var todo = false;

$("div.t tr.f_one a").each(function(){
	if(todoArray.contains($(this).find("img").attr("src"))){
		fireAEvent(this,"click");
		todo = true;
	}else if(doneArray.contains($(this).find("img").attr("src"))){
		fireAEvent(this,"click");
	}
});
if(todo){
	$("a:contains('进行中任务')").each(function(){
		setTimeout("document.location = '"+this.href+"';",2000);
	});
}else{
	setTimeout("document.location = 'http://bbs.soul-plus.net/index.php';",2000);
}