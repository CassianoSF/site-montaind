import"../../web_modules/imba/dist/imba.js";export const ROUTES={};export class Location{static parse(a,b){return a instanceof Location?a:new Location(a,b)}constructor(a,b){this.router=b,this.parse(a)}parse(a){return a instanceof URL||(a=new URL(a,this.router.origin)),this.url=a,this}search(){let a=this.searchParams?this.searchParams.toString():"";return a?"?"+a:""}update(a){if(a instanceof Object)for(let b=0,c=Object.keys(a),f=c.length,d,e;b<f;b++)d=c[b],e=a[d],this.query(d,e);else typeof a=="string"&&this.parse(a);return this}query(a,b){let c=this.searchParams;return b===void 0?c.get(a):b==null||b==""?c.delete(a):c.set(a,b)}clone(){return new Location(this.url.href,this.router)}equals(a){return this.toString()==String(a)}get href(){return this.url.href}get path(){return this.url.href.slice(this.url.origin.length)}get pathname(){return this.url.pathname}toString(){return this.href}match(a){let b=ROUTES[a]||(ROUTES[a]=new Route(null,a));return b.test(this)}}