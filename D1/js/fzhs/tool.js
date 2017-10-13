//库
//===============================================================
//获取当前有效样式
function getStyle(element, attr){
return element.currentStyle ? element.currentStyle[attr] : getComputedStyle(element)[attr];
}
//================================================================
//随机颜色
function randomColor(){
return "rgba(" + parseInt(Math.random() * 255) + ", " + parseInt(Math.random() * 255) + ", " + parseInt(Math.random() * 255) + ", 1)";
}
//================================================================
//通过className获取元素节点
function elementsByClassName(parentNode, className){
var result = []; //用于存储符合条件的元素节点
//1、获取当前节点下，所有的节点
var nodes =  parentNode.getElementsByTagName("*");
for(var i = 0; i < nodes.length; i++){
	if(nodes[i].className == className){
		//2、存储
		result.push(nodes[i]);
	}
}
return result;
}
//=================================================================
//忽略空白节点
function removeSpaceNodes(nodes){
		var arr = [];
		for(i = 0; i < nodes.length; i++){
			if(!(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue))){
					arr.push(nodes[i]);
				}
			}
			return arr;
}
//=============================================================================
//忽略空白节点第二种方法
function removeSpaceNode2(parent){
		for(var i = parent.childNodes.length - 1; i >= 0; i--){
			if(parent.childNodes[i].nodeType == 3 && /^\s+$/.test(parent.childNodes[i].nodeValue)){
				parent.removeChild(parent.childNodes[i]);
			}
		}
	}
//============================================================================
//注册表验证码
function authCode(n){
var arr = [];
for(var i = 0; i < n; i++){
	var num = parseInt(Math.random() * 100);
	if(num >= 0 && num < 10){
		arr.push(num);
	}else if(num >= 10 && num <= 35){
		arr.push(String.fromCharCode(num + 87));
	}else if(num >= 65 && num <= 90){
		arr.push(String.fromCharCode(num));
	}else{
		i--;
		continue;
	}
}
return arr.join("");
}
//=============================================================================
//一个带文本的函数
function createNodeWithText(tagName, text){
		var node = document.createElement(tagName);
		var oTxt = document.createTextNode(text);
		node.appendChild(oTxt);
		return node;
	}
//============================================================================
//document的四种方法
function $(vArg){
		switch(vArg[0]){
			case "#": //id
				return document.getElementById(vArg.substring(1));
				break;
			case ".": //class
				// return document.getElementsByClassName()
				return elementsByClassName(document, vArg.substring(1));
				break;
			default:
				var subStr = vArg.substring(0, 5);
				if(subStr == "name="){
					//name
					return document.getElementsByName(vArg.substring(5));
				}else{
					//tagName
					return document.getElementsByTagName(vArg);
				}
				break;
		}
	}
//==========================================================================
//事件冒泡兼容
function stopBubble(e){
		if(e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble = true;
		}
	}
//========================================================================
//拖拽
function drag(node){
		//1、添加鼠标按下事件
		var offsetX = 0; //记录相对位置
		var offsetY = 0;
		node.onmousedown = function(ev){
			var e = ev || window.event;
			offsetX = e.clientX - node.offsetLeft;
			offsetY = e.clientY - node.offsetTop;
			//2、添加移动
			document.onmousemove = function(ev){
				var e = ev || window.event;
				//改变拖拽物体的坐标
				node.style.left = e.clientX - offsetX + "px";
				node.style.top = e.clientY - offsetY + "px";

			}
			//3、取消拖拽
			document.onmouseup = function(){
				document.onmousemove = null;
			}
		}
	}
//=====================================================================
//选择排序
function select(arr){
		for(var i = 0; i < arr.length - 1; i++){
			for(var j = i + 1; j < arr.length; j++){
				if(arr[i] > arr[j]){
					var tmp = arr[i];
					arr[i] = arr[j];
					arr[j] = tmp;
				}
			}
		}
		return arr;
	}
//================================================================
//冒泡排序
function bubble(arr){
		for(i = 0; i < arr.length - 1;i++){
			for(j = 0; j < arr.length - i - 1; j++){
				if(arr[j] > arr[j + 1]){
					var tmp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = tmp;
				}
			}
		}
		return arr;
	}
//================================================================
//事件函数浏览器兼容
//跨浏览器添加事件
function addEvent(obj, type, func){
		if(obj.addEventListener){
			obj.addEventListener(type, func, false);
		}else{
			obj.attachEvent("on" + type, func);
		}
	}

//跨浏览器移除事件
function removeEvent(obj, type, func){
		if(obj.removeEventListener){
			obj.removeEventListener(type, func);
		}else{
			obj.detachEvent("on" + type, func);
		}
	}
//================================================================
//Cookie
function setCookie(name, value, {expires = 7, path, domain, secure}){
		var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
			if(expires instanceof Date){
				cookieText += ";expires=" + expires;
			}
			if(path){
				cookieText += ";path=" + path;
			}
			if(domain){
				cookieText += ";domain=" + domain;
			}
			if(secure){
				cookieText += ";secure";
			}
			//设置cookie
		document.cookie = cookieText;
		}
function getCookie(name){
		//1、取出存好的cookie
		var cookieText = decodeURIComponent(document.cookie);
		//2、找出键值对的位置
		var start = cookieText.indexOf(name);
		if(start == -1){
			return null;
		}else{
			var end = cookieText.indexOf(";", start);
			if(end == -1){
				//这是结尾
				end = cookieText.length;
			}
		}

		//3、将键值对提取出来
		var str = cookieText.substring(start, end);
		var arr = str.split("=");
		return arr[1];
	}
function removeCookie(name){
		document.cookie = encodeURIComponent(name) + "= ;expires=" + new Date(0);
	}
function numOfDate(n){
		var d = new Date();
		var day = d.getDate();
		d.setDate(day + n);
		return d;
	}
function $_cookie(){
		//通过参数所传内容区分
		switch(arguments.length){
			case 1: //获取cookie
				return getCookie(arguments[0]);
				break;
			case 2:
				//1、删除cookie
				if(!arguments[1]){
					removeCookie(arguments[0]);
				}else{
					//2、设置cookie
					setCookie(arguments[0], arguments[1]);
				}
				break;
			default:
				//3、设置cookie  arguments[2] 必须是json对象
				setCookie(arguments[0], arguments[1], arguments[2]);
				break;
		}
	}
//========================================================================
//拖拽返回
function dragBack(obj){
	var offsetX = 0;
		var offsetY = 0;
		var arr = [];
		obj.onmousedown = function(ev){
			var e = ev || window.event;
			offsetX = e.clientX - this.offsetLeft;
			offsetY = e.clientY - this.offsetTop;
			document.onmousemove = function(ev){
				var e = ev || window.event;
				obj.style.left = e.clientX - offsetX + "px";
				obj.style.top = e.clientY - offsetY + "px";
				arr.push({
					l: obj.offsetLeft + "px",
					t: obj.offsetTop + "px"
				})
			}
			obj.onmouseup = function(){
				document.onmousemove = null;
				var timer = setInterval(function(){
					var frame = arr.pop();
					if(frame){
						obj.style.left = frame.l;
						obj.style.top = frame.t;
					}else{
						clearInterval(timer);
					}

				},20)
			}
		}
	}
//===================================================================
//碰撞检测
function Region(node1, node2){
		var l1 = node1.offsetLeft;
		var r1 = node1.offsetLeft + node1.offsetWidth;
		var t1 = node1.offsetTop;
		var b1 = node1.offsetTop + node1.offsetHeight;

		var l2 = node2.offsetLeft;
	 	var r2 = node2.offsetLeft + node2.offsetWidth;
		var t2 = node2.offsetTop;
		var b2 = node2.offsetTop + node2.offsetHeight;

		//哪些条件下是碰不到的
		if(r1 < l2 || b1 < t2 || l1 > r2 || t1 > b2){
			return false;
		}else{
			return true;
		}
	}
//==================================================================
//多样式同时运动
function startMove(obj, json, func){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){

			var bStop = true; //指示是否多个样式，都到达目的值

			for(var attr in json){
				//1、获取当前值
				//透明度不一样
				var iCur = null;
				if(attr == "opacity"){
					iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
				}else{
					iCur =  parseInt(getStyle(obj, attr))
				}

				var speed = (json[attr] - iCur) / 8;

				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);


				//动画执行完成，关闭定时器，判断，其中有一个到达目的值，就关闭定时器。
				//【注】保证所有运动执行完成以后再关闭定时器。
			
				iCur += speed;
				if(attr == "opacity"){	
					obj.style.opacity = iCur / 100;
					obj.style.filter = "alpha(opacity=" + iCur + ");"
				}else{
					obj.style[attr] = iCur + "px";
				}

				if(iCur != json[attr]){
					bStop = false;
				}
			}


			//bStop为true的时候，是所有样式都到达目的值了
			if(bStop){
				clearInterval(obj.timer);
				if(func){
					func();
				}
			}


		}, 30);
	}
//==================================================================
//