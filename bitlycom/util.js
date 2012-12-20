
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