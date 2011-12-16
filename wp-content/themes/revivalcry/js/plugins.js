
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  arguments.callee = arguments.callee.caller;  
  if(this.console) console.log( Array.prototype.slice.call(arguments) );
};
// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});


// place any jQuery/helper plugins in here, instead of separate, slower script files.

/* tooltipsy by Brian Cray
 * Lincensed under GPL2 - http://www.gnu.org/licenses/gpl-2.0.html
 * Option quick reference:
 * - alignTo: "element" or "cursor" (Defaults to "element")
 * - offset: Tooltipsy distance from element or mouse cursor, dependent on alignTo setting. Set as array [x, y] (Defaults to [0, -1])
 * - content: HTML or text content of tooltip. Defaults to "" (empty string), which pulls content from target element's title attribute
 * - show: function(event, tooltip) to show the tooltip. Defaults to a show(100) effect
 * - hide: function(event, tooltip) to hide the tooltip. Defaults to a fadeOut(100) effect
 * - delay: A delay in milliseconds before showing a tooltip. Set to 0 for no delay. Defaults to 200
 * - css: object containing CSS properties and values. Defaults to {} to use stylesheet for styles
 * - className: DOM class for styling tooltips with CSS. Defaults to "tooltipsy"
 * - showEvent: Set a custom event to bind the show function. Defaults to mouseenter
 * - hideEvent: Set a custom event to bind the show function. Defaults to mouseleave
 * Method quick reference:
 * - $('element').data('tooltipsy').show(): Force the tooltip to show
 * - $('element').data('tooltipsy').hide(): Force the tooltip to hide
 * - $('element').data('tooltipsy').destroy(): Remove tooltip from DOM
 * More information visit http://tooltipsy.com/
 */
(function(a){a.tooltipsy=function(c,b){this.options=b;this.$el=a(c);this.title=this.$el.attr("title")||"";this.$el.attr("title","");this.random=parseInt(Math.random()*10000);this.ready=false;this.shown=false;this.width=0;this.height=0;this.delaytimer=null;this.$el.data("tooltipsy",this);this.init()};a.tooltipsy.prototype.init=function(){var b=this;b.settings=a.extend({},b.defaults,b.options);b.settings.delay=parseInt(b.settings.delay);if(typeof b.settings.content==="function"){b.readify()}if(b.settings.showEvent===b.settings.hideEvent&&b.settings.showEvent==="click"){b.$el.toggle(function(c){c.preventDefault();if(b.settings.delay>0){b.delaytimer=window.setTimeout(function(){b.show(c)},b.settings.delay)}else{b.show(c)}},function(c){c.preventDefault();window.clearTimeout(b.delaytimer);b.delaytimer=null;b.hide(c)})}else{b.$el.bind(b.settings.showEvent,function(c){if(b.settings.delay>0){b.delaytimer=window.setTimeout(function(){b.show(c)},b.settings.delay)}else{b.show(c)}}).bind(b.settings.hideEvent,function(c){window.clearTimeout(b.delaytimer);b.delaytimer=null;b.hide(c)})}};a.tooltipsy.prototype.show=function(f){var d=this;if(d.ready===false){d.readify()}if(d.shown===false){if((function(h){var g=0,e;for(e in h){if(h.hasOwnProperty(e)){g++}}return g})(d.settings.css)>0){d.$tip.css(d.settings.css)}d.width=d.$tipsy.outerWidth();d.height=d.$tipsy.outerHeight()}if(d.settings.alignTo==="cursor"&&f){var c=[f.pageX+d.settings.offset[0],f.pageY+d.settings.offset[1]];if(c[0]+d.width>a(window).width()){var b={top:c[1]+"px",right:c[0]+"px",left:"auto"}}else{var b={top:c[1]+"px",left:c[0]+"px",right:"auto"}}}else{var c=[(function(e){if(d.settings.offset[0]<0){return e.left-Math.abs(d.settings.offset[0])-d.width}else{if(d.settings.offset[0]===0){return e.left-((d.width-d.$el.outerWidth())/2)}else{return e.left+d.$el.outerWidth()+d.settings.offset[0]}}})(d.offset(d.$el[0])),(function(e){if(d.settings.offset[1]<0){return e.top-Math.abs(d.settings.offset[1])-d.height}else{if(d.settings.offset[1]===0){return e.top-((d.height-d.$el.outerHeight())/2)}else{return e.top+d.$el.outerHeight()+d.settings.offset[1]}}})(d.offset(d.$el[0]))]}d.$tipsy.css({top:c[1]+"px",left:c[0]+"px"});d.settings.show(f,d.$tipsy.stop(true,true))};a.tooltipsy.prototype.hide=function(c){var b=this;if(b.ready===false){return}if(c&&c.relatedTarget===b.$tip[0]){b.$tip.bind("mouseleave",function(d){if(d.relatedTarget===b.$el[0]){return}b.settings.hide(d,b.$tipsy.stop(true,true))});return}b.settings.hide(c,b.$tipsy.stop(true,true))};a.tooltipsy.prototype.readify=function(){this.ready=true;this.$tipsy=a('<div id="tooltipsy'+this.random+'" style="position:absolute;z-index:2147483647;display:none">').appendTo("body");this.$tip=a('<div class="'+this.settings.className+'">').appendTo(this.$tipsy);this.$tip.data("rootel",this.$el);var c=this.$el;var b=this.$tip;this.$tip.html(this.settings.content!=""?(typeof this.settings.content=="string"?this.settings.content:this.settings.content(c,b)):this.title)};a.tooltipsy.prototype.offset=function(c){var b=ot=0;if(c.offsetParent){do{if(c.tagName!="BODY"){b+=c.offsetLeft-c.scrollLeft;ot+=c.offsetTop-c.scrollTop}}while(c=c.offsetParent)}return{left:b,top:ot}};a.tooltipsy.prototype.destroy=function(){this.$tipsy.remove();a.removeData(this.$el,"tooltipsy")};a.tooltipsy.prototype.defaults={alignTo:"element",offset:[0,-1],content:"",show:function(c,b){b.fadeIn(100)},hide:function(c,b){b.fadeOut(100)},css:{},className:"tooltipsy",delay:200,showEvent:"mouseenter",hideEvent:"mouseleave"};a.fn.tooltipsy=function(b){return this.each(function(){new a.tooltipsy(this,b)})}})(jQuery);


/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);
