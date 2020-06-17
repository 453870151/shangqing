// 全屏功能
function fullScreen(){
	var el = document.documentElement;
	var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;

	if (rfs) {
		rfs.call(el);
	}
	else if (typeof window.ActiveXObject !== "undefined") {
		//这里其实就是模拟了按下键盘的F11，使浏览器全屏
		var wscript = new ActiveXObject("WScript.Shell");
		if (wscript != null) {
			wscript.SendKeys("{F11}");
		}
	}
}


// 看板模块删除功能
function delKanban(item){
	$(item).parent().parent().hide();
}

// 其他模块删除功能
function delMokuai(item){
	$(item).parent().parent().parent().hide();
}

// 行业资讯模块删除功能
function delNews(item){
	$(item).parent().parent().parent().parent().hide();
}