import '../../../web_modules/imba/dist/imba.js';
var $b = Symbol(), $e = Symbol();

import FadeInUp from './FadeInUp.js';

export default class Section extends imba.tags.get('component','ImbaElement') {
	
	
	render(){
		var $1t, $1b, $1d, $0 = this._ns_ || '', $2t, $3t, $3b, $3d, $fSt, $4t, $5t, $6t, $7t, $8t;
		
		$1t=this;
		$1t.open$();
		($1b=$1d=1,$1t[$b] === 1) || ($1b=$1d=0,$1t[$b]=1);
		$1b || ($2t=imba.createElement('div',$1t,`section container ${$0}`,null));
		($3b=$3d=1,$3t=$1t[$e]) || ($3b=$3d=0,$1t[$e]=$3t=imba.createComponent(FadeInUp,$2t,`${$0}`,null));
		$fSt = $3t.slot$('__',$1t);
		$3b || ($4t=imba.createElement('div',$fSt,`wrapper ${$0}`,null));
		$3b || ($5t=imba.createElement('h1',$4t,`title ${$0}`,"Sobre a empresa"));
		$3b || ($5t=imba.createElement('p',$4t,`text ${$0}`,"Ipsum magna ut ullamco commodo occaecat enim non reprehenderit cillum. Velit sit consequat cupidatat nisi excepteur qui ad nulla excepteur. Id cillum ad enim pariatur et sint mollit excepteur. Sint exercitation nulla sunt ex velit commodo id minim tempor enim aliqua ea."));
		$3b || ($5t=imba.createElement('div',$4t,`grid ${$0}`,null));
		$3b || ($6t=imba.createElement('div',$5t,`card ${$0}`,null));
		$3b || ($7t=imba.createElement('div',$6t,`icon ${$0}`,null));
		$3b || ($8t=imba.createElement('i',$7t,`flaticon-050-robot-arm ${$0}`,null));
		$3b || ($7t=imba.createElement('div',$6t,`text ${$0}`,null));
		$3b || ($8t=imba.createElement('h3',$7t,`${$0}`,"Comprometimento"));
		$3b || ($8t=imba.createElement('p',$7t,`${$0}`,"Occaecat duis dolore non anim veniam reprehenderit cillum consectetur."));
		$3b || ($6t=imba.createElement('div',$5t,`card ${$0}`,null));
		$3b || ($7t=imba.createElement('div',$6t,`icon ${$0}`,null));
		$3b || ($8t=imba.createElement('i',$7t,`flaticon-050-robot-arm ${$0}`,null));
		$3b || ($7t=imba.createElement('div',$6t,`text ${$0}`,null));
		$3b || ($8t=imba.createElement('h3',$7t,`${$0}`,"Inovação"));
		$3b || ($8t=imba.createElement('p',$7t,`${$0}`,"Occaecat duis dolore non anim veniam reprehenderit cillum consectetur."));
		$3b || ($6t=imba.createElement('div',$5t,`card ${$0}`,null));
		$3b || ($7t=imba.createElement('div',$6t,`icon ${$0}`,null));
		$3b || ($8t=imba.createElement('i',$7t,`flaticon-050-robot-arm ${$0}`,null));
		$3b || ($7t=imba.createElement('div',$6t,`text ${$0}`,null));
		$3b || ($8t=imba.createElement('h3',$7t,`${$0}`,"Segurança"));
		$3b || ($8t=imba.createElement('p',$7t,`${$0}`,"Occaecat duis dolore non anim veniam reprehenderit cillum consectetur."));
		$3b || ($6t=imba.createElement('div',$5t,`card ${$0}`,null));
		$3b || ($7t=imba.createElement('div',$6t,`icon ${$0}`,null));
		$3b || ($8t=imba.createElement('i',$7t,`flaticon-050-robot-arm ${$0}`,null));
		$3b || ($7t=imba.createElement('div',$6t,`text ${$0}`,null));
		$3b || ($8t=imba.createElement('h3',$7t,`${$0}`,"Ética"));
		$3b || ($8t=imba.createElement('p',$7t,`${$0}`,"Occaecat duis dolore non anim veniam reprehenderit cillum consectetur."));
		$3b || ($6t=imba.createElement('div',$5t,`card ${$0}`,null));
		$3b || ($7t=imba.createElement('div',$6t,`icon ${$0}`,null));
		$3b || ($8t=imba.createElement('i',$7t,`flaticon-050-robot-arm ${$0}`,null));
		$3b || ($7t=imba.createElement('div',$6t,`text ${$0}`,null));
		$3b || ($8t=imba.createElement('h3',$7t,`${$0}`,"Profissionalismo"));
		$3b || ($8t=imba.createElement('p',$7t,`${$0}`,"Occaecat duis dolore non anim veniam reprehenderit cillum consectetur."));
		$3b || ($6t=imba.createElement('div',$5t,`card ${$0}`,null));
		$3b || ($7t=imba.createElement('div',$6t,`icon ${$0}`,null));
		$3b || ($8t=imba.createElement('i',$7t,`flaticon-050-robot-arm ${$0}`,null));
		$3b || ($7t=imba.createElement('div',$6t,`text ${$0}`,null));
		$3b || ($8t=imba.createElement('h3',$7t,`${$0}`,"Trabalho em Equipe"));
		$3b || ($8t=imba.createElement('p',$7t,`${$0}`,"Occaecat duis dolore non anim veniam reprehenderit cillum consectetur."));
		$3b || !$3t.setup || $3t.setup($3d);
		$3t.end$($3d);
		$3b || $3t.insertInto$($2t);
		$1b || ($3t=imba.createElement('div',$2t,`img d4hr68cd ${$0}`,null));
		$1t.close$($1d);
		return $1t;
	}
}; imba.tags.define('section-d4hr68',Section,{ns: 'd4hr68c'});

imba.inlineStyles(".d4hr68cd:not(#_):not(#_) {background-image: url(\"imgs/section5.jpg\");}\n\n\n.d4hr68c_ .section.d4hr68c:not(#_) {display: flex;}\n.d4hr68c_ .section .wrapper.d4hr68c:not(#_) {padding: 3rem 1.5rem;}\n.d4hr68c_ .section .wrapper h1.d4hr68c:not(#_),.d4hr68c_ .section .wrapper h3.d4hr68c:not(#_) {color: hsla(0.00,0.00%,0.00%,80%);}\n.d4hr68c_ .section .wrapper p.d4hr68c:not(#_) {color: var(--grey);}\n.d4hr68c_ .section .wrapper .grid.d4hr68c:not(#_) {margin-top: 4rem;\ndisplay: grid;\ngrid-gap: 2rem;\ngrid-template-columns: minmax(0, 1fr) minmax(0, 1fr);}\n.d4hr68c_ .section .wrapper .grid .card.d4hr68c:not(#_) {display: flex;}\n.d4hr68c_ .section .wrapper .grid .icon.d4hr68c:not(#_) {margin-top: .5rem;\nwidth: 80px;\nheight: 80px;\ncolor: hsla(0.00,0.00%,100.00%,100%);\nbr: full;\nbackground: var(--orange);\ndisplay: flex;\nalign-items: center;\ntext-align: center;}\n.d4hr68c_ .section .wrapper .grid .icon i.d4hr68c:not(#_) {width: 100%;}\n.d4hr68c_ .section .wrapper .grid .icon i.d4hr68c:not(#_)::before {font-size: 1.875rem;\nline-height: 1.875rem;\n--u_lh: 1.875rem;}\n.d4hr68c_ .section .wrapper .grid .text.d4hr68c:not(#_) {width: calc(100% - 80px);\npadding-left: 1rem;}\n.d4hr68c_ .section .wrapper .grid .text h3.d4hr68c:not(#_) {font-size: 1.25rem;}\n.d4hr68c_ .section .img.d4hr68c:not(#_) {width: 100%;\nbackground-size: cover;\nbackground-position: center;}\n\n",'d4hr68');
/*
.d4hr68cd:not(#_):not(#_) {background-image: url("imgs/section5.jpg");}


.d4hr68c_ .section.d4hr68c:not(#_) {display: flex;}
.d4hr68c_ .section .wrapper.d4hr68c:not(#_) {padding: 3rem 1.5rem;}
.d4hr68c_ .section .wrapper h1.d4hr68c:not(#_),.d4hr68c_ .section .wrapper h3.d4hr68c:not(#_) {color: hsla(0.00,0.00%,0.00%,80%);}
.d4hr68c_ .section .wrapper p.d4hr68c:not(#_) {color: var(--grey);}
.d4hr68c_ .section .wrapper .grid.d4hr68c:not(#_) {margin-top: 4rem;
display: grid;
grid-gap: 2rem;
grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);}
.d4hr68c_ .section .wrapper .grid .card.d4hr68c:not(#_) {display: flex;}
.d4hr68c_ .section .wrapper .grid .icon.d4hr68c:not(#_) {margin-top: .5rem;
width: 80px;
height: 80px;
color: hsla(0.00,0.00%,100.00%,100%);
br: full;
background: var(--orange);
display: flex;
align-items: center;
text-align: center;}
.d4hr68c_ .section .wrapper .grid .icon i.d4hr68c:not(#_) {width: 100%;}
.d4hr68c_ .section .wrapper .grid .icon i.d4hr68c:not(#_)::before {font-size: 1.875rem;
line-height: 1.875rem;
--u_lh: 1.875rem;}
.d4hr68c_ .section .wrapper .grid .text.d4hr68c:not(#_) {width: calc(100% - 80px);
padding-left: 1rem;}
.d4hr68c_ .section .wrapper .grid .text h3.d4hr68c:not(#_) {font-size: 1.25rem;}
.d4hr68c_ .section .img.d4hr68c:not(#_) {width: 100%;
background-size: cover;
background-position: center;}


*/

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlY3Rpb24uaW1iYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLENBQUMsUUFBUSxNQUFNLFlBQVk7O0FBQ2pDLE1BQ0ksQ0FBQyxPQUFPLENBQUMsS0FBRyxDQUFDLE9BQU87OztDQUV2QixNQUFNOzs7Ozs7Y0FDQyw0REFDUDtvREFBeUIsK0NBQ3BCOztjQUFRLG1EQUNiO2NBQWlCLDBDQUNWLGlCQUFpQixDQUF6QjtjQUFpQyx3Q0FDNUIsZ1JBQWdSLENBRG5QO2NBQzJQLCtDQUFHO2NBQ2xSLCtDQUFHO2NBQ0YsK0NBQUc7Y0FDRiwrREFBQztjQUNjLCtDQUFHO2NBQ3BCLG9DQUFJLGlCQUNILENBREM7Y0FDVSxtQ0FBRyx3RUFDdUMsQ0FEekM7Y0FDa0QsK0NBQUc7Y0FDdkUsK0NBQUc7Y0FDRiwrREFBQztjQUNjLCtDQUFHO2NBQ3BCLG9DQUFJLFVBQ1YsQ0FEUTtjQUNHLG1DQUFHLHdFQUM4QyxDQURoRDtjQUN5RCwrQ0FBRztjQUN2RSwrQ0FBRztjQUNGLCtEQUFDO2NBQ2MsK0NBQUc7Y0FDcEIsb0NBQUksV0FBVyxDQUFiO2NBQ0ksbUNBQUcsd0VBQzZDLENBRC9DO2NBQ3dELCtDQUFHO2NBQWdCLCtDQUNwRjtjQUFpQiwrREFBQztjQUVMLCtDQUFHO2NBQWlCLG9DQUNqQyxPQUFPLENBRDRCO2NBQ2pCLG1DQUNqQix3RUFDaUQsQ0FGL0I7Y0FFd0MsK0NBQUc7Y0FBZ0IsK0NBQUc7Y0FDdEUsK0RBQUM7Y0FFTCwrQ0FBRztjQUFpQixvQ0FBSSxrQkFDbkIsQ0FEaUI7Y0FFMUIsbUNBQUcsd0VBQ3NDLENBRHhDO2NBQ2lELCtDQUFHO2NBQWdCLCtDQUFHO2NBQ3RFLCtEQUFDO2NBRUwsK0NBQUc7Y0FBaUIsb0NBQUksb0JBQ2pCLENBRGU7Y0FDSixtQ0FDakIsd0VBQ29DLENBRHRDOzs7O2NBQ21ELHVEQUFHOzs7RUFDbkQ7QUEyQ0s7QUFBQztvRUE1QzJELHFCQUNwRTs7aURBRG9FLG1CQUNwRSIsImZpbGUiOiJTZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZhZGVJblVwIGZyb20gJy4vRmFkZUluVXAnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YWcgU2VjdGlvblxyXG5cclxuXHRkZWYgcmVuZGVyXHJcblx0XHQ8c2VsZj5cclxuXHRcdFx0PGRpdi5zZWN0aW9uLmNvbnRhaW5lcj5cclxuXHRcdFx0XHQ8RmFkZUluVXA+XHJcblx0XHRcdFx0XHQ8ZGl2LndyYXBwZXI+XHJcblx0XHRcdFx0XHRcdDxoMS50aXRsZT4gXCJTb2JyZSBhIGVtcHJlc2FcIlxyXG5cdFx0XHRcdFx0XHQ8cC50ZXh0PiBcIklwc3VtIG1hZ25hIHV0IHVsbGFtY28gY29tbW9kbyBvY2NhZWNhdCBlbmltIG5vbiByZXByZWhlbmRlcml0IGNpbGx1bS4gVmVsaXQgc2l0IGNvbnNlcXVhdCBjdXBpZGF0YXQgbmlzaSBleGNlcHRldXIgcXVpIGFkIG51bGxhIGV4Y2VwdGV1ci4gSWQgY2lsbHVtIGFkIGVuaW0gcGFyaWF0dXIgZXQgc2ludCBtb2xsaXQgZXhjZXB0ZXVyLiBTaW50IGV4ZXJjaXRhdGlvbiBudWxsYSBzdW50IGV4IHZlbGl0IGNvbW1vZG8gaWQgbWluaW0gdGVtcG9yIGVuaW0gYWxpcXVhIGVhLlwiXHJcblx0XHRcdFx0XHRcdDxkaXYuZ3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2LmNhcmQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2Lmljb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpLmZsYXRpY29uLTA1MC1yb2JvdC1hcm0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2LnRleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMz4gXCJDb21wcm9tZXRpbWVudG9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD4gXCJPY2NhZWNhdCBkdWlzIGRvbG9yZSBub24gYW5pbSB2ZW5pYW0gcmVwcmVoZW5kZXJpdCBjaWxsdW0gY29uc2VjdGV0dXIuXCJcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2LmNhcmQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2Lmljb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpLmZsYXRpY29uLTA1MC1yb2JvdC1hcm0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2LnRleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMz4gXCJJbm92YcOnw6NvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+IFwiT2NjYWVjYXQgZHVpcyBkb2xvcmUgbm9uIGFuaW0gdmVuaWFtIHJlcHJlaGVuZGVyaXQgY2lsbHVtIGNvbnNlY3RldHVyLlwiXHJcblx0XHRcdFx0XHRcdFx0PGRpdi5jYXJkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdi5pY29uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aS5mbGF0aWNvbi0wNTAtcm9ib3QtYXJtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdi50ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDM+IFwiU2VndXJhbsOnYVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPiBcIk9jY2FlY2F0IGR1aXMgZG9sb3JlIG5vbiBhbmltIHZlbmlhbSByZXByZWhlbmRlcml0IGNpbGx1bSBjb25zZWN0ZXR1ci5cIlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYuY2FyZD5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYuaWNvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkuZmxhdGljb24tMDUwLXJvYm90LWFybT5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYudGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzPiBcIsOJdGljYVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPiBcIk9jY2FlY2F0IGR1aXMgZG9sb3JlIG5vbiBhbmltIHZlbmlhbSByZXByZWhlbmRlcml0IGNpbGx1bSBjb25zZWN0ZXR1ci5cIlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYuY2FyZD5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYuaWNvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkuZmxhdGljb24tMDUwLXJvYm90LWFybT5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYudGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzPiBcIlByb2Zpc3Npb25hbGlzbW9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD4gXCJPY2NhZWNhdCBkdWlzIGRvbG9yZSBub24gYW5pbSB2ZW5pYW0gcmVwcmVoZW5kZXJpdCBjaWxsdW0gY29uc2VjdGV0dXIuXCJcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2LmNhcmQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2Lmljb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpLmZsYXRpY29uLTA1MC1yb2JvdC1hcm0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2LnRleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMz4gXCJUcmFiYWxobyBlbSBFcXVpcGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD4gXCJPY2NhZWNhdCBkdWlzIGRvbG9yZSBub24gYW5pbSB2ZW5pYW0gcmVwcmVoZW5kZXJpdCBjaWxsdW0gY29uc2VjdGV0dXIuXCJcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0PGRpdi5pbWdbYmdpOiB1cmwoXCJpbWdzL3NlY3Rpb241LmpwZ1wiKV0+XHJcblx0XHRcdFxyXG5cdGNzc1xyXG5cdFx0LnNlY3Rpb25cclxuXHRcdFx0ZDogZmxleFxyXG5cdFx0XHRcclxuXHRcdFx0LndyYXBwZXJcclxuXHRcdFx0XHRwOiAzcmVtIDEuNXJlbVxyXG5cclxuXHRcdFx0XHRoMSwgaDNcclxuXHRcdFx0XHRcdGM6IGJsYWNrLzgwXHJcblxyXG5cdFx0XHRcdHBcclxuXHRcdFx0XHRcdGM6ICRncmV5XHJcblxyXG5cdFx0XHRcdC5ncmlkXHJcblx0XHRcdFx0XHRtdDogNHJlbVxyXG5cdFx0XHRcdFx0ZDogZ3JpZFxyXG5cdFx0XHRcdFx0Z3JpZC1nYXA6IDJyZW1cclxuXHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgbWlubWF4KDAsIDFmcilcclxuXHJcblx0XHRcdFx0XHQuY2FyZFxyXG5cdFx0XHRcdFx0XHRkOiBmbGV4XHJcblxyXG5cdFx0XHRcdFx0Lmljb25cdFxyXG5cdFx0XHRcdFx0XHRtdDogLjVyZW1cclxuXHRcdFx0XHRcdFx0c2l6ZTogODBweFxyXG5cdFx0XHRcdFx0XHRjOiB3aGl0ZVxyXG5cdFx0XHRcdFx0XHRicjogZnVsbFxyXG5cdFx0XHRcdFx0XHRiZzogJG9yYW5nZVxyXG5cdFx0XHRcdFx0XHRkOiBmbGV4IGFpOiBjZW50ZXJcclxuXHRcdFx0XHRcdFx0dGE6IGNlbnRlclxyXG5cclxuXHRcdFx0XHRcdFx0aVxyXG5cdFx0XHRcdFx0XHRcdHc6IDEwMCVcclxuXHJcblx0XHRcdFx0XHRcdFx0QGJlZm9yZVxyXG5cdFx0XHRcdFx0XHRcdFx0ZnM6IDEuODc1cmVtXHJcblx0XHRcdFx0XHRcdFx0XHRsaDogMS44NzVyZW1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQudGV4dFxyXG5cdFx0XHRcdFx0XHR3aWR0aDogY2FsYygxMDAlIC0gODBweClcclxuXHRcdFx0XHRcdFx0cGw6IDFyZW1cclxuXHJcblx0XHRcdFx0XHRcdGgzXHJcblx0XHRcdFx0XHRcdFx0ZnM6IDEuMjVyZW1cclxuXHJcblx0XHRcdC5pbWdcclxuXHRcdFx0XHR3aWR0aDogMTAwJVxyXG5cdFx0XHRcdGJnczogY292ZXJcclxuXHRcdFx0XHRiZ3A6IGNlbnRlclxyXG5cclxuXHRcdFx0XHJcblx0XHRcdCJdfQ==