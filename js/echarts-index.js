$(function(){
	echartDiyu()	// 地域排行
	echartQushi()	// 发布趋势
	echartMap()		// 地图

	window.onresize=function(){
		myChart1.resize();
		myChart2.resize();
		// myChart3.resize();
	};
})

// 地域排行
function echartDiyu(cityName){
	$.ajax({
		url:"json/diyuList.json",
		type:'GET',
		dataType :'json',
		success: function(res){
			var platformNameList = []
			var platformCountList = []
			for(var j = 0; j < res.sqDiyuList.length; j++){
				// 根据选中的城市，获取对应列表数据
				var listNameArray = []
				var listCountArray = []
				if(cityName){
					if(cityName == res.sqDiyuList[j].city){
						listNameArray = res.sqDiyuList[j].platformNameList
						listCountArray = res.sqDiyuList[j].platformCountList
					}
				}else{
					listNameArray = res.sqDiyuList[0].platformNameList
					listCountArray = res.sqDiyuList[0].platformCountList
				}
				
				if(listNameArray.length > 0){
					platformNameList = listNameArray
					platformCountList = listCountArray
				}
			}

			// 判断没有数据时候，显示暂无数据（列表里没有对应城市的cityName）
			if(cityName){
				var cityArray = []
				for(var j = 0; j < res.sqDiyuList.length; j++){
					cityArray.push(res.sqDiyuList[j].city)
				}
				if($.inArray(cityName, cityArray) == -1){
					$("#container1").hide()
					$("#diyunull").show()
				}else{
					$("#container1").show()
					$("#diyunull").hide()
				}
			}else{
				$("#container1").show()
				$("#diyunull").hide()
			}


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
						// formatter : function (value)
						// {
						// 	let valueTxt = '';
						// 	if (value.length > 8) {
						// 		valueTxt = value.substring(0, 9) + '...';
						// 	}
						// 	else {
						// 		valueTxt = value;
						// 	}
						// 	return valueTxt ;
						// },
						textStyle: {
							color: '#93afd7',  //更改坐标轴文字颜色
							fontSize : 12      //更改坐标轴文字大小
						}
					},
					data: platformNameList,
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
						data: platformCountList,
					}
				]
			});
		},
		error: function () {
			
		}
	})
}


// 发布趋势
function echartQushi(cityName){
	$.ajax({
		url:"json/qushiList.json",
		type:'GET',
		dataType :'json',
		success: function(res){
			var platformTimeList = []
			var platformCountList = []
			for(var j = 0; j < res.sqqushiList.length; j++){
				// 根据选中的城市，获取对应列表数据
				var listTimeArray = []
				var listCountArray = []
				if(cityName){
					if(cityName == res.sqqushiList[j].city){
						listTimeArray = res.sqqushiList[j].platformTimeList
						listCountArray = res.sqqushiList[j].platformCountList
					}
				}else{
					listTimeArray = res.sqqushiList[0].platformTimeList
					listCountArray = res.sqqushiList[0].platformCountList
				}
				
				if(listTimeArray.length > 0){
					platformTimeList = listTimeArray
					platformCountList = listCountArray
				}
			}
			
			// 判断没有数据时候，显示暂无数据（列表里没有对应城市的cityName）
			if(cityName){
				var cityArray = []
				for(var j = 0; j < res.sqqushiList.length; j++){
					cityArray.push(res.sqqushiList[j].city)
				}
				if($.inArray(cityName, cityArray) == -1){
					$("#container2").hide()
					$("#qushinull").show()
				}else{
					$("#container2").show()
					$("#qushinull").hide()
				}
			}else{
				$("#container2").show()
				$("#qushinull").hide()
			}
			

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
					data: platformTimeList
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
					data: platformCountList,
				}

			});
		},
		error: function () {
			
		}
	})
}


function echartMap(){
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

		myChart3.on('click', function(params){
			for (var j = 0; j < cities.length; j++) {
				if (cities[j].name == params.name) {
					cities[j].selected = true;
					
				}else{
					cities[j].selected = false;
				};
			};

			// 点击地图，获取对应的政策类型信息
			onTypeList(params.name)
			// 点击地图，获取对应的地域排行图表信息
			echartDiyu(params.name)
			// 点击地图，获取对应的发布趋势图表信息
			echartQushi(params.name)
			// 点击地图，获取对应的最新政策信息
			mapList(params.name)
			

			myChart3.setOption(option);
		});
	}

	/**
	 * 地图
	 */
	var cities = [
		{"name":"上海","val":302,"value":[121.4771,31.2278]},
		{"name":"广东","val":22,"value":[113.2563,23.1297]},
		{"name":"河南","val":22,"value":[113.6806,34.7553]},
		{"name":"山东","val":22,"value":[117.001,36.6885]},
		{"name":"辽宁","val":22,"value":[123.439,41.8068]},
		{"name":"江苏","val":22,"value":[118.8046,32.0641]},
		{"name":"浙江","val":22,"value":[120.2004,30.2793]},
		{"name":"陕西","val":22,"value":[108.9523,34.3366]},
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
		{"name":"台湾","val":22,"value":[120.8961,23.9694]},
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
				// 点击地图，获取对应城市信息
				// mapList(params.name)

				return listOne(params.name);
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
}





// 点击地图城市时，改变最新政策列表
function mapList(cityName){
	$.ajax({
		url:"json/newsList.json",
		type:'GET',
		dataType :'json',
		success: function(res){
			$("#ajax_zcList").empty();
			var html = "";
			for(var j = 0; j < res.list.length; j++){
				// 根据选中的城市，获取对应列表数据
				if(cityName == res.list[j].city){
					var listArray = []
					listArray = res.list[j]
					for(var i = 0; i < listArray.list.length; i++){
						html = html + '<div class="cp_zclistcons"><div class="cp_zccotit"><a href="' + listArray.list[i].link + '" title="' + listArray.list[i].title + '" target="_blank">' + listArray.list[i].title + '</a></div><div class="cp_zctitme"><span>' + listArray.list[i].time +'</span><span>' + listArray.city + '</span><span>' + listArray.list[i].source + '</span></div></div>'
					}
					// 判断没有数据时候，显示暂无数据（列表里有对应城市cityName，但是里面的城市对应的列表list为空）
					if(listArray.list.length == 0){
						html = html + '<div class="maplistnull">暂无数据</div>'
					}

					$("#ajax_zcList").html(html); 
				}
			}

			// 判断没有数据时候，显示暂无数据（列表里没有对应城市的cityName）
			var cityArray = []
			for(var j = 0; j < res.list.length; j++){
				cityArray.push(res.list[j].city)
			}
			if($.inArray(cityName, cityArray) == -1){
				html = html + '<div class="maplistnull">暂无数据</div>'
				$("#ajax_zcList").html(html); 
			}
			
		},
		error: function () {
			
		}
	})
}


//点击地图时，获取当前城市最新的一条数据显示在地图上
function listOne(cityName){
	var oneTitle, oneTime, oneLink;
	var type;	// type (1:有当前城市数据，显示最新一条数据，2：没有当前城市数据，不显示)
	$.ajax({
		url:"json/newsList.json",
		type:'GET',
		dataType :'json',
		async: false,
		success: function(res){
			// 判断没有数据时候，地图上不显示（列表里没有对应城市的cityName）
			var cityArray = []
			for(var j = 0; j < res.list.length; j++){
				cityArray.push(res.list[j].city)
			}
			
			if($.inArray(cityName, cityArray) != -1){
				for(var j = 0; j < res.list.length; j++){
					if(cityName == res.list[j].city){
						var listArray = []
						listArray = res.list[j]
					}
				}
				if(listArray.list[0]){
					type = 1
					oneTitle = listArray.list[0].title
					oneTime = listArray.list[0].time
					oneLink = listArray.list[0].link
				}else{
					type = 2
				}
			}else{
				type = 2
			}

		},
		error: function () {
			
		}
	})
	
	if(type == 1){
		return '<div class="cont-item"><ul><li><a href="' + oneLink + '" target="_blank"><p>' + oneTitle + '</p><p>' + oneTime +'</p><div class="tuxian topleft"></div><div class="tuxian topright"></div><div class="tuxian bottomright"></div><div class="tuxian bottomleft"></div></a></li></ul></div>'
	}else{
		return ''
	}
	
}


// 点击地图，获取对应的政策类型信息
function onTypeList(cityName){
	$.ajax({
		url:"json/typeList.json",
		type:'GET',
		dataType :'json',
		success: function(res){
			$("#ajax_typeList").empty();
			var html = "";
			for(var j = 0; j < res.sqTypeList.length; j++){
				// 根据选中的城市，获取对应列表数据
				if(cityName == res.sqTypeList[j].city){
					var listArray = []
					listArray = res.sqTypeList[j]
					for(var i = 0; i < listArray.list.length; i++){
						html = html + '<div class="cp_zcfobnxiao"><span>' + listArray.list[i].sum  + '</span><em>' + listArray.list[i].title + '</em></div>'
					}
					// 判断没有数据时候，显示暂无数据（列表里有对应城市cityName，但是里面的城市对应的列表list为空）
					if(listArray.list.length == 0){
						html = html + '<div class="typelistnull">暂无数据</div>'
					}

					$("#ajax_typeList").html(html); 
				}
			}

			// 判断没有数据时候，显示暂无数据（列表里没有对应城市的cityName）
			var cityArray = []
			for(var j = 0; j < res.sqTypeList.length; j++){
				cityArray.push(res.sqTypeList[j].city)
			}
			if($.inArray(cityName, cityArray) == -1){
				html = html + '<div class="typelistnull">暂无数据</div>'
				$("#ajax_typeList").html(html); 
			}
			
		},
		error: function () {
			
		}
	})
}


// 恢复全部数据
function allList(){
	findTypeList()	// 恢复政策类型数据
	echartDiyu()	// 恢复地域排行数据
	echartQushi()	// 恢复发布趋势数据
	echartMap()		// 恢复地图数据
	newsList()		// 恢复最新政策数据
}