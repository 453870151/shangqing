
$(function(){
	// 获取最新政策数据
	$.ajax({
		url:"json/newsList.json",
		type:'GET',
		dataType :'json',
		success: function(res){
			$("#ajax_zcList").empty();
			var html = "";
			for(var i = 0; i < res.list[0].list.length; i++){
				html = html + '<div class="cp_zclistcons"><div class="cp_zccotit"><a href="' + res.list[0].list[i].link + '" title="' + res.list[0].list[i].title + '" target="_blank">' + res.list[0].list[i].title + '</a></div><div class="cp_zctitme"><span>' + res.list[0].list[i].time +'</span><span>' + res.list[0].list[i].city + '</span><span>' + res.list[0].list[i].source + '</span></div></div>'
                	};
			$("#ajax_zcList").html(html); 

		},
		error: function () {
			
		}
	})


	// 获取政策类型
	$.ajax({
		url:"json/echartList.json",
		type:'GET',
		dataType :'json',
		success: function(res){
			

		},
		error: function () {
			
		}
	})

})

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
function showMessage(mes){
	$("#message").html(mes)
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
	// $(".apply-record .tab .tab-item").click(function() {
	// 	$(this).addClass("active").siblings().removeClass("active");
	// 	$(".products .mainCont").eq($(this).index()).show().siblings().hide();
	// })
})

// 弹窗左右tab切换
$(function() {
	$(".fl_lonts .fl_tab .tab-item").click(function() {
		$(this).addClass("active").siblings().removeClass("active");
		$(".fl_productConter .fl_mainRight").eq($(this).index()).show().siblings().hide();
	})
})


// 取消弹窗
function cancel(){
	$(".fl_ztoptent").hide();
	$(".fl_zconter").hide();
	$("body").css("position","absolute")
}


// 定义全局变量，记录所有可删除模块的id
var moduleArray = ['3','4','5','6','7']

// 定义全局变量，记录删除模块的id,比如删除id为3的模块，删除后数组为[3]
var moduleDelArray = []

// 定义全局变量，记录需要添加模块的id
var moduleID = '1'	//默认id=1的模块

// 看板模块删除功能
function delKanban(item){
	$(item).parent().parent().hide();
}

// 地图模块删除功能
function delDitu(item, index){
	$("#module_2").hide();
	moduleDelArray.push(index)
}

// 其他模块删除功能
function delMokuai(item, index){
	$(item).parent().parent().parent().hide();
	moduleDelArray.push(index)
}

// 行业资讯模块删除功能
function delNews(item, index){
	$(item).parent().parent().parent().parent().hide();
	moduleDelArray.push(index)
}

// 获取弹框选中的模块
function sRadio(index){
	// 记录添加模块的id
	moduleID = index
}

// 添加模块
function addModule(){
	// 获取删除后模块id的数组
	var arrayModule = moduleDelArray
	// 获取添加模块的id
	var addModuleID = moduleID

	// 判断删除模块数组为空时，说明没有模块被删除，不能添加
	if(!arrayModule.length){
		showMessage('当前没有模块被删除，不能添加！')
	}else{
		// 判断被添加的模块是否已经删除
		var delIndex = $.inArray(addModuleID, arrayModule);
		if(delIndex == '-1'){	// 当前模块没有被删除
			showMessage('当前模块没有删除，不能重复添加！')
		}else{	// 当前模块已删除，可以添加
			$("#module_" + addModuleID).show();
			cancel()	// 关闭弹窗
			showMessage('当前模块添加成功！')
			// 添加成功后需要把删除模块id数组里添加的数组删除，变成未添加的状态
			arrayModule.splice($.inArray(addModuleID, arrayModule),1);
		}
	}
}

