/*
* Chico Mobile 0.4.0 MIT Licence
* @autor <chico@mercadolibre.com>
* @link http://www.chico-ui.com.ar
* @team Hernan Mammana, Leandro Linares, Guillermo Paz, Natalia Devalle, Nicolas Brizuela
*/

(function(a,c){var b=(function(){var d={version:"0.1"};return d})();a.ch=b})(window);ch.mobile=(function(){var d=function(g,f){$(g).bind("click",function(j){j.preventDefault();j.stopPropagation();var h=$(this),k=this.firstChild,i="#"+k.href.split("#")[1];if(!h.hasClass("ch-selected")){h.addClass("ch-selected");$(i).removeClass("ch-hide");if(h.hasClass("ch-search")){$(i).find("input[type=search]").focus()}h.siblings().removeClass("ch-selected")}else{h.removeClass("ch-selected");$(i).addClass("ch-hide")}})},e=function(g,f){$(g).bind("click",function(){var h=f||$(this).next();if(h.hasClass("ch-hide")){h.removeClass("ch-hide");$(this).addClass("ch-selected ch-icon-chevron-up").removeClass("ch-icon-chevron-down")}else{$(this).removeClass("ch-selected ch-icon-chevron-up").addClass("ch-icon-chevron-down");h.addClass("ch-hide")}})},b=function(j){var i=j.document;if(!location.hash&&j.addEventListener){window.scrollTo(0,1);var h=1,g=function(){return j.pageYOffset||i.compatMode==="CSS1Compat"&&i.documentElement.scrollTop||i.body.scrollTop||0},f=setInterval(function(){if(i.body){clearInterval(f);h=g();j.scrollTo(0,h===1?0:1)}},15);j.addEventListener("load",function(){setTimeout(function(){if(g()<20){j.scrollTo(0,h===1?0:1)}},0)})}},a=function(g,l,n){var m=$(g),f=$(l).addClass("ch-modal-content"),k=$("<div>").addClass("ch-modal ch-hide"),j=$("div[data-page=index]"),h;var o=function(q){if(n){n.call(q)}h=window.pageYOffset;j.addClass("ch-hide");k.removeClass("ch-hide");window.scrollTo(0,1);var r=window.location.hash="#!"+f.attr("id");window.onhashchange=function(){if(location.hash=="#!"+f.attr("id")){o()}else{i()}}};var i=function(){j.removeClass("ch-hide");k.addClass("ch-hide");window.scrollTo(0,h);window.location.hash=""};var p=$('<a class="ch-btn-action ch-btn-small" data-action="close">Cancelar</a>').bind("click",i);f.removeClass("ch-hide").wrapAll(k);k.find(".ch-header-action nav").append(p);m.live("click",function(q){q.preventDefault();q.stopPropagation();o(this)})};var c={menu:d,expando:e,hideBar:b,modal:a};return c})();