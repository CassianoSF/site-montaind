import"../../../web_modules/imba/dist/imba.js";var m=Symbol(),n=Symbol(),o=Symbol();export default class r extends imba.tags.get("component","ImbaElement"){render(){var a,f,j,b=this._ns_||"",k,g,c,h,l,e,d,p,i,s;a=this,a.open$(),(f=j=1,a[m]===1)||(f=j=0,a[m]=1),f||(k=imba.createElement("div",a,`team ${b}`,null)),f||(g=imba.createElement("div",k,`container ${b}`,null)),f||(c=imba.createElement("h1",g,`${b}`,"Nosso Time")),f||(c=imba.createElement("p",g,`${b}`,"Sunt dolore non incididunt ipsum nostrud sit culpa amet dolore dolore amet sit pariatur exercitation aute commodo magna ut dolore minim sit sunt et ipsum labore.")),(g=a[n])||(a[n]=g=imba.createElement("div",k,`wrapper ${b}`,null)),(c=a[o])||(a[o]=c=imba.createIndexedFragment(384,g)),h=0,l=c.$;for(let q=1;q<=4;q++)(d=p=1,e=l[h])||(d=p=0,l[h]=e=imba.createElement("div",c,`card ${b}`,null)),d||(e.up$=c),d||(i=imba.createElement("div",e,`img-wrapper ${b}`,null)),d||(s=imba.createElement("div",i,`tnb2xfcd ${b}`,null)),d||(i=imba.createElement("h2",e,`${b}`,"John Smith")),d||(i=imba.createElement("small",e,`${b}`,"Engenheiro")),d||(i=imba.createElement("p",e,`${b}`,"Nostrud aliquip magna consequat incididunt exercitation veniam consequat ea cupidatat.")),h++;return c.end$(h),a.close$(j),a}}imba.tags.define("team-tnb2xf",r,{ns:"tnb2xfc"}),imba.inlineStyles(`.tnb2xfcd:not(#_):not(#_) {background-image: url("imgs/2.jpg");}


.tnb2xfc_ .team.tnb2xfc:not(#_) {padding-top: 5rem;
background: #fafafa;}
.tnb2xfc_ .team .container.tnb2xfc:not(#_) {padding-left: 20%;
padding-right: 20%;}
.tnb2xfc_ .team .container h1.tnb2xfc:not(#_),.tnb2xfc_ .team .container p.tnb2xfc:not(#_) {text-align: center;}
.tnb2xfc_ .team h1.tnb2xfc:not(#_) {margin-bottom: 2rem;}
.tnb2xfc_ .team p.tnb2xfc:not(#_) {margin-bottom: 3rem;}
.tnb2xfc_ .team .wrapper.tnb2xfc:not(#_) {display: flex;}
.tnb2xfc_ .team .wrapper .card.tnb2xfc:not(#_) {padding: 1rem;
text-align: center;}

.tnb2xfc_ .team .wrapper .card:hover .img-wrapper div.tnb2xfc:not(#_) {transform: scale(1.05);}
.tnb2xfc_ .team .wrapper .card:hover h2.tnb2xfc:not(#_) {color: var(--orange);}
.tnb2xfc_ .team .wrapper .card .img-wrapper.tnb2xfc:not(#_) {overflow: hidden;}
.tnb2xfc_ .team .wrapper .card .img-wrapper div.tnb2xfc:not(#_) {width: 100%;
height: 300px;
background-size: cover;
transition: none .3s ease;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;}
.tnb2xfc_ .team .wrapper .card img.tnb2xfc:not(#_) {width: 100%;}
.tnb2xfc_ .team .wrapper .card h2.tnb2xfc:not(#_) {margin-top: 1rem;
transition: none .3s ease;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;}
.tnb2xfc_ .team .wrapper .card small.tnb2xfc:not(#_) {font-size: .9rem;
text-transform: uppercase;
color: var(--orange);
letter-spacing: 2px;}
.tnb2xfc_ .team .wrapper .card p.tnb2xfc:not(#_) {margin-top: 1rem;}

`);
