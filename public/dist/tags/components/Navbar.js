import"../../../web_modules/imba/dist/imba.js";var m=Symbol(),n=Symbol(),o=Symbol(),p=Symbol(),q=Symbol(),r=Symbol();export default class t extends imba.tags.get("component","ImbaElement"){render(){var b,h,k,e=this._ns_||"",s,l,f,i,j,g,a,c,d;return b=this,b.open$(),(h=k=1,b[m]===1)||(h=k=0,b[m]=1),h||(s=imba.createElement("div",b,`navbar-wrapper ${e}`,null)),h||(l=imba.createElement("div",s,`navbar container ${e}`,null)),(i=j=1,f=b[n])||(i=j=0,b[n]=f=imba.createElement("a",l,`${e}`,null)),i||(f.routeTo="home"),i||(g=imba.createElement("img",f,`brand ${e}`,null)),i||(g.src="imgs/logo.png"),i||!f.setup||f.setup(j),f.end$(j),h||(f=imba.createElement("ul",l,`menu ${e}`,null)),h||(g=imba.createElement("li",f,`${e}`,null)),(c=d=1,a=b[o])||(c=d=0,b[o]=a=imba.createElement("a",g,`${e}`,"Home")),c||(a.id="active"),c||(a.routeTo="home"),c||!a.setup||a.setup(d),a.end$(d),h||(g=imba.createElement("li",f,`${e}`,null)),(c=d=1,a=b[p])||(c=d=0,b[p]=a=imba.createElement("a",g,`${e}`,"Peças")),c||(a.routeTo="pecas"),c||!a.setup||a.setup(d),a.end$(d),h||(g=imba.createElement("li",f,`${e}`,null)),(c=d=1,a=b[q])||(c=d=0,b[q]=a=imba.createElement("a",g,`${e}`,"Produtos")),c||(a.routeTo="produtos"),c||!a.setup||a.setup(d),a.end$(d),h||(g=imba.createElement("li",f,`${e}`,null)),(c=d=1,a=b[r])||(c=d=0,b[r]=a=imba.createElement("a",g,`${e}`,"Orçamento")),c||(a.routeTo="orcamento"),c||!a.setup||a.setup(d),a.end$(d),b.close$(k),b}}imba.tags.define("navbar-bt0cjr",t,{ns:"bt0cjrc"}),imba.inlineStyles(`
.bt0cjrc_ .navbar-wrapper.bt0cjrc:not(#_) {width: 100%;
position: fixed;
top: 0rem;
z-index: 100;
background: var(--indigo);}
.bt0cjrc_ .navbar-wrapper .navbar.bt0cjrc:not(#_) {height: 4rem;
display: flex;
justify-content: space-between;
align-items: center;}
.bt0cjrc_ .navbar-wrapper .brand.bt0cjrc:not(#_) {height: 2rem;}
.bt0cjrc_ .navbar-wrapper .menu.bt0cjrc:not(#_) {display: flex;
align-items: center;}
.bt0cjrc_ .navbar-wrapper .menu a.bt0cjrc:not(#_) {margin-left: 1rem;
margin-right: 1rem;
padding: 1rem;
color: hsla(0.00,0.00%,100.00%,100%);
cursor: pointer;}
.bt0cjrc_ .navbar-wrapper .menu #active.bt0cjrc:not(#_) {color: var(--orange);}

`);
