(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{328:function(t,n,e){var content=e(367);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(12).default)("2448a2e6",content,!0,{sourceMap:!1})},366:function(t,n,e){"use strict";var r=e(328);e.n(r).a},367:function(t,n,e){(n=e(11)(!1)).push([t.i,"svg{width:100%}text{font-family:Roboto,PingFang SC,Mircosoft YaHei,Consolas,Monaco,Courier New,Courier,monospace}",""]),t.exports=n},429:function(t,n,e){"use strict";e.r(n);e(55),e(89),e(65);var r=e(22),o=e(43),c=e(332),d=(e(20),{props:{elementCount:{type:Number,default:0}},data:function(){return{svgPaths:{mdiChevronUp:o.k,mdiChevronDown:o.j},show:!1}}}),l=e(64),h=e(88),f=e.n(h),v=e(147),m=e(327),_=e(322),x=e(558),w=e(559),C=e(138),k=e(125),y=e(113),A=e(560),D=e(319),component=Object(l.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-card",[e("v-card-title",{staticClass:"title py-1"},[t._v("\n    "+t._s(t.$t("asteroids.neo"))+"\n  ")]),t._v(" "),e("v-card-actions",{staticClass:"py-0"},[e("v-card-subtitle",{staticClass:"headline"},[t._v("\n      "+t._s(t.elementCount)+"\n    ")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){t.show=!t.show}}},[e("v-icon",[t._v(t._s(t.show?t.svgPaths.mdiChevronUp:t.svgPaths.mdiChevronDown))])],1)],1),t._v(" "),e("v-expand-transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[e("v-divider"),t._v(" "),e("v-card-text",[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6"}},[e("v-img",{attrs:{src:"https://i.loli.net/2020/04/08/djXSl754vCUTzIK.png"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"6"}},[t._v("\n            数据来源：NASA（National Aeronautics and Space\n            Administration），美国国家航空航天局。\n            "),e("hr",{staticClass:"my-2"}),t._v("\n            Data-set: All the data is from\n            "),e("a",{attrs:{href:"http://neo.jpl.nasa.gov/",target:"_blank"}},[t._v("the NASA JPL Asteroid team")]),t._v("\n            .\n            "),e("hr",{staticClass:"my-1",staticStyle:{opacity:"0.3"}}),t._v("\n            NeoWs (Near Earth Object Web Service) is a RESTful web service for\n            near earth Asteroid information. With NeoWs a user can: search for\n            Asteroids based on their closest approach date to Earth, lookup a\n            specific Asteroid with its NASA JPL small body id, as well as\n            browse the overall data-set.\n            "),e("hr",{staticClass:"my-2"}),t._v("\n            近地天体 （near-Earth object,\n            NEO）为太阳系内其轨道接近地球的天体。所有近地天体的轨道近日点都小于1.3天文单位，它们包括数以千计的近地小行星、接近的彗星、和大到在撞击到地球之前还在太空时就能够被监测的流星体。\n            "),e("hr",{staticClass:"my-2"}),t._v("\n            潜在危险天体（potentially hazardous\n            object，PHO）是指轨道有撞击地球的可能，且其大小足以对地球造成全球或局部区域重大损害的近地天体\n            －无论是小行星或彗星。 多数这类天体是潜在危险小行星（potentially\n            hazardous\n            asteroids，PHAs），其定义为与地球的最小轨道交点距离少于0.05天文单位（19.5月距），并且绝对星等亮达22等或更亮。\n            "),e("hr",{staticClass:"my-2"}),t._v("\n            2009 年印度尼西亚事件中，直径约 10 米的小行星便释放出约 2\n            倍于广岛原子弹。\n            著名的白垩纪-第三纪灭绝事件与通古斯大爆炸均推测为天体引发的撞击事件。\n          ")]),t._v(" "),e("v-col",{attrs:{cols:"12"}},[t._v("数据结论：只有一小部分近地行星的运动轨迹可能对地球产生威胁，最终实际威胁到地球的情况微乎其微。地球末日很难到来，我们仍旧应当珍惜现有的生活。我们一日日度过的所谓日常，实际上可能是接连不断的奇迹。")])],1)],1)],1)])],1)}),[],!1,null,null,null),S=component.exports;f()(component,{VBtn:v.a,VCard:m.a,VCardActions:_.a,VCardSubtitle:_.b,VCardText:_.c,VCardTitle:_.d,VCol:x.a,VDivider:w.a,VExpandTransition:C.a,VIcon:k.a,VImg:y.a,VRow:A.a,VSpacer:D.a});e(45),e(46);var V=e(325),P={props:{loading:Boolean,neos:{type:Array,default:function(){return[]}}},data:function(){return{svgPaths:{mdiCalendar:o.d,mdiCalendarRange:o.e,mdiCalendarSearch:o.f,mdiChevronUp:o.k,mdiChevronDown:o.j,mdiCheckboxBlankOutline:o.h,mdiCheckboxMarked:o.i,mdiDatabaseSearch:o.l},descending:!1,mockData:[{date:"2020-01-02",count:22},{date:"2020-25-29",count:10},{date:"2020-30-34",count:39},{date:"2020-40-44",count:28},{date:"2020-55-59",count:17},{date:"2020-65-69",count:26},{date:"2020-70-74",count:21}]}},watch:{neos:function(t,n){if(0!==t.length||0!==n.length){var data=Array.from(this.neos);0===n.length?this.barChart=this.drawBarChart(data):this.barChart.update(data)}}},methods:{drawBarChart:function(t){var n=20,e=0,r=0,o=n+30*t.length,svg=V.C("#bar-chart-container").append("svg").attr("id","bar-chart").attr("viewBox","0 0 ".concat(500," ").concat(o)).attr("height",o).append("g"),c=V.t(t,(function(t){return t.count})),d=V.x().domain([0,c]).rangeRound([e,500-r]),l=V.w().domain(t.map((function(t){return t.date}))).rangeRound([n,o]).paddingInner(.2),h=V.z().domain([0,c]).interpolator(V.q),f=svg.append("g").style("fill","dodgerblue").join("g").selectAll("rect").data(t).join("rect").style("mix-blend-mode","multiply").attr("fill",(function(t){return h(t.count)})).attr("x",d(0)).attr("y",(function(t){return l(t.date)})).attr("width",(function(t){return d(t.count)})).attr("height",l.bandwidth()-1),v=function(g,t){return g.attr("transform","translate(0,".concat(n,")")).call(V.c(t).ticks(c)).call((function(g){return(g.selection?g.selection():g).select(".domain").remove()}))},m=svg.append("g").call(v,d);m.selectAll("text").attr("font-size","0.9rem");var _=function(g,t){return g.attr("transform","translate(".concat(e,",0)")).call(V.b(t).tickSizeOuter(0))},x=svg.append("g").call(_,l);return x.selectAll("text").attr("font-size","0.9rem"),Object.assign(svg.node(),{update:function(data){var t=svg.transition().duration(750);m.transition(t).call(v,d.domain([0,c])),x.transition(t).call(_,l.domain(data.map((function(t){return t.date})))),f=f.data(data,(function(t){return t.date})).join((function(t){return t.append("rect").style("mix-blend-mode","multiply").attr("class","bar").attr("fill",(function(t){return h(t.count)})).attr("x",d(0)).attr("y",(function(t){return l(t.date)})).attr("width",(function(t){return d(t.count)})).attr("height",l.bandwidth()-1)}),(function(t){return t.attr("height",l.bandwidth()-1).attr("fill",(function(t){return h(t.count)}))}),(function(t){return t.call((function(t){return t.transition().duration(600).remove().attr("x",(function(t){return-d(t.count)})).style("opacity",0)}))})).call((function(n){return n.transition(t).attr("width",(function(t){return d(t.count)})).attr("y",(function(t){return l(t.date)}))}))}})},updateBarChart:function(){this.descending?this.neos.sort((function(a,b){return V.e(a.count,b.count)})):this.neos.sort((function(a,b){return new Date(a.date)>new Date(b.date)?-1:1}))}}},j=e(568),R=Object(l.a)(P,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-card",{attrs:{loading:t.loading}},[e("v-card-title",{staticClass:"title"},[t._v("\n    "+t._s(t.$t("asteroids.number-of-neos"))+"\n  ")]),t._v(" "),e("v-card-text",[e("v-checkbox",{attrs:{label:t.$t("asteroids.descending"),"off-icon":t.svgPaths.mdiCheckboxBlankOutline,"on-icon":t.svgPaths.mdiCheckboxMarked},on:{click:t.updateBarChart},model:{value:t.descending,callback:function(n){t.descending=n},expression:"descending"}}),t._v(" "),e("div",{attrs:{id:"bar-chart-container"}})],1)],1)}),[],!1,null,null,null),O=R.exports;f()(R,{VCard:m.a,VCardText:_.c,VCardTitle:_.d,VCheckbox:j.a});var N={props:{loading:Boolean,neos:{type:Array,default:function(){return[]}}},watch:{neos:function(t,n){0===t.length&&0===n.length||(V.C("#pie-chart").remove(),this.pieChart=this.drawPieChart(this.neos))}},methods:{drawPieChart:function(data){var t=V.a().innerRadius(0).outerRadius((function(t){return 15*t.data.count})),n=V.a().innerRadius(0).outerRadius((function(t){return 15*t.data.PHAs})),e=V.a().innerRadius((function(t){return 15*t.data.count*.8})).outerRadius((function(t){return 15*t.data.count*.8})),r=V.a().innerRadius((function(t){return 15*t.data.PHAs*.8})).outerRadius((function(t){return 15*t.data.PHAs*.8})),o=V.u().sort(null).value((function(t){return t.count})),c=V.y().domain(data.map((function(t){return t.date}))).range(V.v((function(t){return V.r(.8*t+.1)}),data.length).reverse()),d=o(data),svg=V.C("#pie-chart-container").append("svg").attr("id","pie-chart").attr("viewBox",[-250,-300,500,600]).attr("height",500),l=svg.append("g").attr("stroke","white").selectAll("path").data(d).join("path").attr("fill",(function(t){return c(t.data.date)})).attr("d",t).append("title").text((function(t){return"".concat(t.data.date,": ").concat(t.data.PHAs.toLocaleString())}));return svg.append("g").attr("stroke","white").selectAll("path").data(d).join("path").attr("fill","#F44336").attr("d",n).append("title").text((function(t){return"".concat(t.data.date,": ").concat(t.data.count.toLocaleString())})),svg.append("g").attr("text-anchor","middle").selectAll("text").data(d).join("text").attr("transform",(function(t){return"translate(".concat(e.centroid(t),")")})).call((function(text){return text.append("tspan").attr("y","-0.2rem").attr("font-weight","bold").text((function(t){return t.data.date}))})).call((function(text){return text.filter((function(t){return t.endAngle-t.startAngle>.25})).append("tspan").attr("x",0).attr("y","1rem").attr("fill-opacity",.7).text((function(t){return t.data.count.toLocaleString()}))})),svg.append("g").attr("text-anchor","middle").selectAll("text").data(d).join("text").attr("transform",(function(t){return"translate(".concat(r.centroid(t),")")})).call((function(text){return text.append("tspan").attr("font-size","12px").attr("fill","white").text((function(t){return t.data.PHAs}))})),Object.assign(svg.node(),{update:function(data){var n=svg.transition().duration(750);l=l.data(data,(function(t){return t.date})).join((function(n){return n.append("g").attr("stroke","white").selectAll("path").data(d).join("path").attr("fill",(function(t){return c(t.data.date)})).attr("d",t).append("title").text((function(t){return"".concat(t.data.date,": ").concat(t.data.PHAs.toLocaleString())}))}),(function(t){return t.attr("fill",(function(t){return c(t.count)}))}),(function(t){return t.call((function(t){return t.transition().duration(600).remove().style("opacity",0)}))})).call((function(e){return e.transition(n).attr("fill",(function(t){return c(t.data.date)})).attr("d",t)}))}})}}},B=Object(l.a)(N,(function(){var t=this.$createElement,n=this._self._c||t;return n("v-card",{attrs:{loading:this.loading}},[n("v-card-title",{staticClass:"title"},[this._v("\n    "+this._s(this.$t("asteroids.pie-of-neos-with-phas"))+"\n  ")]),this._v(" "),n("v-card-text",[n("div",{attrs:{id:"pie-chart-container"}})])],1)}),[],!1,null,null,null),E=B.exports;f()(B,{VCard:m.a,VCardText:_.c,VCardTitle:_.d});var $=function(t){return Object(c.a)("%Y-%m-%d")(t)},T=new Date,F=(new Date).setDate(T.getDate()-6),H={components:{NeoInfo:S,BarChart:O,PieChart:E},data:function(){return{neos:[],firstSearch:!0,element_count:0,start_date:$(F),end_date:$(T),menu1:!1,menu2:!1,snackbar:!1,tooltip:"由于 API 限制，开始日期与结束日期之差不能超过一周！",loading:!1,svgPaths:{mdiCalendar:o.d,mdiCalendarRange:o.e,mdiCalendarSearch:o.f,mdiCheckboxBlankOutline:o.h,mdiCheckboxMarked:o.i,mdiDatabaseSearch:o.l}}},methods:{searchDatabase:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading=!0,n.next=3,t.getNeosFeedByDatabase(t.start_date,t.end_date);case 3:e=n.sent,t.neos=e,t.loading=!1;case 6:case"end":return n.stop()}}),n)})))()},getNeosFeedByDatabase:function(t,n){var e=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,d,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(o=new e.$AV.Query("NEO")).greaterThanOrEqualTo("date",new Date(t)),(c=new e.$AV.Query("NEO")).lessThanOrEqualTo("date",new Date(n)),d=e.$AV.Query.and(o,c),l=[],r.next=8,d.find().then((function(data){data.forEach((function(t){l.push({date:$(t.attributes.date),count:t.attributes.count,PHAs:t.attributes.PHAs})}))}));case 8:return r.abrupt("return",l);case 9:case"end":return r.stop()}}),r)})))()},searchNEOs:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.loading=!0,!t.isAllowedDate(t.start_date,t.end_date)){n.next=9;break}return n.next=4,t.getNeoFeedByDate();case 4:data=n.sent,t.element_count=data.element_count,t.neos=t.prepareChartData(data.near_earth_objects),n.next=10;break;case 9:t.snackbar=!0;case 10:t.loading=!1;case 11:case"end":return n.stop()}}),n)})))()},getDayFromString:function(t){return parseInt(t.split("-")[2])},isAllowedDate:function(t,n){return this.getDayFromString(t)>this.getDayFromString(n)-7&&this.getDayFromString(t)<this.getDayFromString(n)+7},getNeoFeedByDate:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.$get("/neo/rest/v1/feed",{params:{start_date:t.start_date,end_date:t.end_date}});case 2:return data=n.sent,n.abrupt("return",data);case 4:case"end":return n.stop()}}),n)})))()},prepareChartData:function(data){var t=[],n=function(n){var e=0;data[n].forEach((function(t){t.is_potentially_hazardous_asteroid&&e++})),t.push({date:n,count:data[n].length,PHAs:e})};for(var e in data)n(e);return t.sort((function(a,b){return new Date(a.date)>new Date(b.date)?-1:1}))}},head:function(){return{title:this.$t("asteroids.title")}}},z=(e(366),e(571)),I=e(572),M=e(569),L=e(573),J=Object(l.a)(H,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-row",[e("v-col",{attrs:{cols:"5"}},[e("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on;return[e("v-text-field",t._g({attrs:{label:t.$t("asteroids.start-date"),"prepend-icon":t.svgPaths.mdiCalendar,readonly:"",dense:""},model:{value:t.start_date,callback:function(n){t.start_date=n},expression:"start_date"}},r))]}}]),model:{value:t.menu1,callback:function(n){t.menu1=n},expression:"menu1"}},[t._v(" "),e("v-date-picker",{on:{input:function(n){t.menu1=!1}},model:{value:t.start_date,callback:function(n){t.start_date=n},expression:"start_date"}})],1)],1),t._v(" "),e("v-col",{attrs:{cols:"5"}},[e("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on;return[e("v-text-field",t._g({attrs:{label:t.$t("asteroids.end-date"),"prepend-icon":t.svgPaths.mdiCalendarRange,readonly:"",dense:""},model:{value:t.end_date,callback:function(n){t.end_date=n},expression:"end_date"}},r))]}}]),model:{value:t.menu2,callback:function(n){t.menu2=n},expression:"menu2"}},[t._v(" "),e("v-date-picker",{on:{input:function(n){t.menu2=!1}},model:{value:t.end_date,callback:function(n){t.end_date=n},expression:"end_date"}})],1)],1),t._v(" "),e("v-col",{staticClass:"text-center pa-0",attrs:{cols:"2"}},[e("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"indigo"},on:{click:t.searchNEOs}},[e("v-icon",{attrs:{dark:""}},[t._v(t._s(t.svgPaths.mdiCalendarSearch))])],1),t._v(" "),e("v-btn",{staticClass:"mx-2",attrs:{color:"primary",fab:"",dark:"",small:""},on:{click:t.searchDatabase}},[e("v-icon",{attrs:{dark:""}},[t._v(t._s(t.svgPaths.mdiDatabaseSearch))])],1)],1)],1)],1)],1),t._v(" "),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("neo-info",{attrs:{"element-count":t.element_count}})],1)],1),t._v(" "),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("bar-chart",{attrs:{loading:t.loading,neos:t.neos}})],1),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("pie-chart",{attrs:{loading:t.loading,neos:t.neos}})],1)],1),t._v(" "),e("v-snackbar",{attrs:{color:"red",top:""},model:{value:t.snackbar,callback:function(n){t.snackbar=n},expression:"snackbar"}},[t._v("\n    "+t._s(t.tooltip)+"\n    "),e("v-btn",{attrs:{text:""},on:{click:function(n){t.snackbar=!1}}},[t._v("\n      Close\n    ")])],1)],1)}),[],!1,null,null,null);n.default=J.exports;f()(J,{VBtn:v.a,VCol:x.a,VDatePicker:z.a,VIcon:k.a,VMenu:I.a,VRow:A.a,VSnackbar:M.a,VTextField:L.a})}}]);