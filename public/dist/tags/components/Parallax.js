import"../../../web_modules/imba/dist/imba.js";var n=Symbol(),o=Symbol(),p=Symbol(),q=Symbol(),r=Symbol(),s=Symbol(),t=Symbol();export default class w extends imba.tags.get("component","ImbaElement"){render(){var e,d,j,b=this._ns_||"",k,f,c,a,g,h,l,i,u,m;e=this,e.open$(),(d=j=1,e[n]===1)||(d=j=0,e[n]=1),d||(k=imba.createElement("div",e,`parallax ${b}`,null)),d||(f=imba.createElement("div",k,`container ${b}`,null)),d||(c=imba.createElement("div",f,`video ${b}`,null)),d||(a=imba.createElement("div",c,`play ${b}`,null)),d||(g=imba.createElement("i",a,`play icon ${b}`,null)),d||(a=imba.createElement("div",c,`player ${b}`,null)),d||(c=imba.createElement("div",f,`paragraph ${b}`,null)),d||(a=imba.createElement("h1",c,`${b}`,"Lorem Ipsum")),d||(a=imba.createElement("p",c,`${b}`,"Incididunt nostrud non ullamco exercitation ut veniam. Aute eu cillum nulla est elit ex nisi Lorem. Sunt magna aliqua pariatur est officia fugiat esse reprehenderit velit ea ex Lorem. In cillum adipisicing dolore irure. Ullamco nisi elit pariatur sint ea qui laboris. Nulla irure excepteur quis aliquip sint nulla fugiat aute duis proident Lorem tempor sunt.")),d||(a=imba.createElement("p",c,`${b}`,"Officia voluptate non nulla consectetur cupidatat ut ipsum qui mollit amet voluptate.")),(f=e[o])||(e[o]=f=imba.createElement("div",k,`container numbers ${b}`,null)),(c=e[p])||(e[p]=c=imba.createIndexedFragment(384,f)),h=0,l=c.$;for(let v=1;v<=4;v++)(i=u=1,a=l[h])||(i=u=0,l[h]=a=imba.createElement("div",c,`text ${b}`,null)),i||(a.up$=c),(g=a[q])||(a[q]=g=imba.createElement("h1",a,`${b}`,null)),imba.ctx=a[s]||(a[s]={_:g}),m=Math.round(Math.random()*200),imba.ctx=null,m===a[t]&&i||(a[r]=g.insert$(a[t]=m,384,a[r])),i||(g=imba.createElement("p",a,`${b}`,"Nulla Lorem")),h++;return c.end$(h),e.close$(j),e}}imba.tags.define("parallax-gj1ng4",w,{ns:"gj1ng4c"}),imba.inlineStyles(`
.gj1ng4c_ .parallax.gj1ng4c:not(#_) {position: relative;
background-image: url("imgs/parallax1.jpg");
width: 100%;
height: auto;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
padding-top: 7rem;
z-index: -2;}
.gj1ng4c_ .parallax h1.gj1ng4c:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);}
.gj1ng4c_ .parallax p.gj1ng4c:not(#_) {color: hsla(0.00,0.00%,100.00%,90%);}
.gj1ng4c_ .parallax.gj1ng4c:not(#_)::after {content: '';
position: absolute;
top: 0rem;
left: 0rem;
bottom: 0rem;
right: 0rem;
z-index: -1;
opacity: 0.8;
background: linear-gradient(45deg, #0d1128 0%, #fd6100 100%);}
.gj1ng4c_ .container.gj1ng4c:not(#_) {display: flex;}
.gj1ng4c_ .video.gj1ng4c:not(#_) {background-image: url("imgs/2.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: auto;
width: 50%;
position: relative;}
.gj1ng4c_ .video .play.gj1ng4c:not(#_) {--t_x:0;--t_y:0;--t_z:0;--t_rotate:0;--t_scale:1;--t_scale-x:1;--t_scale-y:1;--t_skew-x:0;--t_skew-y:0;
transform: translate3d(var(--t_x),var(--t_y),var(--t_z)) rotate(var(--t_rotate)) skewX(var(--t_skew-x)) skewY(var(--t_skew-y)) scaleX(var(--t_scale-x)) scaleY(var(--t_scale-y)) scale(var(--t_scale));
background: hsla(0.00,0.00%,100.00%,100%);
position: absolute;
--t_x: -50% !important;
--t_y: -50% !important;
top: 50%;
left: 50%;
width: 80px;
height: 80px;
color: var(--orange);
border-radius: 50%;
justify-content: center;
align-items: center;
display: flex;
cursor: pointer;}
.gj1ng4c_ .video .play i.gj1ng4c:not(#_) {padding-left: .1rem;
font-size: 1.3rem;
user-select: none;}
.gj1ng4c_ .paragraph.gj1ng4c:not(#_) {width: 50%;
padding-left: 4rem;}
.gj1ng4c_ .paragraph h1.gj1ng4c:not(#_),.gj1ng4c_ .paragraph p.gj1ng4c:not(#_) {margin-bottom: 1.5rem;}
.gj1ng4c_ .numbers.gj1ng4c:not(#_) {padding-top: 5rem;
padding-bottom: 5rem;
justify-content: space-around;}
.gj1ng4c_ .numbers .text.gj1ng4c:not(#_) {text-align: center;}

`);
