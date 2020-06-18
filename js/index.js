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

// 设置功能开/关
function shezhiShow(){
	$("#cp_shent1").hide();
	$("#cp_shent2").show();
}
function shezhiHide(){
	$("#cp_shent1").show();
	$("#cp_shent2").hide();
}


// 提示框
function showMessage(){
	$("#message").show();
	setTimeout(function(){ 
		$("#message").hide();
	}, 3000);
}

// 添加图表（打开弹窗）
function addTubiao(){
	$(".fl_ztoptent").show();
	$(".fl_zconter").show();
	$("body").css("position","fixed")
}

// 弹窗标题tab切换
$(function() {
	$(".apply-record .tab .tab-item").click(function() {
		$(this).addClass("active").siblings().removeClass("active");
		$(".products .mainCont").eq($(this).index()).show().siblings().hide();
	})
})

// 弹窗左右tab切换
$(function() {
	$(".fl_lonts .fl_tab .tab-item").click(function() {
		$(this).addClass("active").siblings().removeClass("active");
		$(".fl_productConter .fl_mainRight").eq($(this).index()).show().siblings().hide();
	})
})

// 获取弹框选中的模板
function sRadio(){
	var v = $(":radio[name='shangqing']:checked").val();
	//alert(v)
}

// 取消弹窗
function cancel(){
	$(".fl_ztoptent").hide();
	$(".fl_zconter").hide();
	$("body").css("position","absolute")
}