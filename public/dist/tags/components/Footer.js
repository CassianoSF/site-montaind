import '../../../web_modules/imba/dist/imba.js';
var $b = Symbol(), $d = Symbol(), $f = Symbol(), $h = Symbol(), $j = Symbol();

import FadeInUp from './FadeInUp.js';

export default class Footer extends imba.tags.get('component','ImbaElement') {
	
	render(){
		var $1t, $1b, $1d, $0 = this._ns_ || '', $2t, $3t, $4t, $5t, $6t, $7t, $7b, $7d, $eSt, $8t, $9t, $gSt, $iSt, $kSt;
		
		$1t=this;
		$1t.open$();
		($1b=$1d=1,$1t[$b] === 1) || ($1b=$1d=0,$1t[$b]=1);
		$1b || ($2t=imba.createElement('div',$1t,`footer container ${$0}`,null));
		$1b || ($3t=imba.createElement('div',$2t,`footer-wrapper ${$0}`,null));
		$1b || ($4t=imba.createElement('div',$3t,`col ${$0}`,null));
		$1b || ($5t=imba.createElement('h3',$4t,`${$0}`,"Alguma dúvida?"));
		$1b || ($5t=imba.createElement('div',$4t,`info ${$0}`,null));
		$1b || ($6t=imba.createElement('div',$5t,`wrapper ${$0}`,null));
		$1b || ($7t=imba.createElement('i',$6t,`fa fa-map-marker ${$0}`,null));
		$1b || ($7t=imba.createElement('p',$6t,`${$0}`,"203 Fake St. Mountain View, San Francisco, California, USA"));
		$1b || ($6t=imba.createElement('div',$5t,`wrapper ${$0}`,null));
		$1b || ($7t=imba.createElement('i',$6t,`fa fa-phone ${$0}`,null));
		$1b || ($7t=imba.createElement('p',$6t,`${$0}`,"(49) 99999-9999"));
		$1b || ($6t=imba.createElement('div',$5t,`wrapper ${$0}`,null));
		$1b || ($7t=imba.createElement('i',$6t,`fa fa-envelope ${$0}`,null));
		$1b || ($7t=imba.createElement('p',$6t,`${$0}`,"info@montaind.com"));
		$1b || ($4t=imba.createElement('div',$3t,`col ${$0}`,null));
		$1b || ($5t=imba.createElement('h3',$4t,`${$0}`,"Links"));
		$1b || ($5t=imba.createElement('div',$4t,`links ${$0}`,null));
		$1b || ($6t=imba.createElement('div',$5t,`wrapper ${$0}`,null));
		$1b || ($7t=imba.createElement('i',$6t,`fa fa-long-arrow-right ${$0}`,null));
		$1b || ($7t=imba.createElement('a',$6t,`active ${$0}`,"Home"));
		$1b || ($6t=imba.createElement('div',$5t,`wrapper ${$0}`,null));
		$1b || ($7t=imba.createElement('i',$6t,`fa fa-long-arrow-right ${$0}`,null));
		$1b || ($7t=imba.createElement('a',$6t,`${$0}`,"Peças"));
		$1b || ($6t=imba.createElement('div',$5t,`wrapper ${$0}`,null));
		$1b || ($7t=imba.createElement('i',$6t,`fa fa-long-arrow-right ${$0}`,null));
		$1b || ($7t=imba.createElement('a',$6t,`${$0}`,"Produtos"));
		$1b || ($6t=imba.createElement('div',$5t,`wrapper ${$0}`,null));
		$1b || ($7t=imba.createElement('i',$6t,`fa fa-long-arrow-right ${$0}`,null));
		$1b || ($7t=imba.createElement('a',$6t,`${$0}`,"Orçamento"));
		$1b || ($4t=imba.createElement('div',$3t,`col ${$0}`,null));
		$1b || ($5t=imba.createElement('div',$4t,`subscribe ${$0}`,null));
		$1b || ($6t=imba.createElement('h3',$5t,`${$0}`,"Inscreva-se!"));
		$1b || ($6t=imba.createElement('input',$5t,`${$0}`,null));
		$1b || ($6t.type="email");
		$1b || ($6t.placeholder="Digite seu e-mail");
		$1b || ($6t=imba.createElement('button',$5t,`button ${$0}`,"Inscrever-se"));
		$1b || ($5t=imba.createElement('div',$4t,`social ${$0}`,null));
		$1b || ($6t=imba.createElement('h3',$5t,`${$0}`,"Fale conosco"));
		$1b || ($6t=imba.createElement('div',$5t,`wrapper ${$0}`,null));
		($7b=$7d=1,$7t=$1t[$d]) || ($7b=$7d=0,$1t[$d]=$7t=imba.createComponent(FadeInUp,$6t,`${$0}`,null));
		$eSt = $7t.slot$('__',$1t);
		$7b || ($7t.delay=.0);
		$7b || ($8t=imba.createElement('a',$eSt,`${$0}`,null));
		$7b || ($8t.href="#");
		$7b || ($9t=imba.createElement('i',$8t,`fa fa-twitter ${$0}`,null));
		$7b || !$7t.setup || $7t.setup($7d);
		$7t.end$($7d);
		$7b || $7t.insertInto$($6t);
		($7b=$7d=1,$7t=$1t[$f]) || ($7b=$7d=0,$1t[$f]=$7t=imba.createComponent(FadeInUp,$6t,`${$0}`,null));
		$gSt = $7t.slot$('__',$1t);
		$7b || ($7t.delay=.1);
		$7b || ($8t=imba.createElement('a',$gSt,`${$0}`,null));
		$7b || ($8t.href="#");
		$7b || ($9t=imba.createElement('i',$8t,`fa fa-linkedin ${$0}`,null));
		$7b || !$7t.setup || $7t.setup($7d);
		$7t.end$($7d);
		$7b || $7t.insertInto$($6t);
		($7b=$7d=1,$7t=$1t[$h]) || ($7b=$7d=0,$1t[$h]=$7t=imba.createComponent(FadeInUp,$6t,`${$0}`,null));
		$iSt = $7t.slot$('__',$1t);
		$7b || ($7t.delay=.2);
		$7b || ($8t=imba.createElement('a',$iSt,`${$0}`,null));
		$7b || ($8t.href="#");
		$7b || ($9t=imba.createElement('i',$8t,`fa fa-facebook ${$0}`,null));
		$7b || !$7t.setup || $7t.setup($7d);
		$7t.end$($7d);
		$7b || $7t.insertInto$($6t);
		($7b=$7d=1,$7t=$1t[$j]) || ($7b=$7d=0,$1t[$j]=$7t=imba.createComponent(FadeInUp,$6t,`${$0}`,null));
		$kSt = $7t.slot$('__',$1t);
		$7b || ($7t.delay=.3);
		$7b || ($8t=imba.createElement('a',$kSt,`${$0}`,null));
		$7b || ($8t.href="#");
		$7b || ($9t=imba.createElement('i',$8t,`fa fa-instagram ${$0}`,null));
		$7b || !$7t.setup || $7t.setup($7d);
		$7t.end$($7d);
		$7b || $7t.insertInto$($6t);
		$1b || ($3t=imba.createElement('p',$2t,`copyright ${$0}`,"Copyright ©2020 All rights reserved | This website is made with Imba"));
		$1t.close$($1d);
		return $1t;
	}
	
	
}; imba.tags.define('footer-trwdkc',Footer,{ns: 'trwdkcc'});

imba.inlineStyles("\n.trwdkcc_ .footer.trwdkcc:not(#_) {padding-top: 5.25rem;\npadding-bottom: 5.25rem;\nbackground: #232323;}\n.trwdkcc_ .footer .footer-wrapper.trwdkcc:not(#_) {display: flex;\npadding-bottom: 5rem;}\n.trwdkcc_ .footer .footer-wrapper .col.trwdkcc:not(#_) {flex-basis: 100%;\npadding-left: 2rem;\npadding-right: 2rem;}\n.trwdkcc_ .footer .footer-wrapper .col .wrapper.trwdkcc:not(#_) {display: flex;}\n.trwdkcc_ .footer .footer-wrapper .col h3.trwdkcc:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);\nmargin-bottom: 2.5rem;}\n.trwdkcc_ .footer .footer-wrapper .col p.trwdkcc:not(#_),.trwdkcc_ .footer .footer-wrapper .col a.trwdkcc:not(#_) {color: hsla(0.00,0.00%,100.00%,80%);\nfont-size: .875rem;\nmargin: 0rem;}\n.trwdkcc_ .footer .footer-wrapper .col i.trwdkcc:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);}\n.trwdkcc_ .footer .footer-wrapper .col i.trwdkcc:not(#_)::before {display: flex;\njustify-content: center;}\n\n.trwdkcc_ .footer .footer-wrapper .col .info i.trwdkcc:not(#_),.trwdkcc_ .footer .footer-wrapper .col .links i.trwdkcc:not(#_) {margin-right: .5rem;}\n.trwdkcc_ .footer .footer-wrapper .col .info i.trwdkcc:not(#_)::before,.trwdkcc_ .footer .footer-wrapper .col .links i.trwdkcc:not(#_)::before {width: 20px;\nheight: 100%;}\n\n.trwdkcc_ .footer .footer-wrapper .col .info i.trwdkcc:not(#_) {padding-top: 4px;}\n.trwdkcc_ .footer .footer-wrapper .col .info .wrapper.trwdkcc:not(#_) {margin-bottom: 1rem;}\n\n.trwdkcc_ .footer .footer-wrapper .col .links a.trwdkcc:not(#_) {cursor: pointer;\ntransition: none .35s;\ntransition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;}\n.trwdkcc_ .footer .footer-wrapper .col .links a.trwdkcc:not(#_):hover {color: hsla(0.00,0.00%,100.00%,100%);}\n.trwdkcc_ .footer .footer-wrapper .col .links .active.trwdkcc:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);\ncursor: default;}\n.trwdkcc_ .footer .footer-wrapper .col .links i.trwdkcc:not(#_) {font-size: .8rem;}\n.trwdkcc_ .footer .footer-wrapper .col .links i.trwdkcc:not(#_)::before {align-items: center;}\n.trwdkcc_ .footer .footer-wrapper .col .subscribe.trwdkcc:not(#_) {margin-bottom: 2.5rem;}\n.trwdkcc_ .footer .footer-wrapper .col .subscribe input.trwdkcc:not(#_),.trwdkcc_ .footer .footer-wrapper .col .subscribe button.trwdkcc:not(#_) {padding: 1rem;\nbackground: #333333;\nfont-size: 1rem;\nbr: xs;\nmargin-bottom: .5rem;\ntext-align: center;\nwidth: 100%;\ntransition: none .35s;\ntransition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;\ncolor: hsla(0.00,0.00%,100.00%,100%);\noutline: none;}\n.trwdkcc_ .footer .footer-wrapper .col .subscribe input.trwdkcc:not(#_)::placeholder {font-family: var(--font);\nfont-size: 1rem;\ncolor: hsla(0.00,0.00%,100.00%,70%);}\n.trwdkcc_ .footer .footer-wrapper .col .subscribe button.trwdkcc:not(#_) {background: #5D50C6;\ncursor: pointer;}\n.trwdkcc_ .footer .footer-wrapper .col .subscribe button.trwdkcc:not(#_):hover {background: var(--orange);}\n\n.trwdkcc_ .footer .footer-wrapper .col .social h3.trwdkcc:not(#_) {margin-bottom: 1rem;}\n.trwdkcc_ .footer .footer-wrapper .col .social a.trwdkcc:not(#_) {margin-right: 1rem;\nbackground: #333333;\nwidth: 40px;\nheight: 40px;\nbr: full;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\ntransition: none .35s;\ntransition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;}\n.trwdkcc_ .footer .footer-wrapper .col .social a.trwdkcc:not(#_):hover {background: hsla(0.00,0.00%,100.00%,100%);}\n.trwdkcc_ .footer .footer-wrapper .col .social a:hover i.trwdkcc:not(#_) {color: var(--orange);}\n.trwdkcc_ .footer .footer-wrapper .col .social a i.trwdkcc:not(#_) {transition: none .35s;\ntransition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;\nfont-size: 1.25rem;}\n.trwdkcc_ .footer .copyright.trwdkcc:not(#_) {text-align: center;\ncolor: hsla(0.00,0.00%,100.00%,80%);}\n\n",'trwdkc');
/*

.trwdkcc_ .footer.trwdkcc:not(#_) {padding-top: 5.25rem;
padding-bottom: 5.25rem;
background: #232323;}
.trwdkcc_ .footer .footer-wrapper.trwdkcc:not(#_) {display: flex;
padding-bottom: 5rem;}
.trwdkcc_ .footer .footer-wrapper .col.trwdkcc:not(#_) {flex-basis: 100%;
padding-left: 2rem;
padding-right: 2rem;}
.trwdkcc_ .footer .footer-wrapper .col .wrapper.trwdkcc:not(#_) {display: flex;}
.trwdkcc_ .footer .footer-wrapper .col h3.trwdkcc:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);
margin-bottom: 2.5rem;}
.trwdkcc_ .footer .footer-wrapper .col p.trwdkcc:not(#_),.trwdkcc_ .footer .footer-wrapper .col a.trwdkcc:not(#_) {color: hsla(0.00,0.00%,100.00%,80%);
font-size: .875rem;
margin: 0rem;}
.trwdkcc_ .footer .footer-wrapper .col i.trwdkcc:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);}
.trwdkcc_ .footer .footer-wrapper .col i.trwdkcc:not(#_)::before {display: flex;
justify-content: center;}

.trwdkcc_ .footer .footer-wrapper .col .info i.trwdkcc:not(#_),.trwdkcc_ .footer .footer-wrapper .col .links i.trwdkcc:not(#_) {margin-right: .5rem;}
.trwdkcc_ .footer .footer-wrapper .col .info i.trwdkcc:not(#_)::before,.trwdkcc_ .footer .footer-wrapper .col .links i.trwdkcc:not(#_)::before {width: 20px;
height: 100%;}

.trwdkcc_ .footer .footer-wrapper .col .info i.trwdkcc:not(#_) {padding-top: 4px;}
.trwdkcc_ .footer .footer-wrapper .col .info .wrapper.trwdkcc:not(#_) {margin-bottom: 1rem;}

.trwdkcc_ .footer .footer-wrapper .col .links a.trwdkcc:not(#_) {cursor: pointer;
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;}
.trwdkcc_ .footer .footer-wrapper .col .links a.trwdkcc:not(#_):hover {color: hsla(0.00,0.00%,100.00%,100%);}
.trwdkcc_ .footer .footer-wrapper .col .links .active.trwdkcc:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);
cursor: default;}
.trwdkcc_ .footer .footer-wrapper .col .links i.trwdkcc:not(#_) {font-size: .8rem;}
.trwdkcc_ .footer .footer-wrapper .col .links i.trwdkcc:not(#_)::before {align-items: center;}
.trwdkcc_ .footer .footer-wrapper .col .subscribe.trwdkcc:not(#_) {margin-bottom: 2.5rem;}
.trwdkcc_ .footer .footer-wrapper .col .subscribe input.trwdkcc:not(#_),.trwdkcc_ .footer .footer-wrapper .col .subscribe button.trwdkcc:not(#_) {padding: 1rem;
background: #333333;
font-size: 1rem;
br: xs;
margin-bottom: .5rem;
text-align: center;
width: 100%;
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
color: hsla(0.00,0.00%,100.00%,100%);
outline: none;}
.trwdkcc_ .footer .footer-wrapper .col .subscribe input.trwdkcc:not(#_)::placeholder {font-family: var(--font);
font-size: 1rem;
color: hsla(0.00,0.00%,100.00%,70%);}
.trwdkcc_ .footer .footer-wrapper .col .subscribe button.trwdkcc:not(#_) {background: #5D50C6;
cursor: pointer;}
.trwdkcc_ .footer .footer-wrapper .col .subscribe button.trwdkcc:not(#_):hover {background: var(--orange);}

.trwdkcc_ .footer .footer-wrapper .col .social h3.trwdkcc:not(#_) {margin-bottom: 1rem;}
.trwdkcc_ .footer .footer-wrapper .col .social a.trwdkcc:not(#_) {margin-right: 1rem;
background: #333333;
width: 40px;
height: 40px;
br: full;
display: flex;
align-items: center;
justify-content: center;
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;}
.trwdkcc_ .footer .footer-wrapper .col .social a.trwdkcc:not(#_):hover {background: hsla(0.00,0.00%,100.00%,100%);}
.trwdkcc_ .footer .footer-wrapper .col .social a:hover i.trwdkcc:not(#_) {color: var(--orange);}
.trwdkcc_ .footer .footer-wrapper .col .social a i.trwdkcc:not(#_) {transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
font-size: 1.25rem;}
.trwdkcc_ .footer .copyright.trwdkcc:not(#_) {text-align: center;
color: hsla(0.00,0.00%,100.00%,80%);}


*/

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvb3Rlci5pbWJhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQU0sQ0FBQyxRQUFRLE1BQU0sWUFBWTs7QUFDakMsTUFDSSxDQUFDLE9BQU8sQ0FBQyxLQUFHLENBQUMsTUFBTTs7Q0FDckIsTUFBTTs7Ozs7O2NBQ0MsMkRBQ1A7Y0FBd0IseURBQ3hCO2NBQXVCLDhDQUN2QjtjQUFhLG9DQUNaLGdCQUFnQixDQUFsQjtjQUEwQiwrQ0FDMUI7Y0FBZSxrREFDZjtjQUFtQix5REFBQztjQUNPLG1DQUM1Qiw0REFBNEQsQ0FEL0I7Y0FDd0Msa0RBQUc7Y0FDdkQsb0RBQUM7Y0FDRSxtQ0FBRyxpQkFDVCxDQURPO2NBQ0Usa0RBQUc7Y0FDWix1REFBQztjQUNLLG1DQUFHLG1CQUNWLENBRFE7Y0FDRCw4Q0FBRztjQUNwQixvQ0FBSSxPQUFPLENBQVQ7Y0FDQyxnREFBRztjQUNKLGtEQUFHO2NBQ0EsK0RBQUM7Y0FDYSwwQ0FBVSxNQUMvQixDQURzQjtjQUNiLGtEQUFHO2NBQ1IsK0RBQUM7Y0FDYSxtQ0FBRyxPQUFPLENBQVQ7Y0FDbkIsa0RBQUc7Y0FDRiwrREFBQztjQUNhLG1DQUFHLFVBQVUsQ0FBWjtjQUNoQixrREFBRztjQUFtQiwrREFDdkI7Y0FDYSxtQ0FBRyxXQUFXLENBQWI7Y0FDWCw4Q0FBRztjQUFhLG9EQUFHO2NBRVosb0NBQUksY0FDRixDQURBO2NBQ1MsNENBQ2xCO2NBQUMsSUFBSSxDQUFDLE9BQU87Y0FBQyxXQUNqQixDQUFDLG1CQUFtQjtjQUFVLCtDQUFlLGNBQWMsQ0FBdkI7Y0FDOUIsaURBQUc7Y0FBaUIsb0NBQUksY0FDekIsQ0FEdUI7Y0FDZCxrREFBRztvREFDRCwrQ0FBUTs7Y0FBQyxLQUN2QixDQUFDLEVBQUU7Y0FBWSx5Q0FBQztjQUFDLElBQ2xCLENBQUMsR0FBRztjQUFjLHNEQUFDOzs7O29EQUNKLCtDQUNoQjs7Y0FBQyxLQUFLLENBQUMsRUFBRTtjQUFZLHlDQUFDO2NBQUMsSUFBSSxDQUFDLEdBQzFCO2NBQWMsdURBQUM7Ozs7b0RBQ0gsK0NBQVE7O2NBQUMsS0FDbkIsQ0FBQyxFQUFFO2NBQVkseUNBQUM7Y0FBQyxJQUFJLENBQUMsR0FBRztjQUNoQix1REFBQzs7OztvREFDSCwrQ0FBUTs7Y0FBQyxLQUNuQixDQUFDLEVBQUU7Y0FBWSx5Q0FBQztjQUFDLElBQUksQ0FBQyxHQUFHO2NBQ2hCLHdEQUFDOzs7O2NBQ04sNkNBQWEsc0VBRWUsQ0FGM0I7OztFQUUyQjs7O0FBc0dqQztBQUFDIiwiZmlsZSI6IkZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGYWRlSW5VcCBmcm9tICcuL0ZhZGVJblVwJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFnIEZvb3RlclxyXG5cdGRlZiByZW5kZXJcclxuXHRcdDxzZWxmPlxyXG5cdFx0XHQ8ZGl2LmZvb3Rlci5jb250YWluZXI+XHJcblx0XHRcdFx0PGRpdi5mb290ZXItd3JhcHBlcj5cclxuXHRcdFx0XHRcdDxkaXYuY29sPlxyXG5cdFx0XHRcdFx0XHQ8aDM+IFwiQWxndW1hIGTDunZpZGE/XCJcclxuXHRcdFx0XHRcdFx0PGRpdi5pbmZvPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYud3JhcHBlcj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpLmZhLmZhLW1hcC1tYXJrZXI+IFxyXG5cdFx0XHRcdFx0XHRcdFx0PHA+IFwiMjAzIEZha2UgU3QuIE1vdW50YWluIFZpZXcsIFNhbiBGcmFuY2lzY28sIENhbGlmb3JuaWEsIFVTQVwiXHJcblx0XHRcdFx0XHRcdFx0PGRpdi53cmFwcGVyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGkuZmEuZmEtcGhvbmU+IFxyXG5cdFx0XHRcdFx0XHRcdFx0PHA+IFwiKDQ5KSA5OTk5OS05OTk5XCJcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2LndyYXBwZXI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aS5mYS5mYS1lbnZlbG9wZT4gXHJcblx0XHRcdFx0XHRcdFx0XHQ8cD4gXCJpbmZvQG1vbnRhaW5kLmNvbVwiXHJcblx0XHRcdFx0XHQ8ZGl2LmNvbD5cclxuXHRcdFx0XHRcdFx0PGgzPiBcIkxpbmtzXCJcclxuXHRcdFx0XHRcdFx0PGRpdi5saW5rcz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2LndyYXBwZXI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aS5mYS5mYS1sb25nLWFycm93LXJpZ2h0PiBcclxuXHRcdFx0XHRcdFx0XHRcdDxhLmFjdGl2ZT4gXCJIb21lXCJcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2LndyYXBwZXI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aS5mYS5mYS1sb25nLWFycm93LXJpZ2h0PiBcclxuXHRcdFx0XHRcdFx0XHRcdDxhPiBcIlBlw6dhc1wiXHJcblx0XHRcdFx0XHRcdFx0PGRpdi53cmFwcGVyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGkuZmEuZmEtbG9uZy1hcnJvdy1yaWdodD4gXHJcblx0XHRcdFx0XHRcdFx0XHQ8YT4gXCJQcm9kdXRvc1wiXHJcblx0XHRcdFx0XHRcdFx0PGRpdi53cmFwcGVyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGkuZmEuZmEtbG9uZy1hcnJvdy1yaWdodD4gXHJcblx0XHRcdFx0XHRcdFx0XHQ8YT4gXCJPcsOnYW1lbnRvXCJcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGRpdi5jb2w+XHJcblx0XHRcdFx0XHRcdDxkaXYuc3Vic2NyaWJlPlxyXG5cdFx0XHRcdFx0XHRcdDxoMz4gXCJJbnNjcmV2YS1zZSFcIlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBzZXUgZS1tYWlsXCI+XHJcblx0XHRcdFx0XHRcdFx0PGJ1dHRvbi5idXR0b24+IFwiSW5zY3JldmVyLXNlXCJcclxuXHRcdFx0XHRcdFx0PGRpdi5zb2NpYWw+XHJcblx0XHRcdFx0XHRcdFx0PGgzPiBcIkZhbGUgY29ub3Njb1wiXHJcblx0XHRcdFx0XHRcdFx0PGRpdi53cmFwcGVyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZhZGVJblVwIGRlbGF5PS4wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiPiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aS5mYS5mYS10d2l0dGVyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZhZGVJblVwIGRlbGF5PS4xPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiPiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aS5mYS5mYS1saW5rZWRpbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxGYWRlSW5VcCBkZWxheT0uMj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj4gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGkuZmEuZmEtZmFjZWJvb2s+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RmFkZUluVXAgZGVsYXk9LjM+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpLmZhLmZhLWluc3RhZ3JhbT5cclxuXHRcdFx0XHQ8cC5jb3B5cmlnaHQ+IFwiQ29weXJpZ2h0IMKpMjAyMCBBbGwgcmlnaHRzIHJlc2VydmVkIHwgVGhpcyB3ZWJzaXRlIGlzIG1hZGUgd2l0aCBJbWJhXCJcclxuXHJcblx0XHJcblx0Y3NzXHJcblxyXG5cdFx0LmZvb3RlclxyXG5cdFx0XHRweTogNS4yNXJlbVxyXG5cdFx0XHRiZzogIzIzMjMyM1xyXG5cclxuXHRcdFx0LmZvb3Rlci13cmFwcGVyXHJcblx0XHRcdFx0ZDogZmxleFxyXG5cdFx0XHRcdHBiOiA1cmVtXHJcblx0XHRcdFxyXG5cdFx0XHRcdC5jb2xcclxuXHRcdFx0XHRcdGZsYjogMTAwJVxyXG5cdFx0XHRcdFx0cHg6IDJyZW1cclxuXHJcblx0XHRcdFx0XHQud3JhcHBlclxyXG5cdFx0XHRcdFx0XHRkOiBmbGV4XHJcblxyXG5cdFx0XHRcdFx0aDNcclxuXHRcdFx0XHRcdFx0Yzogd2hpdGVcclxuXHRcdFx0XHRcdFx0bWI6IDIuNXJlbVxyXG5cclxuXHRcdFx0XHRcdHAsIGFcclxuXHRcdFx0XHRcdFx0Yzogd2hpdGUvODBcclxuXHRcdFx0XHRcdFx0ZnM6IC44NzVyZW1cclxuXHRcdFx0XHRcdFx0bTogMFxyXG5cclxuXHRcdFx0XHRcdGlcclxuXHRcdFx0XHRcdFx0Yzogd2hpdGVcclxuXHJcblx0XHRcdFx0XHRcdEBiZWZvcmVcclxuXHRcdFx0XHRcdFx0XHRkOiBmbGV4IGpjOiBjZW50ZXJcclxuXHJcblx0XHRcdFx0XHQuaW5mbywgLmxpbmtzXHJcblx0XHRcdFx0XHRcdGlcclxuXHRcdFx0XHRcdFx0XHRtcjogLjVyZW1cdFx0XHJcblxyXG5cdFx0XHRcdFx0XHRcdEBiZWZvcmVcclxuXHRcdFx0XHRcdFx0XHRcdHc6IDIwcHhcclxuXHRcdFx0XHRcdFx0XHRcdGg6IDEwMCVcclxuXHJcblx0XHRcdFx0XHQuaW5mb1xyXG5cclxuXHRcdFx0XHRcdFx0aVx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHB0OiA0cHhcclxuXHJcblx0XHRcdFx0XHRcdC53cmFwcGVyXHJcblx0XHRcdFx0XHRcdFx0bWI6IDFyZW1cclxuXHJcblx0XHRcdFx0XHQubGlua3NcclxuXHRcdFx0XHRcdFx0YVxyXG5cdFx0XHRcdFx0XHRcdGNAaG92ZXI6IHdoaXRlXHJcblx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyXHJcblx0XHRcdFx0XHRcdFx0dHdlZW46IC4zNXNcclxuXHJcblx0XHRcdFx0XHRcdC5hY3RpdmVcclxuXHRcdFx0XHRcdFx0XHRjOiB3aGl0ZSBcclxuXHRcdFx0XHRcdFx0XHRjdXJzb3I6IGRlZmF1bHRcclxuXHJcblx0XHRcdFx0XHRcdGlcclxuXHRcdFx0XHRcdFx0XHRmczogLjhyZW1cclxuXHJcblx0XHRcdFx0XHRcdFx0QGJlZm9yZVxyXG5cdFx0XHRcdFx0XHRcdFx0YWk6Y2VudGVyXHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQuc3Vic2NyaWJlXHJcblx0XHRcdFx0XHRcdG1iOiAyLjVyZW1cclxuXHJcblx0XHRcdFx0XHRcdGlucHV0LCBidXR0b25cclxuXHRcdFx0XHRcdFx0XHRwOiAxcmVtXHJcblx0XHRcdFx0XHRcdFx0Ymc6ICMzMzMzMzNcclxuXHRcdFx0XHRcdFx0XHRmczogMXJlbVxyXG5cdFx0XHRcdFx0XHRcdGJyOiB4c1xyXG5cdFx0XHRcdFx0XHRcdG1iOiAuNXJlbVxyXG5cdFx0XHRcdFx0XHRcdHRhOiBjZW50ZXJcclxuXHRcdFx0XHRcdFx0XHR3OiAxMDAlXHJcblx0XHRcdFx0XHRcdFx0dHdlZW46IC4zNXNcclxuXHRcdFx0XHRcdFx0XHRjOiB3aGl0ZVxyXG5cdFx0XHRcdFx0XHRcdG91dGxpbmU6IG5vbmVcclxuXHJcblx0XHRcdFx0XHRcdGlucHV0QHBsYWNlaG9sZGVyXHJcblx0XHRcdFx0XHRcdFx0ZmY6ICRmb250XHJcblx0XHRcdFx0XHRcdFx0ZnM6IDFyZW1cclxuXHRcdFx0XHRcdFx0XHRjOiB3aGl0ZS83MFxyXG5cclxuXHRcdFx0XHRcdFx0YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0Ymc6ICM1RDUwQzYgQGhvdmVyOiAkb3JhbmdlXHJcblx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyXHJcblxyXG5cdFx0XHRcdFx0LnNvY2lhbFxyXG5cclxuXHRcdFx0XHRcdFx0aDNcclxuXHRcdFx0XHRcdFx0XHRtYjogMXJlbVxyXG5cclxuXHRcdFx0XHRcdFx0YVxyXG5cdFx0XHRcdFx0XHRcdG1yOiAxcmVtXHJcblx0XHRcdFx0XHRcdFx0Ymc6ICMzMzMzMzMgQGhvdmVyOiB3aGl0ZVxyXG5cdFx0XHRcdFx0XHRcdHNpemU6IDQwcHhcclxuXHRcdFx0XHRcdFx0XHRicjogZnVsbFxyXG5cdFx0XHRcdFx0XHRcdGQ6IGZsZXhcdGFpOiBjZW50ZXIgamM6IGNlbnRlclxyXG5cdFx0XHRcdFx0XHRcdHR3ZWVuOiAuMzVzXHJcblxyXG5cdFx0XHRcdFx0XHRcdEBob3ZlciBpXHJcblx0XHRcdFx0XHRcdFx0XHRjOiAkb3JhbmdlXHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aVxyXG5cdFx0XHRcdFx0XHRcdFx0dHdlZW46IC4zNXNcclxuXHRcdFx0XHRcdFx0XHRcdGZzOiAxLjI1cmVtXHJcblxyXG5cdFx0XHQuY29weXJpZ2h0XHJcblx0XHRcdFx0dGE6IGNlbnRlclxyXG5cdFx0XHRcdGM6IHdoaXRlLzgwXHJcblx0XHRcdFx0XHQiXX0=