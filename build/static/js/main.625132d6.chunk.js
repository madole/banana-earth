(this["webpackJsonpbanana-cesium"]=this["webpackJsonpbanana-cesium"]||[]).push([[0],{0:function(e,t){e.exports=Cesium},16:function(e,t,n){},18:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),c=n(6),s=n.n(c),a=(n(16),n(8)),o=n.n(a),u=n(11),l=n(10),f=n(9),m=n(3),b=(n(18),n(0)),j=n(2);b.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjMjk3OGRkNS0zZTZjLTQyZGYtYjAzNy1lYTk5NmY3NDkyZTMiLCJpZCI6MzMxMzksInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1OTgwNjc1ODh9.KjJzjblyvrJlF0WkZZznyR6FXfNZY432yc19DtT1Ozc";var d=b.Material.fromType(b.Material.PolylineGlowType,{glowPower:.1,color:new b.Color(1,.5,0,1)}),h=new b.CesiumTerrainProvider({url:b.IonResource.fromAssetId(1)});var p=function(){var e=Object(i.useRef)(null),t=i.useState(b.Cartesian3.fromDegrees(151.2093,-33.8688,2e3)),n=Object(f.a)(t,2),r=n[0],c=n[1],s=i.useState([]),a=Object(f.a)(s,2),p=a[0],y=a[1];return i.useEffect((function(){console.log(e.current),e.current.cesiumElement.animation.container.style.visibility="hidden",e.current.cesiumElement.timeline.container.style.visibility="hidden",e.current.cesiumElement.scene.globe.enableLighting=!0,e.current.cesiumElement.forceResize()}),[]),function(e,t){var n=i.useRef();i.useEffect((function(){n.current=e}),[e]),i.useEffect((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,i,r,s,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.wheretheiss.at/v1/satellites/25544");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i=n.altitude,r=n.latitude,s=n.longitude,a=b.Cartesian3.fromDegrees(s,r,1e3*i),c(b.Cartesian3.fromDegrees(s,r,1e3*i)),y([].concat(Object(u.a)(p),[a]));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),5e3),Object(j.jsxs)(m.e,{ref:e,style:{position:"absolute",top:0,left:0,right:0,bottom:0},baseLayerPicker:!1,terrainProvider:h,children:[Object(j.jsx)(m.a,{position:r,children:Object(j.jsx)(m.b,{uri:"/banana.gltf",minimumPixelSize:200,maximumPixelSize:500})}),Object(j.jsx)(m.d,{children:Object(j.jsx)(m.c,{positions:p,width:20,show:!0,material:d})})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),r(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),y()}},[[22,1,2]]]);
//# sourceMappingURL=main.625132d6.chunk.js.map