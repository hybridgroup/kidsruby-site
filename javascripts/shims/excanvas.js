document.createElement("canvas").getContext||function(){function t(){return this.context_||(this.context_=new l(this))}function e(t,e){var i=C.call(arguments,2);return function(){return t.apply(e,i.concat(C.call(arguments)))}}function i(t){var e=t.srcElement;switch(t.propertyName){case"width":e.style.width=e.attributes.width.nodeValue+"px",e.getContext().clearRect();break;case"height":e.style.height=e.attributes.height.nodeValue+"px",e.getContext().clearRect()}}function r(t){var e=t.srcElement;e.firstChild&&(e.firstChild.style.width=e.clientWidth+"px",e.firstChild.style.height=e.clientHeight+"px")}function s(){return[[1,0,0],[0,1,0],[0,0,1]]}function n(t,e){for(var i=s(),r=0;3>r;r++)for(var n=0;3>n;n++){for(var a=0,o=0;3>o;o++)a+=t[r][o]*e[o][n];i[r][n]=a}return i}function a(t,e){e.fillStyle=t.fillStyle,e.lineCap=t.lineCap,e.lineJoin=t.lineJoin,e.lineWidth=t.lineWidth,e.miterLimit=t.miterLimit,e.shadowBlur=t.shadowBlur,e.shadowColor=t.shadowColor,e.shadowOffsetX=t.shadowOffsetX,e.shadowOffsetY=t.shadowOffsetY,e.strokeStyle=t.strokeStyle,e.globalAlpha=t.globalAlpha,e.arcScaleX_=t.arcScaleX_,e.arcScaleY_=t.arcScaleY_,e.lineScale_=t.lineScale_}function o(t){var e,i=1;if(t+="","rgb"==t.substring(0,3)){var r=t.indexOf("(",3),s=t.indexOf(")",r+1),n=t.substring(r+1,s).split(",");e="#";for(var a=0;3>a;a++)e+=T[Number(n[a])];4==n.length&&"a"==t.substr(3,1)&&(i=n[3])}else e=t;return{color:e,alpha:i}}function h(t){switch(t){case"butt":return"flat";case"round":return"round";case"square":default:return"square"}}function l(t){this.m_=s(),this.mStack_=[],this.aStack_=[],this.currentPath_=[],this.strokeStyle="#000",this.fillStyle="#000",this.lineWidth=1,this.lineJoin="miter",this.lineCap="butt",this.miterLimit=1*S,this.globalAlpha=1,this.canvas=t;var e=t.ownerDocument.createElement("div");e.style.width=t.clientWidth+"px",e.style.height=t.clientHeight+"px",e.style.overflow="hidden",e.style.position="absolute",t.appendChild(e),this.element_=e,this.arcScaleX_=1,this.arcScaleY_=1,this.lineScale_=1}function c(t,e,i,r){t.currentPath_.push({type:"bezierCurveTo",cp1x:e.x,cp1y:e.y,cp2x:i.x,cp2y:i.y,x:r.x,y:r.y}),t.currentX_=r.x,t.currentY_=r.y}function u(t){for(var e=0;3>e;e++)for(var i=0;2>i;i++)if(!isFinite(t[e][i])||isNaN(t[e][i]))return!1;return!0}function _(t,e,i){if(u(e)&&(t.m_=e,i)){var r=e[0][0]*e[1][1]-e[0][1]*e[1][0];t.lineScale_=v(x(r))}}function f(t){this.type_=t,this.x0_=0,this.y0_=0,this.r0_=0,this.x1_=0,this.y1_=0,this.r1_=0,this.colors_=[]}function p(){}var y=Math,d=y.round,g=y.sin,m=y.cos,x=y.abs,v=y.sqrt,S=10,w=S/2,C=Array.prototype.slice,b={init:function(t){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var i=t||document;i.createElement("canvas"),i.attachEvent("onreadystatechange",e(this.init_,this,i))}},init_:function(t){if(t.namespaces.g_vml_||t.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML"),t.namespaces.g_o_||t.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML"),!t.styleSheets.ex_canvas_){var e=t.createStyleSheet();e.owningElement.id="ex_canvas_",e.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"}for(var i=t.getElementsByTagName("canvas"),r=0;i.length>r;r++)this.initElement(i[r])},initElement:function(e){if(!e.getContext){e.getContext=t,e.innerHTML="",e.attachEvent("onpropertychange",i),e.attachEvent("onresize",r);var s=e.attributes;s.width&&s.width.specified?e.style.width=s.width.nodeValue+"px":e.width=e.clientWidth,s.height&&s.height.specified?e.style.height=s.height.nodeValue+"px":e.height=e.clientHeight}return e}};b.init();for(var T=[],P=0;16>P;P++)for(var k=0;16>k;k++)T[16*P+k]=P.toString(16)+k.toString(16);var E=l.prototype;E.clearRect=function(){this.element_.innerHTML=""},E.beginPath=function(){this.currentPath_=[]},E.moveTo=function(t,e){var i=this.getCoords_(t,e);this.currentPath_.push({type:"moveTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y},E.lineTo=function(t,e){var i=this.getCoords_(t,e);this.currentPath_.push({type:"lineTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y},E.bezierCurveTo=function(t,e,i,r,s,n){var a=this.getCoords_(s,n),o=this.getCoords_(t,e),h=this.getCoords_(i,r);c(this,o,h,a)},E.quadraticCurveTo=function(t,e,i,r){var s=this.getCoords_(t,e),n=this.getCoords_(i,r),a={x:this.currentX_+2/3*(s.x-this.currentX_),y:this.currentY_+2/3*(s.y-this.currentY_)},o={x:a.x+(n.x-this.currentX_)/3,y:a.y+(n.y-this.currentY_)/3};c(this,a,o,n)},E.arc=function(t,e,i,r,s,n){i*=S;var a=n?"at":"wa",o=t+m(r)*i-w,h=e+g(r)*i-w,l=t+m(s)*i-w,c=e+g(s)*i-w;o!=l||n||(o+=.125);var u=this.getCoords_(t,e),_=this.getCoords_(o,h),f=this.getCoords_(l,c);this.currentPath_.push({type:a,x:u.x,y:u.y,radius:i,xStart:_.x,yStart:_.y,xEnd:f.x,yEnd:f.y})},E.rect=function(t,e,i,r){this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+r),this.lineTo(t,e+r),this.closePath()},E.strokeRect=function(t,e,i,r){var s=this.currentPath_;this.beginPath(),this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+r),this.lineTo(t,e+r),this.closePath(),this.stroke(),this.currentPath_=s},E.fillRect=function(t,e,i,r){var s=this.currentPath_;this.beginPath(),this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+r),this.lineTo(t,e+r),this.closePath(),this.fill(),this.currentPath_=s},E.createLinearGradient=function(t,e,i,r){var s=new f("gradient");return s.x0_=t,s.y0_=e,s.x1_=i,s.y1_=r,s},E.createRadialGradient=function(t,e,i,r,s,n){var a=new f("gradientradial");return a.x0_=t,a.y0_=e,a.r0_=i,a.x1_=r,a.y1_=s,a.r1_=n,a},E.drawImage=function(t){var e,i,r,s,n,a,o,h,l=t.runtimeStyle.width,c=t.runtimeStyle.height;t.runtimeStyle.width="auto",t.runtimeStyle.height="auto";var u=t.width,_=t.height;if(t.runtimeStyle.width=l,t.runtimeStyle.height=c,3==arguments.length)e=arguments[1],i=arguments[2],n=a=0,o=r=u,h=s=_;else if(5==arguments.length)e=arguments[1],i=arguments[2],r=arguments[3],s=arguments[4],n=a=0,o=u,h=_;else{if(9!=arguments.length)throw Error("Invalid number of arguments");n=arguments[1],a=arguments[2],o=arguments[3],h=arguments[4],e=arguments[5],i=arguments[6],r=arguments[7],s=arguments[8]}var f=this.getCoords_(e,i),p=[],g=10,m=10;if(p.push(" <g_vml_:group",' coordsize="',S*g,",",S*m,'"',' coordorigin="0,0"',' style="width:',g,"px;height:",m,"px;position:absolute;"),1!=this.m_[0][0]||this.m_[0][1]){var x=[];x.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",d(f.x/S),",","Dy=",d(f.y/S),"");var v=f,w=this.getCoords_(e+r,i),C=this.getCoords_(e,i+s),b=this.getCoords_(e+r,i+s);v.x=y.max(v.x,w.x,C.x,b.x),v.y=y.max(v.y,w.y,C.y,b.y),p.push("padding:0 ",d(v.x/S),"px ",d(v.y/S),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",x.join(""),", sizingmethod='clip');")}else p.push("top:",d(f.y/S),"px;left:",d(f.x/S),"px;");p.push(' ">','<g_vml_:image src="',t.src,'"',' style="width:',S*r,"px;"," height:",S*s,'px;"',' cropleft="',n/u,'"',' croptop="',a/_,'"',' cropright="',(u-n-o)/u,'"',' cropbottom="',(_-a-h)/_,'"'," />","</g_vml_:group>"),this.element_.insertAdjacentHTML("BeforeEnd",p.join(""))},E.stroke=function(t){var e=[],i=o(t?this.fillStyle:this.strokeStyle),r=i.color,s=i.alpha*this.globalAlpha,n=10,a=10;e.push("<g_vml_:shape",' filled="',!!t,'"',' style="position:absolute;width:',n,"px;height:",a,'px;"',' coordorigin="0 0" coordsize="',S*n," ",S*a,'"',' stroked="',!t,'"',' path="');for(var l={x:null,y:null},c={x:null,y:null},u=0;this.currentPath_.length>u;u++){var _,f=this.currentPath_[u];switch(f.type){case"moveTo":_=f,e.push(" m ",d(f.x),",",d(f.y));break;case"lineTo":e.push(" l ",d(f.x),",",d(f.y));break;case"close":e.push(" x "),f=null;break;case"bezierCurveTo":e.push(" c ",d(f.cp1x),",",d(f.cp1y),",",d(f.cp2x),",",d(f.cp2y),",",d(f.x),",",d(f.y));break;case"at":case"wa":e.push(" ",f.type," ",d(f.x-this.arcScaleX_*f.radius),",",d(f.y-this.arcScaleY_*f.radius)," ",d(f.x+this.arcScaleX_*f.radius),",",d(f.y+this.arcScaleY_*f.radius)," ",d(f.xStart),",",d(f.yStart)," ",d(f.xEnd),",",d(f.yEnd))}f&&((null==l.x||f.x<l.x)&&(l.x=f.x),(null==c.x||f.x>c.x)&&(c.x=f.x),(null==l.y||f.y<l.y)&&(l.y=f.y),(null==c.y||f.y>c.y)&&(c.y=f.y))}if(e.push(' ">'),t)if("object"==typeof this.fillStyle){var p=this.fillStyle,g=0,m={x:0,y:0},x=0,v=1;if("gradient"==p.type_){var w=p.x0_/this.arcScaleX_,C=p.y0_/this.arcScaleY_,b=p.x1_/this.arcScaleX_,T=p.y1_/this.arcScaleY_,P=this.getCoords_(w,C),k=this.getCoords_(b,T),E=k.x-P.x,M=k.y-P.y;g=180*Math.atan2(E,M)/Math.PI,0>g&&(g+=360),1e-6>g&&(g=0)}else{var P=this.getCoords_(p.x0_,p.y0_),X=c.x-l.x,Y=c.y-l.y;m={x:(P.x-l.x)/X,y:(P.y-l.y)/Y},X/=this.arcScaleX_*S,Y/=this.arcScaleY_*S;var L=y.max(X,Y);x=2*p.r0_/L,v=2*p.r1_/L-x}var A=p.colors_;A.sort(function(t,e){return t.offset-e.offset});for(var j=A.length,V=A[0].color,z=A[j-1].color,H=A[0].alpha*this.globalAlpha,R=A[j-1].alpha*this.globalAlpha,W=[],u=0;j>u;u++){var O=A[u];W.push(O.offset*v+x+" "+O.color)}e.push('<g_vml_:fill type="',p.type_,'"',' method="none" focus="100%"',' color="',V,'"',' color2="',z,'"',' colors="',W.join(","),'"',' opacity="',R,'"',' g_o_:opacity2="',H,'"',' angle="',g,'"',' focusposition="',m.x,",",m.y,'" />')}else e.push('<g_vml_:fill color="',r,'" opacity="',s,'" />');else{var D=this.lineScale_*this.lineWidth;1>D&&(s*=D),e.push("<g_vml_:stroke",' opacity="',s,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',h(this.lineCap),'"',' weight="',D,'px"',' color="',r,'" />')}e.push("</g_vml_:shape>"),this.element_.insertAdjacentHTML("beforeEnd",e.join(""))},E.fill=function(){this.stroke(!0)},E.closePath=function(){this.currentPath_.push({type:"close"})},E.getCoords_=function(t,e){var i=this.m_;return{x:S*(t*i[0][0]+e*i[1][0]+i[2][0])-w,y:S*(t*i[0][1]+e*i[1][1]+i[2][1])-w}},E.save=function(){var t={};a(this,t),this.aStack_.push(t),this.mStack_.push(this.m_),this.m_=n(s(),this.m_)},E.restore=function(){a(this.aStack_.pop(),this),this.m_=this.mStack_.pop()},E.translate=function(t,e){var i=[[1,0,0],[0,1,0],[t,e,1]];_(this,n(i,this.m_),!1)},E.rotate=function(t){var e=m(t),i=g(t),r=[[e,i,0],[-i,e,0],[0,0,1]];_(this,n(r,this.m_),!1)},E.scale=function(t,e){this.arcScaleX_*=t,this.arcScaleY_*=e;var i=[[t,0,0],[0,e,0],[0,0,1]];_(this,n(i,this.m_),!0)},E.transform=function(t,e,i,r,s,a){var o=[[t,e,0],[i,r,0],[s,a,1]];_(this,n(o,this.m_),!0)},E.setTransform=function(t,e,i,r,s,n){var a=[[t,e,0],[i,r,0],[s,n,1]];_(this,a,!0)},E.clip=function(){},E.arcTo=function(){},E.createPattern=function(){return new p},f.prototype.addColorStop=function(t,e){e=o(e),this.colors_.push({offset:t,color:e.color,alpha:e.alpha})},G_vmlCanvasManager=b,CanvasRenderingContext2D=l,CanvasGradient=f,CanvasPattern=p}();