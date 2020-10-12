const ROUTES = {};

class Location {
	
	
	static parse(url,router){
		
		if (url instanceof Location) {
			
			return url;
		}		return new Location(url,router);
	}
	
	constructor(url,router){
		
		this.router = router;
		this.parse(url);
	}
	
	parse(url){
		
		if (!((url instanceof URL))) { url = new URL(url,this.router.origin); }		this.url = url;
		return this;
		
	}
	// should definitely add match here
	
	search(){
		
		let str = this.searchParams ? this.searchParams.toString() : '';
		return str ? (('?' + str)) : '';
		
	}
	update(value){
		
		if (value instanceof Object) {
			
			for (let $i = 0, $keys = Object.keys(value), $l = $keys.length, k, v; $i < $l; $i++){
				k = $keys[$i];v = value[k];
				this.query(k,v);
			}		} else if (typeof value == 'string') {
			
			this.parse(value);
		}		return this;
		
	}
	query(name,value){
		
		let q = this.searchParams;
		if (value === undefined) { return q.get(name) }		return (value == null || value == '') ? q.delete(name) : q.set(name,value);
	}
	
	clone(){
		
		return new Location(this.url.href,this.router);
		
	}
	equals(other){
		
		return this.toString() == String(other);
	}
	
	get href(){
		
		return this.url.href;
	}
	
	get path(){
		
		return this.url.href.slice(this.url.origin.length);
	}
	
	get pathname(){
		
		return this.url.pathname;
		
	}
	toString(){
		
		return this.href;
		
	}
	match(str){
		
		let route = ROUTES[str] || (ROUTES[str] = new Route(null,str));
		return route.test(this);
	}
}

// import Route from './route'

class Request {
	
	// prop router
	// prop referrer
	// prop aborted
	// prop location
	// prop state
	// prop mode
	
	constructor(router,loc,referrer){
		
		this.router = router;
		if (loc) {
			
			this.location = Location.parse(loc);
			this.original = this.location.clone();
		}		
		this.referrer = referrer;
		// @path = @originalPath = path
		// @referrer = referrer
	}
	
	redirect(path){
		var $0;
		
		($0 = this.location) && $0.update  &&  $0.update(path);
		// allow normalizing urls
		// @redirected = @path = path
		return this;
		
	}
	get path(){
		var $0;
		
		return ($0 = this.location) && $0.path;
		
	}
	get url(){
		var $0;
		
		return ($0 = this.location) && $0.toString  &&  $0.toString();
		
	}
	set path(value){
		
		this.location.path = value;
	}
	
	abort(forced = false){
		
		this.aborted = true;
		if (forced) { this.forceAbort = forced; }		return this;
	}
	
	match(str){
		
		return this.location ? (new Route(this,str)).test() : null;
	}
}

function iter$(a){ return a ? (a.toIterable ? a.toIterable() : a) : []; }
class Route$1 {
	
	// prop raw
	// prop params
	// prop status watch: yes
	
	constructor(router,str,parent,options = {}){
		
		this.parent = parent;
		this.router = router;
		this.options = options;
		this.status = 200;
		this.path = str;
		
	}
	set path(path){
		var self = this;
		
		if (this.$path == path) { return }		
		this.raw = path;
		this.$path = path;
		this.groups = [];
		this.params = {};
		this.cache = {};
		
		if (path.indexOf('?') >= 0) {
			
			let parts = path.split('?');
			path = parts.shift();
			this.query = {};
			// loop through and create regexes for matching?
			for (let $i = 0, $items = iter$(parts.join('?').split('&')), $len = $items.length; $i < $len; $i++) {
				let pair = $items[$i];
				if (!(pair)) { continue; }				var [k,v] = pair.split('=');
				if (k[0] == '!') {
					
					k = k.slice(1);
					v = false;
				}				if (v === '') {
					
					v = false;
				}				
				this.query[k] = v || ((v === false) ? false : true);
			}		}		
		path = path.replace(/\:(\w+|\*)(\.)?/g,function(m,id,dot) {
			
			// what about :id.:format?
			if (id != '*') { self.groups.push(id); }			if (dot) {
				
				return "([^\/\#\.\?]+)\.";
			} else {
				
				return "([^\/\#\?]+)";
			}		});
		
		if (path == '' && this.query) {
			
			return;
			
		}		path = '^' + path;
		let end = path[path.length - 1];
		if (this.options.exact && end != '$') {
			
			path = path + '(?=[\#\?]|$)';
		} else if ((end != '/' && end != '$' && path != '^/')) {
			
			// we only want to match end OR /
			// if path[path:length - 1]
			path = path + '(?=[\/\#\?]|$)';
		}		this.regex = new RegExp(path);
	}
	
	test(loc,path){
		var m, match;
		
		// test with location
		loc || (loc = this.router.location);
		path || (path = loc.pathname);
		
		let url = loc.path;
		
		if (url == this.cache.url) { return this.cache.match }		
		let prefix = '';
		let matcher = path;
		this.cache.url = url;
		this.cache.match = null;
		let qmatch;
		
		if (this.query) {
			
			qmatch = {};
			for (let $o = this.query, $i = 0, $keys = Object.keys($o), $l = $keys.length, k, v; $i < $l; $i++){
				k = $keys[$i];v = $o[k];
				let m = loc.query(k);
				let name = k;
				// no match
				if (v === false) {
					
					if (m) { return null }					continue;
				}				
				if (v[0] == ':') {
					
					name = v.slice(1);
					v = true;
				}				
				if ((v == true && m) || v == m) {
					
					qmatch[name] = m;
				} else {
					
					return null;
				}			}		}		
		if (this.parent && this.raw[0] != '/') {
			
			if (m = this.parent.test(loc,path)) {
				
				if (path.indexOf(m.path) == 0) {
					
					prefix = m.path + '/';
					matcher = path.slice(m.path.length + 1);
				}			}		}		
		// try to match our part of the path with regex
		if (match = (this.regex ? matcher.match(this.regex) : [''])) {
			
			let fullpath = prefix + match[0];
			let prevParams = this.params;
			// nothing changed
			if (fullpath == this.params.path) {
				
				this.params.url = url;
			} else {
				
				this.params = {path: fullpath,url: url};
				if (this.groups.length) {
					
					for (let i = 0, $items = iter$(match), $len = $items.length, name; i < $len; i++) {
						let item = $items[i];
						if (name = this.groups[i - 1]) {
							
							this.params[name] = item;
						}					}				}			}			if (qmatch) {
				
				let change = false;
				for (let $i = 0, $keys = Object.keys(qmatch), $l = $keys.length, k, v; $i < $l; $i++){
					k = $keys[$i];v = qmatch[k];
					if (this.params[k] != v) {
						
						change = true;
						this.params[k] = v;
					}				}				
				if (change && prevParams == this.params) {
					
					this.params = Object.assign({},this.params);
				}			}			// try to match tab-values as well
			return this.cache.match = this.params;
		}		
		return this.cache.match = null;
	}
	
	resolve(url){
		var m;
		
		if (this.raw[0] == '/') { return this.raw }		
		url || (url = this.router.url);
		
		if (this.cache.resolveUrl == url && this.cache.resolved) {
			
			return this.cache.resolved;
		}		
		this.cache.resolveUrl = url;
		
		// if @query
		// 	raw = raw.slice(0,raw.indexOf('?'))
		// 	# add / remove params from url
		
		if (this.parent) {
			
			if (m = this.parent.test()) {
				
				if (this.raw[0] == '?') {
					
					// possibly replace with & or even replace param?
					this.cache.resolved = m.path + this.raw;
				} else {
					
					this.cache.resolved = m.path + '/' + this.raw;
				}			}		} else {
			
			// FIXME what if the url has some unknowns?
			this.cache.resolved = this.raw;// .replace(/[\@\$]/g,'')
		}		
		return this.cache.resolved;
	}
}

function extend$(target,ext){
	// @ts-ignore
	var descriptors = Object.getOwnPropertyDescriptors(ext);
	// @ts-ignore
	Object.defineProperties(target.prototype,descriptors);
	return target;
}
class ElementRoute {
	
	constructor(node,path,parent,options = {}){
		
		this.node = node;
		this.route = node.router.routeFor(node,path,parent ? parent.route : null,options);
		this.match = null;
		this.options = options;
		this.placeholder = node.$placeholder || new Comment(("" + path));
	}
	
	get raw(){
		
		return this.route.raw;
	}
	
	set path(value){
		
		this.route.path = value;
	}
	
	get params(){
		
		return this.match;
		
	}
	get sticky(){
		
		return this.options && this.options.sticky;
		
	}
	get exact(){
		
		return this.options && this.options.exact;
	}
	
	isActive(){
		
		return this.match && this.match.active;
	}
	
	resolve(){
		
		let prev = this.match;
		let prevUrl = prev && prev.url;
		let curr = this.route.test();
		
		// console.log 'resolving route?',raw,match,prev
		if (curr) {
			
			let active = prev && prev.active;// what if the previous was active?
			curr.active = true;
			
			if (curr != prev) {
				
				this.match = curr;
			}			
			if (curr != prev || !(active) || (curr.url != prevUrl)) {
				
				this.resolved(curr,prev,prevUrl);
			}			
			if (!(active)) {
				
				this.enter();
			}			
			return curr;
		} else if (prev && prev.active) {
			
			prev.active = false;
			this.leave();
		} else if (!(prev)) {
			
			this.match = prev = {};
			this.leave();
			
		}		return prev;
	}
	
	enter(){
		var $0;
		
		this.node.flags.remove('not-routed');
		this.node.flags.add('routed');
		return ($0 = this.node) && $0.routeDidEnter  &&  $0.routeDidEnter(this);
		
	}
	resolved(match,prev,prevUrl){
		var $0;
		
		return ($0 = this.node) && $0.routeDidResolve  &&  $0.routeDidResolve(match,prev,prevUrl);
	}
	
	leave(){
		var $0;
		
		// replace flag?
		this.node.flags.add('not-routed');
		this.node.flags.remove('routed');
		return ($0 = this.node) && $0.routeDidLeave  &&  $0.routeDidLeave(this);
	}
}
class ElementRouteTo extends ElementRoute {
	
	
	enter(){
		
		return this;
		
	}
	resolve(){
		
		this.url = this.route.resolve();
		return super.resolve(...arguments);
		
	}
	resolved(){
		
		return this;
		
	}
	leave(){
		
		return this;
	}
	
	go(){
		
		let href = this.route.resolve();
		if (this.sticky && this.match && !(this.match.active)) {
			
			href = this.match.url || href;
		}		
		if (this.options && this.options.replace) {
			
			return this.node.router.replace(href);
		} else {
			
			return this.node.router.go(href);
		}	}
}
extend$(Element,{
	
	
	// set router value
	// 	$router = value
	// 
	// get router
	// 	if $web$
	// 		# router instance
	// 		yes
	// 	$router ||= $context.router
	
	get route(){
		
		return this.$route;
	},
	
	get parentRoute(){
		
		return this.$context.route;
	},
	
	set route(value){
		var self = this;
		
		if (this.$route && this.$route.raw != value) {
			
			this.$route.path = value;
			return;
		}		
		let par = (value[0] != '/') ? this.parentRoute : null;
		this.$route = new ElementRoute(this,value,par,this.route__);
		// console.log 'setting route!',value,$route,par
		this.end$ = this.end$routed;
		
		this.insertInto$ = function(parent) {
			
			// should base this on a modifier
			return parent.appendChild$(self.$route.isActive() ? self : self.$route.placeholder);
		};
	},
	
	
	set routeTo(value){
		var self = this;
		
		if (this.$route) {
			
			if (this.$route.raw != value) {
				
				this.$route.path = value;
			}			return;
		}		
		let par = (value[0] != '/') ? this.parentRoute : null;
		this.$route = this.$routeTo = new ElementRouteTo(this,value,par,this.routeTo__);
		this.end$ = this.end$routeTo;
		
		this.onclick = function(e) {
			
			if (!(e.altKey) && !(e.metaKey)) {
				
				e.preventDefault();
				return self.$route.go();
			}		};
	},
	
	end$routed(){
		
		if (this.$route) {
			
			this.$route.resolve();
			if (!(this.$route.isActive())) { return }		}		
		if (this.visit) { return this.visit() }	},
	
	end$routeTo(){
		
		if (this.$route) {
			
			
			let match = this.$route.resolve();
			let href = this.$route.url;// $route.route.resolve()	
			// let match = $route.route.test()
			
			if (this.$route.sticky && match.url) {
				
				
				href = match.url;
			}			
			if (this.nodeName == 'A') { this.setAttribute('href',href); }			this.flags.toggle('active',match && match.active || false);
			
		}		if (this.visit) { return this.visit() }	},
	
	routeDidEnter(route){
		
		let ph = route.placeholder;
		if (ph.parentNode && ph != this) {
			
			return ph.replaceWith$(this);
		}	},
	
	routeDidLeave(route){
		
		let ph = route.placeholder;
		if (this.parentNode && ph != this) {
			
			this.replaceWith$(ph);
		}		return this;
	},
	
	routeDidResolve(params,prev){
		
		return;
	},
});

function extend$$1(target,ext){
	// @ts-ignore
	var descriptors = Object.getOwnPropertyDescriptors(ext);
	// @ts-ignore
	Object.defineProperties(target.prototype,descriptors);
	return target;
}
// import {Route} from './Route'
// import {URLSearchParams} from '../lib/util'
// check if is web
var isWeb = typeof window !== 'undefined';

var MainInstance;

class Router {
	
	static get instance(){
		
		return MainInstance || (MainInstance = new this);
	}
	
	// support redirects
	constructor(o = {}){
		
		this.routes = {};
		this.options = o;
		this.busy = [];
		this.root = o.root || '';
		this.history = (window.history);
		this.location = new Location(o.url || ((document.location.href)),this);
		this.mode = o.mode || 'history';
		
		this.setup();
		
		
		
		this.instance || (this.instance = this);
	}
	
	get origin(){
		
		return this.$origin || (this.$origin = document.location.origin);
		
	}
	option(key,value){
		
		if (value == undefined) {
			
			return this.options[key];
		} else {
			
			this.options[key] = value;
		}		return this;
		
	}
	get realpath(){
		
		
		
		let loc = document.location;
		return loc.href.slice(loc.origin.length);
	}
	
	get state(){
		
		return {};
		
	}
	pushState(state,title,url){
		
		return this.history.pushState(state,title || null,String(url));
	}
	
	replaceState(state,title,url){
		
		return this.history.replaceState(state,title || null,String(url));
	}
	
	// called whenever the location might have changed for some reason
	refresh(params = {}){
		var self = this;
		
		if (this.refreshing) { return }		this.refreshing = true;
		
		let original = this.location;
		let loc = Location.parse(params.location || this.realpath,this);
		let mode = params.mode;
		// console.log 'refreshing router',params,loc,mode,original
		// we need to compare with the previously stored location
		// also see if state is different?
		if (!(loc.equals(original))) {
			
			// console.log "actual url has changed!!",String(original),'to',String(loc)
			let req = new Request(this,loc,original);
			req.mode = mode;
			
			this.emit('beforechange',req);
			
			if (req.aborted) {
				
				// console.log "request was aborted",params
				// what about silent abort?
				var res = !(req.forceAbort) && window.confirm("Are you sure you want to leave? You might have unsaved changes");
				
				if (res) {
					
					req.aborted = false;
				} else if (mode == 'pop') { // params:pop
					
					this.pushState(this.state,null,String(original));
				} else if (mode == 'replace') { // mode != 'push' # !params:push
					
					this.replaceState(this.state,null,String(original));
				}				
				// if we're not popping - should happen before we are changing
			}			
			if (!(req.aborted)) {
				
				this.location = req.location;
				
				if (mode == 'push') {
					
					this.pushState(params.state || this.state,null,String(this.location));
				} else if (mode == 'replace') { // params:replace
					
					this.replaceState(params.state || this.state,null,String(this.location));
					
				}				if (isWeb) {
					
					this.location.state = window.history.state;
					
				}				this.emit('change',req);
				imba.commit();
			}		}		
		 this.onReady(function() {
			
			// deprecate
			let hash = document.location.hash;
			if (hash != self.$hash) {
				
				return self.emit('hashchange',self.$hash = hash);
			}		});
		
		this.refreshing = false;
		return this;
	}
	
	onpopstate(e){
		
		this.refresh({pop: true,mode: 'pop'});
		return this;
	}
	
	onbeforeunload(e){
		
		let req = new Request(this,null,this.location);
		this.emit('beforechange',req);
		if (req.aborted) { return true }		return;
		
	}
	onhashchange(e){
		
		this.emit('hashchange',this.$hash = document.location.hash);
		return imba.commit();
	}
	
	setup(){
		
		if (isWeb) {
			
			this.onclick = this.onclick.bind(this);
			this.onhashchange = this.onhashchange.bind(this);
			
			this.$hash = document.location.hash;
			this.location = Location.parse(this.realpath,this);
			this.history.replaceState(this.state,null,String(this.location));
			
			window.onpopstate = this.onpopstate.bind(this);// do |e| onpopstate(e)
			window.onbeforeunload = this.onbeforeunload.bind(this);
			
			window.addEventListener('hashchange',this.onhashchange);
			window.addEventListener('click',this.onclick,{capture: true});
		}		return this;
		
	}
	onclick(e){
		
		if (e.metaKey || e.altKey) { return }		
		let a = null;
		let r = null;
		
		let t = e.target;
		
		while (t){
			
			if (t.nodeName == 'A') {
				
				a || (a = t);
			}			if (t.$routeTo) {
				
				r || (r = t);
			}			t = t.parentNode;
		}		
		if (a && r != a && (!(r) || r.contains(a))) {
			
			let href = a.getAttribute('href');
			if (href && !(href.match(/\:\/\//)) && !(a.getAttribute('target')) && !(a.classList.contains('external'))) {
				
				a.addEventListener('click',this.onclicklink.bind(this),{once: true});
			}		}		return true;
		
	}
	onclicklink(e){
		
		let a = e.currentTarget || e.target;
		let href = a.getAttribute('href');
		let url = new URL(a.href);
		let target = url.href.slice(url.origin.length);
		
		this.go(target);
		e.stopPropagation();
		return e.preventDefault();
	}
	
	get path(){
		
		return this.location.path;
	}
	
	get url(){
		
		return this.location.url;
	}
	
	query(par,val){
		
		if (par == undefined) {
			
			return this.location.searchParams();
		} else {
			
			return this.location.query(par,val);
		}	}
	get hash(){
		
		return this.$hash;
	}
	
	serializeParams(params){
		var $res;
		
		if (params instanceof Object) {
			
			$res = [];
			for (let $i = 0, $keys = Object.keys(params), $l = $keys.length, key, val; $i < $l; $i++){
				key = $keys[$i];val = params[key];
				$res.push([key,globalThis.encodeURI(val)].join("="));
			}			var value = $res;
			return value.join("&");
		}		return params || '';
	}
	
	set hash(value){
		
		if (isWeb) {
			
			// console.log "set hash",serializeParams(value)
			// will set without jumping
			this.history.replaceState({},null,'#' + this.serializeParams(value));// last state?
			// location:hash = serializeParams(value)
		}	}
	match(pattern){
		var $0;
		
		var route = ($0 = this.routes)[pattern] || ($0[pattern] = new Route$1(this,pattern));
		return route.test();
		
	}
	route(pattern){
		var $0;
		
		return ($0 = this.routes)[pattern] || ($0[pattern] = new Route$1(this,pattern));
	}
	
	routeFor(node,path,par,opts){
		
		return new Route$1(this,path,par,opts);
		
	}
	go(url,state = {}){
		
		let loc = this.location.clone().update(url,state);
		this.refresh({push: true,mode: 'push',location: loc,state: state});
		return this;
		
	}
	replace(url,state = {}){
		
		let loc = this.location.clone().update(url,state);
		return this.refresh({replace: true,mode: 'replace',location: loc,state: state});
		// history.replaceState(state,null,normalize(url,state))
		// refresh
		
	}
	normalize(url){
		
		if (this.mode == 'hash') {
			
			url = ("#" + url);
		} else if (this.root()) {
			
			url = this.root() + url;
		}		return url;
		
	}
	onReady(cb){
		var self = this;
		
		return imba.scheduler.add(function() {
			
			return (self.busy.length == 0) ? cb(self) : imba.once(self,'ready',cb);
			
		});
	}
	emit(name,...params){
		return imba.emit(this,name,params);
	}
	on(name,...params){
		return imba.listen(this,name,...params);
	}
	once(name,...params){
		return imba.once(this,name,...params);
	}
	un(name,...params){
		return imba.unlisten(this,name,...params);
	}
	
	// bound to target
	tapRouteHandler(e){
		
		let el = this.dom();
		let href = this.dom().getAttribute('href');
		
		if (el.nodeName != 'A' && (e.meta() || e.alt())) {
			
			e.stop().prevent();
			window.open(href,'_blank');
		}		
		let ev = this.trigger('taproute',{path: href,sourceEvent: e,router: this.router});// include metaKey etc
		if (!(ev.isPrevented())) {
			
			e.stop().prevent();
			(e.meta() || e.alt()) ? window.open(href,'_blank') : this.router.go(href,{});
		}		return;
	}
}


extend$$1(imba.tags.get('element','Element'),{
	
	get router(){
		
		return Router.instance;
	},
});

export { Router };
