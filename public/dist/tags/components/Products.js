import"../../../web_modules/imba/dist/imba.js";var l=Symbol(),m=Symbol(),n=Symbol();export default class q extends imba.tags.get("component","ImbaElement"){render(){var a,g,j,b=this._ns_||"",f,c,h,k,d,e,o,i;a=this,a.open$(),(g=j=1,a[l]===1)||(g=j=0,a[l]=1),g||(f=imba.createElement("div",a,`container ${b}`,null)),g||(c=imba.createElement("h1",f,`${b}`,"Nossos Produtos")),g||(c=imba.createElement("p",f,`${b}`,"Magna cupidatat consequat qui amet reprehenderit mollit eu anim aute tempor amet proident. Est veniam aute ad ut enim est proident dolor.")),(f=a[m])||(a[m]=f=imba.createElement("div",a,`flex ${b}`,null)),(c=a[n])||(a[n]=c=imba.createIndexedFragment(384,f)),h=0,k=c.$;for(let p=1;p<=4;p++)(e=o=1,d=k[h])||(e=o=0,k[h]=d=imba.createElement("div",c,`card ${b}`,null)),e||(d.up$=c),e||(i=imba.createElement("div",d,`img ${b}`,null)),e||(i=imba.createElement("h2",d,`${b}`,"Sistema Hidráulico")),e||(i=imba.createElement("p",d,`${b}`,"Tempor non aliquip do laboris aliqua. Labore dolor sit labore in nisi fugiat qui. Occaecat mollit eiusmod labore voluptate anim in cupidatat do reprehenderit enim proident eiusmod cillum.")),e||(i=imba.createElement("button",d,`btn ${b}`,"Adicionar ao orçamento")),h++;return c.end$(h),a.close$(j),a}}imba.tags.define("products-mbpc94",q,{ns:"mbpc94c"}),imba.inlineStyles(`
.mbpc94c_ .container.mbpc94c:not(#_) {margin-top: 5rem;
text-align: center;
padding-left: 15%;
padding-right: 15%;}
.mbpc94c_ .container h1.mbpc94c:not(#_) {margin-bottom: 1.5rem;}
.mbpc94c_ .container p.mbpc94c:not(#_) {margin-bottom: 2rem;}
.mbpc94c_ .flex.mbpc94c:not(#_) {display: flex;}
.mbpc94c_ .card.mbpc94c:not(#_) {padding: 1.5rem;}
.mbpc94c_ .card .img.mbpc94c:not(#_) {background-image: url("imgs/1.jpg");
background-size: cover;
background-position: center;
height: 300px;
width: 100%;
margin-bottom: 1.5rem;}
.mbpc94c_ .card h2.mbpc94c:not(#_),.mbpc94c_ .card p.mbpc94c:not(#_) {margin-bottom: .75rem;}

`);
