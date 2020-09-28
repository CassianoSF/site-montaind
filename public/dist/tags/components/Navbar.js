import"../../../web_modules/imba/dist/imba.js";var m=Symbol(),n=Symbol(),o=Symbol(),p=Symbol(),q=Symbol(),r=Symbol();export default class t extends imba.tags.get("component","ImbaElement"){render(){var c,h,k,e=this._ns_||"",s,l,f,g,i,a,b,d,j;return c=this,c.open$(),(h=k=1,c[m]===1)||(h=k=0,c[m]=1),h||(s=imba.createElement("div",c,`navbar ${e}`,null)),h||(l=imba.createElement("div",s,`container ${e}`,null)),(g=i=1,f=c[n])||(g=i=0,c[n]=f=imba.createElement("a",l,`brand ${e}`,null)),g||(f.routeTo="home"),g||(a=imba.createElement("img",f,`${e}`,null)),g||(a.src="imgs/logo.png"),g||!f.setup||f.setup(i),f.end$(i),h||(f=imba.createElement("ul",l,`menu ${e}`,null)),(b=d=1,a=c[o])||(b=d=0,c[o]=a=imba.createElement("li",f,`nav-item ${e}`,null)),b||(a.routeTo="home"),b||(j=imba.createElement("a",a,`nav-link active ${e}`,"Home")),b||!a.setup||a.setup(d),a.end$(d),(b=d=1,a=c[p])||(b=d=0,c[p]=a=imba.createElement("li",f,`nav-item ${e}`,null)),b||(a.routeTo="pecas"),b||(j=imba.createElement("a",a,`nav-link ${e}`,"Peças")),b||!a.setup||a.setup(d),a.end$(d),(b=d=1,a=c[q])||(b=d=0,c[q]=a=imba.createElement("li",f,`nav-item ${e}`,null)),b||(a.routeTo="produtos"),b||(j=imba.createElement("a",a,`nav-link ${e}`,"Produtos")),b||!a.setup||a.setup(d),a.end$(d),(b=d=1,a=c[r])||(b=d=0,c[r]=a=imba.createElement("li",f,`nav-item ${e}`,null)),b||(a.routeTo="orcamento"),b||(j=imba.createElement("a",a,`nav-link ${e}`,"Orçamento")),b||!a.setup||a.setup(d),a.end$(d),c.close$(k),c}}imba.tags.define("navbar-bt0cjr",t,{ns:"bt0cjrc"}),imba.inlineStyles(`
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

`);
