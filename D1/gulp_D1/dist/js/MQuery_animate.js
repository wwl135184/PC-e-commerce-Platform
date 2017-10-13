$().extend({
	animate: function(json, callBack){
		for(var i = 0; i < this.elements.length; i++){
			startMove(this.elements[i], json, callBack);
		}
	}
})