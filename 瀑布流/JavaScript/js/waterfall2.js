window.onload = function(){
	waterfall('pin','main');
}

function waterfall(cname,parent){
	var oParent = document.getElementById(parent),
		oPins = getByCname(cname,parent),
		hArr = [],
		oPinW = Math.ceil(oPins[0].offsetWidth),
		oCols = Math.floor(document.documentElement.clientWidth/oPinW);
	oParent.style.cssText = 'width:' + (oCols*oPinW+5) + 'px;margin:0 auto;'; // 加5px保证可以容下oCols列数据块

	for(var i = 0,l = oPins.length;i < l;i++){
		if(i < oCols){
			hArr[i] = oPins[i].offsetHeight;
		}else{
			var MinH = Math.min.apply(null,hArr);
			var index = getIndex(hArr,MinH);
			oPins[i].style.position = "absolute";
			oPins[i].style.top = MinH + 'px';
			oPins[i].style.left = oPins[index].offsetLeft + 'px';
			hArr[index] += oPins[i].offsetHeight;
		}
	}
}

function getByCname(cname,parent){
	var oParent = parent ? document.getElementById(parent) : document,
		eles = [];
		events = oParent.getElementsByTagName("*");

	for(var i = 0;i < events.length;i++){
		if(events[i].className == cname){
			eles.push(events[i]);
		}
	}
	return eles;
}

function getIndex(aArr,val){
	for(var i in aArr){
		if(aArr[i] == val){
			console.log(i);
			return i;
		}
	}
}
