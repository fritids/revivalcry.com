/*
 * catalog.js - Shopp catalog behaviors library
 * Copyright ?? 2008-2010 by Ingenesis Limited
 * Licensed under the GPLv3 {@see license.txt}
 */
function ProductOptionsMenus(l,c){var g=jqnc(),h=0,k=false,m=false,n=new Array(),f=g(l),e="disabled",d={disabled:true,pricetags:true,taxrate:0,prices:{}},c=g.extend(d,c);f.each(function(p,i){m=i;n[p]=g(i).children();if(g.browser.msie){a(i)}if(p>0){k=f[p-1]}if(f.length==1){o()}else{if(k){g(k).change(function(){if(f.index(m)==f.length-1){o()}if(this.selectedIndex==0&&this.options[0].value==""){g(i).attr(e,true)}else{g(i).removeAttr(e)}}).change()}}h++});function o(){var p=new Array(),i=g(m).val();f.not(m).each(function(){if(g(this).val()!=""){p.push(g(this).val())}});g(m).empty();n[f.index(m)].each(function(r,q){g(q).appendTo(g(m))});g(m).val(i);g(m).children("option").each(function(){var x,s,q,w,v="",r=g(this),u=p.slice(),t;if(r.val()!=""){u.push(r.val());t=c.prices[b(u)]||c.prices[b(u,"deprecated")];if(t){if(t.p&&c.pricetags){x=new Number(t.p);s=t.tax?new Number(x*c.taxrate):0;v="  ("+asMoney(new Number(x+s))+")"}q=r.text();w=q.lastIndexOf("(");if(w!=-1){q=q.substr(0,w)}r.text(q+v);if(g.browser.msie){r.css("color","#373737")}if((t.i&&!t.s)||t.t=="N/A"){if(r.attr("selected")){r.parent().attr("selectedIndex",0)}if(!c.disabled){r.remove()}else{j(r)}}else{r.removeAttr(e).show()}if(t.t=="N/A"&&!c.disabled){r.remove()}}else{if(!c.disabled){r.remove()}else{j(r)}}}})}function b(t,p){for(var s=0,r=0,q=p?101:7001;r<t.length;r++){s=s^(t[r]*q)}return s}function j(i){i.attr(e,true);if(!g.browser.msie){return}i.css("color","#ccc")}function a(i){g(i).change(function(){var p=this,q;if(!p.options[p.selectedIndex].disabled){p.lastSelected=p.selectedIndex;return true}if(p.lastSelected){p.selectedIndex=p.lastSelected}else{q=g(p).children("option:not(:disabled)").get(0);p.selectedIndex=q?q.index:0}})}}function catalogViewHandler(){var c=jqnc(),d=c("#shopp"),a=new Date(),b={list:"grid",grid:"list"};a.setTime(a.getTime()+(30*86400000));c.each(b,function(e,f){d.find("ul.views li button."+e).click(function(){d.removeClass(f).addClass(e);document.cookie="shopp_catalog_view="+e+"; expires="+a+"; path=/"}).hover(function(){c(this).toggleClass("hover")})})}function ShoppGallery(g,b,c){var e=jqnc(),a=e(g),d=a.find("ul.previews"),f=a.find("ul.thumbnails li");if(!b){b="click"}if(c){a.find("ul.thumbnails").css("width",c+"px")}f.bind(b,function(){var h,i=e("#"+e(this).attr("class").split(" ")[0]);if(!i.hasClass("active")){h=a.find("ul.previews li.active");i.addClass("active").hide();if(h.length){h.fadeOut(800,function(){h.removeClass("active")})}i.appendTo(d).fadeIn(500)}})}function ShoppSlideshow(g,e,h,d,c){var f=jqnc(),i=this,b;i.element=f(g);var b={fade:[{display:"none"},{opacity:"show"}],"slide-down":[{display:"block",top:i.element.height()*-1},{top:0}],"slide-up":[{display:"block",top:i.element.height()},{top:0}],"slide-left":[{display:"block",left:i.element.width()*-1},{left:0}],"slide-right":[{display:"block",left:i.element.width()},{left:0}],wipe:[{display:"block",height:0},{height:i.element.height()}]},a=["normal","reverse","shuffle"];i.duration=(!e)?800:e;i.delay=(!h)?7000:h;d=(!d)?"fade":d;i.effect=(!b[d])?b.fade:b[d];c=(!c)?"normal":c;i.order=(f.inArray(c,a)!=-1)?c:"normal";i.slides=f(i.element).find("li:not(li.clear)").hide().css("visibility","visible");i.total=i.slides.length;i.slide=0;i.shuffling=new Array();i.startTransition=function(){var j,k,l=f(self.slides).find(".active").removeClass("active");f(i.slides[i.slide]).css(i.effect[0]).appendTo(i.element).animate(i.effect[1],i.duration,function(){l.css(i.effect[0])}).addClass("active");switch(i.order){case"shuffle":if(i.shuffling.length==0){i.shuffleList();j=f.inArray(i.slide,i.shuffling);if(j!=-1){i.shuffling.splice(j,1)}}k=Math.floor(Math.random()*i.shuffling.length);i.slide=i.shuffling[k];i.shuffling.splice(k,1);break;case"reverse":i.slide=(i.slide-1<0)?i.slides.length-1:i.slide-1;break;default:i.slide=(i.slide+1==i.total)?0:i.slide+1}if(i.slides.length==1){return}setTimeout(i.startTransition,i.delay)};i.transitionTo=function(j){i.slide=j;i.startTransition()};i.shuffleList=function(){for(var j=0;j<i.total;j++){i.shuffling.push(j)}};i.startTransition()}function slideshows(){var c=jqnc(),b,a,d;c("ul.slideshow").each(function(){b=c(this).attr("class");a={};d={fx:new RegExp(/([\w_-]+?)\-fx/),order:new RegExp(/([\w_-]+?)\-order/),duration:new RegExp(/duration\-(\d+)/),delay:new RegExp(/delay\-(\d+)/)};c.each(d,function(e,f){if(option=b.match(f)){a[e]=option[1]}});new ShoppSlideshow(this,a.duration,a.delay,a.fx,a.order)})}function ShoppCarousel(d,b){var c=jqnc(),a,g,h=this,i=c(d),e=i.find("ul"),f=e.find("> li");h.duration=(!b)?800:b;h.cframe=i.find("div.frame");a=Math.floor(h.cframe.innerWidth()/f.outerWidth());g=Math.round(((h.cframe.innerWidth()%f.outerWidth())/f.length)/2);f.css("margin","0 "+g+"px");h.pageWidth=(f.outerWidth()+(g*2))*a;h.page=1;h.pages=Math.ceil(f.length/a);if((f.length%a)!=0){e.append(new Array(a-(f.length%a)+1).join('<li class="empty" style="width: '+f.outerWidth()+"px; height: 1px; margin: 0 "+g+'px"/>'));f=e.find("> li")}f.filter(":first").before(f.slice(-a).clone().addClass("cloned"));f.filter(":last").after(f.slice(0,a).clone().addClass("cloned"));f=e.find("> li");h.cframe.scrollLeft(h.pageWidth);h.scrollLeft=i.find("button.left");h.scrollRight=i.find("button.right");h.scrolltoPage=function(k){var j=k<h.page?-1:1,m=Math.abs(h.page-k),l=h.pageWidth*j*m;h.cframe.filter(":not(:animated)").animate({scrollLeft:"+="+l},h.duration,function(){if(k==0){h.cframe.scrollLeft(h.pageWidth*h.pages);k=h.pages}else{if(k>h.pages){h.cframe.scrollLeft(h.pageWidth);k=1}}h.page=k})};h.scrollLeft.click(function(){return h.scrolltoPage(h.page-1)});h.scrollRight.click(function(){return h.scrolltoPage(h.page+1)})}function carousels(){var c=jqnc(),b,a,d;c("div.carousel").each(function(){b=c(this).attr("class");a={};d={duration:new RegExp(/duration\-(\d+)/)};c.each(d,function(e,f){if(option=b.match(f)){a[e]=option[1]}});new ShoppCarousel(this,a.duration)})}function validate(c){if(!c){return false}var d=jqnc(),h=true,g=new Array(),b=new Array(),a=d(c).find("input,select,textarea").not(":hidden"),f="required",e="title";d.each(a,function(j,i){input=d(i).removeClass("error");label=d("label[for="+input.attr("id")+"]").removeClass("error");if(input.attr("disabled")==true){return}if(input.hasClass(f)&&input.val()==""){b=new Array(sjss.REQUIRED_FIELD.replace(/%s/,input.attr(e)),i)}if(input.hasClass(f)&&input.attr("type")=="checkbox"&&!input.attr("checked")){b=new Array(sjss.REQUIRED_CHECKBOX.replace(/%s/,input.attr(e)),i)}if(input.hasClass("email")&&!input.val().match(new RegExp("^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+[a-zA-Z0-9.-]{2,4}$"))){b=new Array(sjss.INVALID_EMAIL,i)}if(input.attr("class")&&(chars=input.attr("class").match(new RegExp("min(\\d+)")))){if(input.val()!=""&&input.val().length<chars[1]){b=new Array(sjss.MIN_LENGTH.replace(/%s/,input.attr(e)).replace(/%d/,chars[1]),i)}}if(input.hasClass("passwords")){g.push(i);if(g.length==2&&g[0].value!=g[1].value){b=new Array(sjss.PASSWORD_MISMATCH,g[1])}}if(b[1]&&b[1].id==input.attr("id")){input.addClass("error");label.addClass("error")}});c.shopp_validate=false;d(c).trigger("shopp_validate",[b]);if(c.shopp_validate){b=c.shopp_validate;if(b[1]&&d("#"+b[1].id).length>0){d("#"+b[1].id).addClass("error");d("label[for="+b[1].id+"]").addClass("error")}}if(b.length>0){b[1].focus();if(d(c).hasClass("validation-alerts")){alert(b[0])}h=false}return h}function validateForms(){var b=jqnc(),a=b("form.validate");a.bind("submit.validate",function(c){return validate(this)})}jQuery(document).ready(function(){var a=jqnc();validateForms();catalogViewHandler();slideshows();carousels();if(a.fn.colorbox){a("a.shopp-zoom").colorbox({photo:true});a("a.shopp-zoom.gallery").each(function(){var b=a(this).attr("class").match(/product\_(\d+)/)[1];if(typeof(cbo)!="undefined"){a(this).attr("rel","gallery-"+b).colorbox(cbo)}else{a(this).attr("rel","gallery-"+b).colorbox({slideshow:true,slideshowSpeed:3500})}})}a("select.shopp-orderby-menu").change(function(){this.form.submit()});a("select.shopp-categories-menu").change(function(){document.location.href=a(this).val()});if(sjss.nocache){a(window).unload(function(){return})}});