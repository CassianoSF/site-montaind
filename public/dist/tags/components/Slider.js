import"../../../web_modules/imba/dist/imba.js";var w=Symbol(),x=Symbol(),y=Symbol(),z=Symbol(),J=Symbol(),r=Symbol(),A=Symbol(),B=Symbol(),C=Symbol(),D=Symbol();export default class G extends imba.tags.get("component","ImbaElement"){init$(){super.init$(),this.slides=4,this.number=1,this.timer=void 0}changeImage(g){clearTimeout(this.timer);let b="r"+this.number;return document.querySelector("label[for="+b+"]").id="",this.number=g,this.mount()}autoChangeImage(){var g=this;return this.timer=setTimeout(function(){let b="r"+g.number;return document.querySelector("label[for="+b+"]").id="",document.getElementById("r"+g.number).checked=!1,g.number=g.number===g.slides?1:g.number+1,g.mount()},5e3)}mount(){document.getElementById("r"+this.number).checked=!0;let g="r"+this.number;return document.querySelector("label[for="+g+"]").id="active",this.autoChangeImage()}unmount(){return clearTimeout(this.timer)}render(){var g=this,b,E,s,h=this._ns_||"",o,d,j,l,c,e,m,t,f,u,p,v,q,F,n;b=this,b.open$(),(E=s=1,b[w]===1)||(E=s=0,b[w]=1),(o=b[x])||(b[x]=o=imba.createElement("div",b,`slider ${h}`,null)),(d=b[y])||(b[y]=d=imba.createIndexedFragment(128,o)),j=0,l=d.$;for(let i=this.slides,a=1,k=i-a;k>0?a<=i:a>=i;k>0?a++:a--)(e=m=1,c=l[j])||(e=m=0,l[j]=c=imba.createElement("input",d,`${h}`,null)),e||(c.up$=d),e||(c.id=`r${a}`),e||(c.type="radio"),e||(c.name="r"),j++;d.end$(j),(d=b[z])||(b[z]=d=imba.createIndexedFragment(0,o)),j=0,l=d.$;for(let i=this.slides,a=1,k=i-a;k>0?a<=i:a>=i;k>0?a++:a--)(e=m=1,c=l[j])||(e=m=0,l[j]=c=this.$slide=imba.createElement("div",d,`slide ${h} slide ref--slide`,null)),e||(c.up$=d),t=`s${a}`,t===c[r]||(m|=2,c[r]=t),m&2&&c.flag$(`slide ${h} slide ref--slide `+(c[r]||"")),this.$slide.style.backgroundImage="url(imgs/home"+a+".jpg)",e||(f=imba.createElement("div",c,`filter ${h}`,null)),e||(f=imba.createElement("div",c,`text ${h}`,null)),e||(u=imba.createElement("h1",f,`${h}`,"Montagem e equipamentos industriais")),e||(u=imba.createElement("p",f,`${h}`,"Pense numa frase bem legal aqui!")),e||(u=imba.createElement("button",f,`btn ${h}`,"Peça um orçamento")),j++;d.end$(j),(d=b[A])||(b[A]=d=imba.createElement("div",o,`navigation ${h}`,null)),(c=b[B])||(b[B]=c=imba.createIndexedFragment(384,d)),p=0,v=c.$;for(let i=this.slides,a=1,k=i-a;k>0?a<=i:a>=i;k>0?a++:a--)(q=F=1,f=v[p])||(q=F=0,v[p]=f=imba.createElement("label",c,`bar ${h}`,null)),q||(f.up$=c),n="r"+a,n===f[C]||f.set$("for",f[C]=n),n=f[D]||(f[D]={$_:[function(K,L,H){return g.changeImage(H)},null]}),n.$_[1]=a,q||f.on$("click",n,this),p++;return c.end$(p),b.close$(s),b}}imba.tags.define("slider-q7abtk",G,{ns:"q7abtkc"}),imba.inlineStyles(`
.q7abtkc_ .slider.q7abtkc:not(#_) {position: relative;
width: 100%;
height: calc(100vh - 4rem);
overflow: hidden;}
.q7abtkc_ .slider .filter.q7abtkc:not(#_) {position: absolute;
top: 0rem;
left: 0rem;
bottom: 0rem;
right: 0rem;
opacity: 0.8;
background: linear-gradient(45deg, #0d1128 0%, #fd6100 100%);}
.q7abtkc_ .slider input.q7abtkc:not(#_)[name="r"] {display: none;}
.q7abtkc_ .slider #r1:checked ~ .s1.q7abtkc:not(#_) {animation: var(--animation-slider-animation,slider-animation) 1s;
opacity: 1;
z-index: 1;}
.q7abtkc_ .slider #r2:checked ~ .s2.q7abtkc:not(#_) {animation: var(--animation-slider-animation,slider-animation) 1s;
opacity: 1;
z-index: 1;}
.q7abtkc_ .slider #r3:checked ~ .s3.q7abtkc:not(#_) {animation: var(--animation-slider-animation,slider-animation) 1s;
opacity: 1;
z-index: 1;}
.q7abtkc_ .slider #r4:checked ~ .s4.q7abtkc:not(#_) {animation: var(--animation-slider-animation,slider-animation) 1s;
opacity: 1;
z-index: 1;}
.q7abtkc_ .slider #r5:checked ~ .s5.q7abtkc:not(#_) {animation: var(--animation-slider-animation,slider-animation) 1s;
opacity: 1;
z-index: 1;}
.q7abtkc_ .slider .slide.q7abtkc:not(#_) {width: 100%;
height: 100%;
background-size: cover;
background-position: center;
position: absolute;
transition: none 1.5s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
opacity: 0;
z-index: 0;}
.q7abtkc_ .slider .slide .text.q7abtkc:not(#_) {--t_x:0;--t_y:0;--t_z:0;--t_rotate:0;--t_scale:1;--t_scale-x:1;--t_scale-y:1;--t_skew-x:0;--t_skew-y:0;
transform: translate3d(var(--t_x),var(--t_y),var(--t_z)) rotate(var(--t_rotate)) skewX(var(--t_skew-x)) skewY(var(--t_skew-y)) scaleX(var(--t_scale-x)) scaleY(var(--t_scale-y)) scale(var(--t_scale));
width: 50%;
color: hsla(0.00,0.00%,100.00%,100%);
position: absolute;
top: 50%;
left: 5rem;
--t_y: -50% !important;}
.q7abtkc_ .slider .slide .text h1.q7abtkc:not(#_) {font-family: var(--font-sans,system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
font-size: 3.125rem;
font-weight: 600;
line-height: 1.2;
--u_lh: 1.2;
margin-bottom: 1.5rem;}
.q7abtkc_ .slider .slide .text p.q7abtkc:not(#_) {opacity: 90%;
margin-bottom: 1rem;}
.q7abtkc_ .slider .slide .text button.q7abtkc:not(#_) {margin-top: 1rem;
font-family: var(--font-sans,system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
font-size: 1rem;
padding: 1rem 1.5rem;}
.q7abtkc_ .slider .navigation.q7abtkc:not(#_) {--t_x:0;--t_y:0;--t_z:0;--t_rotate:0;--t_scale:1;--t_scale-x:1;--t_scale-y:1;--t_skew-x:0;--t_skew-y:0;
transform: translate3d(var(--t_x),var(--t_y),var(--t_z)) rotate(var(--t_rotate)) skewX(var(--t_skew-x)) skewY(var(--t_skew-y)) scaleX(var(--t_scale-x)) scaleY(var(--t_scale-y)) scale(var(--t_scale));
z-index: 1;
display: flex;
position: absolute;
bottom: 20px;
left: 50%;
--t_x: -50% !important;}
.q7abtkc_ .slider .navigation .bar.q7abtkc:not(#_) {margin-left: 6px;
margin-right: 6px;
width: 10px;
height: 10px;
border-radius: 50%;
background: hsla(0.00,0.00%,100.00%,100%);
cursor: pointer;
transition: none .4s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
box-shadow: 0 0 5px hsla(0.00,0.00%,0.00%,50%);}
.q7abtkc_ .slider .navigation .bar.q7abtkc:not(#_):hover {background: var(--orange);}
.q7abtkc_ .slider .navigation #active.q7abtkc:not(#_) {background: var(--orange);}

`);
