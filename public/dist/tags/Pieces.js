import '../../web_modules/imba/dist/imba.js';
var $b = Symbol(), $d = Symbol(), $e = Symbol(), $f = Symbol();

import PiecesHeader from './components/PiecesHeader.js';
import Products from './components/Products.js';

export default class Pieces extends imba.tags.get('component','ImbaElement') {
	
	render(){
		var $1t, $1b, $1d, $0 = this._ns_ || '', $2t, $2b, $2d, $3t, $4t;
		
		$1t=this;
		$1t.open$();
		($1b=$1d=1,$1t[$b] === 1) || ($1b=$1d=0,$1t[$b]=1);
		($2b=$2d=1,$2t=$1t[$d]) || ($2b=$2d=0,$1t[$d]=$2t=imba.createComponent(PiecesHeader,$1t,`${$0}`,null));
		$2b || !$2t.setup || $2t.setup($2d);
		$2t.end$($2d);
		$2b || $2t.insertInto$($1t);
		($2b=$2d=1,$2t=$1t[$e]) || ($2b=$2d=0,$1t[$e]=$2t=imba.createComponent(Products,$1t,`${$0}`,null));
		$2b || !$2t.setup || $2t.setup($2d);
		$2t.end$($2d);
		$2b || $2t.insertInto$($1t);
		$1b || ($2t=imba.createElement('div',$1t,`btn-wrapper ${$0}`,null));
		($3t = $1t[$f]) || ($1t[$f]=$3t=imba.createElement('button',$2t,`btn ${$0}`,null));
		$1b || $3t.insert$("Carregar mais");
		$1b || ($4t=imba.createElement('i',$3t,`fa fa-angle-double-right ${$0}`,null));
		$1t.close$($1d);
		return $1t;
	}
	
}; imba.tags.define('pieces-ydhq1x',Pieces,{ns: 'ydhq1xc'});

imba.inlineStyles("\n.ydhq1xc_ .btn-wrapper.ydhq1xc:not(#_) {display: flex;\njustify-content: center;\nmargin-bottom: 7rem;}\n.ydhq1xc_ .btn-wrapper .btn.ydhq1xc:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);\nbackground: var(--orange);\nbr: full;\npadding: 1rem 1.5rem;\nborder: 1px solid var(--orange);\ncursor: pointer;\ntransition: none .35s;\ntransition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;\noutline: none;\nuser-select: none;\ndisplay: flex;\nalign-items: center;}\n.ydhq1xc_ .btn-wrapper .btn.ydhq1xc:not(#_):hover {color: var(--orange);}\n.ydhq1xc_ .btn-wrapper .btn.ydhq1xc:not(#_):hover {background: hsla(0.00,0.00%,100.00%,0%);}\n.ydhq1xc_ .btn-wrapper .btn i.ydhq1xc:not(#_) {--t_x:0;--t_y:0;--t_z:0;--t_rotate:0;--t_scale:1;--t_scale-x:1;--t_scale-y:1;--t_skew-x:0;--t_skew-y:0;\ntransform: translate3d(var(--t_x),var(--t_y),var(--t_z)) rotate(var(--t_rotate)) skewX(var(--t_skew-x)) skewY(var(--t_skew-y)) scaleX(var(--t_scale-x)) scaleY(var(--t_scale-y)) scale(var(--t_scale));\nmargin-left: 1rem;\nfont-size: 1.75rem;\n--t_rotate: 90deg !important;}\n\n",'ydhq1x');
/*

.ydhq1xc_ .btn-wrapper.ydhq1xc:not(#_) {display: flex;
justify-content: center;
margin-bottom: 7rem;}
.ydhq1xc_ .btn-wrapper .btn.ydhq1xc:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);
background: var(--orange);
br: full;
padding: 1rem 1.5rem;
border: 1px solid var(--orange);
cursor: pointer;
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
outline: none;
user-select: none;
display: flex;
align-items: center;}
.ydhq1xc_ .btn-wrapper .btn.ydhq1xc:not(#_):hover {color: var(--orange);}
.ydhq1xc_ .btn-wrapper .btn.ydhq1xc:not(#_):hover {background: hsla(0.00,0.00%,100.00%,0%);}
.ydhq1xc_ .btn-wrapper .btn i.ydhq1xc:not(#_) {--t_x:0;--t_y:0;--t_z:0;--t_rotate:0;--t_scale:1;--t_scale-x:1;--t_scale-y:1;--t_skew-x:0;--t_skew-y:0;
transform: translate3d(var(--t_x),var(--t_y),var(--t_z)) rotate(var(--t_rotate)) skewX(var(--t_skew-x)) skewY(var(--t_skew-y)) scaleX(var(--t_scale-x)) scaleY(var(--t_scale-y)) scale(var(--t_scale));
margin-left: 1rem;
font-size: 1.75rem;
--t_rotate: 90deg !important;}


*/

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBpZWNlcy5pbWJhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQU0sQ0FBQyxZQUFZLE1BQU0sMkJBQTJCO0FBQUMsTUFDaEQsQ0FBQyxRQUFRLE1BQU0sdUJBQXVCOztBQUFFLE1BRTFDLENBQUMsT0FBTyxDQUFDLEtBQUcsQ0FBQyxNQUFNOztDQUNyQixNQUFNOzs7Ozs7b0RBQ0MsbURBQ0U7Ozs7b0RBQU8sK0NBQ1o7Ozs7Y0FDTCxzREFBRztrQ0FDYyxpREFDaEI7cUJBQU0sZUFBZTtjQUFPLGlFQUFDOzs7RUFDUjs7QUFxQm5CO0FBQUMiLCJmaWxlIjoiUGllY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBpZWNlc0hlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvUGllY2VzSGVhZGVyJ1xyXG5pbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi9jb21wb25lbnRzL1Byb2R1Y3RzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFnIFBpZWNlc1xyXG5cdGRlZiByZW5kZXJcclxuXHRcdDxzZWxmPlxyXG5cdFx0XHQ8UGllY2VzSGVhZGVyPiBcclxuXHRcdFx0PFByb2R1Y3RzPlxyXG5cdFx0XHRcclxuXHRcdFx0PGRpdi5idG4td3JhcHBlcj5cclxuXHRcdFx0XHQ8YnV0dG9uLmJ0bj4gXCJDYXJyZWdhciBtYWlzXCJcclxuXHRcdFx0XHRcdDxpLmZhLmZhLWFuZ2xlLWRvdWJsZS1yaWdodD5cclxuXHJcblx0Y3NzXHJcblx0XHQuYnRuLXdyYXBwZXJcclxuXHRcdFx0ZDogZmxleCBqYzpjZW50ZXJcclxuXHRcdFx0bWI6IDdyZW1cclxuXHJcblx0XHRcdC5idG5cclxuXHRcdFx0XHRjOiB3aGl0ZSBAaG92ZXI6ICRvcmFuZ2VcclxuXHRcdFx0XHRiZzogJG9yYW5nZSBAaG92ZXI6IHRyYW5zcGFyZW50XHJcblx0XHRcdFx0YnI6IGZ1bGxcclxuXHRcdFx0XHRwOiAxcmVtIDEuNXJlbVxyXG5cdFx0XHRcdGJkOiAxcHggc29saWQgJG9yYW5nZVxyXG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlclx0XHRcclxuXHRcdFx0XHR0d2VlbjogLjM1c1x0XHJcblx0XHRcdFx0b3V0bGluZTogbm9uZVxyXG5cdFx0XHRcdHVzOiBub25lXHJcblx0XHRcdFx0ZDogZmxleCBhaTogY2VudGVyXHJcblxyXG5cdFx0XHRcdGlcclxuXHRcdFx0XHRcdG1sOiAxcmVtXHJcblx0XHRcdFx0XHRmczogMS43NXJlbVxyXG5cdFx0XHRcdFx0cm90YXRlOiA5MGRlZyJdfQ==