(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{2818:function(e,t,n){"use strict";(function(e){var a=n(5),s=n.n(a),r=n(14),o=n(2),i=n(4),c=n(30),l=n(36),u=n(47),d=n(351),p=n.n(d),f=(n(289),n(229)),h=p()("localhost","5001",{protocol:"http"});Date.prototype.formatMMDDYYYY=function(){return this.getMonth()+1+"/"+this.getDate()+"/"+this.getFullYear()};var v=function(){function e(t,n,a){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];Object(o.a)(this,e),this.contract=new l.a.eth.Contract(t.abi,t.contractAddress),this.topics=n,this.ipfsIndex=a,this.pinningSounds=new Set,this.pinnedSounds=new Set,this.failedSounds=new Set,this.queuedSounds=new Set,this.providedSounds=0,this.provide=s,this.byChunks=r,this.badBlockRanges=[],this.localRefs=new Set,this.currentBlockDate=new Date,this.yo()}return Object(i.a)(e,[{key:"getStats",value:function(){return{date:this.currentBlockDate,pinned:this.pinnedSounds,pinning:this.pinningSounds,local:this.localRefs,queued:this.queuedSounds,failed:this.failedSounds}}},{key:"yo",value:function(){var e=Object(r.a)(s.a.mark(function e(){var t=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("getting ipfs refs"),h.refs.local(function(e,n){e||(console.log(e),console.log("ipfs local returned"),console.log(n),t.localRefs=new Set(n.map(function(e){return e.Ref})))});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"watchAndPin",value:function(){var e=this;l.a.eth.subscribe("logs",{address:this.contract.options.address,topics:this.topics,fromBlock:"0x1"},function(t,n){t?console.log(t):void 0!==n&&null!=n?(console.log("got a log to pin!"),e.robustPin(g(n.topics[e.ipfsIndex]))):console.log("there was nothing...")})}},{key:"pinAll",value:function(){var e=Object(r.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.eth.getBlockNumber();case 2:t=e.sent,console.log("BLOCK NUMBER RETURNED ="+t),this.pinAllHelper(3e6,t,7e4);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"pinAllHelper",value:function(){var e=Object(r.a)(s.a.mark(function e(t,n,a){var r,o,i,c,l,u=arguments;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u.length>3&&void 0!==u[3])||u[3],r=[],console.log("pin all called"),this.byChunks){e.next=7;break}this.pinFromBlockToBlock(1,void 0),e.next=37;break;case 7:o=n,console.log("block number = "+o);case 9:if(!(o>=t)){e.next=27;break}return e.prev=10,e.next=13,this.pinFromBlockToBlock(o-a,o);case 13:return e.next=15,this.sleep(550);case 15:e.next=24;break;case 17:e.prev=17,e.t0=e.catch(10),console.log("encountered error while pinning blockNumber = "+o),console.log(e.t0),r.push(o),console.log("bad block ranges = "),console.log(r);case 24:o-=a,e.next=9;break;case 27:console.log("completed"),e.t1=s.a.keys(r);case 29:if((e.t2=e.t1()).done){e.next=37;break}return i=e.t2.value,c=r[i]-a,l=r[i],e.next=35,this.pinAllHelper(c,l,Math.ceil(a/2),!1);case 35:e.next=29;break;case 37:case"end":return e.stop()}},e,this,[[10,17]])}));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"pinFromBlockToBlock",value:function(){var e=Object(r.a)(s.a.mark(function e(t,n){var a=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Date,e.next=3,l.a.eth.getBlock(t);case 3:return e.t1=e.sent.timestamp,e.t2=1e3*e.t1,this.currentBlockDate=new e.t0(e.t2),e.abrupt("return",new Promise(function(e,o){try{l.a.eth.getPastLogs({address:a.contract.options.address,topics:a.topics,toBlock:l.a.utils.toHex(n),fromBlock:l.a.utils.toHex(t)},function(){var t=Object(r.a)(s.a.mark(function t(n,r){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=4;break}return console.log("GOT ERROR WHILE GETTING PAST LOGS!"),o(),t.abrupt("return");case 4:return r.reverse(),r.length>0&&console.log("got "+r.length+" many files to pin in this range"),t.next=8,a.pinHashes(r.map(function(e){return e.topics[a.ipfsIndex]}).map(function(e){return g(e)}));case 8:e();case 9:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}())}catch(i){console.log(i),o(i)}}));case 7:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"sleep",value:function(e){return new Promise(function(t,n){setTimeout(function(){t()},e)})}},{key:"pinHashes",value:function(){var e=Object(r.a)(s.a.mark(function e(t){var n,a,r,o,i,c,l,u=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:void 0!==this.localRefs.has?t=t.filter(function(e){return!u.localRefs.has(e)}):console.log("didnt have local ref"),(t=Array.from(new Set(t))).forEach(function(e){return u.queuedSounds.add(e)}),n=[],a=8,r=0;case 6:if(!(r<t.length)){e.next=26;break}for(o=[],e.prev=8,i=[],c=r;c<r+a&&c<t.length;c++)o.push(t[c]),i.push(this.pin(t[c]));return e.next=13,Promise.all(i);case 13:return e.next=15,this.sleep(100);case 15:e.sent,e.next=23;break;case 18:for(l in e.prev=18,e.t0=e.catch(8),console.log("IMPORTANT ERROR had err = "+e.t0),n=n.concat(o))this.failedSounds.add(n[l]),this.pinningSounds.has(n[l])&&this.pinningSounds.delete(n[l]);case 23:r+=a,e.next=6;break;case 26:case"end":return e.stop()}},e,this,[[8,18]])}));return function(t){return e.apply(this,arguments)}}()},{key:"robustPin",value:function(){var e=Object(r.a)(s.a.mark(function e(t){var n=arguments;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.length>1&&void 0!==n[1]?n[1]:0,e.prev=1,console.log("pinning "+t),e.next=5,this.pin(t);case 5:e.sent,e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("had error pinning = "),console.log(e.t0);case 12:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()},{key:"pin",value:function(e){var t=this;return new Promise(function(){var n=Object(r.a)(s.a.mark(function n(a,o){var i,l;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(i="",t.pinningSounds.add(e),t.queuedSounds.delete(e),t.pinningSounds.size%20!==0){n.next=7;break}return n.next=6,c.a.getTitleForSound(e);case 6:i=n.sent;case 7:return l=!1,setTimeout(function(){l?a():o("timed out so failing")},6e4),""!==i&&console.log("pinning i = "+t.pinningSounds.size+" "+i),n.prev=10,n.next=13,u.a.getSound(e,3e4);case 13:n.sent,n.next=21;break;case 16:return n.prev=16,n.t0=n.catch(10),console.log("rejected the sound!"),o(n.t0),n.abrupt("return");case 21:h.pin.add(e,function(){var n=Object(r.a)(s.a.mark(function n(r,c){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r?o(r):(t.pinnedSounds.add(e),t.pinningSounds.delete(e),t.failedSounds.has(e)&&t.failedSounds.delete(e),console.log("pinned i = "+t.pinnedSounds.size+" "+i+" (failures = "+t.failedSounds.size+")"),t.provide?h.dht.provide(e,function(n,s){n?(console.log("error providing "),console.log(n),o(n)):(t.providedSounds++,console.log("provided i ="+t.providedSounds+" "+e),l=!0,a(e))}):(l=!0,a(e)));case 1:case"end":return n.stop()}},n)}));return function(e,t){return n.apply(this,arguments)}}());case 22:case"end":return n.stop()}},n,null,[[10,16]])}));return function(e,t){return n.apply(this,arguments)}}())}}]),e}();function g(t){var n=new e(t.replace(/^0x/,"1220"),"hex");return f.encode(n)}t.a=v}).call(this,n(27).Buffer)},2819:function(e,t,n){},2900:function(e,t,n){"use strict";n.r(t);var a=n(5),s=n.n(a),r=n(14),o=n(2),i=n(4),c=n(7),l=n(10),u=n(1),d=n(2818),p=n(1545),f=n(36),h=new p.a,v=function(){function e(){Object(o.a)(this,e),console.log("constructing pinner"),this.samplesPinner=new d.a(h,[f.a.utils.sha3("SampleCreated(address,bytes32,string)"),null,null],2,!1,!0)}return Object(i.a)(e,[{key:"pinAll",value:function(){this.samplesPinner.pinAll()}},{key:"getStats",value:function(){return this.samplesPinner.getStats()}}]),e}(),g=n(0),m=n.n(g),w=n(38),k=n(30),b=n(47);n(2819);function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(u.a)(e);if(t){var s=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,s)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var x=function(e){Object(c.a)(n,e);var t=S(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={downloading:!1,stats:{date:new Date,local:new Set,pinned:new Set,pinning:new Set,failed:new Set,queued:new Set},counter:0,filesDownloading:{},tagsDownloading:{},notConnected:!1},a.samplesPinner=new v,setTimeout(function(){a.setState({notConnected:!b.a.isConnectedLocally()})},15e3),a}return Object(i.a)(n,[{key:"onClickStart",value:function(){var e=this;this.setState({downloading:!0}),this.samplesPinner.pinAll(),this.interval=setInterval(Object(r.a)(s.a.mark(function t(){var n,a,r,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=e.samplesPinner.getStats(),a=Array.from(n.pinning),t.t0=s.a.keys(a);case 3:if((t.t1=t.t0()).done){t.next=16;break}if(r=t.t1.value,!((o=a[r])in e.state.filesDownloading)){t.next=8;break}return t.abrupt("continue",3);case 8:return t.next=10,k.a.getTitleForSound(o);case 10:return e.state.filesDownloading[o]=t.sent,t.next=13,k.a.getTagsForSound(o);case 13:e.state.tagsDownloading[o]=t.sent,t.next=3;break;case 16:e.state.counter++,e.state.stats=n,e.setState(e.state);case 19:case"end":return t.stop()}},t)})),500)}},{key:"render",value:function(){for(var e=this,t=Array.from(this.state.stats.pinning),n=[],a=0;a<350;a++)n.push(0);return this.state.notConnected?m.a.createElement("div",{className:"downloader"},m.a.createElement("div",{className:"title"},"Universal Sequences Downloader"),m.a.createElement("div",{className:"action"},"In order to download files onto your computer, please run ",m.a.createElement("a",{href:"https://github.com/ipfs-shipyard/ipfs-desktop"},"IPFS"))):m.a.createElement("div",{className:"downloader"},m.a.createElement("div",{className:"title"},"Universal Sequences Downloader"),m.a.createElement("div",{className:"divider"},n.map(function(t,a){return e.state.counter%n.length===a?m.a.createElement("span",{className:"current"},"/"):"/"})),m.a.createElement(w.a,{condition:!this.state.downloading},m.a.createElement("div",{onClick:function(){return e.onClickStart()},className:"download-start-button"},"Start")),m.a.createElement(w.a,{condition:this.state.downloading&&this.state.stats},m.a.createElement("div",null,"Downloaded up to: ",m.a.createElement("span",{className:"date"},this.state.stats.date.toString())),m.a.createElement("div",null,"Downloaded: ",this.state.stats.pinned.size," "),m.a.createElement("div",null,"Queued: ",this.state.stats.queued.size," "),m.a.createElement("div",null,"Failed : ",this.state.stats.failed.size),m.a.createElement("div",{className:"divider"},n.map(function(e){return"/"})),m.a.createElement("div",null,"Downloading: ",m.a.createElement("span",{className:"file-name"},this.state.stats.pinning.size)),t.map(function(t){return m.a.createElement("div",null,m.a.createElement("span",{className:"action"},"Downloading")," ",m.a.createElement("span",{className:"file-name"},e.state.filesDownloading[t],"..."),(e.state.tagsDownloading[t]||[]).map(function(e){return m.a.createElement("span",{className:"tag"},e)}))}),m.a.createElement("div",{className:"divider"},n.map(function(e){return"/"})),m.a.createElement("div",null,"Local: ",this.state.stats.local.size)))}}]),n}(g.Component);t.default=x}}]);
//# sourceMappingURL=16.ce672eb6.chunk.js.map