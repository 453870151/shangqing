
$(function(){
	shijian()		// 事件走势
	meitType1()		// 媒体类型分布1
	meitType2()		// 媒体类型分布2
	meitiPtai()		// 活跃媒体平台
	meitiquashi()	// 传播趋势
	weiboType()		// 博主类型
	weiboMap()		// 博主地域
	diaoxing1()		// 调性分析1
	diaoxing2()		// 调性分析2
	recifenxi1()	// 热词分析1
	recifenxi2()	// 热词分析2
})


function shijian(){	
	var ec_dom1 = document.getElementById("ec_container1");
	var ec_myChart1 = echarts.init(ec_dom1);
	ec_myChart1.clear();
	ec_myChart1.setOption(option1 = {
		color:['#1b8ffe','#ffb700','#fe3f6a'],
		tooltip: {
			trigger: 'axis',
			axisPointer: {            // 坐标轴指示器，坐标轴触发有效
				type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend: {
			bottom: '0%',
            left: 'center',
			data: ['正面', '中性', '负面'],
			textStyle:{
				color:'#93afd7'
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				},
				axisLabel :
				{
					textStyle: {
						color: '#93afd7',  //更改坐标轴文字颜色
						fontSize : 12      //更改坐标轴文字大小
					},
				},
				data: ['06-01', '06-02', '06-03', '06-04', '06-05', '06-06', '06-07','06-08', '06-09', '06-10', '06-11', '06-12', '06-13', '06-14','06-15', '06-16', '06-17', '06-18', '06-19', '06-20', '06-21','06-22', '06-23', '06-24', '06-25', '06-26', '06-27', '06-28','06-29', '06-30']
			}
		],
		yAxis: [
			{
				type: 'value',
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				//提示文字等为固定字数，超出显示"..."
				axisLabel :
				{
					textStyle: {
						color: '#93afd7',  //更改坐标轴文字颜色
						fontSize : 12      //更改坐标轴文字大小
					}
				},
				splitLine:{
					show:false,	//去除网格线
					lineStyle:{
						type:'dashed',
						color:'#fff',
						width: 0
					}
				},
			}
		],
		
		series: [
			{
				name: '正面',
				type: 'bar',
				stack: '事件走势',
				data: [120, 132, 101, 134, 90, 230, 210,220, 182, 191, 234, 290, 330, 310,150, 232, 201, 154, 190, 330, 410, 310,120, 132, 101, 134, 90, 230, 210,230]
			},
			{
				name: '中性',
				type: 'bar',
				stack: '事件走势',
				data: [220, 182, 191, 234, 290, 330, 310,120, 132, 101, 134, 90, 230, 210,230, 210,220, 182, 191, 234, 290, 191, 234, 290, 330, 310,120, 132, 101, 134]
			},
			{
				name: '负面',
				type: 'bar',
				stack: '事件走势',
				data: [150, 232, 201, 154, 190, 330, 410,220, 182, 191, 234, 290, 330, 310,201, 154, 190, 330, 410,220, 182,220, 182, 191, 234, 290, 330, 310,150, 232]
			}	
		]
	});
}


function meitType1(){
	var dom2 = document.getElementById("ec_container2");
	var myChart2 = echarts.init(dom2);
	myChart2.clear();
	myChart2.setOption(option1 = {
		color:['#334259', '#ffd505','#01bda4','#01c853', '#8d9cb3', '#64dd16', '#ffb700', '#aa00ff', '#ff3f68', '#1b8ffe', '#aeea00', '#19ffff'],
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},
		series: [
			{
				name: '访问来源',
				type: 'pie',
				selectedMode: 'single',
				radius: [0, '30%'],
	
				label: {
					position: 'inner'
				},
				labelLine: {
					show: false
				},
				data: [
					{value: 1548, name: '搜索引擎'}
				]
			},
			{
				type: 'pie',
				radius: ['40%', '55%'],
				data: [
					{value: 335, name: '直达'},
					{value: 310, name: '邮件营销'},
					{value: 234, name: '联盟广告'},
					{value: 135, name: '视频广告'},
					{value: 1048, name: '百度'},
					{value: 251, name: '谷歌'},
					{value: 147, name: '必应'},
					{value: 102, name: '其他'}
				]
			}
		]
	});
}


function meitType2(){
	var dom3 = document.getElementById("ec_container3");
	var myChart3 = echarts.init(dom3);
	myChart3.clear();
	myChart3.setOption(option1 = {
		color:['#ffd600', '#ffd505','#01bda4','#01c853', '#8d9cb3', '#64dd16', '#ffb700', '#aa00ff', '#ff3f68', '#1b8ffe', '#aeea00', '#19ffff'],
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},
		series: [
			{
				name: '访问来源',
				type: 'pie',
				selectedMode: 'single',
				radius: [0, '30%'],
	
				label: {
					position: 'inner'
				},
				labelLine: {
					show: false
				},
				data: [
					// {value: 335, name: '直达', selected: true},
					// {value: 679, name: '营销广告'},
					{value: 1548, name: '搜索引擎'}
				]
			},
			{
				name: '访问来源',
				type: 'pie',
				radius: ['40%', '55%'],
				data: [
					{value: 335, name: '直达'},
					{value: 310, name: '邮件营销'},
					{value: 234, name: '联盟广告'},
					{value: 135, name: '视频广告'},
					{value: 1048, name: '百度', selected: true},
					{value: 251, name: '谷歌'},
					{value: 147, name: '必应'},
					{value: 102, name: '其他'}
				]
			}
		]
	});
}


function meitiPtai(){
	var dom4 = document.getElementById("ec_container4");
	var myChart4 = echarts.init(dom4);
	myChart4.clear();
	myChart4.setOption(option1 = {
		// color:['#93afd7'],
		title: {
			text: '地域排行',
			x:200,
			y:-30,
			textStyle:{
				color:'#fff'
			}
		},
		// tooltip : {
		// 	trigger: 'axis',
		// 	axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		// 		//type : 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
		// 	},
		// },
		grid: {
			left: '20px',
			right: '30px',
			bottom: '0px',
			top:'0',
			containLabel: true
		},
		xAxis:  {
			type: 'value',
			show : false,
			//隐藏网格线
			splitLine:{show:false,},
			axisLine: {show: false},
			axisTick: {show: false},
		},
		yAxis: {
			type: 'category',
			//隐藏网格线
			splitLine:{show:false,},
			axisLine: {show: false},
			axisTick: {show: false},
			inverse: true,
			//提示文字等为固定字数，超出显示"..."
			axisLabel :
			{
				textStyle: {
					color: '#93afd7',  //更改坐标轴文字颜色
					fontSize : 12      //更改坐标轴文字大小
				}
			},
			data: ["微信", "搜狐新闻", "新浪微博", "今日头条", "知乎", "百度贴吧", "新浪长微博", "腾讯网", "21世纪经济报", "凤凰新闻"],
		},
		series: [
			{
				name: '数量',
				type: 'bar',
				stack: "总数",
				barMaxWidth: 20,
				label: {
					normal:{
						position: "right",
						show: true,
						textStyle: { //数值样式
							color: '#93afd7',
						}
					},
				},
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
							[ 
								{offset: 0, color: '#162230'},                   //柱图渐变色
								{offset: 0.5, color: '#5e5023'},                 //柱图渐变色
								{offset: 1, color: '#9e7815'},                   //柱图渐变色
							]
						)
					},
					emphasis:{	// 鼠标移上去修改柱状图颜色
						color:function(params) {
						var colorList = [
							'#ffb700','#ffb700','#ffb700'
						];
						return colorList[params.dataIndex]
						}
					}
				},
				data: ["689", "568", "523", "512", "462", "421","405", "362", "205", "105"],
			}
		]
	});
}

function meitiquashi(){
	var dom5 = document.getElementById("ec_container5");
	var myChart5 = echarts.init(dom5);
	myChart5.clear();
	myChart5.setOption(option1 = {
		color:['#feb801'],
		title: {
			text: '舆情趋势',
			x:200,
			y:-30,
			textStyle:{
				color:'#fff'
			}
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				//type: 'none'	// 鼠标移上去去掉指示线
			}
		},
		grid: {
			top: '10',
			left: '20',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			//设置轴线的属性
			axisLine:{
				lineStyle:{
					color:'#4b586b',
					width:1,//这里是为了突出显示加上的
				}
			},
			boundaryGap: false,
			// data: data.map(function (item) {
			// 	return item[0];
			// })
			data: ["06-10", "06-11", "06-12", "06-13", "06-14", "06-15", "06-16"],
		},
		yAxis: {
			type: 'value',
			//设置轴线的属性
			axisLine:{
				lineStyle:{
					color:'#4b586b',
					width:1,//这里是为了突出显示加上的
				}
			},
			splitLine:{
				show:false,	//去除网格线
				lineStyle:{
					type:'dashed',
					color:'#fff',
					width: 0
				}
			},

		},
		series: {
			name: '',
			type: 'line',
			symbol: 'none',	//去掉中间线圆点
			smooth: true,
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 1, 0, 0,
						[ 
							{offset: 0, color: '#0f1e31'},                   //柱图渐变色
							{offset: 0.5, color: '#5e5023'},                 //柱图渐变色
							{offset: 1, color: '#9e7815'},                   //柱图渐变色
						]
					)
				},
			},
			data: ["820", "932", "901", "934", "1290", "1330", "1320"],
		}

	});
}


function weiboType(){
	var dom6 = document.getElementById("ec_container6");
	var myChart6 = echarts.init(dom6);
	myChart6.clear();
	myChart6.setOption(option1 = {
		color:['#334259','#ffb700', '#8d9cb3','#ff3f68','#1b8ffe'],
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},
		series: [
			{
				name: '访问来源',
				type: 'pie',
				selectedMode: 'single',
				radius: [0, '30%'],
	
				label: {
					position: 'inner'
				},
				labelLine: {
					show: false
				},
				data: [
					{value: 1548, name: '搜索引擎'}
				]
			},
			{
				type: 'pie',
				radius: ['40%', '55%'],
				data: [
					{value: 335, name: '直达'},
					{value: 310, name: '邮件营销'},
					{value: 234, name: '联盟广告'},
					{value: 135, name: '视频广告'},
				]
			}
		]
	});
}


function weiboMap(){
	// 基于准备好的dom，初始化echarts图表
	var dom7 = document.getElementById("ec_container7");
	var myChart_map = echarts.init(dom7);
	var itemStyle = {
		emphasis:{
			label:{show:true},
		}
	};

	var option_map = {
		tooltip : {
			trigger: 'item'
			//formatter:'{a} </br>{b}:{c}%'
		},
		legend:{
			show:false,
			orient: 'vertical',
			x:'left',
			//data:{:json_encode($weibo_user_location)}
			data:[
				{
					name: '北京',
					value: 1
				},
				{
					name: '江苏',
					value: 10
				}
			]
		},
		title: {
			text: '发布热区',
			x:200,
			y:-30,
			textStyle:{
				//color:'#fff'
			}
		},
		dataRange: {
			min: 0,
			max:1,
			x: 'left',
			y: 'bottom',
			text:['高','低'],
			color: ['#006edd'],
			show:false, 
			calculable : true ,
			itemWidth: 15,
			itemHeight: 7,
			//orient: 'horizontal'
		},	
		geo: {
			// roam: true,
			//map: 'china',
			//left: '80%',
			//right: '0'
		},
		series : [
			{
				name: '数量',
				type: 'map',
				mapType: 'china',
				//zoom: 0.6,
				//x:100,
				itemStyle:{
					normal:{
						label:{show:true},
						borderWidth:1,//省份的边框宽度
						borderColor:'#fff',//省份的边框颜色
						//color:'#ebf3fd'//地图背景颜色
						areaStyle:{color:'#ebf3fd'}//设置地图颜色
					},
					emphasis:{
						label:{show:true}
					}
				},
				data:[
					{
						name: '北京',
						value: 1
					},
					{
						name: '江苏',
						value: 10
					},
					{
						name: '西藏',
						value: 50
					}
				]
			},
		]
	};

	// 为echarts对象加载数据
	myChart_map.setOption(option_map);

}


function diaoxing1(){
	var dom8 = document.getElementById("ec_container8");
	var myChart8 = echarts.init(dom8);
	myChart8.clear();
	myChart8.setOption(option1 = {
		color:['#1b8ffc','#cf970c','#98314f'],
		title: {
			text: '舆情趋势',
			x:200,
			y:-30,
			textStyle:{
				color:'#fff'
			}
		},
		tooltip: {
			trigger: 'axis',
		},
		legend: {
			data: ['正面', '中性', '负面'],
			bottom: '0'
		},
		grid: {
			top: '10',
			left: '20',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			//设置轴线的属性
			axisLine:{
				lineStyle:{
					color:'#4b586b',
					width:1,//这里是为了突出显示加上的
				}
			},
			boundaryGap: false,
			// data: data.map(function (item) {
			// 	return item[0];
			// })
			data: ["06-10", "06-11", "06-12", "06-13", "06-14", "06-15", "06-16"],
		},
		yAxis: {
			type: 'value',
			//设置轴线的属性
			axisLine:{
				lineStyle:{
					color:'#4b586b',
					width:1,//这里是为了突出显示加上的
				}
			},
			splitLine:{
				show:false,	//去除网格线
				lineStyle:{
					type:'dashed',
					color:'#fff',
					width: 0
				}
			},

		},
		series: [
			{
				name: '正面',
				type: 'line',
				symbol: 'none',	//去掉中间线圆点
				smooth: true,
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0,
							[ 
								{offset: 0, color: '#0e1d32'},                   //柱图渐变色
								{offset: 0.5, color: '#0f243f'},                 //柱图渐变色
								{offset: 1, color: '#113359'},                   //柱图渐变色
							]
						)
					},
				},
				data: [120, 132, 101, 134, 90, 230, 210]
			},
			{
				name: '中性',
				type: 'line',
				symbol: 'none',	//去掉中间线圆点
				smooth: true,
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0,
							[ 
								{offset: 0, color: '#111e31'},                   //柱图渐变色
								{offset: 0.5, color: '#2e302b'},                 //柱图渐变色
								{offset: 1, color: '#3c3b29'},                   //柱图渐变色
							]
						)
					},
				},
				data: [220, 182, 191, 234, 290, 330, 310]
			},
			{
				name: '负面',
				type: 'line',
				symbol: 'none',	//去掉中间线圆点
				smooth: true,
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0,
							[ 
								{offset: 0, color: '#1e2134'},                   //柱图渐变色
								{offset: 0.5, color: '#382539'},                 //柱图渐变色
								{offset: 1, color: '#4a273b'},                   //柱图渐变色
							]
						)
					},
				},
				data: [150, 232, 201, 154, 190, 330, 410]
			}
		]

	});
}


function diaoxing2(){
	var dom9 = document.getElementById("ec_container9");
	var myChart9 = echarts.init(dom9);
	myChart9.clear();
	myChart9.setOption(option1 = {
		color:['#334259','#ffb700','#ff3f68','#1b8ffe'],
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},
		series: [
			{
				name: '访问来源',
				type: 'pie',
				selectedMode: 'single',
				radius: [0, '30%'],
	
				label: {
					position: 'inner'
				},
				labelLine: {
					show: false
				},
				data: [
					{value: 1548, name: '搜索引擎'}
				]
			},
			{
				type: 'pie',
				radius: ['40%', '55%'],
				data: [
					{value: 335, name: '直达'},
					{value: 310, name: '邮件营销'},
					{value: 234, name: '联盟广告'},
				]
			}
		]
	});
}


function recifenxi1(){
	
}


function recifenxi2(){
	var dom11 = document.getElementById("ec_container11");
	var myChart11 = echarts.init(dom11);
	myChart11.clear();
	myChart11.setOption(option1 = {
		// color:['#93afd7'],
		title: {
			text: '地域排行',
			x:200,
			y:-30,
			textStyle:{
				color:'#fff'
			}
		},
		grid: {
			left: '20px',
			right: '30px',
			bottom: '0px',
			top:'0',
			containLabel: true
		},
		xAxis:  {
			type: 'value',
			show : false,
			//隐藏网格线
			splitLine:{show:false,},
			axisLine: {show: false},
			axisTick: {show: false},
		},
		yAxis: {
			type: 'category',
			//隐藏网格线
			splitLine:{show:false,},
			axisLine: {show: false},
			axisTick: {show: false},
			inverse: true,
			//提示文字等为固定字数，超出显示"..."
			axisLabel :
			{
				textStyle: {
					color: '#93afd7',  //更改坐标轴文字颜色
					fontSize : 12      //更改坐标轴文字大小
				}
			},
			data: ["微信", "搜狐新闻", "新浪微博", "今日头条", "知乎", "百度贴吧", "新浪长微博", "腾讯网", "21世纪经济报", "凤凰新闻"],
		},
		series: [
			{
				name: '数量',
				type: 'bar',
				stack: "总数",
				barMaxWidth: 20,
				label: {
					normal:{
						position: "right",
						show: true,
						textStyle: { //数值样式
							color: '#93afd7',
						}
					},
				},
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
							[ 
								{offset: 0, color: '#162230'},                   //柱图渐变色
								{offset: 0.5, color: '#5e5023'},                 //柱图渐变色
								{offset: 1, color: '#9e7815'},                   //柱图渐变色
							]
						)
					},
					emphasis:{	// 鼠标移上去修改柱状图颜色
						color:function(params) {
						var colorList = [
							'#ffb700','#ffb700','#ffb700'
						];
						return colorList[params.dataIndex]
						}
					}
				},
				data: ["689", "568", "523", "512", "462", "421","405", "362", "205", "105"],
			}
		]
	});
}