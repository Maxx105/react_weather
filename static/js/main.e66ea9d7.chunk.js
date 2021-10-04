(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c(15),n=c.n(r),s=(c(20),c(21),c(0));var i=function(){return Object(s.jsx)("h1",{id:"header",children:"Weather"})},o=c(3),l=c(4),d=c.n(l),j=function(e,t,c){return d.a.get("https://api.openweathermap.org/data/2.5/weather?".concat(e,"=").concat(t,"&appid=").concat(c)).then((function(e){return e.data}))},h=function(e,t,c){return d.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e,"&lon=").concat(t,"&exclude=minutely&appid=").concat(c)).then((function(e){return e.data}))},u=function(e){return d.a.get("https://freegeoip.app/json/"+e).then((function(e){return e.data}))},m=function(){return d.a.get("https://api.ipify.org/?format=json").then((function(e){return e.data}))},b=Object(a.createContext)(),p=function(e){var t=e.children,c=Object(a.useState)([]),r=Object(o.a)(c,2),n=r[0],i=r[1],l=Object(a.useState)([]),d=Object(o.a)(l,2),j=d[0],h=d[1],u=Object(a.useState)([]),m=Object(o.a)(u,2),p=m[0],O=m[1],x=Object(a.useState)(""),g=Object(o.a)(x,2),f=g[0],y=g[1],v=Object(a.useState)(""),N=Object(o.a)(v,2),w=N[0],S=N[1],D=Object(a.useState)(""),I=Object(o.a)(D,2),C=I[0],k=I[1],E=Object(a.useState)(!1),F=Object(o.a)(E,2),T=F[0],P=F[1];return Object(s.jsx)("div",{children:Object(s.jsx)(b.Provider,{value:{weatherData:n,setWeatherData:i,uvi:f,setUvi:y,forecastDailyWeatherData:j,setForecastDailyWeatherData:h,forecastHourlyWeatherData:p,setForecastHourlyWeatherData:O,currentCity:w,setCurrentCity:S,currentLocationType:C,setCurrentLocationType:k,isLoaded:T,setIsLoaded:P,APIKey:"3e198aed3ed933b951a2da906f5d01db"},children:t})})};c(42);var O=function(e){return Object(a.useEffect)((function(){e.error?(document.getElementById("error").innerText=e.error,e.createErrorMsg()):document.getElementById("error").innerText=""}),[e.error]),Object(s.jsx)("p",{id:"error"})};c(43);var x=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(""),i=Object(o.a)(n,2),l=i[0],d=i[1],p=Object(a.useState)([]),x=Object(o.a)(p,2),g=x[0],f=x[1],y=Object(a.useState)(""),v=Object(o.a)(y,2),N=v[0],w=v[1],S=Object(a.useContext)(b);function D(e){r(e.target.id)}function I(e,t,c){w(""),j(e,t,c).then((function(e){document.getElementById("location").value="",d(""),S.setWeatherData(e),S.setIsLoaded(!0),h(e.coord.lat,e.coord.lon,S.APIKey).then((function(e){S.setUvi(e.current.uvi),S.setForecastDailyWeatherData(e.daily),S.setForecastHourlyWeatherData(e.hourly)})).catch((function(e){return console.log(e)}))})).catch((function(e){e.response&&(w(" ".concat(e.response.data.message)),document.getElementById("location").value="")}))}function C(e,t,c){document.getElementById("error").innerText="";var a=g;a.push({location:t,locationType:c,APICall:e}),localStorage.setItem("currentCity",t),localStorage.setItem("search",JSON.stringify(a)),!0===document.getElementById("zip").checked?localStorage.setItem("currentLocationType","zip"):localStorage.setItem("currentLocationType","q"),f(JSON.parse(localStorage.getItem("search"))),S.setCurrentCity(localStorage.getItem("currentCity")),S.setCurrentLocationType(localStorage.getItem("currentLocationType"))}function k(e){var t=g;t.splice(e.target.id,1),localStorage.setItem("search",JSON.stringify(t)),f(JSON.parse(localStorage.getItem("search")))}return Object(a.useEffect)((function(){null===JSON.parse(localStorage.getItem("search"))?f([]):f(JSON.parse(localStorage.getItem("search")))}),[]),Object(s.jsxs)("div",{className:"searchArea",children:[Object(s.jsxs)("form",{id:"search-form",children:[Object(s.jsxs)("div",{className:"form-check",children:[Object(s.jsx)("input",{onClick:function(e){return D(e)},className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"zip"}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"zip",children:"Zip"})]}),Object(s.jsxs)("div",{className:"form-check",children:[Object(s.jsx)("input",{onClick:function(e){return D(e)},className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"q"}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"city",children:"City Name"})]}),Object(s.jsxs)("div",{className:"input-group mb-3",children:[Object(s.jsx)("input",{onChange:function(e){return function(e){d(e.target.value)}(e)},type:"text",className:"form-control",placeholder:"Enter City Here",id:"location"}),Object(s.jsx)("button",{onClick:function(){!1===document.getElementById("zip").checked&&!1===document.getElementById("q").checked?w(" Please select a location type"):""===document.getElementById("location").value?w(" Please enter a location"):(w(""),C("https://api.openweathermap.org/data/2.5/weather?".concat(c,"=").concat(l,"&appid=").concat(S.APIKey),l,c),I(c,l,S.APIKey))},className:"btn btn-primary",type:"button",children:"Search"})]}),Object(s.jsx)(O,{error:N,location:l,locationType:c,APIKey:S.APIKey,createErrorMsg:function(){var e=document.createElement("span"),t=document.createElement("i");t.className="fas fa-exclamation-triangle",e.append(t),document.getElementById("error").prepend(e)},setErrMsg:w}),Object(s.jsx)("div",{className:"d-grid gap-2",children:Object(s.jsx)("button",{onClick:function(e){e.preventDefault(),m().then((function(e){u(e.ip).then((function(e){w(""),C("https://api.openweathermap.org/data/2.5/weather?q=".concat(e.city,"&appid=").concat(S.APIKey),e.city,"q"),I("q",e.city,S.APIKey)}))}))},className:"btn btn-dark",children:"Search My Location"})})]}),Object(s.jsx)("br",{}),Object(s.jsx)("ul",{className:"list-group",children:g.map((function(e,t){return Object(s.jsxs)("li",{onClick:function(){return I(e.locationType,e.location,S.APIKey)},className:"list-group-item d-flex justify-content-between align-items-center",id:"searches",children:[e.location,Object(s.jsx)("button",{onClick:k,className:"btn btn-dark rounded-pill",id:t,children:"X"})]},t)}))}),0!==g.length?Object(s.jsx)("div",{className:"d-grid gap-2",children:Object(s.jsx)("button",{onClick:function(e){localStorage.clear(),f([])},className:"btn btn-danger",type:"button",id:"delete-history",children:"Clear History"})}):null]})};c(44);var g=function(){var e,t,c=Object(a.useContext)(b);function r(e){return(9*(e-273.15)/5+32).toFixed(1)}function n(e){return new Date(1e3*e).getMonth()+1+"/"+new Date(1e3*e).getDate()+"/"+new Date(1e3*e).getFullYear()}return Object(s.jsx)("div",{children:c.isLoaded?Object(s.jsxs)("div",{className:"weather-info",children:[Object(s.jsx)("div",{children:Object(s.jsxs)("h1",{id:"city-name",children:[c.weatherData.name,", ",c.weatherData.sys.country," (",function(){var e=new Date,t=e.getDate(),c=e.getMonth(),a=e.getFullYear();return"".concat(c+1,"/").concat(t,"/").concat(a)}(),")",Object(s.jsx)("img",{id:"icon",src:"https://openweathermap.org/img/wn/".concat(c.weatherData.weather[0].icon,"@2x.png"),alt:c.weatherData.weather[0].description})]})}),Object(s.jsxs)("h4",{children:[Object(s.jsxs)("strong",{children:["Temperature ",Object(s.jsx)("i",{className:"fas fa-".concat((t=r(c.weatherData.main.temp),t<=30?"thermometer-empty":t>30&&t<=55?"thermometer-quarter":t>55&&t<=70?"thermometer-half":t>70&&t<=85?"thermometer-three-quarters":t>85?"thermometer-full":void 0))})]})," ",r(c.weatherData.main.temp),"\xb0F"]}),Object(s.jsxs)("h4",{children:[Object(s.jsxs)("strong",{children:["Humidity ",Object(s.jsx)("i",{className:"fas fa-humidity"})]})," ",c.weatherData.main.humidity,"%"]}),Object(s.jsxs)("h4",{children:[Object(s.jsxs)("strong",{children:["Wind Speed ",Object(s.jsx)("i",{className:"fas fa-wind"})]})," ",c.weatherData.wind.speed," mph"]}),Object(s.jsxs)("h4",{children:[Object(s.jsxs)("strong",{children:["UV Index ",Object(s.jsx)("i",{className:"fas fa-sun"})]}),Object(s.jsx)("span",{id:"uv-index",className:"badge rounded-pill bg-".concat((e=c.uvi,e<=2?"success":e>2&&e<=5?"warning":e>5&&e<=8?"danger":e>8?"purple":void 0)),children:c.uvi})]}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{className:"scrolling-wrapper",children:c.forecastHourlyWeatherData.map((function(e,t){return Object(s.jsx)("div",{className:"card",children:Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("div",{children:Object(s.jsx)("h5",{className:"card-text",children:Object(s.jsx)("strong",{children:(c=e.dt,new Date(1e3*c).toLocaleTimeString("en-US",{hour:"numeric",hour12:!0}))})})}),Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:"card-img-top",id:"icon",src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),alt:e.weather[0].description})}),Object(s.jsx)("div",{children:Object(s.jsxs)("p",{className:"card-text",children:["Temperature: ",r(e.temp)," \xb0F"]})}),Object(s.jsx)("div",{children:Object(s.jsxs)("p",{className:"card-text",children:["Feels Like: ",r(e.feels_like)," \xb0F"]})}),Object(s.jsx)("div",{children:Object(s.jsxs)("p",{className:"card-text",children:["Humidity: ",e.humidity,"%"]})}),Object(s.jsx)("div",{children:Object(s.jsxs)("p",{className:"card-text",children:["Chance of Precipitation: ",(100*e.pop).toFixed(0),"%"]})})]})},t);var c}))}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{className:"scrolling-wrapper",children:c.forecastDailyWeatherData.map((function(e,t){return Object(s.jsx)("div",{className:"card",children:Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("div",{children:Object(s.jsx)("h5",{className:"card-text",children:Object(s.jsx)("strong",{children:(c=e.dt,["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(1e3*c).getDay()])})})}),Object(s.jsx)("div",{children:Object(s.jsx)("h6",{className:"card-text",children:n(e.dt)})}),Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:"card-img-top",id:"icon",src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),alt:e.weather[0].description})}),Object(s.jsx)("div",{children:Object(s.jsxs)("p",{className:"card-text",children:["H: ",r(e.temp.max)," \xb0F"]})}),Object(s.jsx)("div",{children:Object(s.jsxs)("p",{className:"card-text",children:["L: ",r(e.temp.min)," \xb0F"]})}),Object(s.jsx)("div",{children:Object(s.jsxs)("p",{className:"card-text",children:["Humidity: ",e.humidity,"%"]})}),Object(s.jsx)("div",{children:Object(s.jsxs)("p",{className:"card-text",children:["Chance of Precipitation: ",(100*e.pop).toFixed(0),"%"]})})]})},t);var c}))})]}):null})};var f=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(i,{}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-lg-4 col-md-12",children:Object(s.jsx)(x,{})}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"col-lg-8 col-md-12",children:Object(s.jsx)(g,{})})]})]})};c(45);n.a.render(Object(s.jsx)(p,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.e66ea9d7.chunk.js.map