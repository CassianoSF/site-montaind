import"../../../web_modules/imba/dist/imba.js";var h=Symbol(),i=Symbol(),q=Symbol(),g=Symbol(),j=Symbol(),k=Symbol();export default class o extends imba.tags.get("component","ImbaElement"){mount(){var a=this;return this.observer=new IntersectionObserver(function(e){return e.map(function(c){if(c.isIntersecting)return a.animation=!0,a.render()})}),this.observer.observe(this.$slot)}unmount(){return this.observer.disconnect()}render(){var a,e,c,l=this._ns_||"",d,m,f,b,n;return a=this,a.open$(),(e=c=1,a[h]===1)||(e=c=0,a[h]=1),(m=f=1,d=a[i])||(m=f=0,a[i]=d=this.$slot=imba.createElement("div",a,`ktq4g5cd ${l} slot ref--slot`,null)),b=this.animation||void 0,b===a[g]||(f|=2,a[g]=b),b="animation-delay: "+this.delay+"s",b===a[j]||(d.style=a[j]=b),f&2&&d.flag$(`ktq4g5cd ${l} slot ref--slot `+(a[g]?"fadeInUp":"")),n=a.__slots.__,a[k]=d.insert$(n,384,a[k]),a.close$(c),a}}imba.tags.define("fade-in-up-ktq4g5",o,{ns:"ktq4g5c"}),imba.inlineStyles(`.ktq4g5cd:not(#_):not(#_) {height: 100%;}


.ktq4g5c_ .fadeInUp.ktq4g5c:not(#_) {animation: var(--animation-fadeInUp,fadeInUp) 1s;
animation-fill-mode: both;}

`);
