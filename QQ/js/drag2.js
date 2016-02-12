function getByCname(cname,parent){
	var oParent = parent ? document.getElementById(parent) : document,
		eles = [],
		events = oParent.getElementsByTagName('*');

	for(var i = 0;i < events.length;i++){
		if(events[i].className == cname){
			eles.push(events[i]);
		}
	}
	return eles;
}

window.onload = main;

function main(){
	var oTitle = getByCname('login_logo_webqq','loginPanel')[0];
	//拖拽
	oTitle.onmousedown = fnDown;
	// 关闭
   	var oClose = document.getElementById('ui_boxyClose');
   	oClose.onclick = function(){
   		document.getElementById('loginPanel').style.display = 'none';
   	}
   	// 改变状态
   	var loginState = document.getElementById('loginState'),
   		loginStateShow = document.getElementById('loginStateShow'),
   		stateTxt = document.getElementById('login2qq_state_txt'),
   		stateList = document.getElementById('loginStatePanel'),
   		lis = stateList.getElementsByTagName('li');
   	loginState.onclick = function(e){
   		e = e || window.event;
   		stateList.style.display = "block";
   		if(e.stopPropagation){
   			e.stopPropagation();
   		}else{
   			e.cancelBubble = true;
   		}
   	}
   	for(var i = 0,l = lis.length;i < l;i++){
   		lis[i].onmouseover = function(){
   			this.style.backgroundColor = "#567";
   		}
   		lis[i].onmouseout = function(){
   			this.style.backgroundColor = "#fff";
   		}
   		lis[i].onclick = function(e){
   			e = e || window.event;
   			var id = this.id;
   			if(e.stopPropagation){
   				e.stopPropagation();
   			}else{
   				e.cancelBubble = true;
   			}
   			//改变状态显示
   			stateList.style.display = "none";
   			stateTxt.innerHTML = getByCname('stateSelect_text',id)[0].innerHTML;
   			loginStateShow.className = "";
   			loginStateShow.className = "login-state-show " + id;
   		}
   	}
   	//点击其他地方进行隐藏
   	document.onclick = function(e){
   		stateList.style.display = "none";
   	}
}

function fnDown(event){
	event = event || window.event;
	var oDrag = document.getElementById('loginPanel'),
		// 光标按下时与面板上、左的距离
		disX = event.clientX - oDrag.offsetLeft,
		disY = event.clientY - oDrag.offsetTop;
	// 移动
	document.onmousemove = function(event){
		event = event || window.event;
  		fnMove(event,disX,disY);
	}
	// 释放鼠标
  	document.onmouseup=function(){
  	   document.onmousemove=null;
  	   document.onmouseup=null;
  	}
}

function fnMove(e,posX,posY){
	var oDrag = document.getElementById('loginPanel'),
		l = e.clientX - posX,
		t = e.clientY - posY,
		winW = document.documentElement.clientWidth || document.body.clientWidth,
		winH = document.documentElement.clientHeight || document.body.clientHeight,
		maxW = winW - oDrag.offsetWidth - 10,
		maxH = winH - oDrag.offsetHeight;
	// 超出浏览器
	if(l < 0){
		l = 0;
	} else if(l > maxW){
		l = maxW;
	}
	if (t < 0) {
		t = 10;
	}else if(t > maxH){
		t = maxH;
	}
	oDrag.style.left = l + 'px';
	oDrag.style.top = t + 'px';
}