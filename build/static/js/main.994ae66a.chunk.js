(this["webpackJsonpbanana-cesium"]=this["webpackJsonpbanana-cesium"]||[]).push([[0],{0:function(e,t){e.exports=Cesium},16:function(e,t,n){},18:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),a=n(6),c=n.n(a),s=(n(16),n(8)),o=n.n(s),u=n(11),l=n(10),f=n(9),b=n(3),j=(n(18),n(0)),p=n(2),h=j.Material.fromType(j.Material.PolylineGlowType,{glowPower:.1,color:new j.Color(1,.5,0,1)});var m=function(){var e=Object(r.useRef)(null),t=r.useState(j.Cartesian3.fromDegrees(151.2093,-33.8688,2e3)),n=Object(f.a)(t,2),i=n[0],a=n[1],c=r.useState([]),s=Object(f.a)(c,2),m=s[0],d=s[1];return function(e,t){var n=r.useRef();r.useEffect((function(){n.current=e}),[e]),r.useEffect((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,r,i,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.wheretheiss.at/v1/satellites/25544");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r=n.altitude,i=n.latitude,c=n.longitude,s=j.Cartesian3.fromDegrees(c,i,1e3*r),a(j.Cartesian3.fromDegrees(c,i,1e3*r)),d([].concat(Object(u.a)(m),[s]));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),5e3),Object(p.jsxs)(b.e,{ref:e,style:{position:"absolute",top:0,left:0,right:0,bottom:0},children:[Object(p.jsx)(b.a,{position:i,children:Object(p.jsx)(b.b,{uri:"/banana.gltf",minimumPixelSize:200,maximumPixelSize:500})}),Object(p.jsx)(b.d,{children:Object(p.jsx)(b.c,{positions:m,width:20,show:!0,material:h})})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))};c.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root")),d()}},[[22,1,2]]]);
//# sourceMappingURL=main.994ae66a.chunk.js.map