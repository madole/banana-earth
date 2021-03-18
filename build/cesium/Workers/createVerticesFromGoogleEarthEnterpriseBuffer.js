define(["./EllipsoidTangentPlane-9123a53b","./Transforms-a73b3b3b","./Cartesian2-8417ca3d","./when-208fe5b0","./TerrainEncoding-73cbc4e6","./Math-4e53b694","./OrientedBoundingBox-18b4901f","./RuntimeError-7f634f5d","./WebMercatorProjection-ffb6b9f8","./createTaskProcessorWorker","./Check-d18af7c4","./IntersectionTests-7d224a2f","./Plane-4aa8974d","./AttributeCompression-f02ec82f","./ComponentDatatype-9204e9f6","./WebGLConstants-76bb35d1"],function(Et,Tt,Ct,vt,Mt,Nt,bt,xt,St,t,e,i,n,a,r,o){"use strict";var wt=Uint16Array.BYTES_PER_ELEMENT,Pt=Int32Array.BYTES_PER_ELEMENT,Bt=Uint32Array.BYTES_PER_ELEMENT,yt=Float32Array.BYTES_PER_ELEMENT,At=Float64Array.BYTES_PER_ELEMENT;function Rt(t,e,i){i=vt.defaultValue(i,Nt.CesiumMath);for(var n=t.length,a=0;a<n;++a)if(i.equalsEpsilon(t[a],e,Nt.CesiumMath.EPSILON12))return a;return-1}var _t=new Ct.Cartographic,Wt=new Ct.Cartesian3,Ft=new Ct.Cartesian3,Ot=new Ct.Cartesian3,Yt=new Tt.Matrix4;function kt(t,e,i,n,a,r,o,s,u,h){for(var c=o.length,d=0;d<c;++d){var g=o[d],l=g.cartographic,m=g.index,p=t.length,I=l.longitude,f=l.latitude,f=Nt.CesiumMath.clamp(f,-Nt.CesiumMath.PI_OVER_TWO,Nt.CesiumMath.PI_OVER_TWO),l=l.height-r.skirtHeight;r.hMin=Math.min(r.hMin,l),Ct.Cartographic.fromRadians(I,f,l,_t),u&&(_t.longitude+=s),u?d===c-1?_t.latitude+=h:0===d&&(_t.latitude-=h):_t.latitude+=s;f=r.ellipsoid.cartographicToCartesian(_t);t.push(f),e.push(l),i.push(Ct.Cartesian2.clone(i[m])),0<n.length&&n.push(n[m]),Tt.Matrix4.multiplyByPoint(r.toENU,f,Wt);l=r.minimum,f=r.maximum;Ct.Cartesian3.minimumByComponent(Wt,l,l),Ct.Cartesian3.maximumByComponent(Wt,f,f);f=r.lastBorderPoint;vt.defined(f)&&(f=f.index,a.push(f,p-1,p,p,m,f)),r.lastBorderPoint=g}}return t(function(t,e){t.ellipsoid=Ct.Ellipsoid.clone(t.ellipsoid),t.rectangle=Ct.Rectangle.clone(t.rectangle);var i=function(t,e,i,n,a,r,o,s,u,h){var c,d,g,l,m;ct=vt.defined(n)?(c=n.west,d=n.south,g=n.east,l=n.north,m=n.width,n.height):(c=Nt.CesiumMath.toRadians(a.west),d=Nt.CesiumMath.toRadians(a.south),g=Nt.CesiumMath.toRadians(a.east),l=Nt.CesiumMath.toRadians(a.north),m=Nt.CesiumMath.toRadians(n.width),Nt.CesiumMath.toRadians(n.height));var p,I,f=[d,l],E=[c,g],T=Tt.Transforms.eastNorthUpToFixedFrame(e,i),C=Tt.Matrix4.inverseTransformation(T,Yt);s&&(p=St.WebMercatorProjection.geodeticLatitudeToMercatorAngle(d),I=1/(St.WebMercatorProjection.geodeticLatitudeToMercatorAngle(l)-p));var v=new DataView(t),M=Number.POSITIVE_INFINITY,N=Number.NEGATIVE_INFINITY,b=Ft;b.x=Number.POSITIVE_INFINITY,b.y=Number.POSITIVE_INFINITY,b.z=Number.POSITIVE_INFINITY;var x=Ot;x.x=Number.NEGATIVE_INFINITY,x.y=Number.NEGATIVE_INFINITY,x.z=Number.NEGATIVE_INFINITY;var S,w,P=0,B=0,y=0;for(w=0;w<4;++w){var A=P;S=v.getUint32(A,!0),A+=Bt;var R=Nt.CesiumMath.toRadians(180*v.getFloat64(A,!0));A+=At,-1===Rt(E,R)&&E.push(R);R=Nt.CesiumMath.toRadians(180*v.getFloat64(A,!0));A+=At,-1===Rt(f,R)&&f.push(R),A+=2*At;R=v.getInt32(A,!0);A+=Pt,B+=R,R=v.getInt32(A,!0),y+=3*R,P+=S+Bt}var _=[],W=[],F=new Array(B),O=new Array(B),Y=new Array(B),k=s?new Array(B):[],U=new Array(y),V=[],H=[],L=[],D=[],G=0,j=0;for(w=P=0;w<4;++w){S=v.getUint32(P,!0);var z=P+=Bt,q=Nt.CesiumMath.toRadians(180*v.getFloat64(P,!0));P+=At;var J=Nt.CesiumMath.toRadians(180*v.getFloat64(P,!0));P+=At;var K=Nt.CesiumMath.toRadians(180*v.getFloat64(P,!0)),Q=.5*K;P+=At;var X=Nt.CesiumMath.toRadians(180*v.getFloat64(P,!0)),Z=.5*X;P+=At;var $=v.getInt32(P,!0);P+=Pt;var tt=v.getInt32(P,!0);P+=Pt,P+=Pt;for(var et=new Array($),it=0;it<$;++it){var nt=q+v.getUint8(P++)*K;_t.longitude=nt;var at=J+v.getUint8(P++)*X;_t.latitude=at;var rt=v.getFloat32(P,!0);if(P+=yt,0!==rt&&rt<h&&(rt*=-Math.pow(2,u)),rt*=6371010*r,_t.height=rt,-1!==Rt(E,nt)||-1!==Rt(f,at)){var ot=Rt(_,_t,Ct.Cartographic);if(-1!==ot){et[it]=W[ot];continue}_.push(Ct.Cartographic.clone(_t)),W.push(G)}et[it]=G,Math.abs(nt-c)<Q?V.push({index:G,cartographic:Ct.Cartographic.clone(_t)}):Math.abs(nt-g)<Q?L.push({index:G,cartographic:Ct.Cartographic.clone(_t)}):Math.abs(at-d)<Z?H.push({index:G,cartographic:Ct.Cartographic.clone(_t)}):Math.abs(at-l)<Z&&D.push({index:G,cartographic:Ct.Cartographic.clone(_t)}),M=Math.min(rt,M),N=Math.max(rt,N),Y[G]=rt;rt=i.cartographicToCartesian(_t);F[G]=rt,s&&(k[G]=(St.WebMercatorProjection.geodeticLatitudeToMercatorAngle(at)-p)*I),Tt.Matrix4.multiplyByPoint(C,rt,Wt),Ct.Cartesian3.minimumByComponent(Wt,b,b),Ct.Cartesian3.maximumByComponent(Wt,x,x);nt=(nt-c)/(g-c);nt=Nt.CesiumMath.clamp(nt,0,1);at=(at-d)/(l-d);at=Nt.CesiumMath.clamp(at,0,1),O[G]=new Ct.Cartesian2(nt,at),++G}for(var st=3*tt,ut=0;ut<st;++ut,++j)U[j]=et[v.getUint16(P,!0)],P+=wt;if(S!==P-z)throw new xt.RuntimeError("Invalid terrain tile.")}F.length=G,O.length=G,Y.length=G,s&&(k.length=G);var ht=G,a=j,t={hMin:M,lastBorderPoint:void 0,skirtHeight:o,toENU:C,ellipsoid:i,minimum:b,maximum:x};V.sort(function(t,e){return e.cartographic.latitude-t.cartographic.latitude}),H.sort(function(t,e){return t.cartographic.longitude-e.cartographic.longitude}),L.sort(function(t,e){return t.cartographic.latitude-e.cartographic.latitude}),D.sort(function(t,e){return e.cartographic.longitude-t.cartographic.longitude});o=1e-5;{var ct;kt(F,Y,O,k,U,t,V,-o*m,!0,-o*ct),kt(F,Y,O,k,U,t,H,-o*ct,!1),kt(F,Y,O,k,U,t,L,o*m,!0,o*ct),kt(F,Y,O,k,U,t,D,o*ct,!1),0<V.length&&0<D.length&&(gt=V[0].index,lt=D[D.length-1].index,ct=F.length-1,U.push(lt,ct,ht,ht,gt,lt))}B=F.length;var dt,gt=Tt.BoundingSphere.fromPoints(F);vt.defined(n)&&(dt=bt.OrientedBoundingBox.fromRectangle(n,M,N,i));for(var lt=new Mt.EllipsoidalOccluder(i).computeHorizonCullingPointPossiblyUnderEllipsoid(e,F,M),n=new Et.AxisAlignedBoundingBox(b,x,e),mt=new Mt.TerrainEncoding(n,t.hMin,N,T,!1,s),pt=new Float32Array(B*mt.getStride()),It=0,ft=0;ft<B;++ft)It=mt.encode(pt,It,F[ft],O[ft],Y[ft],void 0,k[ft]);e=V.map(function(t){return t.index}).reverse(),n=H.map(function(t){return t.index}).reverse(),t=L.map(function(t){return t.index}).reverse(),T=D.map(function(t){return t.index}).reverse();return n.unshift(t[t.length-1]),n.push(e[0]),T.unshift(e[e.length-1]),T.push(t[0]),{vertices:pt,indices:new Uint16Array(U),maximumHeight:N,minimumHeight:M,encoding:mt,boundingSphere3D:gt,orientedBoundingBox:dt,occludeePointInScaledSpace:lt,vertexCountWithoutSkirts:ht,indexCountWithoutSkirts:a,westIndicesSouthToNorth:e,southIndicesEastToWest:n,eastIndicesNorthToSouth:t,northIndicesWestToEast:T}}(t.buffer,t.relativeToCenter,t.ellipsoid,t.rectangle,t.nativeRectangle,t.exaggeration,t.skirtHeight,t.includeWebMercatorT,t.negativeAltitudeExponentBias,t.negativeElevationThreshold),n=i.vertices;return e.push(n.buffer),t=i.indices,e.push(t.buffer),{vertices:n.buffer,indices:t.buffer,numberOfAttributes:i.encoding.getStride(),minimumHeight:i.minimumHeight,maximumHeight:i.maximumHeight,boundingSphere3D:i.boundingSphere3D,orientedBoundingBox:i.orientedBoundingBox,occludeePointInScaledSpace:i.occludeePointInScaledSpace,encoding:i.encoding,vertexCountWithoutSkirts:i.vertexCountWithoutSkirts,indexCountWithoutSkirts:i.indexCountWithoutSkirts,westIndicesSouthToNorth:i.westIndicesSouthToNorth,southIndicesEastToWest:i.southIndicesEastToWest,eastIndicesNorthToSouth:i.eastIndicesNorthToSouth,northIndicesWestToEast:i.northIndicesWestToEast}})});
