(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{2887:function(t,e,n){"use strict";n.r(e);var o=n(2),a=n(4),d=n(196),u=n.n(d),i=function(){function t(){Object(o.a)(this,t)}return Object(a.a)(t,[{key:"download",value:function(t){u.a.get("/getSounds/"+t.join(",")).then(function(t){var e=t.data.data,n=document.createElement("a");n.setAttribute("download",null),document.body.appendChild(n);for(var o=0;o<e.length;o++)n.setAttribute("download",e[o].filename),n.setAttribute("href","../downloadSound/"+e[o].filename),n.click();document.body.removeChild(n)})}}]),t}();e.default=i}}]);
//# sourceMappingURL=24.c2260fa9.chunk.js.map