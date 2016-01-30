var rewards = ['Phone5','Ipad','三星笔记本','佳能相机','惠普打印机','谢谢参与','50元充值卡','1000元超市购物券'],
	flag = 0,
	stt = null;

window.onload = draw;

function draw(){
	var play = document.getElementById('play'),
		stop = document.getElementById('stop');

	//鼠标控制
	play.onclick = rStart;
	stop.onclick = rStop;

	//键盘控制
	document.onkeyup = function(event){
		event =event || window.event;
		if(event.keyCode == 13){
			if(flag == 0){
				rStart();
			}else if(flag == 1){
				rStop();
			}
		}
	}
}

function rStart(){
	var rTitle = document.getElementById('title');

	clearInterval(stt);

	stt = setInterval(function(){
		var i = Math.floor(Math.random()*rewards.length);
		rTitle.innerHTML = rewards[i];
	},50)

	play.style.backgroundColor = "#999";
	play.style.cursor = "not-allowed";
	flag = 1;

}

function rStop(){
	clearInterval(stt);

	play.style.backgroundColor = "#036";
	play.style.cursor = "pointer";
	flag = 0;
}