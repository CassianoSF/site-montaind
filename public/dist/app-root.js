(function(a){var c={};function j(b){if(c[b])return c[b].exports;var k=c[b]={i:b,l:!1,exports:{}};return a[b].call(k.exports,k,k.exports,j),k.l=!0,k.exports}return j.m=a,j.c=c,j.d=function(b,k,l){j.o(b,k)||Object.defineProperty(b,k,{enumerable:!0,get:l})},j.r=function(b){typeof Symbol!=="undefined"&&Symbol.toStringTag&&Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(b,"__esModule",{value:!0})},j.t=function(b,k){k&1&&(b=j(b));if(k&8)return b;if(k&4&&typeof b==="object"&&b&&b.__esModule)return b;var l=Object.create(null);j.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:b});if(k&2&&typeof b!="string")for(var e in b)j.d(l,e,function(g){return b[g]}.bind(null,e));return l},j.n=function(b){var k=b&&b.__esModule?function l(){return b.default}:function l(){return b};return j.d(k,"a",k),k},j.o=function(b,k){return Object.prototype.hasOwnProperty.call(b,k)},j.p="",j(j.s=0)})([function(a,c,j){j.r(c);var b=j(1),k=j(12),l=j(13),e=j(14),g=j(15),m=j(16),i=j(7),f=j(9);j.d(c,"createLiveFragment",function(){return f.createLiveFragment}),j.d(c,"createIndexedFragment",function(){return f.createIndexedFragment}),j.d(c,"createKeyedFragment",function(){return f.createKeyedFragment})},function(a,c,j){j.r(c);var b=j(2),k=j(3),l=j(4),e=j(5),g=j(7),m=j(9),i=j(10),f=j(11);function n(o,q){var t=Object.getOwnPropertyDescriptors(q);return Object.defineProperties(o.prototype,t),o}var d=typeof window!=="undefined"?window:typeof globalThis!=="undefined"?globalThis:null,h={version:"2.0.0",global:d,ctx:null,document:d.document};d.imba=h,d.customElements||(d.customElements={define:function(){return!0},get:function(){return!0}}),h.setTimeout=function(o,q){return setTimeout(function(){return o(),h.$commit()},q)},h.setInterval=function(o,q){return setInterval(function(){return o(),h.$commit()},q)},h.clearInterval=d.clearInterval,h.clearTimeout=d.clearTimeout,Object.defineProperty(h,"flags",{get:function(){return h.document.documentElement.classList}}),h.q$=function(o,q){return(q instanceof Element?q:document).querySelector(o)},h.q$$=function(o,q){return(q instanceof Element?q:document).querySelectorAll(o)};const p={cm:1,mm:1,Q:1,pc:1,pt:1,px:1,em:1,ex:1,ch:1,rem:1,vw:1,vh:1,vmin:1,vmax:1,s:1,ms:1,fr:1,"%":1,in:1,turn:1,grad:1,rad:1,deg:1,Hz:1,kHz:1},r={prefix:1,suffix:1,content:1},u=/^([xyz])$/,s=/^([tlbr]|size|[whtlbr]|[mps][tlbrxy]?|[rcxy]?[gs])$/;h.toStyleValue=function(o,q,t){r[t]&&(o=String(o));let v=typeof o;if(v=="number"){q||(u.test(t)?q="px":s.test(t)?q="u":t=="rotate"&&(q="turn"));if(q)return p[q]?o+q:q=="u"?o*4+"px":"calc(var(--u_"+q+",1px) * "+o+")"}else v=="string"&&t&&(r[t]&&o[0]!='"'&&o[0]!="'"&&(o.indexOf('"')>=0?o.indexOf("'")==-1&&(o="'"+o+"'"):o='"'+o+'"'));return o},h.inlineStyles=function(o,q){b.register(o,q);return};var y=/-./g;h.toCamelCase=function(o){return o.indexOf("-")>=0?o.replace(y,function(q){return q.charAt(1).toUpperCase()}):o};var C=function(o,q,t){let v,w,x;for(;(v=t)&&(t=t.next);)(w=t.listener)&&(t.path&&w[t.path]?x=q?w[t.path].apply(w,q):w[t.path]():x=q?w.apply(t,q):w.call(t)),t.times&&--t.times<=0&&(v.next=t.next,t.listener=null);return};h.listen=function(o,q,t,v){let w,x,E;return w=o.__listeners__||(o.__listeners__={}),x=w[q]||(w[q]={}),E=x.tail||(x.tail=x.next={}),E.listener=t,E.path=v,x.tail=E.next={},E},h.once=function(o,q,t){let v=h.listen(o,q,t);return v.times=1,v},h.unlisten=function(o,q,t,v){let w,x,E=o.__listeners__;if(!E)return;if(w=E[q]){for(;(x=w)&&(w=w.next);)if(w==t||w.listener==t){x.next=w.next,w.listener=null;break}}return},h.emit=function(o,q,t){var v;(v=o.__listeners__)&&(v[q]&&C(q,t,v[q]),v.all&&C(q,[q,t],v.all));return},h.scheduler=new l.Scheduler(),h.$commit=function(){return h.scheduler.add("render")},h.commit=function(){return h.scheduler.add("render"),h.scheduler.promise},h.tick=function(){return h.commit(),h.scheduler.promise},h.mount=function(o,q){let t=q||document.body,v=o;if(o instanceof Function){let w={_:t},x=function(){return h.ctx=w,o(w)};v=x(),h.scheduler.listen("render",x)}else v.__F|=64;return t.appendChild(v)};var A={get(o,q){let t=o,v;for(;t&&v==void 0;)(t=t.$parent)&&(v=t[q]);return v}};n(Node,{get $context(){return this.$context_||(this.$context_=new Proxy(this,A))},get $parent(){return this.up$||this.parentNode},init$(){return this},replaceWith$(o){return!(o instanceof Node)&&o.replace$?o.replace$(this):this.parentNode.replaceChild(o,this),o},insertInto$(o){return o.appendChild$(this),this},insertBefore$(o,q){return this.insertBefore(o,q)},insertBeforeBegin$(o){return this.parentNode.insertBefore(o,this)},insertAfterEnd$(o){return this.nextSibling?this.nextSibling.insertBeforeBegin$(o):this.parentNode.appendChild(o)},insertAfterBegin$(o){return this.childNodes[0]?this.childNodes[0].insertBeforeBegin$(o):this.appendChild(o)}}),n(Comment,{replaceWith$(o){return o&&o.joinBefore$?o.joinBefore$(this):this.parentNode.insertBefore$(o,this),this.parentNode.removeChild(this),o}}),n(Element,{log(...o){return console.log(...o),this},emit(o,q,t={bubbles:!0}){q!=void 0&&(t.detail=q);let v=new CustomEvent(o,t),w=this.dispatchEvent(v);return v},slot$(o,q){return this},on$(o,q,t){let v="on$"+o,w;this[v]instanceof Function&&(w=this[v](q,t)),w=new e.EventHandler(q,t);let x=q.capture,E=q.passive,G=x;return E&&(G={passive:E,capture:x}),/^(pointerdrag|touch)$/.test(o)&&(w.type=o,o="pointerdown"),this.addEventListener(o,w,G),w},text$(o){return this.textContent=o,this},insert$(o,q,t){let v=typeof o;if(v==="undefined"||o===null){if(t&&t instanceof Comment)return t;let w=document.createComment("");return t?t.replaceWith$(w):w.insertInto$(this),w}if(o===t)return o;if(v!=="object"){let w,x=o;if(q&128&&q&256){this.textContent=x;return}return t?t instanceof Text?(t.textContent=x,t):(w=document.createTextNode(x),t.replaceWith$(w,this),w):(this.appendChild$(w=document.createTextNode(x)),w)}else return t?t.replaceWith$(o,this):o.insertInto$(this),o},get flags(){return this.$flags||(this.$flags=new k.Flags(this),this.flag$==Element.prototype.flag$&&(this.flags$ext=this.className),this.flagDeopt$()),this.$flags},flag$(o){let q=this.flags$ns;this.className=q?q+(this.flags$ext=o):this.flags$ext=o;return},flagDeopt$(){var o=this;this.flag$=this.flagExt$,this.flagSelf$=function(q){return o.flagSync$(o.flags$own=q)};return},flagExt$(o){return this.flagSync$(this.flags$ext=o)},flagSelf$(o){return this.flagDeopt$(),this.flagSelf$(o)},flagSync$(){return this.className=(this.flags$ns||"")+(this.flags$ext||"")+" "+(this.flags$own||"")+" "+(this.$flags||"")},open$(){return this},close$(){return this},end$(){this.render&&this.render();return},css$(o,q,t){return this.style[o]=q},css$var(o,q,t,v){let w=h.toStyleValue(q,t,v);this.style.setProperty(o,w);return}}),Element.prototype.appendChild$=Element.prototype.appendChild,Element.prototype.removeChild$=Element.prototype.removeChild,Element.prototype.insertBefore$=Element.prototype.insertBefore,Element.prototype.replaceChild$=Element.prototype.replaceChild,Element.prototype.set$=Element.prototype.setAttribute,Element.prototype.setns$=Element.prototype.setAttributeNS,ShadowRoot.prototype.insert$=Element.prototype.insert$,ShadowRoot.prototype.appendChild$=Element.prototype.appendChild$,h.createLiveFragment=m.createLiveFragment,h.createIndexedFragment=m.createIndexedFragment,h.createKeyedFragment=m.createKeyedFragment;const B={};class z{constructor(){this.types={}}lookup(o){return this.types[o]}get(o,q){return!o||o=="component"?i.ImbaElement:this.types[o]?this.types[o]:q&&d[q]?d[q]:d.customElements.get(o)||i.ImbaElement}create(o){return this.types[o]?this.types[o].create$():document.createElement(o)}define(o,q,t={}){this.types[o]=q,q.nodeName=o;let v=q.prototype,w=v._ns_;if(t.ns){let x=t.ns,E=x+" "+x+"_ ";w&&(E+=v.flags$ns,x+=" "+w),v._ns_=x,v.flags$ns=E}return t.extends?B[o]=q:d.customElements.define(o,q),q}}h.tags=new z(),h.createElement=function(o,q,t,v,w){var x=document.createElement(o);return t&&(x.className=t),v!==null&&x.text$(v),q&&q instanceof Node&&x.insertInto$(q),x},h.createComponent=function(o,q,t,v,w){var x;return typeof o!="string"&&(o&&o.nodeName&&(o=o.nodeName)),B[o]?(x=B[o].create$(x),x.slot$=i.ImbaElement.prototype.slot$,x.__slots={}):x=document.createElement(o),x.up$=q,x.init$(),v!==null&&x.slot$("__").text$(v),(t||x.flags$ns)&&x.flag$(t||""),x},h.createSVGElement=function(o,q,t,v,w){var x=document.createElementNS("http://www.w3.org/2000/svg",o);return t&&(x.className.baseVal=t),q&&q instanceof Node&&x.insertInto$(q),x}},function(a,c,j){j.r(c),j.d(c,"setup",function(){return l}),j.d(c,"register",function(){return e}),j.d(c,"parseDimension",function(){return g});let b,k="*,::before,::after {	box-sizing: border-box;	border-width: 0;	border-style: solid;	border-color: currentColor;}";function l(){if(!b){if(b=document.documentElement)return e(k)}}function e(m,i){l();var f=document.createElement("style");f.textContent=m,document.head.appendChild(f);return}function g(m){if(typeof m=="string"){let[i,f,n]=m.match(/^([-+]?[\d\.]+)(%|\w+)$/);return[parseFloat(f),n]}else if(typeof m=="number")return[m]}},function(a,c,j){j.r(c),j.d(c,"Flags",function(){return b});class b{constructor(k){this.dom=k,this.string=""}contains(k){return this.dom.classList.contains(k)}add(k){return this.contains(k)?this:(this.string+=(this.string?" ":"")+k,this.dom.classList.add(k),this)}remove(k){if(!this.contains(k))return this;var l=new RegExp("(^|\\s)*"+k+"(\\s|$)*","g");return this.string=this.string.replace(l,""),this.dom.classList.remove(k),this}toggle(k,l){return l===void 0&&(l=!this.contains(k)),l?this.add(k):this.remove(k)}incr(k){let l=this.stacks||(this.stacks={}),e=l[k]||0;return e<1&&this.add(k),l[k]=Math.max(e,0)+1,this}decr(k){let l=this.stacks||(this.stacks={}),e=l[k]||0;return e==1&&this.remove(k),l[k]=Math.max(e,1)-1,this}valueOf(){return this.string}toString(){return this.string}sync(){return this.dom.flagSync$()}}},function(a,c,j){j.r(c),j.d(c,"Scheduler",function(){return l});function b(e){return e?e.toIterable?e.toIterable():e:[]}var k=typeof requestAnimationFrame!=="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};class l{constructor(){var e=this;this.queue=[],this.stage=-1,this.batch=0,this.scheduled=!1,this.listeners={},this.$promise=null,this.$resolve=null,this.$ticker=function(g){return e.scheduled=!1,e.tick(g)}}add(e,g){(g||this.queue.indexOf(e)==-1)&&this.queue.push(e);if(!this.scheduled)return this.schedule()}listen(e,g){var m;return(m=this.listeners)[e]||(m[e]=new Set()),this.listeners[e].add(g)}unlisten(e,g){return this.listeners[e]&&this.listeners[e].delete(g)}get promise(){var e=this;return this.$promise||(this.$promise=new Promise(function(g){return e.$resolve=g}))}tick(e){var g=this,m=this.queue;this.ts||(this.ts=e),this.dt=e-this.ts,this.ts=e,this.queue=[],this.stage=1,this.batch++;if(m.length)for(let i=0,f=b(m),n=f.length;i<n;i++){let d=f[i];typeof d==="string"&&this.listeners[d]?this.listeners[d].forEach(function(h){if(h.tick instanceof Function)return h.tick(g);if(h instanceof Function)return h(g)}):d instanceof Function?d(this.dt,this):d.tick&&d.tick(this.dt,this)}return this.stage=2,this.stage=this.scheduled?0:-1,this.$promise&&(this.$resolve(this),this.$promise=this.$resolve=null),this}schedule(){return this.scheduled||(this.scheduled=!0,this.stage==-1&&(this.stage=0),k(this.$ticker)),this}}},function(a,c,j){j.r(c),j.d(c,"EventHandler",function(){return e});var b=j(6);function k(g){return g?g.toIterable?g.toIterable():g:[]}const l={esc:[27],tab:[9],enter:[13],space:[32],up:[38],down:[40],left:[37],right:[39],del:[8,46]};b.Event.log$mod=function(...g){return console.log(...g),!0},b.Event.sel$mod=function(g){return!!this.event.target.matches(String(g))},b.Event.if$mod=function(g){return!!g},b.Event.wait$mod=function(g=250){return new Promise(function(m){return setTimeout(m,g)})},b.Event.self$mod=function(){return this.event.target==this.element},b.Event.throttle$mod=function(g=250){var m=this;return this.handler.throttled?!1:(this.handler.throttled=!0,this.element.flags.incr("throttled"),imba.once(this.current,"end",function(){return setTimeout(function(){return m.element.flags.decr("throttled"),m.handler.throttled=!1},g)}),!0)},b.Event.flag$mod=function(g,m){let i=m instanceof globalThis.Element?m:m?this.element.closest(m):this.element;if(!i)return!0;let f=this.step;this.state[f]=this.id,i.flags.incr(g);let n=Date.now();return imba.once(this.current,"end",function(){let d=Date.now()-n,h=Math.max(250-d,0);return setTimeout(function(){return i.flags.decr(g)},h)}),!0},b.Event.busy$mod=function(g){return b.Event.flag$mod.call(this,"busy",250,g)};class e{constructor(g,m){this.params=g,this.closure=m}getHandlerForMethod(g,m){return g?g[m]?g:this.getHandlerForMethod(g.parentNode,m):null}emit(g,...m){return imba.emit(this,g,m)}on(g,...m){return imba.listen(this,g,...m)}once(g,...m){return imba.once(this,g,...m)}un(g,...m){return imba.unlisten(this,g,...m)}async handleEvent(g){var m=g.target,i=g.currentTarget,f=this.params;let n=!0;this.count||(this.count=0),this.state||(this.state={});let d={element:i,event:g,modifiers:f,handler:this,id:++this.count,step:-1,state:this.state,current:null};d.current=d;if(g.handle$mod){if(g.handle$mod.apply(d,f.options||[])==!1)return}let h=b.Event[this.type+"$handle"]||b.Event[g.type+"$handle"]||g.handle$mod;if(h&&h.apply(d,f.options||[])==!1)return;this.currentEvents||(this.currentEvents=new Set()),this.currentEvents.add(g);for(let p=0,r=Object.keys(f),u=r.length,s,y;p<u;p++){s=r[p],y=f[s],d.step++;if(s[0]=="_")continue;s.indexOf("~")>0&&(s=s.split("~")[0]);let C=null,A=[g,d],B,z=null,o;if(s[0]=="$"&&s[1]=="_"&&y[0]instanceof Function)s=y[0],A=[g,d].concat(y.slice(1)),z=i;else if(y instanceof Array){A=y.slice(),C=A;for(let q=0,t=k(A),v=t.length;q<v;q++){let w=t[q];if(typeof w=="string"&&w[0]=="~"&&w[1]=="$"){let x=w.slice(2),E=x.split("."),G=d[E.shift()]||g;for(let $=0,tb=k(E),zb=tb.length;$<zb;$++){let Ab=tb[$];G=G?G[Ab]:void 0}A[q]=G}}}typeof s=="string"&&(o=s.match(/^(emit|flag|moved|pin|fit|refit|map|remap)-(.+)$/))&&(C||(C=A=[]),A.unshift(o[2]),s=o[1]);if(s=="stop")g.stopImmediatePropagation();else if(s=="prevent")g.preventDefault();else if(s=="commit")n=!0;else if(s=="silence"||s=="silent")n=!1;else if(s=="ctrl"){if(!g.ctrlKey)break}else if(s=="alt"){if(!g.altKey)break}else if(s=="shift"){if(!g.shiftKey)break}else if(s=="meta"){if(!g.metaKey)break}else if(s=="once")i.removeEventListener(g.type,this);else{if(s=="options")continue;if(l[s]){if(l[s].indexOf(g.keyCode)<0)break}else if(s=="emit"){let q=A[0],t=A[1],v=new CustomEvent(q,{bubbles:!0,detail:t});v.originalEvent=g;let w=i.dispatchEvent(v)}else if(typeof s=="string"){let q=this.type&&b.Event[this.type+"$"+s+"$mod"];q||(q=g[s+"$mod"]||b.Event[g.type+"$"+s]||b.Event[s+"$mod"]),q instanceof Function?(s=q,z=d,A=C||[]):s[0]=="_"?(s=s.slice(1),z=this.closure):z=this.getHandlerForMethod(i,s)}}s instanceof Function?B=s.apply(z||i,A):z&&(B=z[s].apply(z,A)),B&&B.then instanceof Function&&B!=imba.scheduler.$promise&&(n&&imba.$commit(),B=await B);if(B===!1)break;d.value=B}imba.emit(d,"end",d),n&&imba.$commit(),this.currentEvents.delete(g),this.currentEvents.size==0&&this.emit("idle");return}}},function(a,c,j){j.r(c),j.d(c,"Document",function(){return b}),j.d(c,"Node",function(){return k}),j.d(c,"Text",function(){return l}),j.d(c,"Comment",function(){return e}),j.d(c,"Element",function(){return g}),j.d(c,"SVGElement",function(){return m}),j.d(c,"HTMLElement",function(){return i}),j.d(c,"DocumentFragment",function(){return f}),j.d(c,"ShadowRoot",function(){return n}),j.d(c,"Event",function(){return d}),j.d(c,"CustomEvent",function(){return h}),j.d(c,"MouseEvent",function(){return p}),j.d(c,"KeyboardEvent",function(){return r}),j.d(c,"PointerEvent",function(){return u}),j.d(c,"document",function(){return s});const{Document:b,Node:k,Text:l,Comment:e,Element:g,SVGElement:m,HTMLElement:i,DocumentFragment:f,ShadowRoot:n,Event:d,CustomEvent:h,MouseEvent:p,KeyboardEvent:r,PointerEvent:u,document:s}=window},function(a,c,j){j.r(c);var b=j(6),k=j(8);function l(g,m){var i=Object.getOwnPropertyDescriptors(m);return Object.defineProperties(g.prototype,i),g}l(b.PointerEvent,{primary$mod(){return!!this.event.isPrimary},mouse$mod(){return this.event.pointerType=="mouse"},pen$mod(){return this.event.pointerType=="pen"},touch$mod(){return this.event.pointerType=="touch"},pressure$mod(g=0){return this.event.pressure>g},lock$mod(g){return!0}});class e{constructor(g,m,i){this.phase="init",this.events=[],this.event=g,this.handler=m,this.target=this.currentTarget=i}set event(g){this.x=g.clientX,this.y=g.clientY,this.events.push(g)}get start(){return this.events[0]}get event(){return this.events[this.events.length-1]}get elapsed(){return this.event.timeStamp-this.events[0].timeStamp}get pointerId(){return this.event.pointerId}get clientX(){return this.event.clientX}get clientY(){return this.event.clientY}get offsetX(){return this.event.offsetX}get offsetY(){return this.event.offsetY}get type(){return this.event.type}emit(g,...m){return imba.emit(this,g,m)}on(g,...m){return imba.listen(this,g,...m)}once(g,...m){return imba.once(this,g,...m)}un(g,...m){return imba.unlisten(this,g,...m)}}b.Event.touch$in$mod=function(){return b.Event.touch$reframe$mod.apply(this,arguments)},b.Event.touch$fit$mod=function(){var g,m;let i=(g=this.state)[m=this.step]||(g[m]={clamp:!0});return b.Event.touch$reframe$mod.apply(this,arguments)},b.Event.touch$snap$mod=function(g=1,m=g){return this.event.x=Object(k.round)(this.event.x,g),this.event.y=Object(k.round)(this.event.y,m),!0},b.Event.touch$moved$mod=function(g,m){var i=this,f,n;let d=(f=this.state)[n=this.step]||(f[n]={});if(!d.setup){let s=g||4;typeof g=="string"&&g.match(/^(up|down|left|right|x|y)$/)&&(d.dir=g,s=m||4),d.setup=!0;let[y,C]=Object(k.parseDimension)(s);d.threshold=y,d.sy=y,d.x0=this.event.x,d.y0=this.event.y,C&&C!="px"&&console.warn("only px threshold allowed in @touch.moved")}if(d.active)return!0;let h=d.threshold,p=this.event.x-d.x0,r=this.event.y-d.y0,u=!1;p>h&&(d.dir=="right"||d.dir=="x")&&(u=!0),!u&&p<-h&&(d.dir=="left"||d.dir=="x")&&(u=!0),!u&&r>h&&(d.dir=="down"||d.dir=="y")&&(u=!0),!u&&r<-h&&(d.dir=="up"||d.dir=="y")&&(u=!0);if(!u){let s=Math.sqrt(p*p+r*r);s>h&&!d.dir&&(u=!0)}if(u){d.active=!0;let s=this.state.pinTarget;this.element.flags.incr("_move_"),s&&s.flags.incr("_move_"),imba.once(this.current,"end",function(){return s&&s.flags.decr("_move_"),i.element.flags.decr("_move_")})}return!!d.active},b.Event.touch$reframe$mod=function(...g){var m,i;let f=(m=this.state)[i=this.step]||(m[i]={});if(f.rect){let n=this.event.x=f.x(this.event.x,f.clamp),d=this.event.y=f.y(this.event.y,f.clamp);this.event.dx=n-this.event.x0,this.event.dy=d-this.event.y0}else{let n=this.element,d=g.length,h=g[0],p=0,r="100%",u=1,s=typeof h;s=="number"||s=="string"&&/^([-+]?\d[\d\.]*)(%|\w+)$/.test(h)||h instanceof Array?h=null:s=="string"&&(h=="this"||h==""?h=this.element:h=="up"?h=this.element.parentNode:h=="op"?h=this.element.offsetParent:h=n.closest(h)||n.querySelector(h)),h==null&&(d++,g.unshift(h=n)),d==2?u=g[1]:d>2&&([p,r,u=1]=g.slice(1));let y=h.getBoundingClientRect();p instanceof Array||(p=[p,p]),r instanceof Array||(r=[r,r]),u instanceof Array||(u=[u,u]),f.rect=y,f.x=Object(k.scale)(y.left,y.right,p[0],r[0],u[0]),f.y=Object(k.scale)(y.top,y.bottom,p[1],r[1],u[1]),this.state.scaleX=f.x,this.state.scaleY=f.y,this.event.x0=this.event.x=f.x(this.event.x,f.clamp),this.event.y0=this.event.y=f.y(this.event.y,f.clamp)}return!0},b.Event.touch$pin$mod=function(...g){let m=this.state[this.step];if(!m){let i=g[0];typeof i=="string"&&(i=this.element.closest(i)||this.element.querySelector(i)),i instanceof b.Element||g.unshift(i=this.state.target);let f=g[1]||0,n=g[2]==null?g[2]=f:g[2],d=i.getBoundingClientRect();m=this.state[this.step]={x:this.state.clientX-(d.left+d.width*f),y:this.state.clientY-(d.top+d.height*n)},i&&(this.state.pinTarget=i,i.flags.incr("_touch_"),this.state.once("end",function(){return i.flags.decr("_touch_")}))}return this.event.x-=m.x,this.event.y-=m.y,!0},b.Event.touch$lock$mod=function(...g){let m=this.state[this.step];if(!m){m=this.state[this.step]=this.state.target.style;let i=m.touchAction;m.touchAction="none",this.state.once("end",function(){return m.removeProperty("touch-action")})}return!0},b.Event.touch$sync$mod=function(g,m="x",i="y"){let f=this.state[this.step];return f||(f=this.state[this.step]={x:g[m]||0,y:g[i]||0,tx:this.state.x,ty:this.state.y}),m&&(g[m]=f.x+(this.state.x-f.tx)),i&&(g[i]=f.y+(this.state.y-f.ty)),!0},b.Event.touch$handle=function(){var g=this;let m=this.event,i=this.element,f=this.state.pointerId;this.current=this.state;if(f)return f==m.pointerId;let n=this.state=this.handler.state=this.current=new e(m,this.handler,i),d=function(r){return r.preventDefault(),!1},h=function(r){let u=r.type;n.event=r;try{g.handler.handleEvent(n)}catch(s){}if(u=="pointerup"||u=="pointercancel")return i.releasePointerCapture(r.pointerId)},p=function(r){return i.flags.decr("_touch_"),n.emit("end"),g.handler.state={},i.removeEventListener("pointermove",h),i.removeEventListener("pointerup",h),i.removeEventListener("pointercancel",h),document.removeEventListener("selectstart",d)};return i.flags.incr("_touch_"),i.setPointerCapture(m.pointerId),i.addEventListener("pointermove",h),i.addEventListener("pointerup",h),i.addEventListener("pointercancel",h),i.addEventListener("lostpointercapture",p,{once:!0}),document.addEventListener("selectstart",d,{capture:!0}),h(m),!1}},function(a,c,j){j.r(c),j.d(c,"round",function(){return b}),j.d(c,"clamp",function(){return k}),j.d(c,"parseDimension",function(){return l}),j.d(c,"scale",function(){return e});function b(g,m=1){let i=1/m;return Math.round(g*i)/i}function k(g,m,i){return m>i?Math.max(i,Math.min(m,g)):Math.min(i,Math.max(m,g))}function l(g){if(typeof g=="string"){let[m,i,f]=g.match(/^([-+]?[\d\.]+)(%|\w+)$/);return[parseFloat(i),f]}else if(typeof g=="number")return[g]}function e(g,m,i,f,n=.1){let[d,h]=l(i),[p,r]=l(f),[u,s]=l(n);return h=="%"&&(d=(m-g)*(d/100)),r=="%"&&(p=(m-g)*(p/100)),s=="%"&&(u=(p-d)*(u/100)),function(y,C){let A=(y-g)/(m-g),B=d+(p-d)*A;return n&&(B=b(B,u)),C&&(B=k(B,d,p)),B}}},function(a,c,j){j.r(c),j.d(c,"createLiveFragment",function(){return i}),j.d(c,"createIndexedFragment",function(){return f}),j.d(c,"createKeyedFragment",function(){return n});var b=j(6);function k(d){return d?d.toIterable?d.toIterable():d:[]}function l(d,h){var p=Object.getOwnPropertyDescriptors(h);return Object.defineProperties(d.prototype,p),d}l(b.DocumentFragment,{get $parent(){return this.up$||this.$$parent},setup$(d,h){return this.$start=imba.document.createComment("start"),this.$end=imba.document.createComment("end"),this.$end.replaceWith$=function(p){return this.parentNode.insertBefore(p,this),p},this.appendChild(this.$start),this.appendChild(this.$end)},text$(d){this.$text?this.$text.textContent=d:this.$text=this.insert$(d);return},insert$(d,h,p){return this.$$parent?this.$$parent.insert$(d,h,p||this.$end):b.Element.prototype.insert$.call(this,d,h,p||this.$end)},insertInto$(d,h){return this.$$parent||(this.$$parent=d,d.appendChild$(this)),this},replaceWith$(d,h){this.$start.insertBeforeBegin$(d);for(var p=this.$start;p;){let r=p.nextSibling;this.appendChild(p);if(p==this.$end)break;p=r}return d},appendChild$(d){return this.$end?this.$end.insertBeforeBegin$(d):this.appendChild(d),d},removeChild$(d){return d.parentNode&&d.parentNode.removeChild(d),this},isEmpty$(){let d=this.$start,h=this.$end;for(;d=d.nextSibling;){if(d==h)break;if(d instanceof b.Element||d instanceof b.Text)return!1}return!0}}),l(b.ShadowRoot,{get $parent(){return this.host}});class e{constructor(d,h){this.__F=d,this.$parent=h,!(d&128)&&this instanceof g&&(this.$start=b.document.createComment("start"),h&&h.appendChild$(this.$start)),d&256||(this.$end=b.document.createComment("end"),h&&h.appendChild$(this.$end)),this.setup()}appendChild$(d,h){this.$end&&this.$parent?this.$end.insertBeforeBegin$(d):this.$parent&&this.$parent.appendChild$(d);return}replaceWith$(d){this.detachNodes(),this.$end.insertBeforeBegin$(d),this.$parent.removeChild$(this.$end),this.$parent=null;return}joinBefore$(d){return this.insertInto$(d.parentNode,d)}insertInto$(d,h){return this.$parent||(this.$parent=d,h?h.insertBeforeBegin$(this.$end):d.appendChild$(this.$end),this.attachNodes()),this}replace$(d){return this.$parent||(this.$parent=d.parentNode),d.replaceWith$(this.$end),this.attachNodes(),this}setup(){return this}}class g extends e{setup(){return this.array=[],this.changes=new Map(),this.dirty=!1,this.$={}}push(d,h){if(!(this.__F&1)){this.array.push(d),this.appendChild$(d);return}let p=this.array[h];if(!(p===d)){this.dirty=!0;let r=this.array.indexOf(d),u=this.changes.get(d);r===-1?(this.array.splice(h,0,d),this.insertChild(d,h)):r===h+1?(p&&this.changes.set(p,-1),this.array.splice(h,1)):(r>=0&&this.array.splice(r,1),this.array.splice(h,0,d),this.insertChild(d,h)),u==-1&&this.changes.delete(d)}return}insertChild(d,h){if(h>0){let p=this.array[h-1];p.insertAfterEnd$(d)}else this.$start?this.$start.insertAfterEnd$(d):this.$parent.insertAfterBegin$(d);return}removeChild(d,h){d.parentNode==this.$parent&&this.$parent.removeChild(d);return}attachNodes(){for(let d=0,h=k(this.array),p=h.length;d<p;d++){let r=h[d];this.$end.insertBeforeBegin$(r)}return}detachNodes(){for(let d=0,h=k(this.array),p=h.length;d<p;d++){let r=h[d];this.$parent.removeChild(r)}return}end$(d){var h=this;if(!(this.__F&1)){this.__F|=1;return}this.dirty&&(this.changes.forEach(function(p,r){if(p==-1)return h.removeChild(r)}),this.changes.clear(),this.dirty=!1);if(this.array.length>d)for(;this.array.length>d;){let p=this.array.pop();this.removeChild(p)}return}}class m extends e{setup(){return this.$=[],this.length=0}end$(d){let h=this.length;if(h==d||!this.$parent)return;let p=this.$,r=this.$parent;if(h>d)for(;h>d;)r.removeChild$(p[--h]);else if(d>h)for(;d>h;)this.appendChild$(p[h++]);this.length=d;return}attachNodes(){for(let d=0,h=k(this.$),p=h.length;d<p;d++){let r=h[d];if(d==this.length)break;this.$end.insertBeforeBegin$(r)}return}detachNodes(){let d=0;for(;d<this.length;){let h=this.$[d++];this.$parent.removeChild$(h)}return}}function i(d,h,p){var r=b.document.createDocumentFragment();return r.setup$(d,h),p&&(r.up$=p),r}function f(d,h){return new m(d,h)}function n(d,h){return new g(d,h)}},function(a,c,j){j.r(c),j.d(c,"ImbaElement",function(){return k});var b=j(6);class k extends b.HTMLElement{constructor(){super();this.flags$ns&&(this.flag$=this.flagExt$),this.setup$(),this.build()}setup$(){return this.__slots={},this.__F=0}init$(){return this.__F|=1|2,this}flag$(l){this.className=this.flags$ext=l;return}slot$(l,e){var g;return l=="__"&&!this.render?this:(g=this.__slots)[l]||(g[l]=imba.createLiveFragment(0,null,this))}build(){return this}awaken(){return this}mount(){return this}unmount(){return this}rendered(){return this}dehydrate(){return this}hydrate(){return this.autoschedule=!0,this}tick(){return this.commit()}visit(){return this.commit()}commit(){return this.isRender?(this.__F|=256,this.render&&this.render(),this.rendered(),this.__F=(this.__F|512)&~256):this}get autoschedule(){return(this.__F&64)!=0}set autoschedule(l){l?this.__F|=64:this.__F&=~64}isRender(){return!0}isMounting(){return(this.__F&16)!=0}isMounted(){return(this.__F&32)!=0}isAwakened(){return(this.__F&8)!=0}isRendered(){return(this.__F&512)!=0}isRendering(){return(this.__F&256)!=0}isScheduled(){return(this.__F&128)!=0}isHydrated(){return(this.__F&2)!=0}schedule(){return imba.scheduler.listen("render",this),this.__F|=128,this}unschedule(){return imba.scheduler.unlisten("render",this),this.__F&=~128,this}end$(){return this.visit()}connectedCallback(){let l=this.__F,e=l&1,g=l&8;if(l&(16|32))return;this.__F|=16,e||this.init$(),l&2||(this.flags$ext=this.className,this.hydrate(),this.__F|=2,this.commit()),g||(this.awaken(),this.__F|=8);let m=this.mount();return m&&m.then instanceof Function&&m.then(imba.commit),l=this.__F=(this.__F|32)&~16,l&64&&this.schedule(),this}disconnectedCallback(){return this.__F=this.__F&(~32&~16),this.__F&128&&this.unschedule(),this.unmount()}}},function(a,c,j){j.r(c);var b=j(6);function k(l,e){var g=Object.getOwnPropertyDescriptors(e);return Object.defineProperties(l.prototype,g),l}k(b.SVGElement,{flag$(l){let e=this.flags$ns;this.className.baseVal=e?e+(this.flags$ext=l):this.flags$ext=l;return},flagSelf$(l){var e=this;return this.flag$=function(g){return e.flagSync$(e.flags$ext=g)},this.flagSelf$=function(g){return e.flagSync$(e.flags$own=g)},this.flagSelf$(l)},flagSync$(){return this.className.baseVal=(this.flags$ns||"")+(this.flags$ext||"")+" "+(this.flags$own||"")+" "+(this.$flags||"")}})},function(a,c){function j(f){return f?f.toIterable?f.toIterable():f:[]}function b(f,n){var d=Object.getOwnPropertyDescriptors(n);return Object.defineProperties(f.prototype,d),f}const k={INPUT:!0,SELECT:!0,TEXTAREA:!0,BUTTON:!0};var l=function(f){return f instanceof Array||f&&f.has instanceof Function},e=function(f,n){return f instanceof Array?f.indexOf(n)>=0:f&&f.has instanceof Function?f.has(n):f&&f.contains instanceof Function?f.contains(n):f==n?!0:!1},g=function(f,n){if(f instanceof Array)return f.push(n);if(f&&f.add instanceof Function)return f.add(n)},m=function(f,n){if(f instanceof Array){let d=f.indexOf(n);if(d>=0)return f.splice(d,1)}else if(f&&f.delete instanceof Function)return f.delete(n)};function i(f){function n(){return f[0]?f[0][f[1]]:void 0}function d(h){return f[0]?f[0][f[1]]=h:null}return{get:n,set:d}}b(Element,{getRichValue(){return this.value},setRichValue(f){return this.value=f},bind$(f,n){let d=n||[];return f=="data"&&!this.$$bound&&k[this.nodeName]&&(this.$$bound=!0,this.change$&&this.addEventListener("change",this.change$=this.change$.bind(this)),this.input$&&this.addEventListener("input",this.input$=this.input$.bind(this),{capture:!0}),this.click$&&this.addEventListener("click",this.click$=this.click$.bind(this),{capture:!0})),Object.defineProperty(this,f,d instanceof Array?i(d):d),d}}),Object.defineProperty(Element.prototype,"richValue",{get(){return this.getRichValue()},set(f){return this.setRichValue(f)}}),b(HTMLSelectElement,{change$(f){let n=this.data,d=this.$$value;this.$$value=void 0;let h=this.getRichValue();if(this.multiple){if(d)for(let p=0,r=j(d),u=r.length;p<u;p++){let s=r[p];if(h.indexOf(s)!=-1)continue;m(n,s)}for(let p=0,r=j(h),u=r.length;p<u;p++){let s=r[p];(!d||d.indexOf(s)==-1)&&g(n,s)}}else this.data=h[0];return imba.commit(),this},getRichValue(){var f;if(this.$$value)return this.$$value;f=[];for(let n=0,d=j(this.selectedOptions),h=d.length;n<h;n++){let p=d[n];f.push(p.richValue)}return this.$$value=f},syncValue(){let f=this.data;if(this.multiple){let n=[];for(let d=0,h=j(this.options),p=h.length;d<p;d++){let r=h[d],u=r.richValue,s=e(f,u);r.selected=s,s&&n.push(u)}this.$$value=n}else for(let n=0,d=j(this.options),h=d.length;n<h;n++){let p=d[n],r=p.richValue;if(r==f){this.$$value=[r],this.selectedIndex=n;break}}return},end$(){return this.syncValue()}}),b(HTMLOptionElement,{setRichValue(f){return this.$$value=f,this.value=f},getRichValue(){return this.$$value!==void 0?this.$$value:this.value}}),b(HTMLTextAreaElement,{setRichValue(f){return this.$$value=f,this.value=f},getRichValue(){return this.$$value!==void 0?this.$$value:this.value},input$(f){return this.data=this.value,imba.commit()},end$(){if(this.$$bound&&this.value!=this.data)return this.value=this.data}}),b(HTMLInputElement,{input$(f){let n=this.type;return n=="checkbox"||n=="radio"?void 0:(this.$$value=void 0,this.data=this.richValue,imba.commit())},change$(f){let n=this.data,d=this.richValue;if(this.type=="checkbox"||this.type=="radio"){let h=this.checked;l(n)?h?g(n,d):m(n,d):this.data=h?d:!1}return imba.commit()},setRichValue(f){this.$$value!==f&&(this.$$value=f,this.value!==f&&(this.value=f));return},getRichValue(){if(this.$$value!==void 0)return this.$$value;let f=this.value,n=this.type;return n=="range"||n=="number"?(f=this.valueAsNumber,Number.isNaN(f)&&(f=null)):n=="checkbox"&&((f==void 0||f==="on")&&(f=!0)),f},end$(){if(this.$$bound){let f=this.type;if(f=="checkbox"||f=="radio"){let n=this.data;n===!0||n===!1||n==null?this.checked=!!n:this.checked=e(n,this.richValue)}else this.richValue=this.data}return}}),b(HTMLButtonElement,{get checked(){return this.$checked},set checked(f){f!=this.$checked&&(this.$checked=f,this.flags.toggle("checked",!!f))},setRichValue(f){return this.$$value=f,this.value=f},getRichValue(){return this.$$value!==void 0?this.$$value:this.value},click$(f){let n=this.data,d=this.checked,h=this.richValue;return l(n)?d?m(n,h):g(n,h):this.data=d?null:h,imba.commit()},end$(){if(this.$$bound){let f=this.data;f===!0||f===!1||f==null?this.checked=!!f:this.checked=e(f,this.richValue)}return}})},function(a,c,j){j.r(c);var b=j(6);function k(l,e){var g=Object.getOwnPropertyDescriptors(e);return Object.defineProperties(l.prototype,g),l}k(b.SVGElement,{flag$(l){this.className.baseVal=this.flags$ext=l;return},flagSelf$(l){var e=this;return this.flag$=function(g){return e.flagSync$(e.flags$ext=g)},this.flagSelf$=function(g){return e.flagSync$(e.flags$own=g)},this.flagSelf$(l)},flagSync$(){return this.className.baseVal=(this.flags$ext||"")+" "+(this.flags$own||"")+" "+(this.$flags||"")}})},function(a,c,j){j.r(c);var b=j(6);function k(f){return f?f.toIterable?f.toIterable():f:[]}const l=new(globalThis.WeakMap||Map)(),e={threshold:[0]},g={};b.Event.intersect$handle=function(){let f=this.event.detail.observer;return this.modifiers._observer==f},b.Event.intersect$in=function(){return this.event.delta>=0&&this.event.entry.isIntersecting},b.Event.intersect$out=function(){return this.event.delta<0};function m(f,n){return function(d,h){let p=h.prevRatios||(h.prevRatios=new WeakMap());for(let r=0,u=k(d),s=u.length;r<s;r++){let y=u[r],C=p.get(y.target)||0,A=y.intersectionRatio,B={entry:y,ratio:A,from:C,delta:A-C,observer:h},z=new b.CustomEvent(f,{bubbles:!1,detail:B});z.entry=y,z.isIntersecting=y.isIntersecting,z.delta=B.delta,z.ratio=B.ratio,p.set(y.target,A),y.target.dispatchEvent(z)}return}}function i(f=e){let n=f.threshold.join("-")+f.rootMargin,d=f.root||g,h=l.get(d);return h||l.set(d,h={}),h[n]||(h[n]=new IntersectionObserver(m("intersect"),f))}b.Element.prototype.on$intersect=function(f,n){let d;if(f.options){let h=[],p={threshold:h};for(let r=0,u=k(f.options),s=u.length;r<s;r++){let y=u[r];y instanceof b.Element?p.root=y:typeof y=="number"&&h.push(y)}if(h.length==1){let r=h[0];if(r>1)for(h[0]=0;h.length<r;)h.push(h.length/(r-1))}h.length==0&&h.push(0),d=i(p)}else d=i();return f._observer=d,d.observe(this)}},function(a,c,j){j.r(c);var b=j(6),k;function l(){if(!k)return k=function(e){if(e.handled$)return;e.handled$=!0;let g=document.activeElement;if(g&&g.matches("input,textarea")){let m=new b.CustomEvent("selection",{detail:{start:g.selectionStart,end:g.selectionEnd}});return g.dispatchEvent(m)}},document.addEventListener("selectionchange",k)}b.Element.prototype.on$selection=function(e,g){return l()}},function(a,c,j){j.r(c);var b=j(6);function k(m,i){var f=Object.getOwnPropertyDescriptors(i);return Object.defineProperties(m.prototype,f),m}function l(m){return m?m.toIterable?m.toIterable():m:[]}var e=null;function g(){return globalThis.ResizeObserver||(e||(console.warn(":resize not supported in this browser"),e={observe:function(){return!0}})),e||(e=new ResizeObserver(function(m){for(let i=0,f=l(m),n=f.length;i<n;i++){let d=f[i],h=new b.CustomEvent("resize",{bubbles:!1,detail:d});h.entry=d,h.rect=d.contentRect,h.width=d.target.offsetWidth,h.height=d.target.offsetHeight,d.target.dispatchEvent(h)}return}))}k(b.Element,{on$resize(m,i){return g().observe(this)}})}]);imba.inlineStyles(`:root {--font: "Poppins", Arial, sans-serif;
--orange: #fd6001;
--indigo: #0e1229;
--grey: #666666;}
:root *:not(i) {margin: 0rem;
padding: 0rem;
font-family: var(--font);}
:root a {font-size: 0.875rem;
text-decoration: none;}
:root ul {list-style: none;}
:root h1 {font-size: 3.125rem;
font-weight: 600;
margin-bottom: 1.5rem;
line-height: 1.2;
--u_lh: 1.2;}
:root h2 {font-size: 2rem;
font-weight: 500;
margin-bottom: 1.5rem;}
:root p {margin-bottom: 1rem;
line-height: 1.8;
--u_lh: 1.8;}
:root h3 {font-size: 1.375rem;
font-weight: 500;
margin-bottom: .5rem;}
:root small {font-size: 0.875rem;
color: var(--orange);
ft: uppercase;
letter-spacing: 1;}
:root button {font-size: 1rem;}
:root i::before {margin: 0rem;
padding: 0rem;}
:root .container {width: 100%;
padding-left: 10%;
padding-right: 10%;}

@keyframes fadeInUp-_root-khgtmn {
 0% {
opacity: 0;
visibility: hidden;
transform: translate3d(0, 40px, 0);
}
 100% {
visibility: visible;
opacity: 1;
transform: none;
}
}
:root {--animation-fadeInUp: fadeInUp-_root-khgtmn;}
@keyframes fadeIn-_root-khgtmn {
 0% {
opacity: 0;
visibility: hidden;
transform: scale(0.95);
}
 100% {
opacity: 1;
visibility: visible;
transform: scale(1);
}
}
:root {--animation-fadeIn: fadeIn-_root-khgtmn;}
@keyframes fadeOut-_root-khgtmn {
 0% {
opacity: 1;
}
 100% {
opacity: 0;
}
}
:root {--animation-fadeOut: fadeOut-_root-khgtmn;}

`);const ha={};class F{static parse(a,c){return a instanceof F?a:new F(a,c)}constructor(a,c){this.router=c,this.parse(a)}parse(a){return a instanceof URL||(a=new URL(a,this.router.origin)),this.url=a,this}search(){let a=this.searchParams?this.searchParams.toString():"";return a?"?"+a:""}update(a){if(a instanceof Object)for(let c=0,j=Object.keys(a),b=j.length,k,l;c<b;c++)k=j[c],l=a[k],this.query(k,l);else typeof a=="string"&&this.parse(a);return this}query(a,c){let j=this.searchParams;return c===void 0?j.get(a):c==null||c==""?j.delete(a):j.set(a,c)}clone(){return new F(this.url.href,this.router)}equals(a){return this.toString()==String(a)}get href(){return this.url.href}get path(){return this.url.href.slice(this.url.origin.length)}get pathname(){return this.url.pathname}toString(){return this.href}match(a){let c=ha[a]||(ha[a]=new Route(null,a));return c.test(this)}}class N{constructor(a,c,j){this.router=a,c&&(this.location=F.parse(c),this.original=this.location.clone()),this.referrer=j}redirect(a){var c;return(c=this.location)&&c.update&&c.update(a),this}get path(){var a;return(a=this.location)&&a.path}get url(){var a;return(a=this.location)&&a.toString&&a.toString()}set path(a){this.location.path=a}abort(a=!1){return this.aborted=!0,a&&(this.forceAbort=a),this}match(a){return this.location?new Route(this,a).test():null}}function ia(a){return a?a.toIterable?a.toIterable():a:[]}var Rb=typeof window!=="undefined";class J{constructor(a,c,j,b={}){this.parent=j,this.router=a,this.options=b,this.status=200,this.path=c}set path(a){var c=this;if(this.$path==a)return;this.raw=a,this.$path=a,this.groups=[],this.params={},this.cache={};if(a.indexOf("?")>=0){let l=a.split("?");a=l.shift(),this.query={};for(let e=0,g=ia(l.join("?").split("&")),m=g.length;e<m;e++){let i=g[e];if(!i)continue;var[j,b]=i.split("=");j[0]=="!"&&(j=j.slice(1),b=!1),b===""&&(b=!1),this.query[j]=b||(b===!1?!1:!0)}}a=a.replace(/\:(\w+|\*)(\.)?/g,function(l,e,g){return e!="*"&&c.groups.push(e),g?"([^/#.?]+).":"([^/#?]+)"});if(a==""&&this.query)return;a="^"+a;let k=a[a.length-1];this.options.exact&&k!="$"?a=a+"(?=[#?]|$)":k!="/"&&k!="$"&&a!="^/"&&(a=a+"(?=[/#?]|$)"),this.regex=new RegExp(a)}test(a,c){var j,b;a||(a=this.router.location),c||(c=a.pathname);let k=a.path;if(k==this.cache.url)return this.cache.match;let l="",e=c;this.cache.url=k,this.cache.match=null;let g;if(this.query){g={};for(let m=this.query,i=0,f=Object.keys(m),n=f.length,d,h;i<n;i++){d=f[i],h=m[d];let p=a.query(d),r=d;if(h===!1){if(p)return null;continue}h[0]==":"&&(r=h.slice(1),h=!0);if(h==!0&&p||h==p)g[r]=p;else return null}}this.parent&&this.raw[0]!="/"&&((j=this.parent.test(a,c))&&(c.indexOf(j.path)==0&&(l=j.path+"/",e=c.slice(j.path.length+1))));if(b=this.regex?e.match(this.regex):[""]){let m=l+b[0],i=this.params;if(m==this.params.path)this.params.url=k;else{this.params={path:m,url:k};if(this.groups.length)for(let f=0,n=ia(b),d=n.length,h;f<d;f++){let p=n[f];(h=this.groups[f-1])&&(this.params[h]=p)}}if(g){let f=!1;for(let n=0,d=Object.keys(g),h=d.length,p,r;n<h;n++)p=d[n],r=g[p],this.params[p]!=r&&(f=!0,this.params[p]=r);f&&i==this.params&&(this.params=Object.assign({},this.params))}return this.cache.match=this.params}return this.cache.match=null}resolve(a){var c;return this.raw[0]=="/"?this.raw:(a||(a=this.router.url),this.cache.resolveUrl==a&&this.cache.resolved?this.cache.resolved:(this.cache.resolveUrl=a,this.parent?(c=this.parent.test())&&(this.raw[0]=="?"?this.cache.resolved=c.path+this.raw:this.cache.resolved=c.path+"/"+this.raw):this.cache.resolved=this.raw,this.cache.resolved))}}function vb(a,c){var j=Object.getOwnPropertyDescriptors(c);return Object.defineProperties(a.prototype,j),a}class ga{constructor(a,c,j,b={}){this.node=a,this.route=a.router.routeFor(a,c,j?j.route:null,b),this.match=null,this.options=b,this.placeholder=a.$placeholder||new Comment(""+c)}get raw(){return this.route.raw}set path(a){this.route.path=a}get params(){return this.match}get sticky(){return this.options&&this.options.sticky}get exact(){return this.options&&this.options.exact}isActive(){return this.match&&this.match.active}resolve(){let a=this.match,c=a&&a.url,j=this.route.test();if(j){let b=a&&a.active;return j.active=!0,j!=a&&(this.match=j),(j!=a||!b||j.url!=c)&&this.resolved(j,a,c),b||this.enter(),j}else a&&a.active?(a.active=!1,this.leave()):a||(this.match=a={},this.leave());return a}enter(){var a;return this.node.flags.remove("not-routed"),this.node.flags.add("routed"),(a=this.node)&&a.routeDidEnter&&a.routeDidEnter(this)}resolved(a,c,j){var b;return(b=this.node)&&b.routeDidResolve&&b.routeDidResolve(a,c,j)}leave(){var a;return this.node.flags.add("not-routed"),this.node.flags.remove("routed"),(a=this.node)&&a.routeDidLeave&&a.routeDidLeave(this)}}class wb extends ga{enter(){return this}resolve(){return this.url=this.route.resolve(),super.resolve(...arguments)}resolved(){return this}leave(){return this}go(){let a=this.route.resolve();return this.sticky&&this.match&&!this.match.active&&(a=this.match.url||a),this.options&&this.options.replace?this.node.router.replace(a):this.node.router.go(a)}}vb(Element,{get route(){return this.$route},get parentRoute(){return this.$context.route},set route(a){var c=this;if(this.$route&&this.$route.raw!=a){this.$route.path=a;return}let j=a[0]!="/"?this.parentRoute:null;this.$route=new ga(this,a,j,this.route__),this.end$=this.end$routed,this.insertInto$=function(b){return b.appendChild$(c.$route.isActive()?c:c.$route.placeholder)}},set routeTo(a){var c=this;if(this.$route){this.$route.raw!=a&&(this.$route.path=a);return}let j=a[0]!="/"?this.parentRoute:null;this.$route=this.$routeTo=new wb(this,a,j,this.routeTo__),this.end$=this.end$routeTo,this.onclick=function(b){if(!b.altKey&&!b.metaKey)return b.preventDefault(),c.$route.go()}},end$routed(){if(this.$route){this.$route.resolve();if(!this.$route.isActive())return}if(this.visit)return this.visit()},end$routeTo(){if(this.$route){let a=this.$route.resolve(),c=this.$route.url;this.$route.sticky&&a.url&&(console.log(a.url),c=a.url),this.nodeName=="A"&&this.setAttribute("href",c),this.flags.toggle("active",a&&a.active||!1)}if(this.visit)return this.visit()},routeDidEnter(a){let c=a.placeholder;if(c.parentNode&&c!=this)return c.replaceWith$(this)},routeDidLeave(a){let c=a.placeholder;return this.parentNode&&c!=this&&this.replaceWith$(c),this},routeDidResolve(a,c){var j=this;return;return!this.load||a==c&&!this.reload?(this&&this.routeDidMatch&&this.routeDidMatch(a),this&&this.routeDidLoad&&this.routeDidLoad(a,c),this):(this.$route.load(async function(){j.routeDidMatch(a);let b;try{a!=c?b=await j.load(a,c):j.reload&&(b=await j.reload(a,c))}catch(k){b=400,j.routeDidFail(k)}return j.routeDidLoad(b),b}),this)}});function xb(a,c){var j=Object.getOwnPropertyDescriptors(c);return Object.defineProperties(a.prototype,j),a}var O=typeof window!=="undefined",ja;class yb{static get instance(){return ja||(ja=new this())}constructor(a={}){this.routes={},this.options=a,this.busy=[],this.root=a.root||"",this.history=window.history,this.location=new F(a.url||document.location.href,this),this.mode=a.mode||"history",this.setup(),this.instance||(this.instance=this)}get origin(){return this.$origin||(this.$origin=document.location.origin)}option(a,c){return c==void 0?this.options[a]:(this.options[a]=c,this)}get realpath(){let a=document.location;return a.href.slice(a.origin.length);return this.location.path}get state(){return{}}pushState(a,c,j){return this.history.pushState(a,c||null,String(j))}replaceState(a,c,j){return this.history.replaceState(a,c||null,String(j))}refresh(a={}){var c=this;if(this.refreshing)return;this.refreshing=!0;let j=this.location,b=F.parse(a.location||this.realpath,this),k=a.mode;if(!b.equals(j)){let e=new N(this,b,j);e.mode=k,this.emit("beforechange",e);if(e.aborted){var l=!e.forceAbort&&window.confirm("Are you sure you want to leave? You might have unsaved changes");l?e.aborted=!1:k=="pop"?this.pushState(this.state,null,String(j)):k=="replace"&&this.replaceState(this.state,null,String(j))}e.aborted||(this.location=e.location,k=="push"?this.pushState(a.state||this.state,null,String(this.location)):k=="replace"&&this.replaceState(a.state||this.state,null,String(this.location)),O&&(this.location.state=window.history.state),this.emit("change",e),imba.commit())}return this.onReady(function(){let e=document.location.hash;if(e!=c.$hash)return c.emit("hashchange",c.$hash=e)}),this.refreshing=!1,this}onpopstate(a){return this.refresh({pop:!0,mode:"pop"}),this}onbeforeunload(a){let c=new N(this,null,this.location);return this.emit("beforechange",c),c.aborted?!0:void 0}onhashchange(a){return this.emit("hashchange",this.$hash=document.location.hash),imba.commit()}setup(){return O&&(this.onclick=this.onclick.bind(this),this.onhashchange=this.onhashchange.bind(this),this.$hash=document.location.hash,this.location=F.parse(this.realpath,this),this.history.replaceState(this.state,null,String(this.location)),window.onpopstate=this.onpopstate.bind(this),window.onbeforeunload=this.onbeforeunload.bind(this),window.addEventListener("hashchange",this.onhashchange),window.addEventListener("click",this.onclick,{capture:!0})),this}onclick(a){if(a.metaKey||a.altKey)return;let c=null,j=null,b=a.target;for(;b;)b.nodeName=="A"&&(c||(c=b)),b.$routeTo&&(j||(j=b)),b=b.parentNode;if(c&&j!=c&&(!j||j.contains(c))){let k=c.getAttribute("href");k&&!k.match(/\:\/\//)&&!c.getAttribute("target")&&!c.classList.contains("external")&&c.addEventListener("click",this.onclicklink.bind(this),{once:!0})}return!0}onclicklink(a){let c=a.currentTarget||a.target,j=c.getAttribute("href"),b=new URL(c.href),k=b.href.slice(b.origin.length);return this.go(k),a.stopPropagation(),a.preventDefault()}get path(){return this.location.path}get url(){return this.location.url}query(a,c){return a==void 0?this.location.searchParams():this.location.query(a,c)}get hash(){return this.$hash}serializeParams(a){var c;if(a instanceof Object){c=[];for(let b=0,k=Object.keys(a),l=k.length,e,g;b<l;b++)e=k[b],g=a[e],c.push([e,globalThis.encodeURI(g)].join("="));var j=c;return j.join("&")}return a||""}set hash(a){O&&this.history.replaceState({},null,"#"+this.serializeParams(a))}match(a){var c,j=(c=this.routes)[a]||(c[a]=new J(this,a));return j.test()}route(a){var c;return(c=this.routes)[a]||(c[a]=new J(this,a))}routeFor(a,c,j,b){return new J(this,c,j,b)}go(a,c={}){let j=this.location.clone().update(a,c);return this.refresh({push:!0,mode:"push",location:j,state:c}),this}replace(a,c={}){let j=this.location.clone().update(a,c);return this.refresh({replace:!0,mode:"replace",location:j,state:c})}normalize(a){return this.mode=="hash"?a="#"+a:this.root()&&(a=this.root()+a),a}onReady(a){var c=this;return imba.scheduler.add(function(){return c.busy.length==0?a(c):imba.once(c,"ready",a)})}emit(a,...c){return imba.emit(this,a,c)}on(a,...c){return imba.listen(this,a,...c)}once(a,...c){return imba.once(this,a,...c)}un(a,...c){return imba.unlisten(this,a,...c)}tapRouteHandler(a){let c=this.dom(),j=this.dom().getAttribute("href");c.nodeName!="A"&&(a.meta()||a.alt())&&(a.stop().prevent(),window.open(j,"_blank"));let b=this.trigger("taproute",{path:j,sourceEvent:a,router:this.router});b.isPrevented()||(a.stop().prevent(),a.meta()||a.alt()?window.open(j,"_blank"):this.router.go(j,{}));return}}xb(imba.tags.get("element","Element"),{get router(){return yb.instance}});var Ta=Symbol(),Ua=Symbol(),Va=Symbol(),Wa=Symbol(),Xa=Symbol(),Ya=Symbol();class K extends imba.tags.get("component","ImbaElement"){render(){var a,c,j,b=this._ns_||"",k,l,e,g,m,i,f,n,d;return a=this,a.open$(),(c=j=1,a[Ta]===1)||(c=j=0,a[Ta]=1),c||(k=imba.createElement("div",a,`navbar ${b}`,null)),c||(l=imba.createElement("div",k,`container ${b}`,null)),(g=m=1,e=a[Ua])||(g=m=0,a[Ua]=e=imba.createElement("a",l,`brand ${b}`,null)),g||(e.routeTo="home"),g||(i=imba.createElement("img",e,`${b}`,null)),g||(i.src="imgs/logo.png"),g||!e.setup||e.setup(m),e.end$(m),c||(e=imba.createElement("ul",l,`menu ${b}`,null)),(f=n=1,i=a[Va])||(f=n=0,a[Va]=i=imba.createElement("li",e,`nav-item ${b}`,null)),f||(i.routeTo="home"),f||(d=imba.createElement("a",i,`nav-link active ${b}`,"Home")),f||!i.setup||i.setup(n),i.end$(n),(f=n=1,i=a[Wa])||(f=n=0,a[Wa]=i=imba.createElement("li",e,`nav-item ${b}`,null)),f||(i.routeTo="pecas"),f||(d=imba.createElement("a",i,`nav-link ${b}`,"Peças")),f||!i.setup||i.setup(n),i.end$(n),(f=n=1,i=a[Xa])||(f=n=0,a[Xa]=i=imba.createElement("li",e,`nav-item ${b}`,null)),f||(i.routeTo="produtos"),f||(d=imba.createElement("a",i,`nav-link ${b}`,"Produtos")),f||!i.setup||i.setup(n),i.end$(n),(f=n=1,i=a[Ya])||(f=n=0,a[Ya]=i=imba.createElement("li",e,`nav-item ${b}`,null)),f||(i.routeTo="orcamento"),f||(d=imba.createElement("a",i,`nav-link ${b}`,"Orçamento")),f||!i.setup||i.setup(n),i.end$(n),a.close$(j),a}}imba.tags.define("navbar-bt0cjr",K,{ns:"bt0cjrc"});imba.inlineStyles(`
.bt0cjrc_ .navbar.bt0cjrc:not(#_) {width: 100%;
position: fixed;
top: 0rem;
z-index: 100;
background: var(--indigo);}
.bt0cjrc_ .navbar .container.bt0cjrc:not(#_) {height: 4rem;
display: flex;
justify-content: space-between;
align-items: center;}
.bt0cjrc_ .navbar .container .brand.bt0cjrc:not(#_) {display: flex;}
.bt0cjrc_ .navbar .container .brand img.bt0cjrc:not(#_) {height: 2rem;}
.bt0cjrc_ .navbar .container .menu.bt0cjrc:not(#_) {display: flex;
align-items: center;}
.bt0cjrc_ .navbar .container .menu .nav-item.bt0cjrc:not(#_) {cursor: pointer;
color: hsla(0.00,0.00%,100.00%,100%);}
.bt0cjrc_ .navbar .container .menu .nav-item.bt0cjrc:not(#_):hover {color: var(--orange);}
.bt0cjrc_ .navbar .container .menu .nav-item .nav-link.bt0cjrc:not(#_) {margin-left: 1rem;
margin-right: 1rem;
padding: 1rem;
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;}
.bt0cjrc_ .navbar .container .menu .nav-item .active.bt0cjrc:not(#_) {cursor: default;
color: var(--orange);}

`);var mb=Symbol(),nb=Symbol(),ob=Symbol(),pb=Symbol(),Nc=Symbol(),Z=Symbol(),qb=Symbol(),rb=Symbol(),Oc=Symbol(),_=Symbol(),sb=Symbol();class P extends imba.tags.get("component","ImbaElement"){init$(){super.init$(),this.slideCount=4,this.active=1,this.timer=void 0}prev(){return clearTimeout(this.timer),this.active=this.active===1?this.slideCount:this.active-1,this.mount()}next(){return clearTimeout(this.timer),this.active=this.active===this.slideCount?1:this.active+1,this.mount()}changeSlide(a){return clearTimeout(this.timer),this.active=a,this.mount()}autoChangeSlide(){var a=this;return this.timer=setTimeout(function(){return a.active=a.active===a.slideCount?1:a.active+1,a.render(),a.mount()},5e3)}mount(){return this.autoChangeSlide()}unmount(){return clearTimeout(this.timer)}render(){var a=this,c,j,b,k=this._ns_||"",l,e,g,m,i,f,n,d,h,p,r,u,s,y,C,A;c=this,c.open$(),(j=b=1,c[mb]===1)||(j=b=0,c[mb]=1),(l=c[nb])||(c[nb]=l=imba.createElement("div",c,`slider ${k}`,null)),(e=c[ob])||(c[ob]=e=imba.createIndexedFragment(128,l)),g=0,m=e.$;for(let B=this.slideCount,z=1,o=B-z;o>0?z<=B:z>=B;o>0?z++:z--){let q="url(imgs/home"+z+".jpg)";(f=n=1,i=m[g])||(f=n=0,m[g]=i=imba.createElement("div",e,`q7abtkcd slide ${k}`,null)),f||(i.up$=e),q===i[pb]||i.css$var("--q7abtke",i[pb]=q,null,"bgi"),d=z===this.active||void 0,d===i[Z]||(n|=2,i[Z]=d),n&2&&i.flag$(`q7abtkcd slide ${k} `+(i[Z]?"show":"")),f||(h=imba.createElement("div",i,`filter ${k}`,null)),f||(h=imba.createElement("div",i,`container ${k}`,null)),f||(p=imba.createElement("div",h,`wrapper ${k}`,null)),f||(r=imba.createElement("h1",p,`${k}`,"Montagem e Equipamentos Industriais")),f||(r=imba.createElement("p",p,`${k}`,"Anim eiusmod cillum officia fugiat incididunt labore.")),f||(r=imba.createElement("button",p,`btn ${k}`,"Peça um orçamento")),g++}e.end$(g),(e=c[qb])||(c[qb]=e=imba.createElement("div",l,`navigation ${k}`,null)),(i=c[rb])||(c[rb]=i=imba.createIndexedFragment(384,e)),u=0,s=i.$;for(let B=this.slideCount,z=1,o=B-z;o>0?z<=B:z>=B;o>0?z++:z--)(y=C=1,h=s[u])||(y=C=0,s[u]=h=imba.createElement("label",i,`dot ${k}`,null)),y||(h.up$=i),A=z===this.active||void 0,A===h[_]||(C|=2,h[_]=A),A=h[sb]||(h[sb]={$_:[function(q,t,v){return a.changeSlide(v)},null]}),A.$_[1]=z,y||h.on$("click",A,this),C&2&&h.flag$(`dot ${k} `+(h[_]?"active":"")),u++;return i.end$(u),j||(e=imba.createElement("div",l,`q7abtkcf go ${k}`,null)),j||e.on$("click",{$_:[function(B,z){return a.next()}]},this),j||(i=imba.createElement("i",e,`fa fa-angle-right ${k}`,null)),j||(e=imba.createElement("div",l,`q7abtkcg go ${k}`,null)),j||e.on$("click",{$_:[function(B,z){return a.prev()}]},this),j||(i=imba.createElement("i",e,`fa fa-angle-left ${k}`,null)),c.close$(b),c}}imba.tags.define("slider-q7abtk",P,{ns:"q7abtkc"});imba.inlineStyles(`.q7abtkcd:not(#_):not(#_) {background-image: var(--q7abtke);}

.q7abtkcf:not(#_):not(#_) {right: 0rem;
border-radius: 100% 0% 0% 100% / 50% 0% 0% 50%;}

.q7abtkcg:not(#_):not(#_) {left: 0rem;
border-radius: 0% 100% 100% 0% / 0% 50% 50% 0%;}


.q7abtkc_ .slider.q7abtkc:not(#_) {position: relative;
height: calc(100vh - 4rem);
animation: var(--animation-fadeIn,fadeIn) 1s;}
.q7abtkc_ .slider .show.q7abtkc:not(#_) {animation-name: var(--animation-fadeIn,fadeIn);}
.q7abtkc_ .slider .slide.q7abtkc:not(#_) {width: 100%;
height: 100%;
animation-duration: 1s;
animation-fill-mode: both;
background-size: cover;
background-position: center;
position: absolute;
opacity: 0;}
.q7abtkc_ .slider .slide.q7abtkc:not(#_):not(.show) {animation-name: var(--animation-fadeOut,fadeOut);
z-index: -1;}
.q7abtkc_ .slider .slide .filter.q7abtkc:not(#_) {position: absolute;
top: 0rem;
left: 0rem;
bottom: 0rem;
right: 0rem;
opacity: 0.8;
background: linear-gradient(45deg, #0d1128 0%, #fd6100 100%);}
.q7abtkc_ .slider .slide .container.q7abtkc:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);
position: absolute;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;}
.q7abtkc_ .slider .slide .container .wrapper.q7abtkc:not(#_) {width: 50%;}
.q7abtkc_ .slider .slide .container .wrapper p.q7abtkc:not(#_) {color: hsla(0.00,0.00%,100.00%,90%);}
.q7abtkc_ .slider .slide .container .wrapper .btn.q7abtkc:not(#_) {margin-top: 1rem;
color: hsla(0.00,0.00%,100.00%,100%);
background: var(--orange);
border-radius: 9999px;
padding: 1rem 1.5rem;
border: 1px solid var(--orange);
cursor: pointer;
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
outline: none;
user-select: none;}
.q7abtkc_ .slider .slide .container .wrapper .btn.q7abtkc:not(#_):hover {color: var(--orange);}
.q7abtkc_ .slider .slide .container .wrapper .btn.q7abtkc:not(#_):hover {background: hsla(0.00,0.00%,100.00%,0%);}
.q7abtkc_ .slider .navigation.q7abtkc:not(#_) {--t_x:0;--t_y:0;--t_z:0;--t_rotate:0;--t_scale:1;--t_scale-x:1;--t_scale-y:1;--t_skew-x:0;--t_skew-y:0;
transform: translate3d(var(--t_x),var(--t_y),var(--t_z)) rotate(var(--t_rotate)) skewX(var(--t_skew-x)) skewY(var(--t_skew-y)) scaleX(var(--t_scale-x)) scaleY(var(--t_scale-y)) scale(var(--t_scale));
display: flex;
position: absolute;
bottom: 20px;
left: 50%;
--t_x: -50% !important;
z-index: 1;}
.q7abtkc_ .slider .navigation .dot.q7abtkc:not(#_) {margin-left: 6px;
margin-right: 6px;
width: 10px;
height: 10px;
border-radius: 9999px;
background: hsla(0.00,0.00%,100.00%,100%);
cursor: pointer;
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;}
.q7abtkc_ .slider .navigation .dot.q7abtkc:not(#_):hover {background: var(--orange);}
.q7abtkc_ .slider .navigation .active.q7abtkc:not(#_) {background: var(--orange);}
.q7abtkc_ .slider .go.q7abtkc:not(#_) {position: absolute;
top: 0rem;
bottom: 0rem;
width: 75px;
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
font-size: 2rem;
color: hsla(0.00,0.00%,100.00%,50%);}
.q7abtkc_ .slider .go.q7abtkc:not(#_):hover {background: hsla(0.00,0.00%,100.00%,20%);}
.q7abtkc_ .slider .go.q7abtkc:not(#_):hover {color: hsla(0.00,0.00%,100.00%,100%);}

`);var Ka=Symbol(),rc=Symbol(),X=Symbol(),La=Symbol(),Ma=Symbol(),sc=Symbol(),Y=Symbol(),Na=Symbol();class D extends imba.tags.get("component","ImbaElement"){init$(){super.init$(),this.delay=0}mount(){var a=this;return this.observer=new IntersectionObserver(function(c){return c.forEach(function(j){if(j.isIntersecting)return a.animating=!0,a.render()})}),this.observer.observe(this.$item)}unmount(){return this.observer.disconnect()}render(){var a,c,j,b,k=this._ns_||"",l,e,g,m,i;return a=this,a.open$(),(c=j=1,a[Ka]===1)||(c=j=0,a[Ka]=1),b=this.flb||void 0,b===a[X]||(j|=2,a[X]=b),(!c||j&2)&&a.flagSelf$(a[X]?"ktq4g5bc":""),(e=g=1,l=a[La])||(e=g=0,a[La]=l=this.$item=imba.createElement("div",a,`ktq4g5be ${k} item ref--item`,null)),m=this.delay+.1,m===a[Ma]||l.css$var("--ktq4g5f",a[Ma]=m,"s","animation-delay"),m=this.animating||void 0,m===a[Y]||(g|=2,a[Y]=m),g&2&&l.flag$(`ktq4g5be ${k} item ref--item `+(a[Y]?"fadeInUp":"")),i=a.__slots.__,a[Na]=l.insert$(i,384,a[Na]),a.close$(j),a}}imba.tags.define("fade-in-up-ktq4g5",D,{ns:"ktq4g5b"});imba.inlineStyles(`.ktq4g5bc:not(#_):not(#_) {flex-basis: 100%;}

.ktq4g5be:not(#_):not(#_) {width: 100%;
height: 100%;
animation-delay: var(--ktq4g5f);}


.ktq4g5b_ .fadeInUp.ktq4g5b:not(#_) {animation: var(--animation-fadeInUp,fadeInUp) 1s;
animation-fill-mode: both;}

`);var hb=Symbol(),ib=Symbol(),jb=Symbol(),kb=Symbol(),lb=Symbol();class Q extends imba.tags.get("component","ImbaElement"){render(){var a,c,j,b=this._ns_||"",k,l,e,g,m,i,f,n,d,h;return a=this,a.open$(),(c=j=1,a[hb]===1)||(c=j=0,a[hb]=1),c||(k=imba.createElement("div",a,`services ${b}`,null)),(e=g=1,l=a[ib])||(e=g=0,a[ib]=l=imba.createComponent(D,k,`${b}`,null)),m=l.slot$("__",a),e||(l.delay=0),e||(l.flb=!0),e||(i=imba.createElement("div",m,`qjk82vcd card ${b}`,null)),e||(f=imba.createElement("i",i,`icon flaticon-050-robot-arm ${b}`,null)),e||(f=imba.createElement("h3",i,`${b}`,"Automação")),e||(f=imba.createElement("p",i,`${b}`,"Elit esse eiusmod labore ut velit proident pariatur reprehenderit id esse qui non tempor veniam.")),e||!l.setup||l.setup(g),l.end$(g),e||l.insertInto$(k),(e=g=1,l=a[jb])||(e=g=0,a[jb]=l=imba.createComponent(D,k,`${b}`,null)),n=l.slot$("__",a),e||(l.delay=.1),e||(l.flb=!0),e||(i=imba.createElement("div",n,`qjk82vce card ${b}`,null)),e||(f=imba.createElement("i",i,`icon flaticon-008-factory ${b}`,null)),e||(f=imba.createElement("h3",i,`${b}`,"Fabricação")),e||(f=imba.createElement("p",i,`${b}`,"Laboris nulla sunt deserunt ea laborum aliquip mollit exercitation anim tempor non mollit reprehenderit laboris.")),e||!l.setup||l.setup(g),l.end$(g),e||l.insertInto$(k),(e=g=1,l=a[kb])||(e=g=0,a[kb]=l=imba.createComponent(D,k,`${b}`,null)),d=l.slot$("__",a),e||(l.delay=.2),e||(l.flb=!0),e||(i=imba.createElement("div",d,`qjk82vcf card ${b}`,null)),e||(f=imba.createElement("i",i,`icon flaticon-037-wrench ${b}`,null)),e||(f=imba.createElement("h3",i,`${b}`,"Instalação")),e||(f=imba.createElement("p",i,`${b}`,"Qui veniam magna consequat cillum ex officia aliqua id quis enim consectetur anim laboris.")),e||!l.setup||l.setup(g),l.end$(g),e||l.insertInto$(k),(e=g=1,l=a[lb])||(e=g=0,a[lb]=l=imba.createComponent(D,k,`${b}`,null)),h=l.slot$("__",a),e||(l.delay=.3),e||(l.flb=!0),e||(i=imba.createElement("div",h,`qjk82vcg card ${b}`,null)),e||(f=imba.createElement("i",i,`icon flaticon-022-repair-tools ${b}`,null)),e||(f=imba.createElement("h3",i,`${b}`,"Manutenção")),e||(f=imba.createElement("p",i,`${b}`,"Amet officia elit proident mollit esse mollit id deserunt laborum do sint tempor consectetur.")),e||!l.setup||l.setup(g),l.end$(g),e||l.insertInto$(k),a.close$(j),a}}imba.tags.define("services-qjk82v",Q,{ns:"qjk82vc"});imba.inlineStyles(`.qjk82vcd:not(#_):not(#_) {background: var(--orange);}

.qjk82vce:not(#_):not(#_) {background: var(--indigo);}

.qjk82vcf:not(#_):not(#_) {background: var(--orange);}

.qjk82vcg:not(#_):not(#_) {background: var(--indigo);}


.qjk82vc_ .services.qjk82vc:not(#_) {display: flex;}
.qjk82vc_ .services .card.qjk82vc:not(#_) {padding: 3rem 1.5rem;
text-align: center;
flex-basis: 100%;
height: 100%;}
.qjk82vc_ .services .card .icon.qjk82vc:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);
display: block;
margin-bottom: 2rem;}
.qjk82vc_ .services .card .icon.qjk82vc:not(#_)::before {font-size: 3.125rem;
line-height: 3.125rem;
--u_lh: 3.125rem;}
.qjk82vc_ .services .card h3.qjk82vc:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);}
.qjk82vc_ .services .card p.qjk82vc:not(#_) {color: hsla(0.00,0.00%,100.00%,80%);}

`);var fb=Symbol(),gb=Symbol();class R extends imba.tags.get("component","ImbaElement"){render(){var a,c,j,b=this._ns_||"",k,l,e,g,m,i,f,n,d,h;return a=this,a.open$(),(c=j=1,a[fb]===1)||(c=j=0,a[fb]=1),c||(k=imba.createElement("div",a,`section container ${b}`,null)),(e=g=1,l=a[gb])||(e=g=0,a[gb]=l=imba.createComponent(D,k,`${b}`,null)),m=l.slot$("__",a),e||(i=imba.createElement("div",m,`wrapper ${b}`,null)),e||(f=imba.createElement("h1",i,`title ${b}`,"Sobre a empresa")),e||(f=imba.createElement("p",i,`text ${b}`,"Ipsum magna ut ullamco commodo occaecat enim non reprehenderit cillum. Velit sit consequat cupidatat nisi excepteur qui ad nulla excepteur. Id cillum ad enim pariatur et sint mollit excepteur. Sint exercitation nulla sunt ex velit commodo id minim tempor enim aliqua ea.")),e||(f=imba.createElement("div",i,`grid ${b}`,null)),e||(n=imba.createElement("div",f,`card ${b}`,null)),e||(d=imba.createElement("div",n,`icon ${b}`,null)),e||(h=imba.createElement("i",d,`flaticon-050-robot-arm ${b}`,null)),e||(d=imba.createElement("div",n,`text ${b}`,null)),e||(h=imba.createElement("h3",d,`${b}`,"Comprometimento")),e||(h=imba.createElement("p",d,`${b}`,"Occaecat duis dolore non anim veniam reprehenderit cillum consectetur.")),e||(n=imba.createElement("div",f,`card ${b}`,null)),e||(d=imba.createElement("div",n,`icon ${b}`,null)),e||(h=imba.createElement("i",d,`flaticon-050-robot-arm ${b}`,null)),e||(d=imba.createElement("div",n,`text ${b}`,null)),e||(h=imba.createElement("h3",d,`${b}`,"Inovação")),e||(h=imba.createElement("p",d,`${b}`,"Occaecat duis dolore non anim veniam reprehenderit cillum consectetur.")),e||(n=imba.createElement("div",f,`card ${b}`,null)),e||(d=imba.createElement("div",n,`icon ${b}`,null)),e||(h=imba.createElement("i",d,`flaticon-050-robot-arm ${b}`,null)),e||(d=imba.createElement("div",n,`text ${b}`,null)),e||(h=imba.createElement("h3",d,`${b}`,"Segurança")),e||(h=imba.createElement("p",d,`${b}`,"Occaecat duis dolore non anim veniam reprehenderit cillum consectetur.")),e||(n=imba.createElement("div",f,`card ${b}`,null)),e||(d=imba.createElement("div",n,`icon ${b}`,null)),e||(h=imba.createElement("i",d,`flaticon-050-robot-arm ${b}`,null)),e||(d=imba.createElement("div",n,`text ${b}`,null)),e||(h=imba.createElement("h3",d,`${b}`,"Ética")),e||(h=imba.createElement("p",d,`${b}`,"Occaecat duis dolore non anim veniam reprehenderit cillum consectetur.")),e||(n=imba.createElement("div",f,`card ${b}`,null)),e||(d=imba.createElement("div",n,`icon ${b}`,null)),e||(h=imba.createElement("i",d,`flaticon-050-robot-arm ${b}`,null)),e||(d=imba.createElement("div",n,`text ${b}`,null)),e||(h=imba.createElement("h3",d,`${b}`,"Profissionalismo")),e||(h=imba.createElement("p",d,`${b}`,"Occaecat duis dolore non anim veniam reprehenderit cillum consectetur.")),e||(n=imba.createElement("div",f,`card ${b}`,null)),e||(d=imba.createElement("div",n,`icon ${b}`,null)),e||(h=imba.createElement("i",d,`flaticon-050-robot-arm ${b}`,null)),e||(d=imba.createElement("div",n,`text ${b}`,null)),e||(h=imba.createElement("h3",d,`${b}`,"Trabalho em Equipe")),e||(h=imba.createElement("p",d,`${b}`,"Occaecat duis dolore non anim veniam reprehenderit cillum consectetur.")),e||!l.setup||l.setup(g),l.end$(g),e||l.insertInto$(k),c||(l=imba.createElement("div",k,`img d4hr68cd ${b}`,null)),a.close$(j),a}}imba.tags.define("section-d4hr68",R,{ns:"d4hr68c"});imba.inlineStyles(`.d4hr68cd:not(#_):not(#_) {background-image: url("imgs/section5.jpg");}


.d4hr68c_ .section.d4hr68c:not(#_) {display: flex;}
.d4hr68c_ .section .wrapper.d4hr68c:not(#_) {padding: 3rem 1.5rem;}
.d4hr68c_ .section .wrapper h1.d4hr68c:not(#_),.d4hr68c_ .section .wrapper h3.d4hr68c:not(#_) {color: hsla(0.00,0.00%,0.00%,80%);}
.d4hr68c_ .section .wrapper p.d4hr68c:not(#_) {color: var(--grey);}
.d4hr68c_ .section .wrapper .grid.d4hr68c:not(#_) {margin-top: 4rem;
display: grid;
grid-gap: 2rem;
grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);}
.d4hr68c_ .section .wrapper .grid .card.d4hr68c:not(#_) {display: flex;}
.d4hr68c_ .section .wrapper .grid .icon.d4hr68c:not(#_) {margin-top: .5rem;
width: 80px;
height: 80px;
color: hsla(0.00,0.00%,100.00%,100%);
border-radius: 9999px;
background: var(--orange);
display: flex;
align-items: center;
text-align: center;}
.d4hr68c_ .section .wrapper .grid .icon i.d4hr68c:not(#_) {width: 100%;}
.d4hr68c_ .section .wrapper .grid .icon i.d4hr68c:not(#_)::before {font-size: 1.875rem;
line-height: 1.875rem;
--u_lh: 1.875rem;}
.d4hr68c_ .section .wrapper .grid .text.d4hr68c:not(#_) {width: calc(100% - 80px);
padding-left: 1rem;}
.d4hr68c_ .section .wrapper .grid .text h3.d4hr68c:not(#_) {font-size: 1.25rem;}
.d4hr68c_ .section .img.d4hr68c:not(#_) {width: 100%;
background-size: cover;
background-position: center;}

`);var Za=Symbol(),_a=Symbol();class S extends imba.tags.get("component","ImbaElement"){render(){var a,c,j,b=this._ns_||"",k,l,e,g,m,i,f,n;return a=this,a.open$(),(c=j=1,a[Za]===1)||(c=j=0,a[Za]=1),c||(k=imba.createElement("div",a,`parallax ${b}`,null)),c||(l=imba.createElement("div",k,`filter ${b}`,null)),c||(l=imba.createElement("div",k,`container ${b}`,null)),c||(e=imba.createElement("iframe",l,`map ${b}`,null)),c||(e.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1056.1157327774918!2d-52.6248829023278!3d-27.082707942470464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4b5d3b1b49285%3A0x8a0c309b92417f3!2sR.%20Princesa%20Isabel%2C%20192%20-%20S%C3%A3o%20Crist%C3%B3v%C3%A3o%2C%20Chapec%C3%B3%20-%20SC%2C%2089813-160!5e0!3m2!1spt-BR!2sbr!4v1601341415373!5m2!1spt-BR!2sbr"),c||(e.frameborder="0"),c||(e.style="border:0;"),c||(e.allowfullscreen=""),c||e.set$("aria-hidden","false"),c||(e.tabindex="0"),(g=m=1,e=a[_a])||(g=m=0,a[_a]=e=imba.createComponent(D,l,`${b}`,null)),i=e.slot$("__",a),g||(e.flb=!0),g||(f=imba.createElement("div",i,`paragraph ${b}`,null)),g||(n=imba.createElement("h1",f,`${b}`,"Lorem Ipsum")),g||(n=imba.createElement("p",f,`${b}`,"Incididunt nostrud non ullamco exercitation ut veniam. Aute eu cillum nulla est elit ex nisi Lorem. Sunt magna aliqua pariatur est officia fugiat esse reprehenderit velit ea ex Lorem. In cillum adipisicing dolore irure. Ullamco nisi elit pariatur sint ea qui laboris. Nulla irure excepteur quis aliquip sint nulla fugiat aute duis proident Lorem tempor sunt.")),g||(n=imba.createElement("p",f,`${b}`,"Officia voluptate non nulla consectetur cupidatat ut ipsum qui mollit amet voluptate.")),g||!e.setup||e.setup(m),e.end$(m),g||e.insertInto$(l),a.close$(j),a}}imba.tags.define("parallax-gj1ng4",S,{ns:"gj1ng4c"});imba.inlineStyles(`
.gj1ng4c_ .parallax.gj1ng4c:not(#_) {position: relative;
background-image: url("imgs/parallax1.jpg");
width: 100%;
height: auto;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
padding-top: 7rem;
padding-bottom: 7rem;}
.gj1ng4c_ .parallax h1.gj1ng4c:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);}
.gj1ng4c_ .parallax p.gj1ng4c:not(#_) {color: hsla(0.00,0.00%,100.00%,90%);}
.gj1ng4c_ .filter.gj1ng4c:not(#_) {content: '';
position: absolute;
top: 0rem;
left: 0rem;
bottom: 0rem;
right: 0rem;
opacity: 0.8;
background: linear-gradient(45deg, #0d1128 0%, #fd6100 100%);}
.gj1ng4c_ .container.gj1ng4c:not(#_) {display: flex;
position: relative;}
.gj1ng4c_ .container .paragraph.gj1ng4c:not(#_) {padding-left: 4rem;}
.gj1ng4c_ .container .map.gj1ng4c:not(#_) {width: 100%;
height: auto;
flex-basis: 100%;}

`);function ra(a){return a?a.toIterable?a.toIterable():a:[]}var sa=Symbol(),ta=Symbol(),ua=Symbol(),va=Symbol(),jc=Symbol(),V=Symbol(),wa=Symbol(),xa=Symbol(),kc=Symbol(),W=Symbol(),ya=Symbol(),za=Symbol(),Aa=Symbol(),Ba=Symbol(),Ca=Symbol(),Da=Symbol();class I extends imba.tags.get("component","ImbaElement"){init$(){super.init$(),this.imgs=["1","2","3","4"],this.active=0}changeSlide(a){return this.active=a}prev(){return this.active=this.active===0?this.imgs.length-1:this.active-1}next(){return this.active=this.active===this.imgs.length-1?0:this.active+1}render(){var a=this,c,j,b,k,l,e,g=this._ns_||"",m,i,f,n,d,h,p,r,u,s,y,C,A,B,z,o;k=this,k.open$(),(l=e=1,k[sa]===1)||(l=e=0,k[sa]=1),l||(m=imba.createElement("div",k,`card ${g}`,null)),(i=k[ta])||(k[ta]=i=imba.createElement("div",m,`imgs ${g}`,null)),(f=k[ua])||(k[ua]=f=imba.createIndexedFragment(128,i)),n=0,d=f.$;for(let q=0,t=ra(this.imgs),v=t.length;q<v;q++){let w=t[q],x="url(imgs/"+w+".jpg)";(p=r=1,h=d[n])||(p=r=0,d[n]=h=imba.createElement("div",f,`gntb0jcd img ${g}`,null)),p||(h.up$=f),x===h[va]||h.css$var("--gntb0je",h[va]=x,null,"bgi"),u=q===this.active||void 0,u===h[V]||(r|=2,h[V]=u),r&2&&h.flag$(`gntb0jcd img ${g} `+(h[V]?"show":"")),n++}f.end$(n),c=j=b=null;if(this.imgs.length>1){(p=r=1,c=k[wa])||(p=r=0,k[wa]=c=imba.createElement("div",null,`navigation ${g}`,null)),p||(c.up$=i),(s=c[xa])||(c[xa]=s=imba.createIndexedFragment(384,c)),y=0,C=s.$;for(let q=0,t=ra(this.imgs),v=t.length;q<v;q++){let w=t[q];(B=z=1,A=C[y])||(B=z=0,C[y]=A=imba.createElement("label",s,`dot ${g}`,null)),B||(A.up$=s),o=q===this.active||void 0,o===A[W]||(z|=2,A[W]=o),o=A[ya]||(A[ya]={$_:[function(x,E,G){return a.changeSlide(G)},null]}),o.$_[1]=q,B||A.on$("click",o,this),z&2&&A.flag$(`dot ${g} `+(A[W]?"active":"")),y++}s.end$(y),(p=r=1,j=k[za])||(p=r=0,k[za]=j=imba.createElement("div",null,`gntb0jcf go ${g}`,null)),p||(j.up$=i),p||j.on$("click",{$_:[function(q,t){return a.next()}]},this),p||(s=imba.createElement("i",j,`fa fa-angle-right ${g}`,null)),(p=r=1,b=k[Aa])||(p=r=0,k[Aa]=b=imba.createElement("div",null,`gntb0jcg go ${g}`,null)),p||(b.up$=i),p||b.on$("click",{$_:[function(q,t){return a.prev()}]},this),p||(s=imba.createElement("i",b,`fa fa-angle-left ${g}`,null))}return k[Ba]=i.insert$(c,0,k[Ba]),k[Ca]=i.insert$(j,0,k[Ca]),k[Da]=i.insert$(b,0,k[Da]),l||(i=imba.createElement("h3",m,`${g}`,"Sistema Hidráulico")),l||(i=imba.createElement("p",m,`${g}`,"Tempor non aliquip do laboris aliqua. Labore dolor sit labore in nisi fugiat qui. Occaecat mollit eiusmod labore voluptate anim in cupidatat do reprehenderit enim proident eiusmod cillum.")),l||(i=imba.createElement("button",m,`btn ${g}`,"Adicionar")),k.close$(e),k}}imba.tags.define("card-gntb0j",I,{ns:"gntb0jc"});imba.inlineStyles(`.gntb0jcd:not(#_):not(#_) {background-image: var(--gntb0je);}

.gntb0jcf:not(#_):not(#_) {right: 0rem;
border-radius: 100% 0% 0% 100% / 50% 0% 0% 50%;}

.gntb0jcg:not(#_):not(#_) {left: 0rem;
border-radius: 0% 100% 100% 0% / 0% 50% 50% 0%;}


.gntb0jc_ .card.gntb0jc:not(#_) {padding: 1.5rem;}
.gntb0jc_ .card .imgs.gntb0jc:not(#_) {position: relative;
height: 300px;
width: 100%;
margin-bottom: 1.5rem;}
.gntb0jc_ .card .imgs .img.gntb0jc:not(#_) {position: absolute;
background-size: cover;
background-position: center;
width: 100%;
height: 100%;
animation-duration: 1s;
animation-fill-mode: both;
opacity: 0;}
.gntb0jc_ .card .imgs .img.gntb0jc:not(#_):not(.show) {animation-name: var(--animation-fadeOut,fadeOut);
z-index: -1;}
.gntb0jc_ .card .imgs .show.gntb0jc:not(#_) {animation-name: var(--animation-fadeIn,fadeIn);}
.gntb0jc_ .card .imgs .navigation.gntb0jc:not(#_) {--t_x:0;--t_y:0;--t_z:0;--t_rotate:0;--t_scale:1;--t_scale-x:1;--t_scale-y:1;--t_skew-x:0;--t_skew-y:0;
transform: translate3d(var(--t_x),var(--t_y),var(--t_z)) rotate(var(--t_rotate)) skewX(var(--t_skew-x)) skewY(var(--t_skew-y)) scaleX(var(--t_scale-x)) scaleY(var(--t_scale-y)) scale(var(--t_scale));
display: flex;
position: absolute;
bottom: 20px;
left: 50%;
--t_x: -50% !important;
z-index: 1;}
.gntb0jc_ .card .imgs .navigation .dot.gntb0jc:not(#_) {margin-left: 6px;
margin-right: 6px;
width: 10px;
height: 10px;
border-radius: 9999px;
background: hsla(0.00,0.00%,100.00%,100%);
cursor: pointer;
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;}
.gntb0jc_ .card .imgs .navigation .dot.gntb0jc:not(#_):hover {background: var(--orange);}
.gntb0jc_ .card .imgs .navigation .active.gntb0jc:not(#_) {background: var(--orange);}
.gntb0jc_ .card .imgs .go.gntb0jc:not(#_) {position: absolute;
top: 0rem;
bottom: 0rem;
width: 40px;
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
color: hsla(0.00,0.00%,100.00%,50%);}
.gntb0jc_ .card .imgs .go.gntb0jc:not(#_):hover {background: hsla(0.00,0.00%,100.00%,20%);}
.gntb0jc_ .card .imgs .go.gntb0jc:not(#_):hover {color: hsla(0.00,0.00%,100.00%,100%);}
.gntb0jc_ .card h3.gntb0jc:not(#_) {font-size: 1.5rem;
color: hsla(0.00,0.00%,0.00%,80%);}
.gntb0jc_ .card p.gntb0jc:not(#_) {color: var(--grey);}
.gntb0jc_ .card .btn.gntb0jc:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);
background: var(--orange);
border-radius: 9999px;
padding: .375rem .75rem;
border: 1px solid var(--orange);
cursor: pointer;
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
outline: none;
user-select: none;}
.gntb0jc_ .card .btn.gntb0jc:not(#_):hover {color: var(--orange);}
.gntb0jc_ .card .btn.gntb0jc:not(#_):hover {background: hsla(0.00,0.00%,100.00%,0%);}

`);var $a=Symbol(),ab=Symbol(),bb=Symbol(),cb=Symbol(),db=Symbol(),eb=Symbol();class T extends imba.tags.get("component","ImbaElement"){render(){var a,c,j,b=this._ns_||"",k,l,e,g,m,i,f,n,d,h,p,r,u,s,y;a=this,a.open$(),(c=j=1,a[$a]===1)||(c=j=0,a[$a]=1),(l=e=1,k=a[ab])||(l=e=0,a[ab]=k=imba.createComponent(D,a,`${b}`,null)),g=k.slot$("__",a),l||(m=imba.createElement("div",g,`container ${b}`,null)),l||(i=imba.createElement("h1",m,`${b}`,"Nossos Produtos")),l||(i=imba.createElement("p",m,`${b}`,"Magna cupidatat consequat qui amet reprehenderit mollit eu anim aute tempor amet proident. Est veniam aute ad ut enim est proident dolor.")),l||!k.setup||k.setup(e),k.end$(e),l||k.insertInto$(a),(k=a[bb])||(a[bb]=k=imba.createElement("div",a,`grid ${b}`,null)),(m=a[cb])||(a[cb]=m=imba.createIndexedFragment(384,k)),f=0,n=m.$;for(let C=0;C<4;C++)(d=h=1,i=n[f])||(d=h=0,n[f]=i=imba.createComponent(D,m,`${b}`,null)),d||(i.up$=m),p=i.slot$("__",i),r=C/10,r===i[db]||(i.delay=i[db]=r),(s=y=1,u=i[eb])||(s=y=0,i[eb]=u=imba.createComponent(I,p,`${b}`,null)),s||!u.setup||u.setup(y),u.end$(y),s||u.insertInto$(p),d||!i.setup||i.setup(h),i.end$(h),f++;return m.end$(f),a.close$(j),a}}imba.tags.define("products-mbpc94",T,{ns:"mbpc94c"});imba.inlineStyles(`
.mbpc94c_ .container.mbpc94c:not(#_) {margin-top: 7rem;
text-align: center;
padding-left: 20%;
padding-right: 20%;}
.mbpc94c_ .container h1.mbpc94c:not(#_) {color: hsla(0.00,0.00%,0.00%,80%);}
.mbpc94c_ .container p.mbpc94c:not(#_) {color: var(--grey);}
.mbpc94c_ .grid.mbpc94c:not(#_) {margin-bottom: 7rem;
display: grid;
grid-template-columns: repeat(4, 1fr);}

`);var Ea=Symbol(),Fa=Symbol(),Ga=Symbol(),Ha=Symbol(),Ia=Symbol(),Ja=Symbol();class U extends imba.tags.get("component","ImbaElement"){render(){var a,c,j,b=this._ns_||"",k,l,e,g,m,i,f,n,d,h,p,r,u,s,y;a=this,a.open$(),(c=j=1,a[Ea]===1)||(c=j=0,a[Ea]=1),(l=e=1,k=a[Fa])||(l=e=0,a[Fa]=k=imba.createComponent(D,a,`${b}`,null)),g=k.slot$("__",a),l||(m=imba.createElement("div",g,`container ${b}`,null)),l||(i=imba.createElement("h1",m,`${b}`,"Nossas Peças")),l||(i=imba.createElement("p",m,`${b}`,"Magna cupidatat consequat qui amet reprehenderit mollit eu anim aute tempor amet proident. Est veniam aute ad ut enim est proident dolor.")),l||!k.setup||k.setup(e),k.end$(e),l||k.insertInto$(a),(k=a[Ga])||(a[Ga]=k=imba.createElement("div",a,`grid ${b}`,null)),(m=a[Ha])||(a[Ha]=m=imba.createIndexedFragment(384,k)),f=0,n=m.$;for(let C=0;C<4;C++)(d=h=1,i=n[f])||(d=h=0,n[f]=i=imba.createComponent(D,m,`${b}`,null)),d||(i.up$=m),p=i.slot$("__",i),r=C/10,r===i[Ia]||(i.delay=i[Ia]=r),(s=y=1,u=i[Ja])||(s=y=0,i[Ja]=u=imba.createComponent(I,p,`${b}`,null)),s||!u.setup||u.setup(y),u.end$(y),s||u.insertInto$(p),d||!i.setup||i.setup(h),i.end$(h),f++;return m.end$(f),a.close$(j),a}}imba.tags.define("components-w6cnej",U,{ns:"w6cnejc"});imba.inlineStyles(`
.w6cnejc_ .container.w6cnejc:not(#_) {padding-top: 7rem;
text-align: center;
padding-left: 20%;
padding-right: 20%;
background: #fafafa;}
.w6cnejc_ .container h1.w6cnejc:not(#_) {color: hsla(0.00,0.00%,0.00%,80%);}
.w6cnejc_ .container p.w6cnejc:not(#_) {color: var(--grey);}
.w6cnejc_ .grid.w6cnejc:not(#_) {margin-bottom: 7rem;
display: grid;
grid-template-columns: repeat(4, 1fr);}

`);var ka=Symbol(),la=Symbol(),ma=Symbol(),na=Symbol(),oa=Symbol(),pa=Symbol(),qa=Symbol();class L extends imba.tags.get("component","ImbaElement"){render(){var a,c,j,b=this._ns_||"",k,l,e;return a=this,a.open$(),(c=j=1,a[ka]===1)||(c=j=0,a[ka]=1),(l=e=1,k=a[la])||(l=e=0,a[la]=k=imba.createComponent(P,a,`${b}`,null)),l||!k.setup||k.setup(e),k.end$(e),l||k.insertInto$(a),(l=e=1,k=a[ma])||(l=e=0,a[ma]=k=imba.createComponent(Q,a,`${b}`,null)),l||!k.setup||k.setup(e),k.end$(e),l||k.insertInto$(a),(l=e=1,k=a[na])||(l=e=0,a[na]=k=imba.createComponent(R,a,`${b}`,null)),l||!k.setup||k.setup(e),k.end$(e),l||k.insertInto$(a),(l=e=1,k=a[oa])||(l=e=0,a[oa]=k=imba.createComponent(S,a,`${b}`,null)),l||!k.setup||k.setup(e),k.end$(e),l||k.insertInto$(a),(l=e=1,k=a[pa])||(l=e=0,a[pa]=k=imba.createComponent(T,a,`${b}`,null)),l||!k.setup||k.setup(e),k.end$(e),l||k.insertInto$(a),(l=e=1,k=a[qa])||(l=e=0,a[qa]=k=imba.createComponent(U,a,`${b}`,null)),l||!k.setup||k.setup(e),k.end$(e),l||k.insertInto$(a),a.close$(j),a}}imba.tags.define("home-p7c9gv",L,{});var Oa=Symbol(),Pa=Symbol(),Qa=Symbol(),Ra=Symbol(),Sa=Symbol();class M extends imba.tags.get("component","ImbaElement"){render(){var a,c,j,b=this._ns_||"",k,l,e,g,m,i,f,n,d,h,p,r,u,s;return a=this,a.open$(),(c=j=1,a[Oa]===1)||(c=j=0,a[Oa]=1),c||(k=imba.createElement("div",a,`footer container ${b}`,null)),c||(l=imba.createElement("div",k,`footer-wrapper ${b}`,null)),c||(e=imba.createElement("div",l,`col ${b}`,null)),c||(g=imba.createElement("h3",e,`${b}`,"Alguma dúvida?")),c||(g=imba.createElement("div",e,`info ${b}`,null)),c||(m=imba.createElement("div",g,`wrapper ${b}`,null)),c||(i=imba.createElement("i",m,`fa fa-map-marker ${b}`,null)),c||(i=imba.createElement("p",m,`${b}`,"203 Fake St. Mountain View, San Francisco, California, USA")),c||(m=imba.createElement("div",g,`wrapper ${b}`,null)),c||(i=imba.createElement("i",m,`fa fa-phone ${b}`,null)),c||(i=imba.createElement("p",m,`${b}`,"(49) 99999-9999")),c||(m=imba.createElement("div",g,`wrapper ${b}`,null)),c||(i=imba.createElement("i",m,`fa fa-envelope ${b}`,null)),c||(i=imba.createElement("p",m,`${b}`,"info@montaind.com")),c||(e=imba.createElement("div",l,`col ${b}`,null)),c||(g=imba.createElement("h3",e,`${b}`,"Links")),c||(g=imba.createElement("div",e,`links ${b}`,null)),c||(m=imba.createElement("div",g,`wrapper ${b}`,null)),c||(i=imba.createElement("i",m,`fa fa-long-arrow-right ${b}`,null)),c||(i=imba.createElement("a",m,`active ${b}`,"Home")),c||(m=imba.createElement("div",g,`wrapper ${b}`,null)),c||(i=imba.createElement("i",m,`fa fa-long-arrow-right ${b}`,null)),c||(i=imba.createElement("a",m,`${b}`,"Peças")),c||(m=imba.createElement("div",g,`wrapper ${b}`,null)),c||(i=imba.createElement("i",m,`fa fa-long-arrow-right ${b}`,null)),c||(i=imba.createElement("a",m,`${b}`,"Produtos")),c||(m=imba.createElement("div",g,`wrapper ${b}`,null)),c||(i=imba.createElement("i",m,`fa fa-long-arrow-right ${b}`,null)),c||(i=imba.createElement("a",m,`${b}`,"Orçamento")),c||(e=imba.createElement("div",l,`col ${b}`,null)),c||(g=imba.createElement("div",e,`subscribe ${b}`,null)),c||(m=imba.createElement("h3",g,`${b}`,"Inscreva-se!")),c||(m=imba.createElement("input",g,`${b}`,null)),c||(m.type="email"),c||(m.placeholder="Digite seu e-mail"),c||(m=imba.createElement("button",g,`button ${b}`,"Inscrever-se")),c||(g=imba.createElement("div",e,`social ${b}`,null)),c||(m=imba.createElement("h3",g,`${b}`,"Fale conosco")),c||(m=imba.createElement("div",g,`wrapper ${b}`,null)),(f=n=1,i=a[Pa])||(f=n=0,a[Pa]=i=imba.createComponent(D,m,`${b}`,null)),d=i.slot$("__",a),f||(i.delay=0),f||(h=imba.createElement("a",d,`${b}`,null)),f||(h.href="#"),f||(p=imba.createElement("i",h,`fa fa-twitter ${b}`,null)),f||!i.setup||i.setup(n),i.end$(n),f||i.insertInto$(m),(f=n=1,i=a[Qa])||(f=n=0,a[Qa]=i=imba.createComponent(D,m,`${b}`,null)),r=i.slot$("__",a),f||(i.delay=.1),f||(h=imba.createElement("a",r,`${b}`,null)),f||(h.href="#"),f||(p=imba.createElement("i",h,`fa fa-linkedin ${b}`,null)),f||!i.setup||i.setup(n),i.end$(n),f||i.insertInto$(m),(f=n=1,i=a[Ra])||(f=n=0,a[Ra]=i=imba.createComponent(D,m,`${b}`,null)),u=i.slot$("__",a),f||(i.delay=.2),f||(h=imba.createElement("a",u,`${b}`,null)),f||(h.href="#"),f||(p=imba.createElement("i",h,`fa fa-facebook ${b}`,null)),f||!i.setup||i.setup(n),i.end$(n),f||i.insertInto$(m),(f=n=1,i=a[Sa])||(f=n=0,a[Sa]=i=imba.createComponent(D,m,`${b}`,null)),s=i.slot$("__",a),f||(i.delay=.3),f||(h=imba.createElement("a",s,`${b}`,null)),f||(h.href="#"),f||(p=imba.createElement("i",h,`fa fa-instagram ${b}`,null)),f||!i.setup||i.setup(n),i.end$(n),f||i.insertInto$(m),c||(l=imba.createElement("p",k,`copyright ${b}`,"Copyright ©2020 All rights reserved | This website is made with Imba")),a.close$(j),a}}imba.tags.define("footer-trwdkc",M,{ns:"trwdkcc"});imba.inlineStyles(`
.trwdkcc_ .footer.trwdkcc:not(#_) {padding-top: 5.25rem;
padding-bottom: 5.25rem;
background: #232323;}
.trwdkcc_ .footer .footer-wrapper.trwdkcc:not(#_) {display: flex;
padding-bottom: 5rem;}
.trwdkcc_ .footer .footer-wrapper .col.trwdkcc:not(#_) {flex-basis: 100%;
padding-left: 2rem;
padding-right: 2rem;}
.trwdkcc_ .footer .footer-wrapper .col .wrapper.trwdkcc:not(#_) {display: flex;}
.trwdkcc_ .footer .footer-wrapper .col h3.trwdkcc:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);
margin-bottom: 2.5rem;}
.trwdkcc_ .footer .footer-wrapper .col p.trwdkcc:not(#_),.trwdkcc_ .footer .footer-wrapper .col a.trwdkcc:not(#_) {color: hsla(0.00,0.00%,100.00%,80%);
font-size: .875rem;
margin: 0rem;}
.trwdkcc_ .footer .footer-wrapper .col i.trwdkcc:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);}
.trwdkcc_ .footer .footer-wrapper .col i.trwdkcc:not(#_)::before {display: flex;
justify-content: center;}

.trwdkcc_ .footer .footer-wrapper .col .info i.trwdkcc:not(#_),.trwdkcc_ .footer .footer-wrapper .col .links i.trwdkcc:not(#_) {margin-right: .5rem;}
.trwdkcc_ .footer .footer-wrapper .col .info i.trwdkcc:not(#_)::before,.trwdkcc_ .footer .footer-wrapper .col .links i.trwdkcc:not(#_)::before {width: 20px;
height: 100%;}

.trwdkcc_ .footer .footer-wrapper .col .info i.trwdkcc:not(#_) {padding-top: 4px;}
.trwdkcc_ .footer .footer-wrapper .col .info .wrapper.trwdkcc:not(#_) {margin-bottom: 1rem;}

.trwdkcc_ .footer .footer-wrapper .col .links a.trwdkcc:not(#_) {cursor: pointer;
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;}
.trwdkcc_ .footer .footer-wrapper .col .links a.trwdkcc:not(#_):hover {color: hsla(0.00,0.00%,100.00%,100%);}
.trwdkcc_ .footer .footer-wrapper .col .links .active.trwdkcc:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);
cursor: default;}
.trwdkcc_ .footer .footer-wrapper .col .links i.trwdkcc:not(#_) {font-size: .8rem;}
.trwdkcc_ .footer .footer-wrapper .col .links i.trwdkcc:not(#_)::before {align-items: center;}
.trwdkcc_ .footer .footer-wrapper .col .subscribe.trwdkcc:not(#_) {margin-bottom: 2.5rem;}
.trwdkcc_ .footer .footer-wrapper .col .subscribe input.trwdkcc:not(#_),.trwdkcc_ .footer .footer-wrapper .col .subscribe button.trwdkcc:not(#_) {padding: 1rem;
background: #333333;
font-size: 1rem;
border-radius: 2px;
margin-bottom: .5rem;
text-align: center;
width: 100%;
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
color: hsla(0.00,0.00%,100.00%,100%);
outline: none;}
.trwdkcc_ .footer .footer-wrapper .col .subscribe input.trwdkcc:not(#_)::placeholder {font-family: var(--font);
font-size: 1rem;
color: hsla(0.00,0.00%,100.00%,70%);}
.trwdkcc_ .footer .footer-wrapper .col .subscribe button.trwdkcc:not(#_) {background: #5D50C6;
cursor: pointer;}
.trwdkcc_ .footer .footer-wrapper .col .subscribe button.trwdkcc:not(#_):hover {background: var(--orange);}

.trwdkcc_ .footer .footer-wrapper .col .social h3.trwdkcc:not(#_) {margin-bottom: 1rem;}
.trwdkcc_ .footer .footer-wrapper .col .social a.trwdkcc:not(#_) {margin-right: 1rem;
background: #333333;
width: 40px;
height: 40px;
border-radius: 9999px;
display: flex;
align-items: center;
justify-content: center;
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;}
.trwdkcc_ .footer .footer-wrapper .col .social a.trwdkcc:not(#_):hover {background: hsla(0.00,0.00%,100.00%,100%);}
.trwdkcc_ .footer .footer-wrapper .col .social a:hover i.trwdkcc:not(#_) {color: var(--orange);}
.trwdkcc_ .footer .footer-wrapper .col .social a i.trwdkcc:not(#_) {transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
font-size: 1.25rem;}
.trwdkcc_ .footer .copyright.trwdkcc:not(#_) {text-align: center;
color: hsla(0.00,0.00%,100.00%,80%);}

`);var aa=Symbol(),ba=Symbol(),ca=Symbol(),da=Symbol(),H,ub,ea;class fa extends imba.tags.get("component","ImbaElement"){render(){var a,c,j,b,k,l,e,g,m;return a=this,a.open$(),(c=j=1,a[aa]===1)||(c=j=0,a[aa]=1),(k=l=1,b=a[ba])||(k=l=0,a[ba]=b=imba.createComponent(K,a,null,null)),k||!b.setup||b.setup(l),b.end$(l),k||b.insertInto$(a),c||(b=imba.createElement("main",a,"yuxr2ecd",null)),(g=m=1,e=a[ca])||(g=m=0,a[ca]=e=imba.createComponent(L,b,null,null)),g||!e.setup||e.setup(m),e.end$(m),g||e.insertInto$(b),(k=l=1,b=a[da])||(k=l=0,a[da]=b=imba.createComponent(M,a,null,null)),k||!b.setup||b.setup(l),b.end$(l),k||b.insertInto$(a),a.close$(j),a}}imba.tags.define("app-yuxr2e",fa,{});imba.mount((H=imba.createComponent(fa,null,null,null),ub||!H.setup||H.setup(ea),H.end$(ea),H));imba.inlineStyles(`.yuxr2ecd:not(#_):not(#_) {margin-top: 4rem;
position: relative;}

`);
