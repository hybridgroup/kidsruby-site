!function(e,t){"use strict";var r,a,i=t.$,o=e.audio&&e.video,n=!1,d=t.bugs,s="mediaelement-jaris",p=function(){t.ready(s,function(){t.mediaelement.createSWF||(t.mediaelement.loadSwf=!0,t.reTest([s],o))})},u=t.cfg,m=u.mediaelement;if(!m)return t.error("mediaelement wasn't implemented but loaded"),void 0;if(o){var c=document.createElement("video");if(e.videoBuffered="buffered"in c,e.mediaDefaultMuted="defaultMuted"in c,n="loop"in c,t.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),e.videoBuffered||(t.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),t.loader.loadList(["mediaelement-native-fix"])),!m.preferFlash){var l={1:1},v=function(e){var r,o,n;!m.preferFlash&&(i(e.target).is("audio, video")||(n=e.target.parentNode)&&i("source:last",n)[0]==e.target)&&(r=i(e.target).closest("audio, video"))&&(o=r.prop("error"))&&!l[o.code]&&i(function(){a&&!m.preferFlash?(p(),t.ready("WINDOWLOAD "+s,function(){setTimeout(function(){m.preferFlash||!t.mediaelement.createSWF||r.is(".nonnative-api-active")||(m.preferFlash=!0,document.removeEventListener("error",v,!0),i("audio, video").each(function(){t.mediaelement.selectSource(this)}),t.error("switching mediaelements option to 'preferFlash', due to an error with native player: "+e.target.src+" Mediaerror: "+r.prop("error")+"first error: "+o))},9)})):document.removeEventListener("error",v,!0)})};document.addEventListener("error",v,!0),i("audio, video").each(function(){var e=i.prop(this,"error");return e&&!l[e]?(v({target:this}),!1):void 0})}}e.track&&!d.track&&function(){if(d.track||(d.track="number"!=typeof i("<track />")[0].readyState),!d.track)try{new TextTrackCue(2,3,"")}catch(e){d.track=!0}}(),r=e.track&&!d.track,t.register("mediaelement-core",function(t,i,d,u,m,c){a=swfmini.hasFlashPlayerVersion("9.0.115"),t("html").addClass(a?"swf":"no-swf");var l=i.mediaelement;l.parseRtmp=function(e){var t,r,a,o=e.src.split("://"),n=o[1].split("/");for(e.server=o[0]+"://"+n[0]+"/",e.streamId=[],t=1,r=n.length;r>t;t++)a||-1===n[t].indexOf(":")||(n[t]=n[t].split(":")[1],a=!0),a?e.streamId.push(n[t]):e.server+=n[t]+"/";e.streamId.length||i.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var v=function(e,r){e=t(e);var a,i={src:e.attr("src")||"",elem:e,srcProp:e.prop("src")};return i.src?(a=e.attr("data-server"),null!=a&&(i.server=a),a=e.attr("type")||e.attr("data-type"),a?(i.type=a,i.container=t.trim(a.split(";")[0])):(r||(r=e[0].nodeName.toLowerCase(),"source"==r&&(r=(e.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),i.server?(i.type=r+"/rtmp",i.container=r+"/rtmp"):(a=l.getTypeForSrc(i.src,r,i),a&&(i.type=a,i.container=a))),i.container||t(e).attr("data-wsrecheckmimetype",""),a=e.attr("media"),a&&(i.media=a),("audio/rtmp"==i.type||"video/rtmp"==i.type)&&(i.server?i.streamId=i.src:l.parseRtmp(i)),i):i},f=!a&&"postMessage"in d&&o,y=function(){y.loaded||(y.loaded=!0,c.noAutoTrack||i.ready("WINDOWLOAD",function(){g(),i.loader.loadList(["track-ui"])}))},h=function(){var e;return function(){!e&&f&&(e=!0,i.loader.loadScript("https://www.youtube.com/player_api"),t(function(){i._polyfill(["mediaelement-yt"])}))}}(),g=function(){a?p():h()};i.addPolyfill("mediaelement-yt",{test:!f,d:["dom-support"]}),l.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},l.mimeTypes.source=t.extend({},l.mimeTypes.audio,l.mimeTypes.video),l.getTypeForSrc=function(e,r){if(-1!=e.indexOf("youtube.com/watch?")||-1!=e.indexOf("youtube.com/v/"))return"video/youtube";if(0===e.indexOf("rtmp"))return r+"/rtmp";e=e.split("?")[0].split("#")[0].split("."),e=e[e.length-1];var a;return t.each(l.mimeTypes[r],function(t,r){return-1!==r.indexOf(e)?(a=t,!1):m}),a},l.srces=function(e,r){if(e=t(e),!r){r=[];var a=e[0].nodeName.toLowerCase(),i=v(e,a);return i.src?r.push(i):t("source",e).each(function(){i=v(this,a),i.src&&r.push(i)}),r}e.removeAttr("src").removeAttr("type").find("source").remove(),t.isArray(r)||(r=[r]),r.forEach(function(r){"string"==typeof r&&(r={src:r}),e.append(t(u.createElement("source")).attr(r))})},t.fn.loadMediaSrc=function(e,r){return this.each(function(){r!==m&&(t(this).removeAttr("poster"),r&&t.attr(this,"poster",r)),l.srces(this,e),t(this).mediaLoad()})},l.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],l.canThirdPlaySrces=function(e,r){var i="";return(a||f)&&(e=t(e),r=r||l.srces(e),t.each(r,function(e,t){return t.container&&t.src&&(a&&-1!=l.swfMimeTypes.indexOf(t.container)||f&&"video/youtube"==t.container)?(i=t,!1):m})),i};var T={};l.canNativePlaySrces=function(e,r){var a="";if(o){e=t(e);var i=(e[0].nodeName||"").toLowerCase(),n=(T[i]||{prop:{_supvalue:!1}}).prop._supvalue||e[0].canPlayType;if(!n)return a;r=r||l.srces(e),t.each(r,function(t,r){return r.type&&n.call(e[0],r.type)?(a=r,!1):m})}return a};var w=/^\s*application\/octet\-stream\s*$/i,b=function(){var e=w.test(t.attr(this,"type")||"");return e&&t(this).removeAttr("type"),e};l.setError=function(e,r){if(t("source",e).filter(b).length){i.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{t(e).mediaLoad()}catch(a){}}else r||(r="can't play sources"),t(e).pause().data("mediaerror",r),i.error("mediaelementError: "+r),setTimeout(function(){t(e).data("mediaerror")&&t(e).addClass("media-error").trigger("mediaerror")},1)};var x=function(){var e,r=a?s:"mediaelement-yt";return function(a,o,n){i.ready(r,function(){l.createSWF&&t(a).parent()[0]?l.createSWF(a,o,n):e||(e=!0,g(),x(a,o,n))}),e||!f||l.createSWF||h()}}(),N=function(e,t,r,a,i){var o;r||r!==!1&&t&&"third"==t.isActive?(o=l.canThirdPlaySrces(e,a),o?x(e,o,t):i?l.setError(e,!1):N(e,t,!1,a,!0)):(o=l.canNativePlaySrces(e,a),o?t&&"third"==t.isActive&&l.setActive(e,"html5",t):i?(l.setError(e,!1),t&&"third"==t.isActive&&l.setActive(e,"html5",t)):N(e,t,!0,a,!0))},A=/^(?:embed|object|datalist)$/i,S=function(e,r){var a=i.data(e,"mediaelementBase")||i.data(e,"mediaelementBase",{}),o=l.srces(e),n=e.parentNode;clearTimeout(a.loadTimer),t(e).removeClass("media-error"),t.data(e,"mediaerror",!1),o.length&&n&&1==n.nodeType&&!A.test(n.nodeName||"")&&(r=r||i.data(e,"mediaelement"),l.sortMedia&&o.sort(l.sortMedia),N(e,r,c.preferFlash||m,o))};l.selectSource=S,t(u).on("ended",function(e){var r=i.data(e.target,"mediaelement");(!n||r&&"html5"!=r.isActive||t.prop(e.target,"loop"))&&setTimeout(function(){!t.prop(e.target,"paused")&&t.prop(e.target,"loop")&&t(e.target).prop("currentTime",0).play()},1)});var k=!1,P=function(){var r=function(){if(i.implement(this,"mediaelement")&&(S(this),e.mediaDefaultMuted||null==t.attr(this,"muted")||t.prop(this,"muted",!0),o&&(!n||"ActiveXObject"in d))){var r,a,s=this,p=function(){var e=t.prop(s,"buffered");if(e){for(var r="",a=0,i=e.length;i>a;a++)r+=e.end(a);return r}},u=function(){var e=p();e!=a&&(a=e,i.info("needed to trigger progress manually"),t(s).triggerHandler("progress"))};t(this).on({"play loadstart progress":function(e){"progress"==e.type&&(a=p()),clearTimeout(r),r=setTimeout(u,400)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(a=!1),clearTimeout(r)}}),"ActiveXObject"in d&&t.prop(this,"paused")&&!t.prop(this,"readyState")&&t(this).is('audio[preload="none"][controls]:not([autoplay],.nonnative-api-active)')&&t(this).prop("preload","metadata").mediaLoad()}};i.ready("dom-support",function(){k=!0,n||i.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(e){var r;r=i.defineNodeNameProperty(e,"load",{prop:{value:function(){var e=i.data(this,"mediaelement");S(this,e),!o||e&&"html5"!=e.isActive||!r.prop._supvalue||r.prop._supvalue.apply(this,arguments)}}}),T[e]=i.defineNodeNameProperty(e,"canPlayType",{prop:{value:function(r){var i="";return o&&T[e].prop._supvalue&&(i=T[e].prop._supvalue.call(this,r),"no"==i&&(i="")),!i&&a&&(r=t.trim((r||"").split(";")[0]),-1!=l.swfMimeTypes.indexOf(r)&&(i="maybe")),i}}})}),i.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,t=i.data(e,"mediaelementBase")||i.data(e,"mediaelementBase",{});clearTimeout(t.loadTimer),t.loadTimer=setTimeout(function(){S(e),e=null},9)}}),i.addReady(function(e,a){var i=t("video, audio",e).add(a.filter("video, audio")).each(r);!y.loaded&&t("track",i).length&&y(),i=null})}),o&&!k&&i.addReady(function(e,r){k||t("video, audio",e).add(r.filter("video, audio")).each(function(){return l.canNativePlaySrces(this)?m:(g(),k=!0,!1)})})};r&&i.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),o?(i.isReady("mediaelement-core",!0),P(),i.ready("WINDOWLOAD mediaelement",g)):i.ready(s,P),i.ready("track",y)})}(Modernizr,webshims);