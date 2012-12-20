
String.prototype.contains = function($value){
	return this.indexOf($value)>-1;  
}
Array.prototype.contains = function($value){
	for(var $i=0; $i<this.length; $i++){
	   var $element = this[$i];
	   if($element == $value) return true;
	}
	return false;  
}
//将yyyy-mm-dd格式字符串转成Date对象
Date.parseDate = function(dateStr){
	var arr = dateStr.split("-");
	return new Date(arr[0],arr[1]-1,arr[2]);
}
Date.prototype.elapse = function(){
	return new Date().getTime()-this.getTime();
};
Number.prototype.fix = function(len){
	var str = new String(this);
	len=len||0;
	if(len<2){
		return str;
	}
	while(str.length<len){
		str = "0"+str;
	}
	return str;
}
function route(key,fn){
	if(window.location.href.contains(key)){
		fn();
	}
}

//调用事件，通过GM很难调用原页面的函数，最好只从Element的事件方向处理  
function fireAEvent(ele, type) {
	var evt = document.createEvent("Event");  
	evt.initEvent(type, true, false);  
	ele.dispatchEvent(evt);  
};

function $$(id){
	var obj = document.getElementById(id);;
	if(typeof($)){
		return $(obj);
	}
	return obj;
}

function _(id){
	return document.getElementById(id);
}

function resize(obj,maxWidth,maxHeight){
	var rate;
	maxWidth = maxWidth||800;
	maxHeight = maxHeight||600;
	if(obj.width>obj.height&&obj.width>maxWidth){
		rate = maxWidth/obj.width;
		obj.width = maxWidth;
		obj.height = obj.height*rate;
	}else if(obj.width<obj.height&&obj.height>maxHeight){
		rate = maxHeight/obj.height;
		obj.height = maxHeight;
		obj.width = obj.width*rate;
	}
}