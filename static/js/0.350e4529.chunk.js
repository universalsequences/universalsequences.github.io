(window.webpackJsonp=window.webpackJsonp||[]).push([[0,21],{2727:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return c});var r="SEQUENCE_ANNOTATION",a="SEQUENCE_TAG",c="SAMPLE_ANNOTATION"},2737:function(e,t,n){"use strict";var r=n(9),a=n(8),c=n(0),o=n(6),s=n(2),u=n(4),i=function(){function e(t,n){Object(s.a)(this,e),this.root={x:0,y:0,w:t,h:n}}return Object(u.a)(e,[{key:"fit",value:function(e){var t,n,r;for(t=0;t<e.length;t++)r=e[t],(n=this.findNode(this.root,r.w,r.h))&&(r.fit=this.splitNode(n,r.w,r.h))}},{key:"findNode",value:function(e,t,n){return e.used?this.findNode(e.right,t,n)||this.findNode(e.down,t,n):t<=e.w&&n<=e.h?e:null}},{key:"splitNode",value:function(e,t,n){return e.used=!0,e.down={x:e.x,y:e.y+n,w:e.w,h:e.h-n},e.right={x:e.x+t,y:e.y,w:e.w-t,h:n},e}}]),e}();n.d(t,"a",function(){return l});var l=function(e){e.ref;var t=e.elements,n=e.subSequence,s=e.presentationMode;return{arrangeWindows:Object(c.useCallback)(function(){if(t.current){var e=n.sequencerEngine.state.windows.moduleSizes[n.id],c=n.state.windows.selectedElements,u=[];for(var l in c)c[l]&&u.push(l);var f=[],d=[];for(var b in t.current)if(!(u.length>0)||u.includes(b)){var m=t.current[b].current;if(m){var g={element:m,id:b,h:m.offsetHeight+15,w:m.offsetWidth+15};f.push(g),d.push(Object(a.a)({},g,{x:m.offsetLeft,y:m.offsetTop}))}}f.sort(function(e,t){return Math.max(t.w,t.h)-Math.max(e.w,e.h)});var v,p,O=e.width||200,E=e.height||200;if(u.length>0)v=Math.min.apply(Math,Object(r.a)(d.map(function(e){return e.x}))),p=Math.min.apply(Math,Object(r.a)(d.map(function(e){return e.y}))),O=Math.max.apply(Math,Object(r.a)(d.map(function(e){return e.x+e.w})))-v,E=Math.max.apply(Math,Object(r.a)(d.map(function(e){return e.y+e.h})))-p;new i(O,2*E).fit(f);for(var h={},j=0,k=f;j<k.length;j++){var S=k[j];S.fit&&(u.length>0?h[S.id]={x:S.fit.x+v,y:S.fit.y+p}:h[S.id]=Object(a.a)({},S.fit))}console.log("BULK ARRANGING"),s?n.dispatch(Object(o.fb)(h)):n.dispatch(Object(o.gb)(h))}},[t,n,s])}}},2740:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(6),o=(n(71),n(699)),s=(n(261),n(1110)),u=(n(205),n(374),n(12));t.a=Object(u.b)(function(e,t){return{pulledEffects:e.effects.pulledEffects,currentSubSequence:t.subSequence||t.sequencerEngine.currentSubSequence}},function(e){return{setPulledEffects:function(t){return e(Object(c.we)(t))}}})(function(e){var t=e.containerRef,n=e.sizeRef,c=e.setSize,u=e.size,i=e.all,l=e.pulledEffects,f=e.sequencerEngine,d=e.setPulledEffects,b=e.scale,m=e.currentSubSequence,g=(e.playhead,e.noWrapper),v=e.elements,p=e.ordering,O=e.setOrdering,E=Object(r.useRef)({}),h=Object(r.useCallback)(function(e){d(l.filter(function(t){return t!==e}))},[l]),j=Object(r.useCallback)(function(e){return!!e&&(Object(o.a)(e)?i||Object(o.a)(e).subSequence===m||Object(o.a)(e)===m:!(!e.instrument||!e.instrument.context||e.instrument.context.subSequence!==m)||e.track===m)},[m,i]),k=l.filter(j),S=k.map(function(e){return a.a.createElement(s.a,{key:e.id,isStatic:!g,scale:b,elements:v||E,sizeRef:n,setOrdering:O,ordering:p,containerRef:t,size:u,setSize:c,effects:k,onDelete:function(){return h(e)},sequencerEngine:f,fx:e})});return g?S:a.a.createElement("div",{className:"pulled-effects"},S)})},2741:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(665),o=n(12);n(2752);t.a=Object(o.b)(function(e,t){return{pads:t.subSequence?t.subSequence.pads:t.sequencerEngine.currentSubSequence.pads}},function(e){return{}})(function(e){var t=e.pads,n=e.scrollContainer;return a.a.createElement("div",{className:"pads-container"},t.map(function(e,t){return a.a.createElement(c.a,{key:t,scrollContainer:n,pad:e})}))})},2752:function(e,t,n){},2753:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(5),a=n.n(r),c=n(14),o=n(36),s=function(){var e=Object(c.a)(a.a.mark(function e(){var t,n,r,c,s,u,i,l,f;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.eth.getBlockNumber();case 2:t=e.sent,n=null,r=new Date,c=r.getDate(),s=r.getMonth(),t-=6e3*c,u=s,i={},l=0;case 11:if(!(l<12)){e.next=23;break}return e.next=14,o.a.eth.getBlock(t);case 14:n=e.sent,r=new Date(1e3*n.timestamp),f=new Date(r.getFullYear(),r.getMonth(),0).getDate(),i[u--]=t,t-=6600*f;case 20:l++,e.next=11;break;case 23:return e.abrupt("return",i);case 24:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},2754:function(e,t,n){"use strict";var r=n(11),a=n(0),c=n.n(a),o=n(6),s=n(12),u=function(e){var t="ztoolbar-option  ";return e.expanded&&(t+=" selected"),e.hideOnPadSequencer&&(t+=" hide-on-pad-sequencer"),c.a.createElement("div",Object.assign({},e,{className:t}),c.a.createElement("img",e))},i=function(e){e.subSequence;var t=e.type,n=e.drag;return c.a.createElement("div",{className:"modulator-expansion"},c.a.createElement("div",{className:"modulator-type"},"MODULE_ENVELOPE"===t?"Envelopes":"LFOs"),[1,2,3,4].map(function(e){return c.a.createElement("div",{draggable:!0,onDragStart:function(){return n(t+" "+e)},className:"modulator-number"},e)}))};t.a=Object(s.b)(function(e,t){return{uxLocked:e.zobject.uxLocked,showLFOs:e.sequencer.showLFOs,showEnvelopes:e.sequencer.showEnvelopes,showPadSequencer:e.spatial.showPadSequencer,presentationMode:e.spatial.presentationMode}},function(e){return{setShowEnvelopes:function(t){return e(Object(o.Jf)(t))},setShowLFOs:function(t){return e(Object(o.Pf)(t))},setTypeDragging:function(t){return e(Object(o.ai)(t))},setUXLocked:function(t){return e(Object(o.xh)(t))},setShowModulators:function(t){return e(Object(o.Sf)(t))},setPresentationMode:function(t){return e(Object(o.pe)(t))}}})(function(e){var t=e.setPresentationMode,n=e.presentationMode,o=e.showPadSequencer,s=e.setShowEnvelopes,l=e.showLFOs,f=e.showEnvelopes,d=e.setShowLFOs,b=e.children,m=e.subpatch,g=e.subSequence,v=e.setTypeDragging,p=e.setUXLocked,O=(e.setShowModulators,e.uxLocked),E=Object(a.useState)(void 0),h=Object(r.a)(E,2),j=h[0],k=h[1],S=Object(a.useState)(void 0),w=Object(r.a)(S,2),y=w[0],q=w[1],x=Object(a.useRef)(0);Object(a.useEffect)(function(){return j?window.addEventListener("mouseup",M):window.removeEventListener("mouseup",M),function(){return window.removeEventListener("mouseup",M)}},[j,k]);var M=Object(a.useCallback)(function(){k(void 0)},[j,k]),C=Object(a.useCallback)(function(e){v(e),q(void 0),e.includes("LFO")||e.includes("MODULE_ENVELOPE")||k(void 0),x.current++},[k,q]),N=Object(a.useCallback)(function(e){var t=x.current;setTimeout(function(){t===x.current&&q(e)},250)},[q]),z=Object(a.useCallback)(function(){x.current++,q(void 0)},[]),D=Object(a.useCallback)(function(){p(!O)},[O]),P=Object(a.useCallback)(function(){t(!n)},[n]),R="",T=0;if(y)switch(y){case"zobject":R="Drag an object into the canvas",T=0;break;case"zmessage":R="Drag a message box into the canvas",T=1;break;case"zcomment":R="Drag a comment box into the canvas",T=2;break;case"zbutton":R="Drag a button into the canvas",T=3;break;case"ztoggle":R="Drag a toggle into the canvas",T=5;break;case"znumber":R="Drag a number button into the canvas",T=6;break;case"zpad":R="Drag a drum pad into the canvas",T=5;break;case"sequencer":R="Drag a step sequencer into the canvas",T=7;break;case"zlock":R="Toggle the UI to lock in place or be editable",T=8}var L="zobject-toolbar";return o&&(L+=" showing-pad-sequencer"),c.a.createElement("div",{className:L},y&&c.a.createElement("div",{className:"toolbar-tooltip",style:{left:25*T}},R),c.a.createElement(u,{onMouseOver:function(){return N("zobject")},onMouseLeave:z,hideOnPadSequencer:!0,draggable:"true",onDragStart:function(){return C("zobject")},src:"/zobject-light.svg"}),c.a.createElement(u,{onMouseLeave:z,hideOnPadSequencer:!0,onMouseOver:function(){return N("zmessage")},draggable:"true",onDragStart:function(){return C("zmessage")},src:"/zmessage-light.svg"}),c.a.createElement(u,{onMouseLeave:z,hideOnPadSequencer:!0,onMouseOver:function(){return N("zcomment")},draggable:"true",onDragStart:function(){return C("zcomment")},src:"/zcomment-light.svg"}),c.a.createElement(u,{draggable:"true",hideOnPadSequencer:!0,onMouseLeave:z,onMouseOver:function(){return N("zbutton")},onDragStart:function(){return C("zbutton")},src:"/zbutton-light.svg"}),c.a.createElement(u,{draggable:"true",onMouseLeave:z,hideOnPadSequencer:!0,onMouseOver:function(){return N("ztoggle")},onDragStart:function(){return C("ztoggle")},src:"/ztoggle-light.svg"}),c.a.createElement(u,{draggable:"true",onMouseLeave:z,hideOnPadSequencer:!0,onMouseOver:function(){return N("znumber")},onDragStart:function(){return C("znumber")},src:"/znumber-light.svg"}),!m&&c.a.createElement(u,{draggable:"true",onMouseLeave:z,hideOnPadSequencer:!0,onMouseOver:function(){return N("zpad")},onDragStart:function(){return C("zpad")},src:"/zpad-light.svg"}),!m&&c.a.createElement(u,{className:l?"expanded":"",expanded:l,draggable:"false",onClick:function(){return d(!l)},src:"/zlfo-light.svg"}),!m&&c.a.createElement(u,{draggable:"false",expanded:f,className:f?"expanded":"",onClick:function(){return s(!f)},src:"/zenvelope-light.svg"}),j&&c.a.createElement(i,{drag:C,subSequence:g,type:j}),c.a.createElement(u,{onClick:P,expanded:n,onMouseOver:function(){return N("zlock")},hideOnPadSequencer:!0,onMouseLeave:z,className:"presentation-icon",src:"/presentation-mode.svg"}),c.a.createElement(u,{onClick:D,onMouseOver:function(){return N("zlock")},hideOnPadSequencer:!0,onMouseLeave:z,expanded:O,src:O?"/zlock-closed.svg":"/zlock-open.svg"}),m&&b)})},2774:function(e,t,n){"use strict";var r=n(11),a=n(0),c=n.n(a),o=n(36),s=n(65),u=n(2727),i=n(12),l=n(164),f=n.n(l),d=n(47),b=n(30),m=n(59),g={},v=function(e){var t=e.annotation,n=e.style,u=Object(a.useState)(""),i=Object(r.a)(u,2),l=i[0],f=i[1],m=Object(a.useState)(""),v=Object(r.a)(m,2),p=v[0],O=v[1];return Object(a.useEffect)(function(){var e=o.a.utils.fromAscii(t.annotationData),n=Object(s.a)(e);g[n]?f(g[n]):d.a.getJson(n).then(function(e){g[n]=e,f(e)}),b.a.users.getUserName(t.address).then(function(e){return O(e)})},[t,f,O]),c.a.createElement("div",{style:n,className:"annotation"},c.a.createElement("div",{className:"author"},p,":"),c.a.createElement("div",{className:"content"},l))};t.a=Object(i.b)(function(e,t){return{numPending:e.transactions.pendingTransactions.length}},null)(function(e){var t=e.work,n=e.contentId,o=void 0===n?t&&t.newSequence:n,s=e.numPending,i=e.linkType,l=void 0===i?u.b:i,d=e.color,g=Object(a.useState)(""),p=Object(r.a)(g,2),O=p[0],E=p[1],h=Object(a.useState)(!1),j=Object(r.a)(h,2),k=(j[0],j[1]),S=Object(a.useState)([]),w=Object(r.a)(S,2),y=w[0],q=w[1],x=Object(a.useCallback)(function(e){E(e.target.value)},[E]),M=Object(a.useCallback)(function(){b.a.xanadu.newAnnotationContent(l,o,O).then(function(e){return k(!0)}),E(""),k(!0)},[o,O,E,k]);Object(a.useEffect)(function(){o&&b.a.xanadu.getAnnotations(l,o).then(function(e){q(e)})},[o,q,s]);var C={};return d&&(C.backgroundColor=d),c.a.createElement("div",null,c.a.createElement(m.g,{style:C,className:"annotation-text",onChange:x,type:"textarea",value:O}),c.a.createElement("div",{style:C,onClick:M,className:"submit-button"},"Annotate"),c.a.createElement("div",{style:C,className:"annotations"},c.a.createElement(f.a,{sizeUnit:"px",size:10,color:"#42f4f1",loading:s>0}),y.map(function(e){return c.a.createElement(v,{style:C,key:e.annotationData,annotation:e})})))})},2779:function(e,t,n){"use strict";var r=n(9),a=n(0),c=n.n(a),o=n(12);n(2822);function s(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,c=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw c}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i={0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"};t.a=Object(o.b)(function(e,t){return{}},function(e){return{}})(function(e){var t,n=e.currentMonth,a=e.onClickMonth,o=e.months,u=((new Date).getMonth(),(new Date).getFullYear()),l=[],f=Object.keys(o).map(function(e){return parseInt(e)}).sort(function(e,t){return t-e}),d=s(f=[].concat(Object(r.a)(f),Object(r.a)(f)).slice(0,12));try{for(d.s();!(t=d.n()).done;){var b=t.value;l.push({number:b,month:i[(12+b)%12],isCurrent:b===n}),b%12===0&&l.push({number:b-1,year:--u})}}catch(m){d.e(m)}finally{d.f()}return c.a.createElement("div",{className:"months"},l.map(function(e){var t=e.month,n=e.number,r=e.isCurrent,o=e.year;return o?c.a.createElement("div",{onClick:function(){return a(n)},className:"month year"},o):c.a.createElement("div",{onClick:function(){return a(n)},className:r?"month current":"month"},t)}))})},2786:function(e,t,n){"use strict";var r=n(9),a=n(99),c=n(0),o=n.n(c),s=(n(505),n(1482)),u=(n(743),n(1047),n(1110)),i=n(12);t.a=Object(i.b)(function(e,t){var n=t.track.effectRack&&t.track.effectRack.id;return{effects:e.pads.trackMidiEffects[t.track.id],isCollapsed:e.effects.effectCollapsed[n]}},function(e){return{}})(function(e){var t=e.track,n=(e.effects,e.isCollapsed),i=Object(a.a)(e,["track","effects","isCollapsed"]),l=Object(c.useCallback)(function(e){t.effectRack.deleteEffect(e),t.updateMidiEffectsRedux()},[]);return t.effectRack&&t.zObject&&!n?[o.a.createElement(s.a,Object.assign({isMidi:!0,key:5,pad:t},i)),,].concat(Object(r.a)(t.effectRack.effects.map(function(e){return o.a.createElement(u.a,Object.assign({onDelete:l,key:e.id,fx:e,rack:t.effectRack,showDelete:!0,sequencerEngine:t.sequencerEngine,pad:t},i))}))):[]})},2787:function(e,t,n){"use strict";var r=n(11),a=n(0),c=n.n(a),o=n(2754),s=(n(335),n(656),n(6)),u=n(12);n(2840);t.a=Object(u.b)(function(e,t){return{collapsed:e.pads.modulesCollapsed[t.subSequence.id],isCurrent:t.subSequence===t.subSequence.sequencerEngine.currentSubSequence}},function(e,t){return{setCollapsed:function(n){return e(Object(s.qd)(t.subSequence.id,n))},setModuleColor:function(n){return e(Object(s.rd)(t.subSequence.id,n))}}})(function(e){var t=e.subSequence,n=e.collapsed,s=e.isCurrent,u=e.setCollapsed,i=e.setModuleColor,l=Object(a.useState)(t.color),f=Object(r.a)(l,2),d=(f[0],f[1]),b=Object(a.useState)(!1),m=Object(r.a)(b,2),g=(m[0],m[1],Object(a.useCallback)(function(e){t.color=e.hex,d(e.hex),i(e.hex)},[t,d]),"module-tab grids-name");s&&(g+=" selected");var v=Object(a.useCallback)(function(){t.sequencerEngine.switchToSubSequence(t.id)},[t]);return c.a.createElement("div",{onMouseDown:v,className:g},t.name,!n&&c.a.createElement(o.a,{subSequence:t}),c.a.createElement("div",{onClick:function(){return u(!n)},className:"collapse-button"},c.a.createElement("div",{className:n?"arrow-left":"arrow-down"})))})},2788:function(e,t,n){"use strict";var r=n(8),a=n(0),c=n.n(a),o=(n(505),n(503)),s=n(371),u=n(372),i=n(260),l=n(6),f=n(665),d=n(12);t.a=Object(d.b)(function(e,t){return{coords:e.windows.windowPositions[t.pad.id],hidden:e.spatial.hiddenObjects[t.pad.id],isSelectedZObject:e.zobject.selectedZObject===t.pad,isSelected:e.windows.selectedElements[t.pad.id],isCurrent:t.pad.subSequence===t.pad.sequencerEngine.currentSubSequence,padsExpand:e.pads.padsExpand}},function(e){return{setSelectedZObject:function(t){return e(Object(l.uf)(t))}}})(function(e){var t=e.hidden,n=e.setOrdering,l=e.ordering,d=e.scale,b=e.pad,m=e.scrollContainer,g=e.elements,v=e.sizeRef,p=e.size,O=e.setSize,E=e.isCurrent,h=e.padsExpand,j=e.coords,k=e.isSelected,S=(e.setSelectedZObject,e.isSelectedZObject,Object(a.useRef)(void 0)),w=Object(i.a)({scale:d,ref:S,sequencerEngine:b.sequencerEngine,windowPosition:j,sizeRef:v,containerRef:m,size:p,setSize:O,elements:g,element:b,isPad:!0,expand:h,setOrdering:n,ordering:l}),y=w.style,q=w.onContextMenu,x=w.onMouseDown,M=w.onMouseUp;w.setCoords;Object(a.useEffect)(function(){j&&(b.x=j.x,b.y=j.y)},[j]);var C="pulled-pad";E&&(C+=" current"),k&&(C+=" selected");var N=Object(r.a)({},y);return j&&(N.left=j.x,N.top=j.y),h&&h.pad===b&&(C+=" expanded"),t?"":c.a.createElement("div",{style:N,onMouseDown:function(e){x(e)},onContextMenu:q,onMouseUp:M,ref:S,className:C},c.a.createElement(f.a,{isPulled:!0,scrollContainer:m,pad:b}),c.a.createElement(o.a,{isRoot:!0,useClick:!0,hideNumber:!0,sequencerEngine:b.sequencerEngine,node:b}),c.a.createElement(s.a,{effect:b}),c.a.createElement(u.a,{subSequence:b.subSequence,containerRef:m,effect:b}))})},2789:function(e,t,n){},2804:function(e,t,n){"use strict";var r=n(8),a=n(11),c=n(0),o=n.n(c),s=n(9),u=n(46),i=n(39),l=n.n(i),f=n(86),d=n(205),b=n(12),m=Object(b.b)(function(e,t){return{pulledEffects:e.effects.pulledEffects}},function(e){return{}})(function(e){var t=e.track,n=e.pulledEffects,r=Object(c.useState)(t.midiEffects.effects),i=Object(a.a)(r,2),b=i[0],m=i[1],g=Object(c.useCallback)(function(e){var n=Object(f.c)(e,t);t.sequencerEngine.operationManager.dispatch(Object(u.b)(n,t)),m(Object(s.a)(t.midiEffects.effects))},[m,b,t]),v=Object(c.useCallback)(function(){m(Object(s.a)(t.midiEffects.effects))},[b,m]);return o.a.createElement("div",{className:"effects-overview"},b.map(function(e){return o.a.createElement(d.a,{sequencerEngine:t.sequencerEngine,isPulled:n.includes(e),key:e.id,onDeleteEffect:v,effect:e,track:t,tracks:t.sequencerEngine.tracks,onEffectsChange:function(){return[]}})}),o.a.createElement("div",{className:"add-effect-type"},o.a.createElement(l.a,{className:"delay-time-dropdown",option:void 0,options:f.e,onChange:function(e){return g(e.value)},placeholder:"MIDI FX"})))}),g=n(1376),v=n(740),p=n(69),O=n(55),E=Object(b.b)(function(e,t){return{}},function(e){return{}})(function(e){var t=e.track,n=Object(c.useRef)(void 0),r="";return t.getTrackType()===O.f?r=o.a.createElement(g.a,{div:n,pad:t,_track:t}):t.getTrackType()===O.b&&t.getInstrumentType()===p.f&&(r=o.a.createElement(v.a,{sequencerEngine:t.sequencerEngine,track:t,instrument:t.instrument})),o.a.createElement("div",{ref:n,className:"instrument-overview"},r)}),h=n(261),j=Object(b.b)(function(e,t){return{pulledEffects:e.effects.pulledEffects}},function(e){return{}})(function(e){var t=e.track,n=e.pulledEffects,r=Object(c.useState)(t.effects),i=Object(a.a)(r,2),d=i[0],b=i[1],m=Object(c.useCallback)(function(e){var n=Object(f.b)(e,t.sequencerEngine);n.enable(!0),t.sequencerEngine.operationManager.dispatch(Object(u.b)(n,t)),b(Object(s.a)(t.effects))},[b,d,t]),g=Object(c.useCallback)(function(){b(Object(s.a)(t.effects))},[d,b]);return o.a.createElement("div",{className:"effects-overview"},d.map(function(e){return o.a.createElement(h.a,{sequencerEngine:t.sequencerEngine,isPulled:n.includes(e),key:e.id,onDeleteEffect:g,effect:e,track:t,tracks:t.sequencerEngine.tracks,onEffectsChange:function(){return[]}})}),o.a.createElement("div",{className:"add-effect-type"},o.a.createElement(l.a,{className:"delay-time-dropdown",option:void 0,options:f.a,onChange:function(e){return m(e.value)},placeholder:"Audio FX"})))}),k=n(694),S=n(6),w=Object(b.b)(function(e,t){var n=t.track;n&&n.tracks&&n.tracks[0]&&(n=n.tracks[0].track);var r=e.mix.selectedTrack===t.track.trackNumber&&t.track.sequencerEngine.currentSubSequence===t.track.subSequence,a=(e.tracks.trackIsEnabled[t.track.subSequence.id]||{})[t.track.id];return{isSelected:r,id:void 0===n?0:void 0!==n.sample&&void 0!==n.sample.getId()?n.sample.getId():n.presetName||n.getName(),isEnabled:a,numEffects:n.effects.length}},function(e){return{setTrackDragging:function(t){return e(Object(S.Sg)(t))}}})(function(e){var t=e.track,n=e.isSelected,r=e.isEnabled,s=e.setTrackDragging,u=e.setExpandTrack,i=e.numEffects,l=Object(k.a)(t,t.sample),f=Object(c.useState)(void 0),d=Object(a.a)(f,2),b=d[0],g=d[1],v="tr-overview";n&&(v+=" selected"),Object(c.useEffect)(function(){u(b?{id:t.id,numEffects:i}:void 0)},[i,b,u,t]);var p=Object(c.useCallback)(function(){t.sequencerEngine.selectTrack(t.trackNumber)},[t]);return o.a.createElement("div",{onClick:p,className:v},o.a.createElement("div",{className:"tr-inner"},o.a.createElement("div",{className:"track-number"},t.trackNumber+1),o.a.createElement("div",{onClick:function(){return t.toggleEnabled()},className:r?"dot enabled":"dot"}),o.a.createElement("div",{onClick:function(){return g("M_FX"===b?void 0:"M_FX")},className:"M_FX"===b?"m-fx showing":"m-fx"},"m. fx"),o.a.createElement("img",{className:"right-arr",src:"/right-arrow.svg"}),o.a.createElement("div",{draggable:!0,onMouseDown:function(e){return e.stopPropagation()},onDragStart:function(e){e.stopPropagation(),s(t)},onDragOver:function(e){return e.preventDefault()},onClick:function(){return g("INST"===b?void 0:"INST")},style:{backgroundColor:t.color},className:"INST"===b?"inst showing":"inst"},l),o.a.createElement("img",{className:"right-arr",src:"/right-arrow.svg"}),o.a.createElement("div",{onClick:function(){return g("A_FX"===b?void 0:"A_FX")},className:"A_FX"===b?"a-fx showing":"a-fx"},"fx")),"INST"===b&&o.a.createElement(E,{track:t}),"A_FX"===b&&o.a.createElement(j,{track:t}),"M_FX"===b&&o.a.createElement(m,{track:t}))}),y=n(260);n(2839),Object(b.b)(function(e,t){return{coords:e.windows.windowPositions[t.subSequence.id],numTracks:t.subSequence.tracks&&t.subSequence.tracks.length}},function(e){return{}})(function(e){var t=e.setOrdering,n=e.ordering,s=e.scale,u=e.subSequence,i=e.scrollContainer,l=e.elements,f=e.sizeRef,d=e.size,b=e.setSize,m=(e.isCurrent,e.padsExpand,e.coords),g=(e.isSelected,Object(c.useRef)(void 0)),v=Object(c.useState)(void 0),p=Object(a.a)(v,2),O=p[0],E=p[1],h=Object(y.a)({scale:s,ref:g,sequencerEngine:u.sequencerEngine,windowPosition:m,sizeRef:f,expand:O?u.tracks.length+O.id+O.numEffects:u.tracks.length,containerRef:i,size:d,setSize:b,elements:l,element:u,setOrdering:t,ordering:n}),j=h.style,k=(h.onContextMenu,h.onMouseDown),S=h.onMouseUp;h.setCoords;Object(c.useEffect)(function(){m&&(u.x=m.x,u.y=m.y)},[m]);var q=Object(r.a)({},j);return m&&(q=Object(r.a)({},j,{top:m.y,left:m.x})),o.a.createElement("div",{style:q,className:"module-overview",onMouseDown:k,onMouseUp:S,ref:g},u.tracks.map(function(e){return o.a.createElement(w,{setExpandTrack:E,track:e})}))})},2808:function(e,t,n){"use strict";var r=n(9),a=n(8),c=n(11),o=n(0),s=n.n(o),u=(n(2804),n(1087)),i=n(2786),l=n(2787),f=n(208),d=n(1089),b=n(6),m=n(1088),g=n(1103),v=n(1093),p=n(1109),O=n(2788),E=(n(2741),n(657)),h=n(2737),j=n(86),k=n(203),S=n(244),w=n(139),y=n(2740),q=n(204),x=n(12);function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-40,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6,r=arguments.length>3?arguments[3]:void 0,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-40,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6;return(e-t)/(n-t)}(e,t,n,r);return r*Math.pow(a,2)}var C=function(e,t){return Math.abs(e.y-t.y)},N=Object(x.b)(function(e,t){return{playing:t.track.notesTriggered&&Object.keys(t.track.notesTriggered).length>0,notesTriggered:t.track.notesTriggered,disabled:t.track.disabled,volume:t.track.sequencerEngine.playing?t.track.pattern.volume:t.track.volumeParameter.get()}},function(e){return{setParameterSliderDown:function(t){return e(Object(b.Sd)(t))}}})(function(e){var t=e.track,n=e.playing,r=e.notesTriggered,a=e.setParameterSliderDown,u=e.toggled,i=e.setSelectedTrack,l=t.disabled,f=Object(o.useState)(!0),d=Object(c.a)(f,2),b=d[0],m=(d[1],Object(o.useRef)(void 0)),g=Object(o.useState)(void 0),v=Object(c.a)(g,2),p=v[0],O=v[1],E=Object(o.useState)(!1),h=Object(c.a)(E,2),j=h[0],k=h[1],S=Object(o.useState)(!1),w=Object(c.a)(S,2),y=w[0],x=w[1],N=Object(o.useRef)(0),z="grid";n&&(z+=" pressed"),l&&(z+=" disabled");var D={},P=r&&Object.keys(r)[0];P&&(P=parseInt(P),D.filter="hue-rotate("+4*P+"deg)");var R=Object(o.useCallback)(function(e){if(j){e.preventDefault(),e.stopPropagation();var n=e.clientY;e.touches&&(n=e.touches[0].clientY);var r=m.current.getBoundingClientRect(),a=m.current.offsetHeight,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-40,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6,r=arguments.length>3?arguments[3]:void 0,a=(e=Math.min(Math.max(0,e),r))/r,c=Math.pow(a,.5);return t+(n-t)*c}(a-(n-r.top),-65,6,a);t.setVolume(c,!1,!1),x({x:e.clientX,y:e.clientY})}},[x,j,t]),T={height:M(t.volumeParameter.get(),-65,6,m.current&&m.current.offsetHeight)},L=Object(o.useCallback)(function(e){u?i(t):(a(t.volumeParameter),k(!0),O({x:e.clientX,y:e.clientY}),N.current=(new Date).getTime())},[k,O,u,i,t]),A=Object(o.useCallback)(function(e){var n=(new Date).getTime();y&&C(p,y),(!y||C(p,y)<=8)&&n-N.current<250&&(t.disabled=!t.disabled),x(void 0),k(!1),a(void 0)},[x,k,y,p]);return Object(o.useEffect)(function(){m.current.addEventListener("touchmove",R,{capture:!0})},[R,x,j,t]),s.a.createElement("div",{ref:m,onMouseMove:R,onMouseDown:L,onTouchStart:L,onMouseUp:A,onMouseLeave:function(){k(!1),x(void 0),a(void 0)},style:D,className:z},b?s.a.createElement(q.a,{onMouseDown:function(e){return e.stopPropagation()},showPresetName:!0,track:t}):"",s.a.createElement("div",{className:j?"volume-indicator":"volume-indicator skinny",style:T}))});n(2789);function z(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,c=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw c}}}}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.a=Object(x.b)(function(e,t){return{pulledEffects:e.effects.pulledEffects,pulledSequencers:e.pads.sequencers,numTracks:t.subSequence.tracks&&t.subSequence.tracks.length,collapsed:e.pads.modulesCollapsed[t.subSequence.id]}},function(e){return{setPulledEffects:function(t){return e(Object(b.we)(t))},setSelectedPulledElements:function(t){return e(Object(b.mf)(t))},setSize:function(t){return e(Object(b.sd)(5,t))}}})(function(e){var t=e.setSize,n=e.isExplore,b=e.scale,q=(e.showEffects,e.pulledEffects),x=e.setPulledEffects,M=e.setSelectedPulledElements,C=e.toggled,D=e.setSelectedTrack,P=e.subSequence,R=e.collapsed,T=Object(o.useRef)(void 0),L=Object(o.useRef)({}),A=Object(k.a)({ref:T}),I=A.onContextMenu,F=A.dropdownPos,U=(A.setDropdowPos,Object(E.a)({ref:T})),X=U.sizeRef,_=U.ordering,J=U.setOrdering,Y=Object(o.useRef)(F),W={width:500,height:500},Z=Object(h.a)({ref:T,elements:L,subSequence:P,size:W}).arrangeWindows,B=Object(o.useState)(void 0),G=Object(c.a)(B,2),H=G[0],V=G[1],Q=Object(f.a)({containerRef:T,scale:b}).getXY,$=Object(d.a)({elements:L}).getSelection,K=Object(o.useCallback)(function(e){var t=Q(e),n=t.x,r=t.y;V({x1:n,y1:r,x2:n,y2:r})},[V,b]),ee=Object(o.useCallback)(function(e){var t=Q(e),n=t.x,r=t.y;V(Object(a.a)({},H,{x2:n,y2:r}))},[H,V,b]),te=Object(o.useCallback)(function(e){if(H&&H.x2-H.x1>1){var t,n={},r=z($(H));try{for(r.s();!(t=r.n()).done;)n[t.value.id]=!0}catch(a){r.e(a)}finally{r.f()}M(n)}H&&V(void 0)},[H,V]);Object(o.useEffect)(function(){F&&(Y.current=F)},[F]);var ne=[0,1,2],re=P.tracks,ae=void 0===re?[]:re;ae=ae.filter(function(e){return n||void 0===e.pad});var ce=Object(o.useCallback)(function(e){var t=Object(j.c)(e,P),n=Y.current,a=n.x,c=n.y;t.x=a,t.y=c,P.midiEffects.addEffect(t),x([].concat(Object(r.a)(q),[t]))},[P,q]),oe=Object(o.useCallback)(function(e){P.sequencerEngine.switchToSubSequence(P.id)},[P]),se=Object(o.useCallback)(function(){var e=P.createSequencer(),t=Y.current,n=t.x,r=t.y;e.x=n,e.y=r},[P]),ue=Object(o.useCallback)(function(){var e=P.createPad(),t=Y.current,n=t.x,r=t.y;e.x=n,e.y=r},[P]);if(!P||!P.tracks)return[];var ie=s.a.createElement("div",null,!n&&s.a.createElement(m.a,{selection:H,scale:b,elements:L,containerRef:T}),s.a.createElement(S.a,{className:"midi-context",dropdownPos:F?{x:F.x/b,y:F.y/b}:void 0},s.a.createElement(w.a,{onMouseDown:se},"New Sequencer"),s.a.createElement(w.a,{onMouseDown:ue},"New Pad"),s.a.createElement(w.a,{onMouseDown:Z},"Arrange Windows"),s.a.createElement("div",{className:"context-divider"}),j.e.map(function(e){var t=e.label,n=e.value;return s.a.createElement(w.a,{onMouseDown:function(){return ce(n)}},t)})),n&&s.a.createElement("div",{className:"grid-rows"},[0,1,2,3,4].map(function(e){return s.a.createElement("div",{key:e,className:"grid-row"},ne.map(function(t){return ae[3*e+t]?s.a.createElement(N,{scale:b,toggled:C,setSelectedTrack:D,key:3*e+t,track:ae[3*e+t],row:e,col:t}):""}))})),s.a.createElement(y.a,{scale:b,sizeRef:X,setSize:t,size:W,ordering:_,setOrdering:J,playhead:!0,elements:L,containerRef:T,noWrapper:!0,sequencerEngine:P.sequencerEngine,subSequence:P}),!n&&P.pads.map(function(e){return s.a.createElement(O.a,{key:e.id,scale:b,size:W,ordering:_,setOrdering:J,setSize:t,sizeRef:X,elements:L,scrollContainer:T,pad:e})}),!n&&s.a.createElement(v.a,{containerRef:T,scale:b,subSequence:P}),!n&&P.tracks.map(function(e){return s.a.createElement(i.a,{scale:b,ordering:_,setOrdering:J,size:W,setSize:t,sizeRef:X,elements:L,containerRef:T,track:e})}),!n&&P.pads.filter(function(e){return e.effectRack}).map(function(e){return s.a.createElement(g.a,{scale:b,ordering:_,setOrdering:J,size:W,setSize:t,sizeRef:X,elements:L,containerRef:T,pad:e})}),!n&&P.sequencers.map(function(e){return s.a.createElement(p.a,{ordering:_,setOrdering:J,scrollContainer:T,scale:b,size:W,setSize:t,sizeRef:X,elements:L,sequencer:e})}));return s.a.createElement("div",{onClick:oe,onMouseDown:K,onMouseMove:ee,onMouseUp:te,onContextMenu:I,className:R?"grids collapsed":"grids not-collapsed"},s.a.createElement(l.a,{subSequence:P}),s.a.createElement("div",{ref:T,style:{},className:"grids-inner"},R?s.a.createElement(u.a,{subSequence:P}):ie))})},2822:function(e,t,n){},2839:function(e,t,n){},2840:function(e,t,n){}}]);
//# sourceMappingURL=0.350e4529.chunk.js.map