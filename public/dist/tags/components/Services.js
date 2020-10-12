import '../../../web_modules/imba/dist/imba.js';
var $b = Symbol(), $h = Symbol(), $j = Symbol(), $l = Symbol(), $n = Symbol();

import FadeInUp from './FadeInUp.js';

export default class Services extends imba.tags.get('component','ImbaElement') {
	
	render(){
		var $1t, $1b, $1d, $0 = this._ns_ || '', $2t, $3t, $3b, $3d, $iSt, $4t, $5t, $kSt, $mSt, $oSt;
		
		$1t=this;
		$1t.open$();
		($1b=$1d=1,$1t[$b] === 1) || ($1b=$1d=0,$1t[$b]=1);
		$1b || ($2t=imba.createElement('div',$1t,`services ${$0}`,null));
		($3b=$3d=1,$3t=$1t[$h]) || ($3b=$3d=0,$1t[$h]=$3t=imba.createComponent(FadeInUp,$2t,`${$0}`,null));
		$iSt = $3t.slot$('__',$1t);
		$3b || ($3t.delay=.0);
		$3b || ($3t.flb=true);
		$3b || ($4t=imba.createElement('div',$iSt,`qjk82vcd card ${$0}`,null));
		$3b || ($5t=imba.createElement('i',$4t,`icon flaticon-050-robot-arm ${$0}`,null));
		$3b || ($5t=imba.createElement('h3',$4t,`${$0}`,"Automação"));
		$3b || ($5t=imba.createElement('p',$4t,`${$0}`,"Elit esse eiusmod labore ut velit proident pariatur reprehenderit id esse qui non tempor veniam."));
		$3b || !$3t.setup || $3t.setup($3d);
		$3t.end$($3d);
		$3b || $3t.insertInto$($2t);
		($3b=$3d=1,$3t=$1t[$j]) || ($3b=$3d=0,$1t[$j]=$3t=imba.createComponent(FadeInUp,$2t,`${$0}`,null));
		$kSt = $3t.slot$('__',$1t);
		$3b || ($3t.delay=.1);
		$3b || ($3t.flb=true);
		$3b || ($4t=imba.createElement('div',$kSt,`qjk82vce card ${$0}`,null));
		$3b || ($5t=imba.createElement('i',$4t,`icon flaticon-008-factory ${$0}`,null));
		$3b || ($5t=imba.createElement('h3',$4t,`${$0}`,"Fabricação"));
		$3b || ($5t=imba.createElement('p',$4t,`${$0}`,"Laboris nulla sunt deserunt ea laborum aliquip mollit exercitation anim tempor non mollit reprehenderit laboris."));
		$3b || !$3t.setup || $3t.setup($3d);
		$3t.end$($3d);
		$3b || $3t.insertInto$($2t);
		($3b=$3d=1,$3t=$1t[$l]) || ($3b=$3d=0,$1t[$l]=$3t=imba.createComponent(FadeInUp,$2t,`${$0}`,null));
		$mSt = $3t.slot$('__',$1t);
		$3b || ($3t.delay=.2);
		$3b || ($3t.flb=true);
		$3b || ($4t=imba.createElement('div',$mSt,`qjk82vcf card ${$0}`,null));
		$3b || ($5t=imba.createElement('i',$4t,`icon flaticon-037-wrench ${$0}`,null));
		$3b || ($5t=imba.createElement('h3',$4t,`${$0}`,"Instalação"));
		$3b || ($5t=imba.createElement('p',$4t,`${$0}`,"Qui veniam magna consequat cillum ex officia aliqua id quis enim consectetur anim laboris."));
		$3b || !$3t.setup || $3t.setup($3d);
		$3t.end$($3d);
		$3b || $3t.insertInto$($2t);
		($3b=$3d=1,$3t=$1t[$n]) || ($3b=$3d=0,$1t[$n]=$3t=imba.createComponent(FadeInUp,$2t,`${$0}`,null));
		$oSt = $3t.slot$('__',$1t);
		$3b || ($3t.delay=.3);
		$3b || ($3t.flb=true);
		$3b || ($4t=imba.createElement('div',$oSt,`qjk82vcg card ${$0}`,null));
		$3b || ($5t=imba.createElement('i',$4t,`icon flaticon-022-repair-tools ${$0}`,null));
		$3b || ($5t=imba.createElement('h3',$4t,`${$0}`,"Manutenção"));
		$3b || ($5t=imba.createElement('p',$4t,`${$0}`,"Amet officia elit proident mollit esse mollit id deserunt laborum do sint tempor consectetur."));
		$3b || !$3t.setup || $3t.setup($3d);
		$3t.end$($3d);
		$3b || $3t.insertInto$($2t);
		$1t.close$($1d);
		return $1t;
	}
}; imba.tags.define('services-qjk82v',Services,{ns: 'qjk82vc'});

imba.inlineStyles(".qjk82vcd:not(#_):not(#_) {background: var(--orange);}\n\n.qjk82vce:not(#_):not(#_) {background: var(--indigo);}\n\n.qjk82vcf:not(#_):not(#_) {background: var(--orange);}\n\n.qjk82vcg:not(#_):not(#_) {background: var(--indigo);}\n\n\n.qjk82vc_ .services.qjk82vc:not(#_) {display: flex;}\n.qjk82vc_ .services .card.qjk82vc:not(#_) {padding: 3rem 1.5rem;\ntext-align: center;\nflex-basis: 100%;\nheight: 100%;}\n.qjk82vc_ .services .card .icon.qjk82vc:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);\ndisplay: block;\nmargin-bottom: 2rem;}\n.qjk82vc_ .services .card .icon.qjk82vc:not(#_)::before {font-size: 3.125rem;\nline-height: 3.125rem;\n--u_lh: 3.125rem;}\n.qjk82vc_ .services .card h3.qjk82vc:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);}\n.qjk82vc_ .services .card p.qjk82vc:not(#_) {color: hsla(0.00,0.00%,100.00%,80%);}\n\n",'qjk82v');
/*
.qjk82vcd:not(#_):not(#_) {background: var(--orange);}

.qjk82vce:not(#_):not(#_) {background: var(--indigo);}

.qjk82vcf:not(#_):not(#_) {background: var(--orange);}

.qjk82vcg:not(#_):not(#_) {background: var(--indigo);}


.qjk82vc_ .services.qjk82vc:not(#_) {display: flex;}
.qjk82vc_ .services .card.qjk82vc:not(#_) {padding: 3rem 1.5rem;
text-align: center;
flex-basis: 100%;
height: 100%;}
.qjk82vc_ .services .card .icon.qjk82vc:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);
display: block;
margin-bottom: 2rem;}
.qjk82vc_ .services .card .icon.qjk82vc:not(#_)::before {font-size: 3.125rem;
line-height: 3.125rem;
--u_lh: 3.125rem;}
.qjk82vc_ .services .card h3.qjk82vc:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);}
.qjk82vc_ .services .card p.qjk82vc:not(#_) {color: hsla(0.00,0.00%,100.00%,80%);}


*/

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlcnZpY2VzLmltYmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBTSxDQUFDLFFBQVEsTUFBTSxZQUFZOztBQUNqQyxNQUNJLENBQUMsT0FBTyxDQUFDLEtBQUcsQ0FBQyxRQUFROztDQUN2QixNQUFNOzs7Ozs7Y0FDQyxtREFDUDtvREFBZ0IsK0NBQ1g7O2NBQUMsS0FBSyxDQUFDLEVBQUU7Y0FBQyxHQUFHLENBQUMsSUFBSTtjQUFRLHlEQUMvQjtjQUEyQixvRUFDN0I7Y0FBcUMsb0NBQ25DLFdBQVcsQ0FBYjtjQUFxQixtQ0FDckIsa0dBQWtHLENBRDVFOzs7O29EQUNrRiwrQ0FDdEc7O2NBQUMsS0FBSyxDQUFDLEVBQUU7Y0FBQyxHQUFHLENBQUMsSUFBSTtjQUFRLHlEQUFHO2NBQ1Asa0VBQUM7Y0FDSyxvQ0FBSSxZQUN6QixDQUR1QjtjQUNmLG1DQUFHLGtIQUN5RixDQUQzRjs7OztvREFDaUcsK0NBQVE7O2NBQUMsS0FDekgsQ0FBQyxFQUFFO2NBQUMsR0FBRyxDQUFDLElBQUk7Y0FBUSx5REFBRztjQUNQLGlFQUFDO2NBQ0ksb0NBQUksWUFDeEIsQ0FEc0I7Y0FDZCxtQ0FBRyw0RkFDbUUsQ0FEckU7Ozs7b0RBQzJFLCtDQUFROztjQUFDLEtBQUssQ0FBQyxFQUN0RztjQUFDLEdBQUcsQ0FBQyxJQUFJO2NBQVEseURBQUc7Y0FDUCx1RUFBQztjQUNVLG9DQUFJLFlBQVksQ0FBZDtjQUNwQixtQ0FBRywrRkFDc0UsQ0FEeEU7Ozs7OztFQUN3RTtBQW9CN0Q7QUFDbkIiLCJmaWxlIjoiU2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmFkZUluVXAgZnJvbSAnLi9GYWRlSW5VcCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhZyBTZXJ2aWNlc1xyXG5cdGRlZiByZW5kZXJcclxuXHRcdDxzZWxmPlxyXG5cdFx0XHQ8ZGl2LnNlcnZpY2VzPlxyXG5cdFx0XHRcdDxGYWRlSW5VcCBkZWxheT0uMCBmbGI9dHJ1ZT5cclxuXHRcdFx0XHRcdDxkaXZbYmc6ICRvcmFuZ2VdLmNhcmQ+XHJcblx0XHRcdFx0XHRcdDxpLmljb24uZmxhdGljb24tMDUwLXJvYm90LWFybT5cclxuXHRcdFx0XHRcdFx0PGgzPiBcIkF1dG9tYcOnw6NvXCJcclxuXHRcdFx0XHRcdFx0PHA+IFwiRWxpdCBlc3NlIGVpdXNtb2QgbGFib3JlIHV0IHZlbGl0IHByb2lkZW50IHBhcmlhdHVyIHJlcHJlaGVuZGVyaXQgaWQgZXNzZSBxdWkgbm9uIHRlbXBvciB2ZW5pYW0uXCJcclxuXHRcdFx0XHQ8RmFkZUluVXAgZGVsYXk9LjEgZmxiPXRydWU+XHJcblx0XHRcdFx0XHQ8ZGl2W2JnOiAkaW5kaWdvXS5jYXJkPlxyXG5cdFx0XHRcdFx0XHQ8aS5pY29uLmZsYXRpY29uLTAwOC1mYWN0b3J5PlxyXG5cdFx0XHRcdFx0XHQ8aDM+IFwiRmFicmljYcOnw6NvXCJcclxuXHRcdFx0XHRcdFx0PHA+IFwiTGFib3JpcyBudWxsYSBzdW50IGRlc2VydW50IGVhIGxhYm9ydW0gYWxpcXVpcCBtb2xsaXQgZXhlcmNpdGF0aW9uIGFuaW0gdGVtcG9yIG5vbiBtb2xsaXQgcmVwcmVoZW5kZXJpdCBsYWJvcmlzLlwiXHJcblx0XHRcdFx0PEZhZGVJblVwIGRlbGF5PS4yIGZsYj10cnVlPlxyXG5cdFx0XHRcdFx0PGRpdltiZzogJG9yYW5nZV0uY2FyZD5cclxuXHRcdFx0XHRcdFx0PGkuaWNvbi5mbGF0aWNvbi0wMzctd3JlbmNoPlxyXG5cdFx0XHRcdFx0XHQ8aDM+IFwiSW5zdGFsYcOnw6NvXCJcclxuXHRcdFx0XHRcdFx0PHA+IFwiUXVpIHZlbmlhbSBtYWduYSBjb25zZXF1YXQgY2lsbHVtIGV4IG9mZmljaWEgYWxpcXVhIGlkIHF1aXMgZW5pbSBjb25zZWN0ZXR1ciBhbmltIGxhYm9yaXMuXCJcclxuXHRcdFx0XHQ8RmFkZUluVXAgZGVsYXk9LjMgZmxiPXRydWU+XHJcblx0XHRcdFx0XHQ8ZGl2W2JnOiAkaW5kaWdvXS5jYXJkPlxyXG5cdFx0XHRcdFx0XHQ8aS5pY29uLmZsYXRpY29uLTAyMi1yZXBhaXItdG9vbHM+XHJcblx0XHRcdFx0XHRcdDxoMz4gXCJNYW51dGVuw6fDo29cIlxyXG5cdFx0XHRcdFx0XHQ8cD4gXCJBbWV0IG9mZmljaWEgZWxpdCBwcm9pZGVudCBtb2xsaXQgZXNzZSBtb2xsaXQgaWQgZGVzZXJ1bnQgbGFib3J1bSBkbyBzaW50IHRlbXBvciBjb25zZWN0ZXR1ci5cIlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcclxuXHRjc3NcclxuXHRcdC5zZXJ2aWNlc1xyXG5cdFx0XHRkOiBmbGV4XHJcblxyXG5cdFx0XHQuY2FyZFxyXG5cdFx0XHRcdHA6IDNyZW0gMS41cmVtXHJcblx0XHRcdFx0dGE6IGNlbnRlclxyXG5cdFx0XHRcdGZsYjogMTAwJVxyXG5cdFx0XHRcdGg6IDEwMCVcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQuaWNvbiBcclxuXHRcdFx0XHRcdGM6IHdoaXRlXHJcblx0XHRcdFx0XHRkOiBibG9ja1xyXG5cdFx0XHRcdFx0bWI6IDJyZW1cclxuXHJcblx0XHRcdFx0XHRAYmVmb3JlXHJcblx0XHRcdFx0XHRcdGZzOiAzLjEyNXJlbVxyXG5cdFx0XHRcdFx0XHRsaDogMy4xMjVyZW1cclxuXHJcblx0XHRcdFx0aDNcclxuXHRcdFx0XHRcdGM6IHdoaXRlXHJcblxyXG5cdFx0XHRcdHBcclxuXHRcdFx0XHRcdGM6IHdoaXRlLzgwIl19