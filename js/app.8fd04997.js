(function(t){function a(a){for(var s,i,o=a[0],d=a[1],l=a[2],m=0,_=[];m<o.length;m++)i=o[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&_.push(r[i][0]),r[i]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);c&&c(a);while(_.length)_.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,o=1;o<e.length;o++){var d=e[o];0!==r[d]&&(s=!1)}s&&(n.splice(a--,1),t=i(i.s=e[0]))}return t}var s={},r={app:0},n=[];function i(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=s,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)i.d(e,s,function(a){return t[a]}.bind(null,s));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var c=d;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var s=e("85ec"),r=e.n(s);r.a},"1aa1":function(t,a,e){"use strict";var s=e("7273"),r=e.n(s);r.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Weather",{attrs:{data:t.data}}),t._m(0),e("Camera",{attrs:{data:t.data}}),e("Forecast",{attrs:{data:t.data}}),t._m(1)],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footnote"},[e("a",{staticClass:"external",attrs:{target:"_blank",href:"https://www.google.com/maps/place/59%C2%B012'09.9%22N+18%C2%B026'25.5%22E/@59.2027467,18.4398698,243m/data=!3m2!1e3!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d59.2027465!4d18.4404174"}},[t._v("Vindmätarplacering")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",[e("h4",[t._v("Vad är vädretpålandet?")]),e("p",[t._v("Denna sidan presenterar vädret på ön Ängsö utanför Tyresö Brevik (inte nationalparken). Vill du ha mail när vi lägger till nya funktioner? Skicka din e-postadress till "),e("a",{staticClass:"external",attrs:{href:"mailto:niklas@bivald.com"}},[t._v("niklas@bivald.com")])]),e("p",[t._v("Sidan drivs av familjen Bivald")])])}],i=(e("d3b7"),e("96cf"),e("1da1")),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"weather"}},[e("div",{attrs:{id:"weather-title"}},[e("h1",[t._v("Ängsö")]),e("h2",[t._v("Uppmätt på "),e("a",{staticClass:"external white",attrs:{href:"https://www.google.com/maps/place/59%C2%B012'09.3%22N+18%C2%B026'25.3%22E/@59.2808088,18.2473524,11z/data=!4m15!1m8!3m7!1s0x0:0x0!2zNTnCsDEyJzA5LjIiTiAxOMKwMjYnMjMuOCJF!3b1!7e2!8m2!3d59.2025503!4d18.4399388!3m5!1s0x0:0x0!7e2!8m2!3d59.2025885!4d18.4403622"}},[t._v("norra udden")]),t.data.weather_station?e("span",[t._v(t._s(""+t.data.weather_station.last_communication.slice(11,16)))]):t._e()])]),e("div",{attrs:{id:"temperature"}},[t.data.sensors&&t.data.sensors.UTE1?e("div",{staticClass:"temperature-reading"},[e("div",{staticClass:"temperature-large"},[e("span",{staticClass:"bold",domProps:{textContent:t._s(t.data.sensors.UTE1.temperature)}}),t._v("°C ute ")]),e("div",{staticClass:"temperature-extra"},[e("div",{staticClass:"temperature-small"},[e("span",{},[t._v("BATTERI: ")]),e("span",{staticClass:"info bold",domProps:{textContent:t._s(t.data.sensors.UTE1.battery_level)}})]),e("div",{staticClass:"temperature-small"},[e("span",{},[t._v("SIGNAL: ")]),e("span",{staticClass:"info bold",domProps:{textContent:t._s(t.data.sensors.UTE1.signal_strength)}})]),e("div",{staticClass:"temperature-small"},[e("span",{},[t._v("AVLÄST: ")]),e("span",{staticClass:"info bold",domProps:{textContent:t._s(""+t.data.sensors.UTE1.last_communication.slice(11,16))}})])])]):t._e(),t.data.sensors&&t.data.sensors.VATTEN?e("div",{staticClass:"temperature-reading"},[e("div",{staticClass:"temperature-large"},[e("span",{staticClass:"bold",domProps:{textContent:t._s(t.data.sensors.UTE1.temperature)}}),t._v("°C i vattnet ")]),e("div",{staticClass:"temperature-extra"},[e("div",{staticClass:"temperature-small"},[e("span",{},[t._v("BATTERI: ")]),e("span",{staticClass:"info bold",domProps:{textContent:t._s(t.data.sensors.UTE1.battery_level)}})]),e("div",{staticClass:"temperature-small"},[e("span",{},[t._v("SIGNAL: ")]),e("span",{staticClass:"info bold",domProps:{textContent:t._s(t.data.sensors.UTE1.signal_strength)}})]),e("div",{staticClass:"temperature-small"},[e("span",{},[t._v("AVLÄST: ")]),e("span",{staticClass:"info bold",domProps:{textContent:t._s(""+t.data.sensors.UTE1.last_communication.slice(11,16))}})])])]):t._e(),t.data.sensors&&t.data.sensors.VATTENHOJD?e("div",{staticClass:"temperature-reading"},[e("div",{staticClass:"temperature-large"},[e("span",{staticClass:"bold",domProps:{textContent:t._s(t.data.sensors.VATTENHOJD.temperature)}}),t._v("cm vattenstånd ")]),e("div",{staticClass:"temperature-extra"},[e("div",{staticClass:"temperature-small"},[e("span",{},[t._v("BATTERI: ")]),e("span",{staticClass:"info bold",domProps:{textContent:t._s(t.data.sensors.VATTENHOJD.battery_level)}})]),e("div",{staticClass:"temperature-small"},[e("span",{},[t._v("SIGNAL: ")]),e("span",{staticClass:"info bold",domProps:{textContent:t._s(t.data.sensors.VATTENHOJD.signal_strength)}})]),e("div",{staticClass:"temperature-small"},[e("span",{},[t._v("AVLÄST: ")]),e("span",{staticClass:"info bold",domProps:{textContent:t._s(""+t.data.sensors.VATTENHOJD.last_communication.slice(11,16))}})])])]):t._e()]),e("div",{attrs:{id:"weather_station"}},[e("table",[e("tbody",[e("tr",[t._m(0),t._m(1),e("td",[t.data.weather_station?e("div",[e("span",{attrs:{id:"wind_speed"},domProps:{textContent:t._s(t.data.weather_station.wind_speed)}}),t._v("m/s "),e("span",{domProps:{textContent:t._s(t.data.weather_station.wind_dir_swe)}})]):t._e(),t.data.weather_station?e("div",{staticClass:"small"},[e("span",{domProps:{textContent:t._s(""+Math.round(t.data.weather_station.wind_day_high))}}),t._v("m/s kl "),e("span",{domProps:{textContent:t._s(t.data.weather_station.wind_day_high_time)}})]):t._e()])]),e("tr",[t._m(2),t._m(3),e("td",[t.data.weather_station?e("div",[t._v(" "+t._s(t.data.weather_station.rain_day_mm)+"mm idag ")]):t._e(),t.data.weather_station?e("div",{staticClass:"small"},[t._v(" "+t._s(t.data.weather_station.rain_rate_mm_per_hr)+"mm/timme ")]):t._e()])]),e("tr",[t._m(4),t._m(5),e("td",[t.data.weather_station?e("div",[e("span",{domProps:{textContent:t._s(t.data.weather_station.pressure)}}),t._v("hP ")]):t._e(),t.data.weather_station?e("div",{staticClass:"small"},[e("span",{domProps:{textContent:t._s(t.data.weather_station.pressure_tendancy)}})]):t._e()])]),e("tr",[t._m(6),t._m(7),e("td",[e("div",[t.data.weather_station?e("span",{domProps:{textContent:t._s(t.data.weather_station.sunrise)}}):t._e()]),e("div",{staticClass:"small"},[t.data.weather_station?e("span",{domProps:{textContent:t._s(t.data.weather_station.sunset)}}):t._e()])])]),t.data.water_level?e("tr",[t._m(8),e("td",{staticClass:"bold title"},[t._v("Vattenstånd:")]),e("td",[e("span",{domProps:{textContent:t._s(t.data.water_level)}})])]):t._e()])])])])},d=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("td",{staticClass:"icon"},[e("img",{attrs:{src:"/assets/noun_Wind_1560880.png",width:"40",height:"40"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("td",{staticClass:"title"},[e("div",{staticClass:"bold"},[t._v("Vind:")]),e("div",{staticClass:"small"},[t._v("Dagens högsta:")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("td",{staticClass:"icon"},[e("img",{attrs:{src:"/assets/noun_Rain_882266.png",width:"40",height:"40"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("td",{staticClass:"title"},[e("div",{staticClass:"bold"},[t._v("Regn:")]),e("div",{staticClass:"small"},[t._v("Regn just nu:")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("td",{staticClass:"icon"},[e("img",{attrs:{src:"/assets/noun_Barometer_217491.png",width:"40",height:"40"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("td",{staticClass:"title"},[e("div",{staticClass:"bold"},[t._v("Barometer:")]),e("div",{staticClass:"small"},[t._v("Barometer trend:")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("td",{staticClass:"icon"},[e("img",{attrs:{src:"/assets/noun_sunrise_2125579.png",width:"40",height:"40"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("td",{staticClass:"title"},[e("div",{staticClass:"bold"},[t._v("Soluppgång:")]),e("div",{staticClass:"small"},[t._v("Solnedgång:")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("td",{staticClass:"icon"},[e("img",{attrs:{src:""}})])}],l={name:"Weather",props:{data:Object}},c=l,m=(e("aa8f"),e("2877")),_=Object(m["a"])(c,o,d,!1,null,"0877e7ee",null),p=_.exports,u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"camera"}},[e("div",{staticClass:"camera"},[e("h3",[t._v("Kamera 1: Husnocken")]),t._m(0),e("span",{attrs:{id:"camera1"}},[e("a",{attrs:{href:t.data.camera1}},[e("img",{attrs:{src:t.data.camera1}})])])]),e("div",{staticClass:"camera"},[e("h3",[t._v("Kamera 2: Bryggan")]),t._m(1),e("span",{attrs:{id:"camera2"}},[e("a",{attrs:{href:t.data.camera2}},[e("img",{attrs:{src:t.data.camera2}})])])])])},v=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h4",[e("a",{staticClass:"external",attrs:{target:"_blank",href:"https://www.google.com/maps/place/59%C2%B012'08.5%22N+18%C2%B026'26.2%22E/@59.2023557,18.4400708,243m/data=!3m2!1e3!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d59.2023546!4d18.4406182"}},[t._v("59.202355, 18.440618")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h4",[e("a",{staticClass:"external",attrs:{target:"_blank",href:"https://www.google.com/maps/place/59%C2%B012'09.9%22N+18%C2%B026'25.5%22E/@59.2027497,18.4398748,243m/data=!3m2!1e3!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d59.2027491!4d18.4404222"}},[t._v("59.202749, 18.440422")])])}],f={name:"Camera",props:{data:Object}},h=f,C=(e("1aa1"),Object(m["a"])(h,u,v,!1,null,"f0e1f152",null)),g=C.exports,w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"forecast"}},[e("h3",[t._v("Femdygnsprognos")]),t._m(0),t.forecasts?e("table",{attrs:{id:"forecasts"}},[t._m(1),t._l(t.forecasts,(function(a){return e("tr",{key:a.index},[e("td",{staticClass:"time"},[e("span",{domProps:{textContent:t._s(a.datetime)}})]),e("td",{staticClass:"weather"},[e("img",{attrs:{src:"/assets/weather/"+a.symbol_code+".png"}})]),e("td",{staticClass:"rain"},[e("span",{domProps:{textContent:t._s(a.precipitation_amount)}})]),e("td",{staticClass:"temperature"},[e("span",{domProps:{textContent:t._s(a.air_temperature)}})]),e("td",{staticClass:"wind"},[e("span",[t._v(t._s(t._f("wind_dir")(a.wind_from_direction))),e("br"),t._v(t._s(a.wind_speed)+" m/s")])])])}))],2):t._e()])},b=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h4",[t._v("Hämtat från "),e("a",{staticClass:"external white",attrs:{href:"https://www.yr.no/"}},[t._v("yr.no")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{staticClass:"time"},[t._v("Datum/Tid")]),e("th",{staticClass:"weather"},[t._v("Väder")]),e("th",{staticClass:"rain"},[t._v("Regn")]),e("th",{staticClass:"temperature"},[t._v("°C")]),e("th",{staticClass:"wind"},[t._v("Vind")])])])}],x=(e("caad"),e("fb6a"),e("ac1f"),e("2532"),e("5319"),["Nord","Nordnordost","Nordost","Ostnordost","Öst","Ostsydost","Sydost","Sydsydost","Syd","Sydsydväst","Sydväst","Västsydväst","Väst","Västnordväst","Nordväst","Nordnordväst","Nord"]),y={name:"Forecast",props:{data:Object},filters:{wind_dir:function(t){if(!t)return"";var a=t%360;return a=Math.round(a/22.5,0),x[parseInt(a)]}},data:function(){return{forecasts:{}}},beforeMount:function(){this.getData()},methods:{getData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e,s,r,n,i,o,d;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=18.44061&lon=59.20235&altitude=4150");case 2:return e=a.sent,t.forecasts=[],a.next=6,e.json();case 6:for(r in s=a.sent,s["properties"]["timeseries"])n=s["properties"]["timeseries"][r],i=new Date(n["time"]),o=[0,6,12,18],o.includes(i.getHours())&&(d=n["data"]["instant"]["details"],d["datetime"]=i.toISOString().replace("T"," ").slice(0,16),d["symbol_code"]=n["data"]["next_1_hours"]["summary"]["symbol_code"],d["precipitation_amount"]=n["data"]["next_1_hours"]["details"]["precipitation_amount"],t.forecasts.push(d));case 8:case"end":return a.stop()}}),a)})))()}}},E=y,T=(e("f726"),Object(m["a"])(E,w,b,!1,null,"61b5e07c",null)),P=T.exports,O={name:"App",components:{Weather:p,Camera:g,Forecast:P},data:function(){return{data:{}}},beforeMount:function(){this.getData()},methods:{getData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://api.vadretpalandet.se/affeb19f-688c-42d0-9453-cb62650b3313.js");case 2:return e=a.sent,a.next=5,e.json();case 5:s=a.sent,s["camera1"]="https://image.vadretpalandet.se/file/vadretpalandet/"+s["camera1"],s["camera2"]="https://image.vadretpalandet.se/file/vadretpalandet/"+s["camera2"],t.data=s;case 9:case"end":return a.stop()}}),a)})))()}}},j=O,S=(e("034f"),Object(m["a"])(j,r,n,!1,null,null,null)),N=S.exports;new s["a"]({render:function(t){return t(N)}}).$mount("#app")},7273:function(t,a,e){},"85ec":function(t,a,e){},aa8f:function(t,a,e){"use strict";var s=e("c8aa"),r=e.n(s);r.a},b801:function(t,a,e){},c8aa:function(t,a,e){},f726:function(t,a,e){"use strict";var s=e("b801"),r=e.n(s);r.a}});
//# sourceMappingURL=app.8fd04997.js.map