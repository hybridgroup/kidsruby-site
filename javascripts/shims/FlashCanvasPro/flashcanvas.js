window.ActiveXObject&&!window.CanvasRenderingContext2D&&function(j,m){function O(t){this.code=t,this.message=ea[t]}function y(t,i,s){if(!s){s=[];for(var e=0,h=4*t*i;h>e;++e)s[e]=0}this.width=t,this.height=i,this.data=s}function fa(t){this.width=t}function P(t){this.id=t.I++}function z(t){this.O=t,this.id=t.I++}function D(t,i){this.canvas=t,this.w=i,this.f=t.uniqueID,this.J(),this.I=0,this.j=this.H="",this.c=0}function E(){if("complete"===m.readyState){m.detachEvent(Q,E);for(var t=m.getElementsByTagName(u),i=0,s=t.length;s>i;++i)F.initElement(t[i])}}function R(){var t=event.srcElement,i=t.parentNode;t.blur(),i.focus()}function G(){2&event.button&&event.srcElement.parentNode.setCapture()}function H(){2&event.button&&event.srcElement.parentNode.releaseCapture()}function S(){var t=event.propertyName;if("width"===t||"height"===t){var i=event.srcElement,s=i[t],e=parseInt(s,10);(isNaN(e)||0>e)&&(e="width"===t?300:150),s===e?(i.style[t]=e+"px",i.getContext("2d").P(i.width,i.height)):i[t]=e}}function T(){j.detachEvent(U,T);for(var t in n){var i,s=n[t],e=s.firstChild;for(i in e)"function"==typeof e[i]&&(e[i]=k);for(i in s)"function"==typeof s[i]&&(s[i]=k);e.detachEvent(V,R),e.detachEvent(I,G),s.detachEvent(J,H),s.detachEvent(W,S)}j[X]=k,j[Y]=k,j[Z]=k,j[K]=k,j[$]=k}function ga(){var t=m.getElementsByTagName("script");return t=t[t.length-1],m.documentMode>=8?t.src:t.getAttribute("src",4)}function ha(t){return t.toLowerCase()}function g(t){throw new O(t)}function aa(t){var i=parseInt(t.width,10),s=parseInt(t.height,10);(isNaN(i)||0>i)&&(i=300),(isNaN(s)||0>s)&&(s=150),t.width=i,t.height=s}var k=null,u="canvas",X="CanvasRenderingContext2D",Y="CanvasGradient",Z="CanvasPattern",K="FlashCanvas",$="G_vmlCanvasManager",V="onfocus",I="onmousedown",J="onmouseup",W="onpropertychange",Q="onreadystatechange",U="onunload",q;try{q=new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").match(/[\d,]+/)[0].replace(/,/g,".")}catch(ia){q=0}var r=j[K+"Options"]||{},ba=r.swfPath||ga().replace(/[^\/]+$/,""),x;x=parseInt(q)>9?ba+"flash10canvas.swf":ba+"flash9canvas.swf";var A={},B={},ca={},L={},v={},da={},n={},C={},l={C:"turbo"in r?r.turbo:1,B:r.delay||0,M:r.disableContextMenu||0,N:r.imageCacheSize||100,D:r.usePolicyFile||0};"10.1.53.64"===q&&(l.C=0,l.B=30),D.prototype={save:function(){this.e(15),this.L.push([this.l,this.m,this.v,this.k,this.p,this.n,this.o,this.q,this.t,this.u,this.r,this.s,this.j,this.z,this.A]),this.a.push("B")},restore:function(){var t=this.L;t.length&&(t=t.pop(),this.globalAlpha=t[0],this.globalCompositeOperation=t[1],this.strokeStyle=t[2],this.fillStyle=t[3],this.lineWidth=t[4],this.lineCap=t[5],this.lineJoin=t[6],this.miterLimit=t[7],this.shadowOffsetX=t[8],this.shadowOffsetY=t[9],this.shadowBlur=t[10],this.shadowColor=t[11],this.font=t[12],this.textAlign=t[13],this.textBaseline=t[14]),this.a.push("C")},scale:function(t,i){this.a.push("D",t,i)},rotate:function(t){this.a.push("E",t)},translate:function(t,i){this.a.push("F",t,i)},transform:function(t,i,s,e,h,n){this.a.push("G",t,i,s,e,h,n)},setTransform:function(t,i,s,e,h,n){this.a.push("H",t,i,s,e,h,n)},createLinearGradient:function(t,i,s,e){return isFinite(t)&&isFinite(i)&&isFinite(s)&&isFinite(e)||g(9),this.a.push("M",t,i,s,e),new z(this)},createRadialGradient:function(t,i,s,e,h,n){return isFinite(t)&&isFinite(i)&&isFinite(s)&&isFinite(e)&&isFinite(h)&&isFinite(n)||g(9),(0>s||0>n)&&g(1),this.a.push("N",t,i,s,e,h,n),new z(this)},createPattern:function(t,i){t||g(17);var s,e,h,n=t.tagName,a=this.f;if(n)if(n=n.toLowerCase(),"img"===n)s=t.getAttribute("src",2);else if(n===u)e=this.G(t),h=t!==this.canvas;else{if("video"===n)return;g(17)}else t.src?s=t.src:g(17);return"repeat"===i||"no-repeat"===i||"repeat-x"===i||"repeat-y"===i||""===i||i===k||g(12),e||(e=B[a][s],(h=void 0===e)&&(e=this.F(s))),this.a.push("O",e,i),h&&A[a]&&(this.g(),++v[a]),new P(this)},clearRect:function(t,i,s,e){this.a.push("X",t,i,s,e),this.b||this.d(),this.c=0},fillRect:function(t,i,s,e){this.e(1),this.a.push("Y",t,i,s,e),this.b||this.d(),this.c=0},strokeRect:function(t,i,s,e){this.e(6),this.a.push("Z",t,i,s,e),this.b||this.d(),this.c=0},beginPath:function(){this.a.push("a")},closePath:function(){this.a.push("b")},moveTo:function(t,i){this.a.push("c",t,i)},lineTo:function(t,i){this.a.push("d",t,i)},quadraticCurveTo:function(t,i,s,e){this.a.push("e",t,i,s,e)},bezierCurveTo:function(t,i,s,e,h,n){this.a.push("f",t,i,s,e,h,n)},arcTo:function(t,i,s,e,h){0>h&&isFinite(h)&&g(1),this.a.push("g",t,i,s,e,h)},rect:function(t,i,s,e){this.a.push("h",t,i,s,e)},arc:function(t,i,s,e,h,n){0>s&&isFinite(s)&&g(1),this.a.push("i",t,i,s,e,h,n?1:0)},fill:function(){this.e(1),this.a.push("j"),this.b||this.d(),this.c=0},stroke:function(){this.e(6),this.a.push("k"),this.b||this.d(),this.c=0},clip:function(){this.a.push("l")},isPointInPath:function(t,i){return this.a.push("m",t,i),"true"===this.g()},fillText:function(t,i,s,e){this.e(9),this.h.push(this.a.length+1),this.a.push("r",t,i,s,void 0===e?1/0:e),this.b||this.d(),this.c=0},strokeText:function(t,i,s,e){this.e(10),this.h.push(this.a.length+1),this.a.push("s",t,i,s,void 0===e?1/0:e),this.b||this.d(),this.c=0},measureText:function(t){var i=C[this.f];try{i.style.font=this.font}catch(s){}return i.innerText=t.replace(/[ \n\f\r]/g,"	"),new fa(i.offsetWidth)},drawImage:function(t,i,s,e,h,n,a,o,r){t||g(17);var c,l,f,p=t.tagName,d=arguments.length,m=this.f;if(p)if(p=p.toLowerCase(),"img"===p)c=t.getAttribute("src",2);else if(p===u)l=this.G(t),f=t!==this.canvas;else{if("video"===p)return;g(17)}else t.src?c=t.src:g(17);if(l||(l=B[m][c],(f=void 0===l)&&(l=this.F(c))),this.e(0),3===d)this.a.push("u",d,l,i,s);else if(5===d)this.a.push("u",d,l,i,s,e,h);else{if(9!==d)return;(0===e||0===h)&&g(1),this.a.push("u",d,l,i,s,e,h,n,a,o,r)}f&&A[m]?(this.g(),++v[m]):this.b||this.d(),this.c=0},createImageData:function(t,i){var s=Math.ceil;return 2===arguments.length?(isFinite(t)&&isFinite(i)||g(9),(0===t||0===i)&&g(1)):(t instanceof y||g(9),i=t.height,t=t.width),t=s(0>t?-t:t),i=s(0>i?-i:i),new y(t,i)},getImageData:function(a,b,c,d){return isFinite(a)&&isFinite(b)&&isFinite(c)&&isFinite(d)||g(9),(0===c||0===d)&&g(1),this.a.push("w",a,b,c,d),a=this.g(),c="object"==typeof JSON?JSON.parse(a):m.documentMode?eval(a):a.slice(1,-1).split(","),a=c.shift(),b=c.shift(),new y(a,b,c)},putImageData:function(t,i,s,e,h,n,a){t instanceof y||g(17),isFinite(i)&&isFinite(s)||g(9);var o=arguments.length,r=t.width,c=t.height,u=t.data;3===o?this.a.push("x",o,r,c,""+u,i,s):7===o&&(isFinite(e)&&isFinite(h)&&isFinite(n)&&isFinite(a)||g(9),this.a.push("x",o,r,c,""+u,i,s,e,h,n,a)),this.b||this.d(),this.c=0},J:function(){this.globalAlpha=this.l=1,this.globalCompositeOperation=this.m="source-over",this.fillStyle=this.k=this.strokeStyle=this.v="#000000",this.lineWidth=this.p=1,this.lineCap=this.n="butt",this.lineJoin=this.o="miter",this.miterLimit=this.q=10,this.shadowBlur=this.r=this.shadowOffsetY=this.u=this.shadowOffsetX=this.t=0,this.shadowColor=this.s="rgba(0, 0, 0, 0.0)",this.font=this.j="10px sans-serif",this.textAlign=this.z="start",this.textBaseline=this.A="alphabetic",this.a=[],this.L=[],this.i=[],this.h=[],this.b=k,this.K=1},e:function(t){var i,s=this.a;this.l!==this.globalAlpha&&s.push("I",this.l=this.globalAlpha),this.m!==this.globalCompositeOperation&&s.push("J",this.m=this.globalCompositeOperation),this.t!==this.shadowOffsetX&&s.push("T",this.t=this.shadowOffsetX),this.u!==this.shadowOffsetY&&s.push("U",this.u=this.shadowOffsetY),this.r!==this.shadowBlur&&s.push("V",this.r=this.shadowBlur),this.s!==this.shadowColor&&(i=this.s=this.shadowColor,(""+i).indexOf("%")>0&&this.i.push(s.length+1),s.push("W",i)),1&t&&this.k!==this.fillStyle&&(i=this.k=this.fillStyle,"object"==typeof i?i=i.id:(""+i).indexOf("%")>0&&this.i.push(s.length+1),s.push("L",i)),2&t&&this.v!==this.strokeStyle&&(i=this.v=this.strokeStyle,"object"==typeof i?i=i.id:(""+i).indexOf("%")>0&&this.i.push(s.length+1),s.push("K",i)),4&t&&(this.p!==this.lineWidth&&s.push("P",this.p=this.lineWidth),this.n!==this.lineCap&&s.push("Q",this.n=this.lineCap),this.o!==this.lineJoin&&s.push("R",this.o=this.lineJoin),this.q!==this.miterLimit&&s.push("S",this.q=this.miterLimit)),8&t&&(this.j!==this.font&&(t=C[this.f].offsetHeight,this.h.push(s.length+2),s.push("o",t,this.j=this.font)),this.z!==this.textAlign&&s.push("p",this.z=this.textAlign),this.A!==this.textBaseline&&s.push("q",this.A=this.textBaseline),this.H!==this.canvas.currentStyle.direction&&s.push("1",this.H=this.canvas.currentStyle.direction))},d:function(){var t=this;t.b=setTimeout(function(){v[t.f]?t.d():(t.b=k,t.g(l.C))},l.B)},Q:function(){clearTimeout(this.b),this.b=k},g:function(t){var i,s,e,h=this.i,n=this.h,a=this.a,o=this.w;if(a.length){if(this.b&&this.Q(),t){for(i=0,s=h.length;s>i;++i)e=h[i],a[e]=encodeURI(a[e]);for(i=0,s=n.length;s>i;++i)e=n[i],a[e]=encodeURIComponent(a[e])}else for(i=0,s=n.length;s>i;++i)e=n[i],a[e]=(""+a[e]).replace(/&/g,"&amp;").replace(/</g,"&lt;");if(i=a.join(""),this.a=[],this.i=[],this.h=[],!t)return o.CallFunction('<invoke name="executeCommand" returntype="javascript"><arguments><string>'+i+"</string></arguments></invoke>");o.flashvars="c="+i,o.width=o.clientWidth+this.K,this.K^=-2}},P:function(t,i){this.g(),this.J(),t>0&&(this.w.width=t),i>0&&(this.w.height=i),this.a.push("2",t,i),this.b||this.d(),this.c=0},G:function(t){var i=t.uniqueID,s=u+":"+i;return(0===t.width||0===t.height)&&g(11),i!==this.f&&(t=n[i].getContext("2d"),t.c||(i=++da[i],s+=":"+i,t.a.push("3",i),t.b||t.d(),t.c=1)),s},F:function(t){var i=this.f,s=B[i],e=ca[i],h=s[t]=L[i]++;return h>=l.N-1&&(L[i]=0),h in e&&delete s[e[h]],this.h.push(this.a.length+2),this.a.push("5",h,t),e[h]=t,h}},z.prototype={addColorStop:function(t,i){(isNaN(t)||0>t||t>1)&&g(1);var s=this.O,e=this.id;(""+i).indexOf("%")>0&&s.i.push(s.a.length+3),s.a.push("y",e,t,i)}},O.prototype=Error();var ea={1:"INDEX_SIZE_ERR",9:"NOT_SUPPORTED_ERR",11:"INVALID_STATE_ERR",12:"SYNTAX_ERR",17:"TYPE_MISMATCH_ERR",18:"SECURITY_ERR"},F={initElement:function(t){if(t.getContext)return t;var i=t.uniqueID,s="external"+i;A[i]=0,B[i]={},ca[i]=[],L[i]=0,v[i]=1,da[i]=0,aa(t),t.innerHTML='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+location.protocol+'//fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="'+s+'"><param name="allowScriptAccess" value="always"><param name="flashvars" value="id='+s+'"><param name="wmode" value="transparent"></object><span style="margin:0;padding:0;border:0;display:inline-block;position:static;height:1em;overflow:visible;white-space:nowrap"></span>',n[i]=t;var e=t.firstChild;C[i]=t.lastChild;var h=m.body.contains;if(h(t))e.movie=x;else var a=setInterval(function(){h(t)&&(clearInterval(a),e.movie=x)},0);"BackCompat"!==m.compatMode&&j.XMLHttpRequest||(C[i].style.overflow="hidden");var o=new D(t,e);return t.getContext=function(t){return"2d"===t?o:k},t.toDataURL=function(i,s){return 0===t.width||0===t.height?"data:,":("image/jpeg"===(""+i).replace(/[A-Z]+/g,ha)?o.a.push("A",i,"number"==typeof s?s:""):o.a.push("A",i),o.g().slice(1,-1))},e.attachEvent(V,R),l.M&&(e.attachEvent(I,G),t.attachEvent(J,H)),l.D&&o.a.push("4","usePolicyFile",l.D),t},saveImage:function(t){t.firstChild.saveImage()},setOptions:function(t){for(var i in t){var s=t[i];switch(i){case"turbo":l.C=s;break;case"delay":l.B=s;break;case"disableContextMenu":var e=l.M=s;s=void 0;for(s in n){var h=n[s],a=e?"attachEvent":"detachEvent";h.firstChild[a](I,G),h[a](J,H)}break;case"imageCacheSize":l.N=s;break;case"usePolicyFile":e=i,s=l.D=s?1:0,h=void 0;for(h in n)a=n[h].getContext("2d"),a.h.push(a.a.length+2),a.a.push("4",e,s)}}},trigger:function(t,i){n[t].fireEvent("on"+i)},unlock:function(t,i){if(v[t]&&--v[t],i){var s,e,h=n[t],a=h.firstChild;aa(h),s=h.width,e=h.height,h.style.width=s+"px",h.style.height=e+"px",s>0&&(a.width=s),e>0&&(a.height=e),a.resize(s,e),h.attachEvent(W,S),A[t]=1}}};m.createElement(u),m.createStyleSheet().cssText=u+"{display:inline-block;overflow:hidden;width:300px;height:150px}","complete"===m.readyState?E():m.attachEvent(Q,E),j.attachEvent(U,T),0===x.indexOf(location.protocol+"//"+location.host+"/")&&(q=new ActiveXObject("Microsoft.XMLHTTP"),q.open("GET",x,!1),q.send(k)),j[X]=D,j[Y]=z,j[Z]=P,j[K]=F,j[$]={init:function(){},init_:function(){},initElement:F.initElement}}(window,document);