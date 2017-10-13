//面向对象、拖拽函数
//===============================================================
function Drag(id){
	this.oDiv = document.getElementById(id);
	var _this = this;
	this.oDiv.onmousedown = function(even){
		_this.fnDown(even);
	}
	document.onmouseup = this.fnUp;
}
Drag.prototype.fnDown = function(even){
	var e = even || window.event;
	this.offsetX = e.clientX - this.oDiv.offsetLeft;
	this.offsetY = e.clientY - this.oDiv.offsetTop;
	var _this = this
	document.onmousemove = function(even){
		_this.fnMove(even);
	}
}
Drag.prototype.fnMove = function(even){
	var e = even || window.event;
	this.oDiv.style.left = e.clientX - this.offsetX + "px";
	this.oDiv.style.top = e.clientY - this.offsetY + "px";
}

Drag.prototype.fnUp = function(){
	document.onmousemove = null;
}
//==============================================================
//选项卡
function TabSwitch(id){
			this.oDiv = document.getElementById("div1");
			this.aDivs = this.oDiv.getElementsByTagName("div");
			this.oBtn = this.oDiv.getElementsByTagName("input");

			//给所有的按钮添加事件
			for(var i = 0; i < this.oBtn.length; i++){
				//记录下标
				 this.oBtn[i].index = i;
				var obj = this;

				this.oBtn[i].onclick = function(){
					obj.tab(this);
				};
					//1、先将原来所有按钮的class取消
			}
			TabSwitch.prototype.tab = function(_this){
				for(var j = 0; j < this.oBtn.length; j++){
					this.oBtn[j].className = "";
					this.aDivs[j].style.display = "none";
				}
				//2、再将当前的变成active
				_this.className = "active";
				this.aDivs[_this.index].style.display = "block";
				}
			}
//================================================================