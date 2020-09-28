import"../../../web_modules/imba/dist/imba.js";var y=Symbol(),z=Symbol(),A=Symbol(),B=Symbol(),C=Symbol(),D=Symbol(),E=Symbol(),F=Symbol(),G=Symbol();export default class K extends imba.tags.get("component","ImbaElement"){init$(){super.init$(),this.slides=4,this.n=1,this.timer=void 0,this.$slide={},this.$dot={}}changeSlide(d){return clearTimeout(this.timer),this.$slide[this.n].classList.remove("show"),this.$dot[this.n].classList.remove("active"),this.n=d,this.mount()}autoChangeSlide(){var d=this;return this.timer=setTimeout(function(){return d.$slide[d.n].classList.remove("show"),d.$dot[d.n].classList.remove("active"),d.n=d.n===d.slides?1:d.n+1,d.mount()},5e3)}mount(){return this.$slide[this.n].classList.add("show"),this.$dot[this.n].classList.add("active"),this.autoChangeSlide()}unmount(){return clearTimeout(this.timer)}render(){var d=this,a,H,q,f=this._ns_||"",n,h,k,r,c,s,I,e,g,o,t,j,p,u,l,v,w,J,x;a=this,a.open$(),(H=q=1,a[y]===1)||(H=q=0,a[y]=1),(n=a[z])||(a[z]=n=imba.createElement("div",a,`slider ${f}`,null)),(h=a[A])||(a[A]=h=imba.createIndexedFragment(128,n)),k=0,r=h.$;for(let i=this.slides,b=1,m=i-b;m>0?b<=i:b>=i;m>0?b++:b--)(s=I=1,c=r[k])||(s=I=0,r[k]=c=imba.createElement("div",h,`${f}`,null)),s||(c.up$=h),(g=o=1,e=c[B])||(g=o=0,c[B]=this.$slide[b]=e=imba.createElement("div",c,`slide ${f}`,null)),t="background-image: url(imgs/home"+b+".jpg)",t===c[C]||(e.style=c[C]=t),g||(j=imba.createElement("div",e,`filter ${f}`,null)),g||(j=imba.createElement("div",e,`container ${f}`,null)),g||(p=imba.createElement("div",j,`wrapper ${f}`,null)),g||(u=imba.createElement("h1",p,`${f}`,"Montagem e Equipamentos Industriais")),g||(u=imba.createElement("p",p,`${f}`,"Anim eiusmod cillum officia fugiat incididunt labore.")),g||(u=imba.createElement("button",p,`btn ${f}`,"Peça um orçamento")),k++;h.end$(k),(h=a[D])||(a[D]=h=imba.createElement("div",n,`navigation ${f}`,null)),(c=a[E])||(a[E]=c=imba.createIndexedFragment(384,h)),l=0,v=c.$;for(let i=this.slides,b=1,m=i-b;m>0?b<=i:b>=i;m>0?b++:b--)(g=o=1,e=v[l])||(g=o=0,v[l]=e=imba.createElement("div",c,`${f}`,null)),g||(e.up$=c),(w=J=1,j=e[F])||(w=J=0,e[F]=this.$dot[b]=j=imba.createElement("label",e,`dot ${f}`,null)),x=e[G]||(e[G]={$_:[function(N,O,L){return d.changeSlide(L)},null]}),x.$_[1]=b,w||j.on$("click",x,this),l++;return c.end$(l),a.close$(q),a}}imba.tags.define("slider-q7abtk",K,{ns:"q7abtkc"}),imba.inlineStyles(`
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
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;}
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
.q7abtkc_ .slider .navigation div.q7abtkc:not(#_) {display: flex;}
.q7abtkc_ .slider .navigation div .dot.q7abtkc:not(#_) {margin-left: 6px;
margin-right: 6px;
width: 10px;
height: 10px;
border-radius: 9999px;
background: hsla(0.00,0.00%,100.00%,100%);
cursor: pointer;
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;}
.q7abtkc_ .slider .navigation div .dot.q7abtkc:not(#_):hover {background: var(--orange);}
.q7abtkc_ .slider .navigation div .active.q7abtkc:not(#_) {background: var(--orange);}

`);
