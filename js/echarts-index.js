$(function() {
	// 地域排行
	var dom1 = document.getElementById("container1");
	var myChart1 = echarts.init(dom1);
	myChart1.clear();
	myChart1.setOption(option1 = {
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
				formatter : function (value)
				{
					let valueTxt = '';
					if (value.length > 8) {
						valueTxt = value.substring(0, 9) + '...';
					}
					else {
						valueTxt = value;
					}
					return valueTxt ;
				},
				textStyle: {
					color: '#93afd7',  //更改坐标轴文字颜色
					fontSize : 12      //更改坐标轴文字大小
				}
			},
			data: ['上海市', '江苏省', '湖北省', '北京市', '浙江省', '河南省'],
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
				data: [600, 580, 568, 364, 325, 189],
			}
		]
	});



	// 发布趋势
	var dom2 = document.getElementById("container2");
	var myChart2 = echarts.init(dom2);
	myChart2.clear();
	//data = data.data
	myChart2.setOption(option2 = {
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
			data: ['06-10', '06-11', '06-12', '06-13', '06-14', '06-15', '06-16']
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
			// data: data.map(function (item) {
			// 	return item[1];
			// }),
			data: [820, 932, 901, 934, 1290, 1330, 1320],
		}

	});


	window.onresize=function(){
		myChart1.resize();
		myChart2.resize();
		// myChart3.resize();
	};


})



/**
 * 创建地图
 */
function createExample(option, tooltipOption) {
	//初始化echarts图表
	var myChart3 = echarts.init(document.getElementById('container3'));
	// 为echarts对象加载数据
	myChart3.setOption(option);
	// 地图自动轮播
	tools.loopShowTooltip(myChart3, option, tooltipOption);
}

/**
 * 地图
 */
var cities = [
	{"name":"广东","val":22,"value":[113.2563,23.1297]},
	{"name":"河南","val":22,"value":[113.6806,34.7553]},
	{"name":"山东","val":22,"value":[117.001,36.6885]},
	{"name":"辽宁","val":22,"value":[123.439,41.8068]},
	{"name":"江苏","val":22,"value":[118.8046,32.0641]},
	{"name":"浙江","val":22,"value":[120.2004,30.2793]},
	{"name":"陕西","val":22,"value":[108.9523,34.3366]},
	{"name":"上海","val":302,"value":[121.4771,31.2278]},
	{"name":"台湾","val":22,"value":[120.8961,23.9694]},
	{"name":"天津","val":22,"value":[117.2081,39.1428]},
	{"name":"北京","val":190,"value":[116.3852,39.9156]},
	{"name":"江西","val":22,"value":[115.8545,28.683]},
	{"name":"湖南","val":132,"value":[112.9603,28.223]},
	{"name":"吉林","val":22,"value":[126.5907,43.8725]},
	{"name":"四川","val":22,"value":[104.0712,30.6613]},
	{"name":"山西","val":22,"value":[112.559,37.8746]},
	{"name":"湖北","val":402,"value":[114.2973,30.5921]},
	{"name":"云南","val":22,"value":[102.7176,25.0482]},
	{"name":"福建","val":22,"value":[119.3082,26.0718]},
	{"name":"广西","val":22,"value":[108.3592,22.8205]},
	{"name":"黑龙江","val":22,"value":[126.6484,45.7622]},
	{"name":"新疆","val":160,"value":[87.6007,43.8223]},
	{"name":"重庆","val":22,"value":[106.5343,29.5813]},
	{"name":"宁夏","val":22,"value":[106.2196,38.4879]},
	{"name":"河北","val":22,"value":[114.513,38.0648]},
	{"name":"安徽","val":22,"value":[117.2868,31.8534]},
	{"name":"甘肃","val":92,"value":[103.8428,36.0568]},
	{"name":"青海","val":22,"value":[101.7893,36.6353]},
	{"name":"内蒙古","val":22,"value":[111.7341,40.8387]},
	{"name":"海南","val":120,"value":[110.3452,20.0255]},
	{"name":"西藏","val":202,"value":[91.1192,29.6722]},
	{"name":"贵州","val":100,"value":[106.6673,26.6208]},
];
var citieslines = [
	{coords: [[121.4771,31.2278],[121.4771,35.2278]]}, 
	{coords: [[116.3852,39.9156],[116.3852,43.9156]]}, 
	{coords: [[112.9603,28.223],[112.9603,32.223]]},
	{coords: [[114.2973,30.5921],[114.2973,34.5921]]},
	{coords: [[87.6007,43.8223],[87.6007,47.8223]]},
	{coords: [[110.3452,20.0255],[110.3452,24.0255]]},
	{coords: [[91.1192,29.6722],[91.1192,33.6722]]},
	{coords: [[106.6673,26.6208],[106.6673,30.6208]]},
	{coords: [[103.8428,36.0568],[103.8428,40.0568]]}, 
];
var effectScatter = [];
for(var i=0;i<cities.length;i++){
	if(cities[i].val > 22){
		effectScatter.push(cities[i]);
	};
};
var convertData = function(data) {
	var res = [];
	for (var i = 0; i < cities.length; i++) {
		var dataItem = data[i];
		var fromCoord = geoCoordMap[dataItem[0].name];
		var toCoord = geoCoordMap[dataItem[1].name];
		if (fromCoord && toCoord) {
			res.push([{
					coord: fromCoord,
					value: dataItem[0].value
				},
				{
					coord: toCoord
				}
			]);
		}
	}
	return res;
};

let line = {
	geo: {
		map: 'china',
		label: {
			emphasis: {
				show: true,
				color:'#ffffff',
			}
		},
		//roam: true,
	},
	
	tooltip: {
		padding: 10,
		backgroundColor: "transparent",//提示标签背景颜色
		borderWidth:'0',
		borderColor:"transparent",
		textStyle: { 
			color: "#fff" ,
		},
		triggerOn: 'click',
		axisPointer:{
			show: true,
			type: 'line',
			lineStyle:{
				color:'red',
				width:40,
				type:'solid',
			},
			label:{
				show:true,
			}
		},
		formatter: function (params) {
			// console.log(params.name)
			var info = '<div class="cont-item"><ul><li><a href="javascript:;"><p>内蒙古自治区监狱管理局原局长被查</p><p>06-10</p><div class="tuxian topleft"></div><div class="tuxian topright"></div><div class="tuxian bottomright"></div><div class="tuxian bottomleft"></div></a></li></ul></div>'
			return info;
		},
	},
	series: [
		{
			name: '中国',
			type: 'map',
			mapType: 'china',
			selectedMode: 'multiple',
			aspectScale: 0.75, //长宽比
			label: {
				normal: {
					show: true,//显示省份标签
					position: 'right',
					formatter: function(params){
						return params.data.val <= 22? params.data.name:''
					},
					textStyle:{color:"#ffffff"},//省份标签字体颜色
				},
				emphasis: {
					show: false,//对应的鼠标悬浮效果
					textStyle:{color:"#ffffff"}//省份标签字体颜色
				}
			},
			itemStyle: {
				normal: {
					borderWidth: 1,//区域边框宽度
					areaColor: "#2458AC",
					borderColor: '#6C97DC',//区域边框颜色
					
				},
				emphasis: {
					borderWidth: 1,
					borderColor: '#ffffff',
					areaColor: "#29C2F5",
				}
			},
			lineStyle:{
				color:'red',
				width:40,
				type:'solid',
			},
			data: cities
		},
		
		{
			name: '城市',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
				brushType: 'fill',
				scale : 7
			},
			symbolSize:[5, 5],
			symbol:'circle',
			label: {
				normal: {
					show: true,
					position: 'right',
					formatter: '{b}',
					color: '#ffffff'
				},
			},
			itemStyle: {
				normal: {
					show: true,
					color: '#FDB700'
				}
			},
			renderItem: function (params,api) {//具体实现自定义图标的方法
				return addImage("img/index2/jcd_1.png", params, api, dataTemp);
			},
			data: effectScatter
		},
		{
			name: 'mapLines',
			type: 'lines',
			coordinateSystem: 'geo',
			//polyline:true,
			//symbol: ['none', 'emptyCircle'],
			zlevel: 2,
			lineStyle: {
				normal: {
					color: {
						type: '',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0,
							color: '#ffffff00'
						}, {
							offset: 1,
							color: '#ffffff'
						}],
						globalCoord: false
					},
					width: 9,
					height:90,
					opacity: 0.8,
					type: 'solid',
					curveness: 0,
				}
			},
			data: citieslines
		}
	]
};

createExample(line, {
	loopSeries: true
});
