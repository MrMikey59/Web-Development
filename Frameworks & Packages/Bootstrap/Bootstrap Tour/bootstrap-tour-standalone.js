/* ========================================================================
 * bootstrap-tour - v0.12.0
 * http://bootstraptour.com
 * ========================================================================
 * Copyright 2012-2015 Ulrich Sossou
 *
 * ========================================================================
 * Licensed under the MIT License (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================================
 */

+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var o in e)if(void 0!==t.style[o])return{end:e[o]};return!1}t.fn.emulateTransitionEnd=function(e){var o=!1,n=this;t(this).one("bsTransitionEnd",function(){o=!0});return setTimeout(function(){o||t(n).trigger(t.support.transition.end)},e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(t){"use strict";var e=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};e.VERSION="3.3.7",e.TRANSITION_DURATION=150,e.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},e.prototype.init=function(e,o,n){if(this.enabled=!0,this.type=e,this.$element=t(o),this.options=this.getOptions(n),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var i=this.options.trigger.split(" "),r=i.length;r--;){var s=i[r];if("click"==s)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",p="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(p+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.getOptions=function(e){return(e=t.extend({},this.getDefaults(),this.$element.data(),e)).delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},e.prototype.getDelegateOptions=function(){var e={},o=this.getDefaults();return this._options&&t.each(this._options,function(t,n){o[t]!=n&&(e[t]=n)}),e},e.prototype.enter=function(e){var o=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(o||(o=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,o)),e instanceof t.Event&&(o.inState["focusin"==e.type?"focus":"hover"]=!0),o.tip().hasClass("in")||"in"==o.hoverState)o.hoverState="in";else{if(clearTimeout(o.timeout),o.hoverState="in",!o.options.delay||!o.options.delay.show)return o.show();o.timeout=setTimeout(function(){"in"==o.hoverState&&o.show()},o.options.delay.show)}},e.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},e.prototype.leave=function(e){var o=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(o||(o=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,o)),e instanceof t.Event&&(o.inState["focusout"==e.type?"focus":"hover"]=!1),!o.isInStateTrue()){if(clearTimeout(o.timeout),o.hoverState="out",!o.options.delay||!o.options.delay.hide)return o.hide();o.timeout=setTimeout(function(){"out"==o.hoverState&&o.hide()},o.options.delay.hide)}},e.prototype.show=function(){var o=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(o);var n=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(o.isDefaultPrevented()||!n)return;var i=this,r=this.tip(),s=this.getUID(this.type);this.setContent(),r.attr("id",s),this.$element.attr("aria-describedby",s),this.options.animation&&r.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement,p=/\s?auto?\s?/i,h=p.test(a);h&&(a=a.replace(p,"")||"top"),r.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?r.appendTo(this.options.container):r.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),u=r[0].offsetWidth,c=r[0].offsetHeight;if(h){var f=a,d=this.getPosition(this.$viewport);a="bottom"==a&&l.bottom+c>d.bottom?"top":"top"==a&&l.top-c<d.top?"bottom":"right"==a&&l.right+u>d.width?"left":"left"==a&&l.left-u<d.left?"right":a,r.removeClass(f).addClass(a)}var _=this.getCalculatedOffset(a,l,u,c);this.applyPlacement(_,a);var m=function(){var t=i.hoverState;i.$element.trigger("shown.bs."+i.type),i.hoverState=null,"out"==t&&i.leave(i)};t.support.transition&&this.$tip.hasClass("fade")?r.one("bsTransitionEnd",m).emulateTransitionEnd(e.TRANSITION_DURATION):m()}},e.prototype.applyPlacement=function(e,o){var n=this.tip(),i=n[0].offsetWidth,r=n[0].offsetHeight,s=parseInt(n.css("margin-top"),10),a=parseInt(n.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),e.top+=s,e.left+=a,t.offset.setOffset(n[0],t.extend({using:function(t){n.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),n.addClass("in");var p=n[0].offsetWidth,h=n[0].offsetHeight;"top"==o&&h!=r&&(e.top=e.top+r-h);var l=this.getViewportAdjustedDelta(o,e,p,h);l.left?e.left+=l.left:e.top+=l.top;var u=/top|bottom/.test(o),c=u?2*l.left-i+p:2*l.top-r+h,f=u?"offsetWidth":"offsetHeight";n.offset(e),this.replaceArrow(c,n[0][f],u)},e.prototype.replaceArrow=function(t,e,o){this.arrow().css(o?"left":"top",50*(1-t/e)+"%").css(o?"top":"left","")},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},e.prototype.hide=function(o){function n(){"in"!=i.hoverState&&r.detach(),i.$element&&i.$element.removeAttr("aria-describedby").trigger("hidden.bs."+i.type),o&&o()}var i=this,r=t(this.$tip),s=t.Event("hide.bs."+this.type);if(this.$element.trigger(s),!s.isDefaultPrevented())return r.removeClass("in"),t.support.transition&&r.hasClass("fade")?r.one("bsTransitionEnd",n).emulateTransitionEnd(e.TRANSITION_DURATION):n(),this.hoverState=null,this},e.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},e.prototype.hasContent=function(){return this.getTitle()},e.prototype.getPosition=function(e){var o=(e=e||this.$element)[0],n="BODY"==o.tagName,i=o.getBoundingClientRect();null==i.width&&(i=t.extend({},i,{width:i.right-i.left,height:i.bottom-i.top}));var r=window.SVGElement&&o instanceof window.SVGElement,s=n?{top:0,left:0}:r?null:e.offset(),a={scroll:n?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},p=n?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},i,a,p,s)},e.prototype.getCalculatedOffset=function(t,e,o,n){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-o/2}:"top"==t?{top:e.top-n,left:e.left+e.width/2-o/2}:"left"==t?{top:e.top+e.height/2-n/2,left:e.left-o}:{top:e.top+e.height/2-n/2,left:e.left+e.width}},e.prototype.getViewportAdjustedDelta=function(t,e,o,n){var i={top:0,left:0};if(!this.$viewport)return i;var r=this.options.viewport&&this.options.viewport.padding||0,s=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-r-s.scroll,p=e.top+r-s.scroll+n;a<s.top?i.top=s.top-a:p>s.top+s.height&&(i.top=s.top+s.height-p)}else{var h=e.left-r,l=e.left+r+o;h<s.left?i.left=s.left-h:l>s.right&&(i.left=s.left+s.width-l)}return i},e.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},e.prototype.getUID=function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},e.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},e.prototype.enable=function(){this.enabled=!0},e.prototype.disable=function(){this.enabled=!1},e.prototype.toggleEnabled=function(){this.enabled=!this.enabled},e.prototype.toggle=function(e){var o=this;e&&((o=t(e.currentTarget).data("bs."+this.type))||(o=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,o))),e?(o.inState.click=!o.inState.click,o.isInStateTrue()?o.enter(o):o.leave(o)):o.tip().hasClass("in")?o.leave(o):o.enter(o)},e.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})};var o=t.fn.tooltip;t.fn.tooltip=function(o){return this.each(function(){var n=t(this),i=n.data("bs.tooltip"),r="object"==typeof o&&o;!i&&/destroy|hide/.test(o)||(i||n.data("bs.tooltip",i=new e(this,r)),"string"==typeof o&&i[o]())})},t.fn.tooltip.Constructor=e,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),function(t){"use strict";var e=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");e.VERSION="3.3.7",e.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),e.prototype.constructor=e,e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),o=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof o?"html":"append":"text"](o),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},e.prototype.hasContent=function(){return this.getTitle()||this.getContent()},e.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var o=t.fn.popover;t.fn.popover=function(o){return this.each(function(){var n=t(this),i=n.data("bs.popover"),r="object"==typeof o&&o;!i&&/destroy|hide/.test(o)||(i||n.data("bs.popover",i=new e(this,r)),"string"==typeof o&&i[o]())})},t.fn.popover.Constructor=e,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(jQuery);var bind=function(t,e){return function(){return t.apply(e,arguments)}};!function(t,e){"function"==typeof define&&define.amd?define(["jquery"],function(o){return t.Tour=e(o)}):"object"==typeof exports?module.exports=e(require("jquery")):t.Tour=e(t.jQuery)}(window,function(t){var e;return e=window.document,function(){function o(e){this._showPopoverAndOverlay=bind(this._showPopoverAndOverlay,this);var o;try{o=window.localStorage}catch(t){o=!1}this._options=t.extend({name:"tour",steps:[],container:"body",autoscroll:!0,keyboard:!0,storage:o,debug:!1,backdrop:!1,backdropContainer:"body",backdropPadding:0,redirect:!0,orphan:!1,duration:!1,delay:!1,basePath:"",template:'<div class="popover" role="tooltip"> <div class="arrow"></div> <h3 class="popover-title"></h3> <div class="popover-content"></div> <div class="popover-navigation"> <div class="btn-group"> <button class="btn btn-sm btn-default" data-role="prev">&laquo; Prev</button> <button class="btn btn-sm btn-default" data-role="next">Next &raquo;</button> <button class="btn btn-sm btn-default" data-role="pause-resume" data-pause-text="Pause" data-resume-text="Resume">Pause</button> </div> <button class="btn btn-sm btn-default" data-role="end">End tour</button> </div> </div>',afterSetState:function(t,e){},afterGetState:function(t,e){},afterRemoveState:function(t){},onStart:function(t){},onEnd:function(t){},onShow:function(t){},onShown:function(t){},onHide:function(t){},onHidden:function(t){},onNext:function(t){},onPrev:function(t){},onPause:function(t,e){},onResume:function(t,e){},onRedirectError:function(t){}},e),this._force=!1,this._inited=!1,this._current=null,this.backdrops=[]}return o.prototype.addSteps=function(t){var e,o,n;for(e=0,o=t.length;e<o;e++)n=t[e],this.addStep(n);return this},o.prototype.addStep=function(t){return this._options.steps.push(t),this},o.prototype.getStep=function(e){if(null!=this._options.steps[e])return t.extend({id:"step-"+e,path:"",host:"",placement:"right",title:"",content:"<p></p>",next:e===this._options.steps.length-1?-1:e+1,prev:e-1,animation:!0,container:this._options.container,autoscroll:this._options.autoscroll,backdrop:this._options.backdrop,backdropContainer:this._options.backdropContainer,backdropPadding:this._options.backdropPadding,redirect:this._options.redirect,reflexElement:this._options.steps[e].element,backdropElement:this._options.steps[e].element,orphan:this._options.orphan,duration:this._options.duration,delay:this._options.delay,template:this._options.template,onShow:this._options.onShow,onShown:this._options.onShown,onHide:this._options.onHide,onHidden:this._options.onHidden,onNext:this._options.onNext,onPrev:this._options.onPrev,onPause:this._options.onPause,onResume:this._options.onResume,onRedirectError:this._options.onRedirectError},this._options.steps[e])},o.prototype.init=function(t){return this._force=t,this.ended()?(this._debug("Tour ended, init prevented."),this):(this.setCurrentStep(),this._initMouseNavigation(),this._initKeyboardNavigation(),this._onResize(function(t){return function(){return t.showStep(t._current)}}(this)),this._onScroll(function(t){return function(){return t._showPopoverAndOverlay(t._current)}}(this)),null!==this._current&&this.showStep(this._current),this._inited=!0,this)},o.prototype.start=function(t){var e;return null==t&&(t=!1),this._inited||this.init(t),null===this._current&&(e=this._makePromise(null!=this._options.onStart?this._options.onStart(this):void 0),this._callOnPromiseDone(e,this.showStep,0)),this},o.prototype.next=function(){var t;return t=this.hideStep(this._current,this._current+1),this._callOnPromiseDone(t,this._showNextStep)},o.prototype.prev=function(){var t;return t=this.hideStep(this._current,this._current-1),this._callOnPromiseDone(t,this._showPrevStep)},o.prototype.goTo=function(t){var e;return e=this.hideStep(this._current,t),this._callOnPromiseDone(e,this.showStep,t)},o.prototype.end=function(){var o,n;return o=function(o){return function(n){if(t(e).off("click.tour-"+o._options.name),t(e).off("keyup.tour-"+o._options.name),t(window).off("resize.tour-"+o._options.name),t(window).off("scroll.tour-"+o._options.name),o._setState("end","yes"),o._inited=!1,o._force=!1,o._clearTimer(),null!=o._options.onEnd)return o._options.onEnd(o)}}(this),n=this.hideStep(this._current),this._callOnPromiseDone(n,o)},o.prototype.ended=function(){return!this._force&&!!this._getState("end")},o.prototype.restart=function(){return this._removeState("current_step"),this._removeState("end"),this._removeState("redirect_to"),this.start()},o.prototype.pause=function(){var t;return(t=this.getStep(this._current))&&t.duration?(this._paused=!0,this._duration-=(new Date).getTime()-this._start,window.clearTimeout(this._timer),this._debug("Paused/Stopped step "+(this._current+1)+" timer ("+this._duration+" remaining)."),null!=t.onPause?t.onPause(this,this._duration):void 0):this},o.prototype.resume=function(){var t;return(t=this.getStep(this._current))&&t.duration?(this._paused=!1,this._start=(new Date).getTime(),this._duration=this._duration||t.duration,this._timer=window.setTimeout(function(t){return function(){return t._isLast()?t.next():t.end()}}(this),this._duration),this._debug("Started step "+(this._current+1)+" timer with duration "+this._duration),null!=t.onResume&&this._duration!==t.duration?t.onResume(this,this._duration):void 0):this},o.prototype.hideStep=function(e,o){var n,i,r,s;if(s=this.getStep(e))return this._clearTimer(),r=this._makePromise(null!=s.onHide?s.onHide(this,e):void 0),i=function(n){return function(i){var r,a;if((r=t(s.element)).data("bs.popover")||r.data("popover")||(r=t("body")),r.popover("destroy").removeClass("tour-"+n._options.name+"-element tour-"+n._options.name+"-"+e+"-element").removeData("bs.popover"),s.reflex&&t(s.reflexElement).removeClass("tour-step-element-reflex").off(n._reflexEvent(s.reflex)+".tour-"+n._options.name),s.backdrop&&((a=null!=o&&n.getStep(o))&&a.backdrop&&a.backdropElement===s.backdropElement||n._hideOverlayElement(s)),null!=s.onHidden)return s.onHidden(n)}}(this),n=s.delay.hide||s.delay,"[object Number]"==={}.toString.call(n)&&n>0?(this._debug("Wait "+n+" milliseconds to hide the step "+(this._current+1)),window.setTimeout(function(t){return function(){return t._callOnPromiseDone(r,i)}}(this),n)):this._callOnPromiseDone(r,i),r},o.prototype.showStep=function(t){var o,n,i,r,s,a;return this.ended()?(this._debug("Tour ended, showStep prevented."),this):(a=this.getStep(t))&&(s=t<this._current,n=this._makePromise(null!=a.onShow?a.onShow(this,t):void 0),this.setCurrentStep(t),o=function(){switch({}.toString.call(a.path)){case"[object Function]":return a.path();case"[object String]":return this._options.basePath+a.path;default:return a.path}}.call(this),!a.redirect||!this._isRedirect(a.host,o,e.location)||(this._redirect(a,t,o),this._isJustPathHashDifferent(a.host,o,e.location)))?(r=function(e){return function(o){if(e._isOrphan(a)){if(!1===a.orphan)return e._debug("Skip the orphan step "+(e._current+1)+".\nOrphan option is false and the element does not exist or is hidden."),void(s?e._showPrevStep():e._showNextStep());e._debug("Show the orphan step "+(e._current+1)+". Orphans option is true.")}if(a.autoscroll?e._scrollIntoView(t):e._showPopoverAndOverlay(t),a.duration)return e.resume()}}(this),i=a.delay.show||a.delay,"[object Number]"==={}.toString.call(i)&&i>0?(this._debug("Wait "+i+" milliseconds to show the step "+(this._current+1)),window.setTimeout(function(t){return function(){return t._callOnPromiseDone(n,r)}}(this),i)):this._callOnPromiseDone(n,r),n):void 0},o.prototype.getCurrentStep=function(){return this._current},o.prototype.setCurrentStep=function(t){return null!=t?(this._current=t,this._setState("current_step",t)):(this._current=this._getState("current_step"),this._current=null===this._current?null:parseInt(this._current,10)),this},o.prototype.redraw=function(){return this._showOverlayElement(this.getStep(this.getCurrentStep()))},o.prototype._setState=function(t,e){var o;if(this._options.storage){o=this._options.name+"_"+t;try{this._options.storage.setItem(o,e)}catch(t){t.code===DOMException.QUOTA_EXCEEDED_ERR&&this._debug("LocalStorage quota exceeded. State storage failed.")}return this._options.afterSetState(o,e)}return null==this._state&&(this._state={}),this._state[t]=e},o.prototype._removeState=function(t){var e;return this._options.storage?(e=this._options.name+"_"+t,this._options.storage.removeItem(e),this._options.afterRemoveState(e)):null!=this._state?delete this._state[t]:void 0},o.prototype._getState=function(t){var e,o;return this._options.storage?(e=this._options.name+"_"+t,o=this._options.storage.getItem(e)):null!=this._state&&(o=this._state[t]),void 0!==o&&"null"!==o||(o=null),this._options.afterGetState(t,o),o},o.prototype._showNextStep=function(){var t,e,o;return o=this.getStep(this._current),e=function(t){return function(e){return t.showStep(o.next)}}(this),t=this._makePromise(null!=o.onNext?o.onNext(this):void 0),this._callOnPromiseDone(t,e)},o.prototype._showPrevStep=function(){var t,e,o;return o=this.getStep(this._current),e=function(t){return function(e){return t.showStep(o.prev)}}(this),t=this._makePromise(null!=o.onPrev?o.onPrev(this):void 0),this._callOnPromiseDone(t,e)},o.prototype._debug=function(t){if(this._options.debug)return window.console.log("Bootstrap Tour '"+this._options.name+"' | "+t)},o.prototype._isRedirect=function(t,e,o){var n;return!(null==t||""===t||!("[object RegExp]"==={}.toString.call(t)&&!t.test(o.origin)||"[object String]"==={}.toString.call(t)&&this._isHostDifferent(t,o)))||(n=[o.pathname,o.search,o.hash].join(""),null!=e&&""!==e&&("[object RegExp]"==={}.toString.call(e)&&!e.test(n)||"[object String]"==={}.toString.call(e)&&this._isPathDifferent(e,n)))},o.prototype._isHostDifferent=function(t,e){switch({}.toString.call(t)){case"[object RegExp]":return!t.test(e.origin);case"[object String]":return this._getProtocol(t)!==this._getProtocol(e.href)||this._getHost(t)!==this._getHost(e.href);default:return!0}},o.prototype._isPathDifferent=function(t,e){return this._getPath(t)!==this._getPath(e)||!this._equal(this._getQuery(t),this._getQuery(e))||!this._equal(this._getHash(t),this._getHash(e))},o.prototype._isJustPathHashDifferent=function(t,e,o){var n;return(null==t||""===t||!this._isHostDifferent(t,o))&&(n=[o.pathname,o.search,o.hash].join(""),"[object String]"==={}.toString.call(e)&&(this._getPath(e)===this._getPath(n)&&this._equal(this._getQuery(e),this._getQuery(n))&&!this._equal(this._getHash(e),this._getHash(n))))},o.prototype._redirect=function(o,n,i){var r;return t.isFunction(o.redirect)?o.redirect.call(this,i):(r="[object String]"==={}.toString.call(o.host)?""+o.host+i:i,this._debug("Redirect to "+r),this._getState("redirect_to")!==""+n?(this._setState("redirect_to",""+n),e.location.href=r):(this._debug("Error redirection loop to "+i),this._removeState("redirect_to"),null!=o.onRedirectError?o.onRedirectError(this):void 0))},o.prototype._isOrphan=function(e){return null==e.element||!t(e.element).length||t(e.element).is(":hidden")&&"http://www.w3.org/2000/svg"!==t(e.element)[0].namespaceURI},o.prototype._isLast=function(){return this._current<this._options.steps.length-1},o.prototype._showPopoverAndOverlay=function(t){var e;if(this.getCurrentStep()===t&&!this.ended())return(e=this.getStep(t)).backdrop&&this._showOverlayElement(e),this._showPopover(e,t),null!=e.onShown&&e.onShown(this),this._debug("Step "+(this._current+1)+" of "+this._options.steps.length)},o.prototype._showPopover=function(e,o){var n,i,r,s,a;if(t(".tour-"+this._options.name).remove(),s=t.extend({},this._options),r=this._isOrphan(e),e.template=this._template(e,o),r&&(e.element="body",e.placement="top"),(n=t(e.element)).addClass("tour-"+this._options.name+"-element tour-"+this._options.name+"-"+o+"-element"),e.options&&t.extend(s,e.options),e.reflex&&!r&&t(e.reflexElement).addClass("tour-step-element-reflex").off(this._reflexEvent(e.reflex)+".tour-"+this._options.name).on(this._reflexEvent(e.reflex)+".tour-"+this._options.name,function(t){return function(){return t._isLast()?t.next():t.end()}}(this)),a=!0===e.smartPlacement&&-1===e.placement.search(/auto/i),n.popover({placement:a?"auto "+e.placement:e.placement,trigger:"manual",title:e.title,content:e.content,html:!0,animation:e.animation,container:e.container,template:e.template,selector:e.element}).popover("show"),(i=n.data("bs.popover")?n.data("bs.popover").tip():n.data("popover").tip()).attr("id",e.id),"fixed"===n.css("position")&&i.css("position","fixed"),this._reposition(i,e),r)return this._center(i)},o.prototype._template=function(e,o){var n,i,r,s,a,p;return p=e.template,this._isOrphan(e)&&"[object Boolean]"!=={}.toString.call(e.orphan)&&(p=e.orphan),a=t(t.isFunction(p)?p(o,e):p),n=a.find(".popover-navigation"),r=n.find('[data-role="prev"]'),i=n.find('[data-role="next"]'),s=n.find('[data-role="pause-resume"]'),this._isOrphan(e)&&a.addClass("orphan"),a.addClass("tour-"+this._options.name+" tour-"+this._options.name+"-"+o),e.reflex&&a.addClass("tour-"+this._options.name+"-reflex"),e.prev<0&&r.addClass("disabled").prop("disabled",!0).prop("tabindex",-1),e.next<0&&i.addClass("disabled").prop("disabled",!0).prop("tabindex",-1),e.duration||s.remove(),a.clone().wrap("<div>").parent().html()},o.prototype._reflexEvent=function(t){return"[object Boolean]"==={}.toString.call(t)?"click":t},o.prototype._reposition=function(o,n){var i,r,s,a,p,h,l;if(a=o[0].offsetWidth,r=o[0].offsetHeight,l=o.offset(),p=l.left,h=l.top,(i=t(e).outerHeight()-l.top-o.outerHeight())<0&&(l.top=l.top+i),(s=t("html").outerWidth()-l.left-o.outerWidth())<0&&(l.left=l.left+s),l.top<0&&(l.top=0),l.left<0&&(l.left=0),o.offset(l),"bottom"===n.placement||"top"===n.placement){if(p!==l.left)return this._replaceArrow(o,2*(l.left-p),a,"left")}else if(h!==l.top)return this._replaceArrow(o,2*(l.top-h),r,"top")},o.prototype._center=function(e){return e.css("top",t(window).outerHeight()/2-e.outerHeight()/2)},o.prototype._replaceArrow=function(t,e,o,n){return t.find(".arrow").css(n,e?50*(1-e/o)+"%":"")},o.prototype._scrollIntoView=function(e){var o,n,i,r,s,a,p,h;if(p=this.getStep(e),!(o=t(p.element)).length)return this._showPopoverAndOverlay(e);switch(n=t(window),s=o.offset().top,r=o.outerHeight(),h=n.height(),a=0,p.placement){case"top":a=Math.max(0,s-h/2);break;case"left":case"right":a=Math.max(0,s+r/2-h/2);break;case"bottom":a=Math.max(0,s+r-h/2)}return this._debug("Scroll into view. ScrollTop: "+a+". Element offset: "+s+". Window height: "+h+"."),i=0,t("body, html").stop(!0,!0).animate({scrollTop:Math.ceil(a)},function(t){return function(){if(2==++i)return t._showPopoverAndOverlay(e),t._debug("Scroll into view.\nAnimation end element offset: "+o.offset().top+".\nWindow height: "+n.height()+".")}}(this))},o.prototype._onResize=function(e,o){return t(window).on("resize.tour-"+this._options.name,function(){return clearTimeout(o),o=setTimeout(e,100)})},o.prototype._onScroll=function(e,o){return t(window).on("scroll.tour-"+this._options.name,function(){return clearTimeout(o),o=setTimeout(e,100)})},o.prototype._initMouseNavigation=function(){var o;return o=this,t(e).off("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='prev']").off("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='next']").off("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='end']").off("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='pause-resume']").on("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='next']",function(t){return function(e){return e.preventDefault(),t.next()}}(this)).on("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='prev']",function(t){return function(e){if(e.preventDefault(),t._current>0)return t.prev()}}(this)).on("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='end']",function(t){return function(e){return e.preventDefault(),t.end()}}(this)).on("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='pause-resume']",function(e){var n;return e.preventDefault(),(n=t(this)).text(o._paused?n.data("pause-text"):n.data("resume-text")),o._paused?o.resume():o.pause()})},o.prototype._initKeyboardNavigation=function(){if(this._options.keyboard)return t(e).on("keyup.tour-"+this._options.name,function(t){return function(e){if(e.which)switch(e.which){case 39:return e.preventDefault(),t._isLast()?t.next():t.end();case 37:if(e.preventDefault(),t._current>0)return t.prev()}}}(this))},o.prototype._makePromise=function(e){return e&&t.isFunction(e.then)?e:null},o.prototype._callOnPromiseDone=function(t,e,o){return t?t.then(function(t){return function(n){return e.call(t,o)}}(this)):e.call(this,o)},o.prototype._showBackground=function(o,n){var i,r,s,a,p,h,l,u,c;for(s=t(e).height(),c=t(e).width(),u=[],a=0,p=(l=["top","bottom","left","right"]).length;a<p;a++)switch(h=l[a],i=null!=(r=this.backdrops)[h]?r[h]:r[h]=t("<div>",{class:"tour-backdrop "+h}),t(o.backdropContainer).append(i),h){case"top":u.push(i.height(n.offset.top>0?n.offset.top:0).width(c).offset({top:0,left:0}));break;case"bottom":u.push(i.offset({top:n.offset.top+n.height,left:0}).height(s-(n.offset.top+n.height)).width(c));break;case"left":u.push(i.offset({top:n.offset.top,left:0}).height(n.height).width(n.offset.left>0?n.offset.left:0));break;case"right":u.push(i.offset({top:n.offset.top,left:n.offset.left+n.width}).height(n.height).width(c-(n.offset.left+n.width)));break;default:u.push(void 0)}return u},o.prototype._showOverlayElement=function(e){var o,n;return 0===(o=t(e.backdropElement)).length?n={width:0,height:0,offset:{top:0,left:0}}:(n={width:o.innerWidth(),height:o.innerHeight(),offset:o.offset()},o.addClass("tour-step-backdrop"),e.backdropPadding&&(n=this._applyBackdropPadding(e.backdropPadding,n))),this._showBackground(e,n)},o.prototype._hideOverlayElement=function(e){var o,n,i;t(e.backdropElement).removeClass("tour-step-backdrop"),i=this.backdrops;for(n in i)(o=i[n])&&void 0!==o.remove&&o.remove();return this.backdrops=[]},o.prototype._applyBackdropPadding=function(t,e){return"object"==typeof t?(null==t.top&&(t.top=0),null==t.right&&(t.right=0),null==t.bottom&&(t.bottom=0),null==t.left&&(t.left=0),e.offset.top=e.offset.top-t.top,e.offset.left=e.offset.left-t.left,e.width=e.width+t.left+t.right,e.height=e.height+t.top+t.bottom):(e.offset.top=e.offset.top-t,e.offset.left=e.offset.left-t,e.width=e.width+2*t,e.height=e.height+2*t),e},o.prototype._clearTimer=function(){return window.clearTimeout(this._timer),this._timer=null,this._duration=null},o.prototype._getProtocol=function(t){return(t=t.split("://")).length>1?t[0]:"http"},o.prototype._getHost=function(t){return t=t.split("//"),(t=t.length>1?t[1]:t[0]).split("/")[0]},o.prototype._getPath=function(t){return t.replace(/\/?$/,"").split("?")[0].split("#")[0]},o.prototype._getQuery=function(t){return this._getParams(t,"?")},o.prototype._getHash=function(t){return this._getParams(t,"#")},o.prototype._getParams=function(t,e){var o,n,i,r,s;if(1===(r=t.split(e)).length)return{};for(s={},o=0,n=(r=r[1].split("&")).length;o<n;o++)s[(i=(i=r[o]).split("="))[0]]=i[1]||"";return s},o.prototype._equal=function(t,e){var o,n,i,r,s,a;if("[object Object]"==={}.toString.call(t)&&"[object Object]"==={}.toString.call(e)){if(r=Object.keys(t),s=Object.keys(e),r.length!==s.length)return!1;for(n in t)if(a=t[n],!this._equal(e[n],a))return!1;return!0}if("[object Array]"==={}.toString.call(t)&&"[object Array]"==={}.toString.call(e)){if(t.length!==e.length)return!1;for(n=o=0,i=t.length;o<i;n=++o)if(a=t[n],!this._equal(a,e[n]))return!1;return!0}return t===e},o}()});