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

window.onload = drag;

function drag(){
	var oTitle = getByCname('login_logo_webqq','loginPanel')[0];
	//拖拽
	oTitle.onmousedown = fnDown;
	// 关闭
   	var oClose=document.getElementById('ui_boxyClose');
   	oClose.onclick=function(){
   		document.getElementById('loginPanel').style.display='none';
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