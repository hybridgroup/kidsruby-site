var swfmini=function(){function e(){if(!k){try{var e=C.getElementsByTagName("body")[0].appendChild(p("span"));e.parentNode.removeChild(e)}catch(t){return}k=!0;for(var n=A.length,a=0;n>a;a++)A[a]()}}function t(e){k?e():A[A.length]=e}function n(){}function a(){I&&r()}function r(){var e=C.getElementsByTagName("body")[0],t=p(m);t.setAttribute("type",b);var n=e.appendChild(t);if(n){var a=0;!function(){if(typeof n.GetVariable!=d){var r=n.GetVariable("$version");r&&(r=r.split(" ")[1].split(","),T.pv=[parseInt(r[0],10),parseInt(r[1],10),parseInt(r[2],10)])}else if(10>a)return a++,setTimeout(arguments.callee,10),void 0;e.removeChild(t),n=null}()}}function i(e){var t=null,n=f(e);if(n&&"OBJECT"==n.nodeName)if(typeof n.SetVariable!=d)t=n;else{var a=n.getElementsByTagName(m)[0];a&&(t=a)}return t}function o(e,t,n){var a,r=f(n);if(T.wk&&312>T.wk)return a;if(r)if(typeof e.id==d&&(e.id=n),T.ie&&T.win){var i="";for(var o in e)e[o]!=Object.prototype[o]&&("data"==o.toLowerCase()?t.movie=e[o]:"styleclass"==o.toLowerCase()?i+=' class="'+e[o]+'"':"classid"!=o.toLowerCase()&&(i+=" "+o+'="'+e[o]+'"'));var l="";for(var c in t)t[c]!=Object.prototype[c]&&(l+='<param name="'+c+'" value="'+t[c]+'" />');r.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+i+">"+l+"</object>",S[S.length]=e.id,a=f(e.id)}else{var u=p(m);u.setAttribute("type",b);for(var v in e)e[v]!=Object.prototype[v]&&("styleclass"==v.toLowerCase()?u.setAttribute("class",e[v]):"classid"!=v.toLowerCase()&&u.setAttribute(v,e[v]));for(var w in t)t[w]!=Object.prototype[w]&&"movie"!=w.toLowerCase()&&s(u,w,t[w]);r.parentNode.replaceChild(u,r),a=u}return a}function s(e,t,n){var a=p("param");a.setAttribute("name",t),a.setAttribute("value",n),e.appendChild(a)}function l(e){var t=f(e);t&&"OBJECT"==t.nodeName&&(T.ie&&T.win?(t.style.display="none",function(){4==t.readyState?c(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function c(e){var t=f(e);if(t){for(var n in t)"function"==typeof t[n]&&(t[n]=null);t.parentNode.removeChild(t)}}function f(e){var t=null;try{t=C.getElementById(e)}catch(n){}return t}function p(e){return C.createElement(e)}function u(e){var t=T.pv,n=e.split(".");return n[0]=parseInt(n[0],10),n[1]=parseInt(n[1],10)||0,n[2]=parseInt(n[2],10)||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]?!0:!1}function v(e,t){if(O){var n,a=t?"visible":"hidden";k&&n&&f(e)&&(f(e).style.visibility=a)}}var d="undefined",m="object",w=window.webshims,y="Shockwave Flash",h="ShockwaveFlash.ShockwaveFlash",b="application/x-shockwave-flash",g=window,C=document,E=navigator,I=!1,A=[a],S=[],j=[],k=!1,O=!0,T=function(){var e=typeof C.getElementById!=d&&typeof C.getElementsByTagName!=d&&typeof C.createElement!=d,t=E.userAgent.toLowerCase(),n=E.platform.toLowerCase(),a=n?/win/.test(n):/win/.test(t),r=n?/mac/.test(n):/mac/.test(t),i=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=!1,s=[0,0,0],l=null;if(typeof E.plugins!=d&&typeof E.plugins[y]==m)l=E.plugins[y].description,!l||typeof E.mimeTypes!=d&&E.mimeTypes[b]&&!E.mimeTypes[b].enabledPlugin||(I=!0,o=!1,l=l.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),s[0]=parseInt(l.replace(/^(.*)\..*$/,"$1"),10),s[1]=parseInt(l.replace(/^.*\.(.*)\s.*$/,"$1"),10),s[2]=/[a-zA-Z]/.test(l)?parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof g.ActiveXObject!=d)try{var c=new ActiveXObject(h);c&&(l=c.GetVariable("$version"),l&&(o=!0,l=l.split(" ")[1].split(","),s=[parseInt(l[0],10),parseInt(l[1],10),parseInt(l[2],10)]))}catch(f){}return{w3:e,pv:s,wk:i,ie:o,win:a,mac:r}}();return function(){T.ie&&T.win&&window.attachEvent&&window.attachEvent("onunload",function(){for(var e=j.length,t=0;e>t;t++)j[t][0].detachEvent(j[t][1],j[t][2]);for(var n=S.length,a=0;n>a;a++)l(S[a]);for(var r in T)T[r]=null;T=null;for(var i in swfmini)swfmini[i]=null;swfmini=null})}(),w.ready("DOM",e),{registerObject:function(){},getObjectById:function(e){return T.w3?i(e):void 0},embedSWF:function(e,n,a,r,i,s,l,c,f,p){var w={success:!1,id:n};T.w3&&!(T.wk&&312>T.wk)&&e&&n&&a&&r&&i?(v(n,!1),t(function(){a+="",r+="";var t={};if(f&&typeof f===m)for(var s in f)t[s]=f[s];t.data=e,t.width=a,t.height=r;var y={};if(c&&typeof c===m)for(var h in c)y[h]=c[h];if(l&&typeof l===m)for(var b in l)typeof y.flashvars!=d?y.flashvars+="&"+b+"="+l[b]:y.flashvars=b+"="+l[b];if(u(i)){var g=o(t,y,n);t.id==n&&v(n,!0),w.success=!0,w.ref=g}else v(n,!0);p&&p(w)})):p&&p(w)},switchOffAutoHideShow:function(){O=!1},ua:T,getFlashPlayerVersion:function(){return{major:T.pv[0],minor:T.pv[1],release:T.pv[2]}},hasFlashPlayerVersion:u,createSWF:function(e,t,n){return T.w3?o(e,t,n):void 0},showExpressInstall:function(){},removeSWF:function(e){T.w3&&l(e)},createCSS:function(){},addDomLoadEvent:t,addLoadEvent:n,expressInstallCallback:function(){}}}();