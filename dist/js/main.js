!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var n=function(){function n(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e(this,n);var i={root:document.querySelector(t)};this.o=Object.assign(i,o),this.root=this.o.root,this.options=o}var o,i;return o=n,(i=[{key:"scrollTop",value:function(){this.root.addEventListener("click",(function(){window.scroll({top:0,behavior:"smooth"})}))}},{key:"btnStyleChange",value:function(){var e=this;window.addEventListener("scroll",(function(){window.pageYOffset>e.options?e.root.style.opacity="1":window.pageYOffset<e.options&&(e.root.style.opacity="0")}))}},{key:"init",value:function(){this.scrollTop(),this.btnStyleChange()}}])&&t(o.prototype,i),Object.defineProperty(o,"prototype",{writable:!1}),n}();function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,e);var i={root:document.querySelector(t),nav:document.querySelectorAll(".gNavi'"),base:"base",elementOpen:"open_toggle",$windowWidth:$(window).width(),$breakpoints:1018,maxWidth:"(max-width: 1018px)"};this.o=Object.assign(i,n),this.root=this.o.root,this.nav=this.o.nav,this.elementOpen=this.o.elementOpen,this.base=this.o.base,this.$windowWidth=this.o.$windowWidth,this.$breakpoints=this.o.$breakpoints,this.maxWidth=this.o.maxWidth}var t,n;return t=e,(n=[{key:"spMenu",value:function(){var e=this;this.root.addEventListener("click",(function(){e.root.classList.toggle(e.elementOpen),e.nav.classList.toggle(e.elementOpen),e.base.classList.toggle(e.elementOpen),window.matchMedia("(max-width: 1018px)").matches&&$((function(){this.nav.removeClass(this.elementOpen),this.base.removeClass(this.elementOpen),$(this.root).removeClass(this.elementOpen)})),$(window).resize((function(){this.$windowWidth>this.$breakpoints&&(this.base.removeClass(this.elementOpen),this.nav.removeClass(this.elementOpen),$(this.root).removeClass(this.elementOpen))}))}))}},{key:"init",value:function(){this.spMenu()}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();new n("#page-top",400).init(),new s(".toggle-btn").init(),new Swiper(".swiper",{centeredSlides:!0,effect:"fade",autoplay:{delay:4e3,disableOnInteraction:!1},speed:2e3,allowTouchMove:!1,pagination:{el:".swiper-pagination",clickable:!0}});var a=$(window),r=$("header");$break=$(".message").offset().top,showClass="is-show",a.on("load scroll",(function(){$(this).scrollTop()>766?r.addClass(showClass):r.removeClass(showClass)}))}();