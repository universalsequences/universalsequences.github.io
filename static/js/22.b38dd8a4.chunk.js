(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{2898:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n(0),c=n.n(a),u=n(456),s=n(12),o=n(5),i=n.n(o),f=n(9),p=n(14),l=n(40),d=n(92),b=n(47),v=n(26),h=n(31),w=n(269),g=n(500),x=n(362),y=n(715),m=n(716),O=n(714);function j(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,u=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){s=!0,c=e},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw c}}}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var A=[{events:[h.Y,h.n],contract:(new w.a).contractAddress},{events:[h.ob],contract:(new g.a).contractAddress},{events:[h.F],contract:(new x.a).contractAddress},{events:[h.K],contract:(new m.a).contractAddress},{events:[h.U],contract:(new y.a).contractAddress},{events:[h.o],contract:(new O.a).contractAddress}],S=function(){var e=Object(p.a)(i.a.mark(function e(){var t,n,r,a,c,u;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=[],n=j(A),e.prev=2,n.s();case 4:if((r=n.n()).done){e.next=16;break}return a=r.value,e.t0=[],e.t1=Object(f.a)(t),e.t2=f.a,e.next=11,E(a);case 11:e.t3=e.sent,e.t4=(0,e.t2)(e.t3),t=e.t0.concat.call(e.t0,e.t1,e.t4);case 14:e.next=4;break;case 16:e.next=21;break;case 18:e.prev=18,e.t5=e.catch(2),n.e(e.t5);case 21:return e.prev=21,n.f(),e.finish(21);case 24:return e.t6=Set,e.next=27,b.a.getPinnedHashes();case 27:return e.t7=e.sent,c=new e.t6(e.t7),(u=t.map(function(e){return e}).filter(function(e){return!c.has(e)})).reverse(),e.abrupt("return",u);case 32:case"end":return e.stop()}},e,null,[[2,18,21,24]])}));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(p.a)(i.a.mark(function e(t){var n,r,a,c,u,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.contract,r=t.events,a=[],c=j(r),e.prev=3,s=i.a.mark(function e(){var t,r,c,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.value,r=[].concat(Object(f.a)(t.topics),Object(f.a)(t.data)).find(function(e){return e.type===v.i}),c=new l.a(n).from(t).select(r.name),e.next=5,c.executeQuery();case 5:s=e.sent,a=[].concat(Object(f.a)(a),Object(f.a)(s.map(function(e){return e[r.name]})));case 7:case"end":return e.stop()}},e)}),c.s();case 6:if((u=c.n()).done){e.next=10;break}return e.delegateYield(s(),"t0",8);case 8:e.next=6;break;case 10:e.next=15;break;case 12:e.prev=12,e.t1=e.catch(3),c.e(e.t1);case 15:return e.prev=15,c.f(),e.finish(15);case 18:return e.abrupt("return",a.filter(function(e){return e&&"0"!==e}));case 19:case"end":return e.stop()}},e,null,[[3,12,15,18]])}));return function(t){return e.apply(this,arguments)}}();t.default=Object(s.b)(function(e,t){return{}},function(e){return{}})(function(e){var t=Object(a.useState)([]),n=Object(r.a)(t,2),s=n[0],o=n[1],f=Object(a.useRef)(void 0),l=Object(a.useState)({pinner:0,pinning:0,progress:0}),v=Object(r.a)(l,2),h=v[0],w=v[1];return Object(a.useEffect)(function(){S().then(o)},[]),Object(a.useEffect)(function(){s.length>0&&(console.log("hashes  = ",s),f.current=function(e){var t=new Set,n=new Set;return function(){var r=Object(p.a)(i.a.mark(function r(){var a,c,u;return i.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:a=j(e),r.prev=2,u=i.a.mark(function e(){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("0"!==(r=c.value)&&0!==r){e.next=3;break}return e.abrupt("return","continue");case 3:console.log('pinning "'+r+" type=",typeof r),n.add(r),b.a.pin(r).then(function(e){console.log("successfully pinned hash=",r),t.add(r),n.delete(r)});case 6:if(!(n.size>12)){e.next=11;break}return e.next=9,Object(d.a)(100);case 9:e.next=6;break;case 11:case"end":return e.stop()}},e)}),a.s();case 5:if((c=a.n()).done){r.next=12;break}return r.delegateYield(u(),"t0",7);case 7:if("continue"!==r.t0){r.next=10;break}return r.abrupt("continue",10);case 10:r.next=5;break;case 12:r.next=17;break;case 14:r.prev=14,r.t1=r.catch(2),a.e(r.t1);case 17:return r.prev=17,a.f(),r.finish(17);case 20:case"end":return r.stop()}},r,null,[[2,14,17,20]])}));return function(){return r.apply(this,arguments)}}()(),function(){return{pinned:t.size,pinning:n.size,progress:100*t.size/e.length}}}(s))},[s]),Object(u.a)(function(){f.current&&w(f.current())},50),c.a.createElement("div",null,"DOWNLOADER: ",s.length," total hashes (pinned ",h.pinned," pinning ",h.pinning,") Progress=",h.progress,"%")})}}]);
//# sourceMappingURL=22.b38dd8a4.chunk.js.map