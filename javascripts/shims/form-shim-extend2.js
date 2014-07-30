webshims.register("form-shim-extend2",function(e,t,r,a,n,o){"use strict";var i=e([]),s=function(t){t=e(t);var r,n,o=i;return"radio"==t[0].type&&(n=t.prop("form"),r=t[0].name,o=r?n?e(n[r]):e(a.getElementsByName(r)).filter(function(){return!e.prop(this,"form")}):t,o=o.filter('[type="radio"]')),o},l=!("submitBubbles"in e.support)||e.support.submitBubbles,u=function(t){l||!t||"object"!=typeof t||t._submit_attached||(e.event.add(t,"submit._submit",function(e){e._submit_bubble=!0}),t._submit_attached=!0)};if(!l&&e.event.special.submit&&(e.event.special.submit.setup=function(){return e.nodeName(this,"form")?!1:(e.event.add(this,"click._submit keypress._submit",function(t){var r=t.target,a=e.nodeName(r,"input")||e.nodeName(r,"button")?e.prop(r,"form"):n;u(a)}),n)}),t.defineNodeNamesBooleanProperty(["input","textarea","select"],"required",{set:function(t){e(this).getShadowFocusElement().attr("aria-required",!!t+"")},initAttr:Modernizr.localstorage}),t.reflectProperties(["input"],["pattern"]),!("maxLength"in a.createElement("textarea"))){var c=function(){var t,r=0,a=e([]),n=1e9,o=function(){var e=a.prop("value"),t=e.length;t>r&&t>n&&(t=Math.max(r,n),a.prop("value",e.substr(0,t))),r=t},i=function(){clearTimeout(t),a.unbind(".maxlengthconstraint")};return function(s,l){i(),l>-1&&(n=l,r=e.prop(s,"value").length,a=e(s),a.on({"keydown.maxlengthconstraint keypress.maxlengthconstraint paste.maxlengthconstraint cut.maxlengthconstraint":function(){setTimeout(o,0)},"keyup.maxlengthconstraint":o,"blur.maxlengthconstraint":i}),t=setInterval(o,200))}}();c.update=function(t,r){e(t).is(":focus")&&(r||(r=e.prop(t,"maxlength")),c(t,r))},e(a).on("focusin",function(t){var r;"TEXTAREA"==t.target.nodeName&&(r=e.prop(t.target,"maxlength"))>-1&&c(t.target,r)}),t.defineNodeNameProperty("textarea","maxlength",{attr:{set:function(e){this.setAttribute("maxlength",""+e),c.update(this)},get:function(){var e=this.getAttribute("maxlength");return null==e?n:e}},prop:{set:function(e){if(isNumber(e)){if(0>e)throw"INDEX_SIZE_ERR";return e=parseInt(e,10),this.setAttribute("maxlength",e),c.update(this,e),n}this.setAttribute("maxlength","0"),c.update(this,0)},get:function(){var e=this.getAttribute("maxlength");return isNumber(e)&&e>=0?parseInt(e,10):-1}}}),t.defineNodeNameProperty("textarea","maxLength",{prop:{set:function(t){e.prop(this,"maxlength",t)},get:function(){return e.prop(this,"maxlength")}}})}e.support.getSetAttribute||null!=e("<form novalidate></form>").attr("novalidate")||t.defineNodeNameProperty("form","novalidate",{attr:{set:function(e){this.setAttribute("novalidate",""+e)},get:function(){var e=this.getAttribute("novalidate");return null==e?n:e}}}),Modernizr.formattribute!==!1&&Modernizr.fieldsetdisabled||function(){!function(t,r){e.prop=function(n,o,i){var s;return n&&1==n.nodeType&&i===r&&e.nodeName(n,"form")&&n.id&&(s=a.getElementsByName(o),s&&s.length||(s=a.getElementById(o)),s&&(s=e(s).filter(function(){return e.prop(this,"form")==n}).get(),s.length))?1==s.length?s[0]:s:t.apply(this,arguments)}}(e.prop,n);var r=function(t){var r=e.data(t,"webshimsAddedElements");r&&(r.remove(),e.removeData(t,"webshimsAddedElements"))};if(Modernizr.formattribute||(t.defineNodeNamesProperty(["input","textarea","select","button","fieldset"],"form",{prop:{get:function(){var r=t.contentAttr(this,"form");return r&&(r=a.getElementById(r),r&&!e.nodeName(r,"form")&&(r=null)),r||this.form},writeable:!1}}),t.defineNodeNamesProperty(["form"],"elements",{prop:{get:function(){var t=this.id,r=e.makeArray(this.elements);return t&&(r=e(r).add('input[form="'+t+'"], select[form="'+t+'"], textarea[form="'+t+'"], button[form="'+t+'"], fieldset[form="'+t+'"]').not(".webshims-visual-hide > *").get()),r},writeable:!1}}),e(function(){var t=function(e){e.stopPropagation()},n={image:1,submit:1};e(a).on("submit",function(t){if(!t.isDefaultPrevented()){var a,n=t.target,o=n.id;o&&(r(n),a=e('input[form="'+o+'"], select[form="'+o+'"], textarea[form="'+o+'"]').filter(function(){return!this.disabled&&this.name&&this.form!=n}).clone(),a.length&&(e.data(n,"webshimsAddedElements",e('<div class="webshims-visual-hide" />').append(a).appendTo(n)),setTimeout(function(){r(n)},9)),a=null)}}),e(a).on("click",function(r){if(n[r.target.type]&&!r.isDefaultPrevented()&&e(r.target).is("input[form], button[form]")){var a,o=e.prop(r.target,"form"),i=r.target.form;o&&o!=i&&(a=e(r.target).clone().removeAttr("form").addClass("webshims-visual-hide").on("click",t).appendTo(o),i&&r.preventDefault(),u(o),a.trigger("click"),setTimeout(function(){a.remove(),a=null},9))}})})),Modernizr.fieldsetdisabled||t.defineNodeNamesProperty(["fieldset"],"elements",{prop:{get:function(){return e("input, select, textarea, button, fieldset",this).get()||[]},writeable:!1}}),!e.fn.finish&&1.9>parseFloat(e.fn.jquery,10)){var o=/\r?\n/g,i=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,s=/^(?:select|textarea)/i;e.fn.serializeArray=function(){return this.map(function(){var t=e.prop(this,"elements");return t?e.makeArray(t):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||s.test(this.nodeName)||i.test(this.type))}).map(function(t,r){var a=e(this).val();return null==a?null:e.isArray(a)?e.map(a,function(e){return{name:r.name,value:e.replace(o,"\r\n")}}):{name:r.name,value:a.replace(o,"\r\n")}}).get()}}}(),null==e("<input />").prop("labels")&&t.defineNodeNamesProperty("button, input, keygen, meter, output, progress, select, textarea","labels",{prop:{get:function(){if("hidden"==this.type)return null;var t=this.id,r=e(this).closest("label").filter(function(){var e=this.attributes["for"]||{};return!e.specified||e.value==t});return t&&(r=r.add('label[for="'+t+'"]')),r.get()},writeable:!1}}),"value"in a.createElement("progress")||function(){var r=parseInt("NaN",10),a=function(t){var r;r=e.prop(t,"position"),e.attr(t,"data-position",r),e("> span",t).css({width:(0>r?100:100*r)+"%"})},n={position:{prop:{get:function(){var t,n=this.getAttribute("value"),o=-1;return n=n?1*n:r,isNaN(n)?a.isInChange&&e(this).removeAttr("aria-valuenow"):(t=e.prop(this,"max"),o=Math.max(Math.min(n/t,1),0),a.isInChange&&(e.attr(this,"aria-valuenow",100*o),"max"==a.isInChange&&e.attr(this,"aria-valuemax",t))),o},writeable:!1}}};e.each({value:0,max:1},function(r,o){var i="value"==r&&!e.fn.finish;n[r]={attr:{set:function(e){var t=n[r].attr._supset.call(this,e);return a.isInChange=r,a(this),a.isInChange=!1,t}},removeAttr:{value:function(){if(this.removeAttribute(r),i)try{delete this.value}catch(e){}a.isInChange=r,a(this),a.isInChange=!1}},prop:{get:function(){var t=1*n[r].attr.get.call(this);return 0>t||isNaN(t)?t=o:"value"==r?t=Math.min(t,e.prop(this,"max")):0===t&&(t=o),t},set:function(e){return e=1*e,isNaN(e)&&t.error("Floating-point value is not finite."),n[r].attr.set.call(this,e)}}}}),t.createElement("progress",function(){var r=e(this).attr({role:"progressbar","aria-valuemin":"0"}).html('<span class="progress-value" />').jProp("labels").map(function(){return t.getID(this)}).get();r.length?e.attr(this,"aria-labelledby",r.join(" ")):t.info("you should use label elements for your prgogress elements"),a.isInChange="max",a(this),a.isInChange=!1},n)}();try{a.querySelector(":checked")}catch(p){!function(){e("html").addClass("no-csschecked");var r={radio:1,checkbox:1},n=function(){var t,r,a,n=this.options||[];for(t=0,r=n.length;r>t;t++)a=e(n[t]),a[e.prop(n[t],"selected")?"addClass":"removeClass"]("prop-checked")},o=function(){var t,r=e.prop(this,"checked")?"addClass":"removeClass",a=this.className||"";-1==a.indexOf("prop-checked")==("addClass"==r)&&(e(this)[r]("prop-checked"),(t=this.parentNode)&&(t.className=t.className))};t.onNodeNamesPropertyModify("select","value",n),t.onNodeNamesPropertyModify("select","selectedIndex",n),t.onNodeNamesPropertyModify("option","selected",function(){e(this).closest("select").each(n)}),t.onNodeNamesPropertyModify("input","checked",function(t,a){var n=this.type;"radio"==n&&a?s(this).each(o):r[n]&&e(this).each(o)}),e(a).on("change",function(t){r[t.target.type]?"radio"==t.target.type?s(t.target).each(o):e(t.target)[e.prop(t.target,"checked")?"addClass":"removeClass"]("prop-checked"):"select"==t.target.nodeName.toLowerCase()&&e(t.target).each(n)}),t.addReady(function(t,a){e("option, input",t).add(a.filter("option, input")).each(function(){var t;r[this.type]?t="checked":"option"==this.nodeName.toLowerCase()&&(t="selected"),t&&e(this)[e.prop(this,t)?"addClass":"removeClass"]("prop-checked")})})}()}!function(){if(!o.noPlaceholderPolyfill){var a;if(Modernizr.textareaPlaceholder=!!("placeholder"in e("<textarea />")[0]),Modernizr.input.placeholder&&o.overridePlaceholder&&(a=!0),Modernizr.input.placeholder&&Modernizr.textareaPlaceholder&&!a)return function(){var t=navigator.userAgent;-1!=t.indexOf("Mobile")&&-1!=t.indexOf("Safari")&&e(r).on("orientationchange",function(){var t,r=function(e,t){return t},a=function(){e("input[placeholder], textarea[placeholder]").attr("placeholder",r)};return function(){clearTimeout(t),t=setTimeout(a,9)}}())}(),n;var i="over"==t.cfg.forms.placeholderType,s=t.cfg.forms.responsivePlaceholder,l=["textarea"];t.debug!==!1,(!Modernizr.input.placeholder||a)&&l.push("input");var u=function(e){try{if(e.setSelectionRange)return e.setSelectionRange(0,0),!0;if(e.createTextRange){var t=e.createTextRange();return t.collapse(!0),t.moveEnd("character",0),t.moveStart("character",0),t.select(),!0}}catch(r){}},c=function(t,r,a,o){if(a===!1&&(a=e.prop(t,"value")),i||"password"==t.type){if(!a&&o)return e(t).off(".placeholderremove").on({"keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove":function(a){(!a||17!=a.keyCode&&16!=a.keyCode)&&(r.box.removeClass("placeholder-visible"),e(t).unbind(".placeholderremove"))},"blur.placeholderremove":function(){e(t).unbind(".placeholderremove")}}),n}else{if(!a&&o&&u(t)){var s=setTimeout(function(){u(t)},9);return e(t).off(".placeholderremove").on({"keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove":function(a){(!a||17!=a.keyCode&&16!=a.keyCode)&&(t.value=e.prop(t,"value"),r.box.removeClass("placeholder-visible"),clearTimeout(s),e(t).unbind(".placeholderremove"))},"mousedown.placeholderremove drag.placeholderremove select.placeholderremove":function(){u(t),clearTimeout(s),s=setTimeout(function(){u(t)},9)},"blur.placeholderremove":function(){clearTimeout(s),e(t).unbind(".placeholderremove")}}),n}o||a||!t.value||(t.value=a)}r.box.removeClass("placeholder-visible")},p=function(t,r,a){a===!1&&(a=e.prop(t,"placeholder")),i||"password"==t.type||(t.value=a),r.box.addClass("placeholder-visible")},d=function(t,r,a,o,s){if(o||(o=e.data(t,"placeHolder"))){var l=e(t).hasClass("placeholder-visible");return a===!1&&(a=e.attr(t,"placeholder")||""),e(t).unbind(".placeholderremove"),r===!1&&(r=e.prop(t,"value")),r||"focus"!=s&&(s||!e(t).is(":focus"))?r?(c(t,o,r),n):(a&&!r?p(t,o,a):c(t,o,r),n):(("password"==t.type||i||l)&&c(t,o,"",!0),n)}},f=function(t){return t=e(t),!!(t.prop("title")||t.attr("aria-labelledby")||t.attr("aria-label")||t.jProp("labels").length)},h=function(t){return t=e(t),e(f(t)?'<span class="placeholder-text"></span>':'<label for="'+t.prop("id")+'" class="placeholder-text"></label>')},m=function(){var a={text:1,search:1,url:1,email:1,password:1,tel:1,number:1};return t.modules["form-number-date-ui"].loaded&&delete a.number,{create:function(t){var a,n=e.data(t,"placeHolder");if(n)return n;if(n=e.data(t,"placeHolder",{}),e(t).on("focus.placeholder blur.placeholder",function(e){d(this,!1,!1,n,e.type),n.box["focus"==e.type?"addClass":"removeClass"]("placeholder-focused")}),(a=e.prop(t,"form"))&&e(t).onWSOff("reset.placeholder",function(e){setTimeout(function(){d(t,!1,!1,n,e.type)},0)},!1,a),"password"==t.type||i)n.text=h(t),n.box=s||e(t).is(".responsive-width")||-1!=(t.currentStyle||{width:""}).width.indexOf("%")?n.text:e(t).wrap('<span class="placeholder-box placeholder-box-'+(t.nodeName||"").toLowerCase()+" placeholder-box-"+e.css(t,"float")+'" />').parent(),n.text.insertAfter(t).on("mousedown.placeholder",function(){d(this,!1,!1,n,"focus");try{setTimeout(function(){t.focus()},0)}catch(e){}return!1}),e.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(r,a){var o=e.css(t,a);n.text.css(a)!=o&&n.text.css(a,o)}),e.each(["Left","Top"],function(r,a){var o=(parseInt(e.css(t,"padding"+a),10)||0)+Math.max(parseInt(e.css(t,"margin"+a),10)||0,0)+(parseInt(e.css(t,"border"+a+"Width"),10)||0);n.text.css("padding"+a,o)}),e(t).onWSOff("updateshadowdom",function(){var r,a;((a=t.offsetWidth)||(r=t.offsetHeight))&&n.text.css({width:a,height:r}).css(e(t).position())},!0);else{var o=function(r){e(t).hasClass("placeholder-visible")&&(c(t,n,""),setTimeout(function(){(!r||"submit"!=r.type||r.isDefaultPrevented())&&d(t,!1,!1,n)},9))};e(t).onWSOff("beforeunload",o,!1,r),n.box=e(t),a&&e(t).onWSOff("submit",o,!1,a)}return n},update:function(r,o){var i=(e.attr(r,"type")||e.prop(r,"type")||"").toLowerCase();if(!a[i]&&!e.nodeName(r,"textarea"))return t.warn('placeholder not allowed on input[type="'+i+'"], but it is a good fallback :-)'),n;var s=m.create(r);s.text&&s.text.text(o),d(r,!1,o,s)}}}();e.webshims.publicMethods={pHolder:m},l.forEach(function(e){t.defineNodeNameProperty(e,"placeholder",{attr:{set:function(e){var r=this;a?(t.data(r,"bustedPlaceholder",e),r.placeholder=""):t.contentAttr(r,"placeholder",e),m.update(r,e)},get:function(){var e;return a&&(e=t.data(this,"bustedPlaceholder")),e||t.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})}),l.forEach(function(r){var n,o={};["attr","prop"].forEach(function(r){o[r]={set:function(o){var i,s=this;a&&(i=t.data(s,"bustedPlaceholder")),i||(i=t.contentAttr(s,"placeholder")),e.removeData(s,"cachedValidity");var l=n[r]._supset.call(s,o);return i&&"value"in s&&d(s,o,i),l},get:function(){var t=this;return e(t).hasClass("placeholder-visible")?"":n[r]._supget.call(t)}}}),n=t.defineNodeNameProperty(r,"value",o)})}}(),function(){var r=a;if(!("value"in a.createElement("output"))){t.defineNodeNameProperty("output","value",{prop:{set:function(t){var r=e.data(this,"outputShim");r||(r=n(this)),r(t)},get:function(){return t.contentAttr(this,"value")||e(this).text()||""}}}),t.onNodeNamesPropertyModify("input","value",function(t,r,a){if("removeAttr"!=a){var n=e.data(this,"outputShim");n&&n(t)}});var n=function(n){if(!n.getAttribute("aria-live")){n=e(n);var o=(n.text()||"").trim(),i=n.prop("id"),s=n.attr("for"),l=e('<input class="output-shim" type="text" disabled name="'+(n.attr("name")||"")+'" value="'+o+'" style="display: none !important;" />').insertAfter(n);l[0].form||r;var u=function(e){l[0].value=e,e=l[0].value,n.text(e),t.contentAttr(n[0],"value",e)};return n[0].defaultValue=o,t.contentAttr(n[0],"value",o),n.attr({"aria-live":"polite"}),i&&(l.attr("id",i),n.attr("aria-labelledby",n.jProp("labels").map(function(){return t.getID(this)}).get().join(" "))),s&&(i=t.getID(n),s.split(" ").forEach(function(e){e=a.getElementById(e),e&&e.setAttribute("aria-controls",i)})),n.data("outputShim",u),l.data("outputShim",u),u}};t.addReady(function(t,r){e("output",t).add(r.filter("output")).each(function(){n(this)})}),function(){var a={updateInput:1,input:1},n={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,file:1,color:1},o=function(e){var r,n,o=e.prop("value"),i=function(r){if(e){var n=e.prop("value");n!==o&&(o=n,r&&a[r.type]||t.triggerInlineForm&&t.triggerInlineForm(e[0],"input"))}},s=function(){clearTimeout(n),n=setTimeout(i,9)},l=function(){e.unbind("focusout",l).unbind("keyup keypress keydown paste cut",s).unbind("input change updateInput triggerinput",i),clearInterval(r),setTimeout(function(){i(),e=null},1)};clearInterval(r),r=setInterval(i,200),s(),e.on({"keyup keypress keydown paste cut":s,focusout:l,"input updateInput change triggerinput":i})};e(r).on("focusin",function(r){!r.target||r.target.readOnly||r.target.disabled||"input"!=(r.target.nodeName||"").toLowerCase()||n[r.target.type]||(t.data(r.target,"implemented")||{}).inputwidgets||o(e(r.target))})}()}}()});