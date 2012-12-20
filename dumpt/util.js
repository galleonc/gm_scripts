
String.prototype.contains = function($value){
	return this.indexOf($value)>-1;  
};
Array.prototype.contains = function($value){
	for(var $i=0; $i<this.length; $i++){
	   var $element = this[$i];
	   if($element == $value) return true;
	}
	return false;  
};
Array.prototype.indexOf = function(obj){
	var idx = -1;
	for(var $i=0; $i<this.length; $i++){
	   var $element = this[$i];
	   if($element == $value) return $i;
	}
	return idx;
};
//将yyyy-mm-dd格式字符串转成Date对象
Date.parseDate = function(dateStr){
	var arr = dateStr.split("-");
	return new Date(arr[0],arr[1]-1,arr[2]);
};
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
function log(obj){
	if(typeof(GM_log)!="undefined"){
		GM_log(obj);
	}
}
//重置图片大小
function resize(obj,maxWidth,maxHeight){
	maxWidth = maxWidth||800;
	maxHeight = maxHeight||600;
	var bWidth = obj.width, bHeight = obj.height;
	var rate;
	var way = 0;
	if(bWidth>bHeight&&bWidth>maxWidth){
		rate = (maxWidth/bWidth).toFixed(4);
		obj.width = maxWidth;
		obj.height = bHeight*rate;
		way = 1;
	}else if(bWidth<bHeight&&bHeight>maxHeight){
		rate = (maxHeight/bHeight).toFixed(4);
		obj.height = maxHeight;
		obj.width = bWidth*rate;
		way = 2;
	}
	log("resize "+obj.src+" way:"+way + " "+bWidth+"x"+bHeight + "->"+obj.width+"x"+obj.height+" rate:"+rate);
}
function redirect(url, timeout){
	timeout = timeout||0;
	if(timeout>0){
		setTimeout("document.location = '" +url + "'",timeout);
	}else{
		document.location = url;
	}
}

var Map = function(obj){
	if("object"==(typeof obj)){
		for(var key in obj){
			this.put(key, obj[key]);
		}
	}
};
Map.prototype = {
	keyArr: [],
	valArr: [],
	put:function(key,val){
		var idx = this._getIndex(key);
		if(idx==-1){
			this.keyArr.push(key);
			this.valArr.push(val);
		}else{
			this.keyArr[idx] = key;
			this.valArr[idx] = val;
		}
	},
	get:function(key){
		var idx = this._getIndex(key);
		if(idx==-1){
			return null;
		}else{
			return this.valArr[idx];
		}
	},
	contains:function(key){
		return _getIndex(key)!=-1;
	},
	_getIndex: function(key){
        if (key == null || key == undefined) {
            return -1;
        }
        var _length = this.keyArr.length;
        for (var idx = 0; idx < _length; idx++) {
            if (this.keyArr[idx] === key) {
                return idx;
            }
        }
        return -1;
    },
	size:function(){
		return this.keyArr.length;
	},
	toString:function(){
		var buffer = [];
        for (var idx = 0; idx < _length; idx++) {
			buffer.push(this.keyArr[idx]+"="+this.valArr[idx]);
        }
		return "{" + buffer.join(", ") + "}";
	}
};