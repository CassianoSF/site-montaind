import '../../../web_modules/imba/dist/imba.js';
var $b = Symbol(), $d = Symbol(), $f = Symbol(), $g = Symbol(), $i = Symbol(), $j = Symbol();

import Card from './Card.js';
import FadeInUp from './FadeInUp.js';

export default class Components extends imba.tags.get('component','ImbaElement') {
	
	render(){
		var $1t, $1b, $1d, $0 = this._ns_ || '', $2t, $2b, $2d, $eSt, $3t, $4t, $3k, $3c, $4b, $4d, $hSt, $4v, $5t, $5b, $5d;
		
		$1t=this;
		$1t.open$();
		($1b=$1d=1,$1t[$b] === 1) || ($1b=$1d=0,$1t[$b]=1);
		($2b=$2d=1,$2t=$1t[$d]) || ($2b=$2d=0,$1t[$d]=$2t=imba.createComponent(FadeInUp,$1t,`${$0}`,null));
		$eSt = $2t.slot$('__',$1t);
		$2b || ($3t=imba.createElement('div',$eSt,`container ${$0}`,null));
		$2b || ($4t=imba.createElement('h1',$3t,`${$0}`,"Nossas Peças"));
		$2b || ($4t=imba.createElement('p',$3t,`${$0}`,"Magna cupidatat consequat qui amet reprehenderit mollit eu anim aute tempor amet proident. Est veniam aute ad ut enim est proident dolor."));
		$2b || !$2t.setup || $2t.setup($2d);
		$2t.end$($2d);
		$2b || $2t.insertInto$($1t);
		($2t = $1t[$f]) || ($1t[$f]=$2t=imba.createElement('div',$1t,`grid ${$0}`,null));
		($3t = $1t[$g]) || ($1t[$g]=$3t=imba.createIndexedFragment(384,$2t));
		$3k = 0;
		$3c=$3t.$;
		for (let i = 0; i < 4; i++) {
			
			($4b=$4d=1,$4t=$3c[$3k]) || ($4b=$4d=0,$3c[$3k]=$4t=imba.createComponent(FadeInUp,$3t,`${$0}`,null));
			$4b||($4t.up$=$3t);
			$hSt = $4t.slot$('__',$4t);
			($4v=i / 10,$4v===$4t[$i] || ($4t.delay=$4t[$i]=$4v));
			($5b=$5d=1,$5t=$4t[$j]) || ($5b=$5d=0,$4t[$j]=$5t=imba.createComponent(Card,$hSt,`${$0}`,null));
			$5b || !$5t.setup || $5t.setup($5d);
			$5t.end$($5d);
			$5b || $5t.insertInto$($hSt);
			$4b || !$4t.setup || $4t.setup($4d);
			$4t.end$($4d);
			$3k++;
		};$3t.end$($3k);
		$1t.close$($1d);
		return $1t;
	}
	
}; imba.tags.define('components-w6cnej',Components,{ns: 'w6cnejc'});


imba.inlineStyles("\n.w6cnejc_ .container.w6cnejc:not(#_) {padding-top: 7rem;\ntext-align: center;\npadding-left: 20%;\npadding-right: 20%;\nbackground: #fafafa;}\n.w6cnejc_ .container h1.w6cnejc:not(#_) {color: hsla(0.00,0.00%,0.00%,80%);}\n.w6cnejc_ .container p.w6cnejc:not(#_) {color: var(--grey);}\n.w6cnejc_ .grid.w6cnejc:not(#_) {margin-bottom: 7rem;\ndisplay: grid;\ngrid-template-columns: repeat(4, 1fr);}\n\n",'w6cnej');
/*

.w6cnejc_ .container.w6cnejc:not(#_) {padding-top: 7rem;
text-align: center;
padding-left: 20%;
padding-right: 20%;
background: #fafafa;}
.w6cnejc_ .container h1.w6cnejc:not(#_) {color: hsla(0.00,0.00%,0.00%,80%);}
.w6cnejc_ .container p.w6cnejc:not(#_) {color: var(--grey);}
.w6cnejc_ .grid.w6cnejc:not(#_) {margin-bottom: 7rem;
display: grid;
grid-template-columns: repeat(4, 1fr);}


*/

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMuaW1iYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLENBQUMsSUFBSSxNQUFNLFFBQVE7QUFBQyxNQUNyQixDQUFDLFFBQVEsTUFBTSxZQUFZOztBQUFFLE1BRS9CLENBQUMsT0FBTyxDQUFDLEtBQUcsQ0FBQyxVQUFVOztDQUN6QixNQUFNOzs7Ozs7b0RBQ0MsK0NBQ0Y7O2NBQU8scURBQ1o7Y0FBa0Isb0NBQ2pCLGNBQWMsQ0FBaEI7Y0FBdUIsbUNBQ3ZCLDJJQUEySSxDQURuSDs7OztrQ0FDd0gsK0NBQUc7Ozs7RUFDM0ksR0FBRyxVQUNSLENBQUMsTUFBSyxDQUFDLE9BQUU7O3VEQUFPLCtDQUNqQjs7O1FBQU8sQ0FBQyxFQUFDLEdBQUUsdUJBQVYsS0FBSyxDQUFDO3FEQUFjLDRDQUFJOzs7Ozs7O0dBQUM7OztFQUFBOztBQW1CbkI7O0FBQUUiLCJmaWxlIjoiQ29tcG9uZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCdcclxuaW1wb3J0IEZhZGVJblVwIGZyb20gJy4vRmFkZUluVXAnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YWcgQ29tcG9uZW50c1xyXG5cdGRlZiByZW5kZXJcclxuXHRcdDxzZWxmPlxyXG5cdFx0XHQ8RmFkZUluVXA+XHJcblx0XHRcdFx0PGRpdi5jb250YWluZXI+XHJcblx0XHRcdFx0XHQ8aDE+IFwiTm9zc2FzIFBlw6dhc1wiXHJcblx0XHRcdFx0XHQ8cD4gXCJNYWduYSBjdXBpZGF0YXQgY29uc2VxdWF0IHF1aSBhbWV0IHJlcHJlaGVuZGVyaXQgbW9sbGl0IGV1IGFuaW0gYXV0ZSB0ZW1wb3IgYW1ldCBwcm9pZGVudC4gRXN0IHZlbmlhbSBhdXRlIGFkIHV0IGVuaW0gZXN0IHByb2lkZW50IGRvbG9yLlwiXHJcblx0XHRcdDxkaXYuZ3JpZD5cclxuXHRcdFx0XHRmb3IgaSBpbiBbMCAuLi4gNF0gXHJcblx0XHRcdFx0XHQ8RmFkZUluVXAgZGVsYXk9aS8xMCA+XHJcblx0XHRcdFx0XHRcdDxDYXJkPlxyXG5cclxuXHRjc3NcclxuXHRcdC5jb250YWluZXJcclxuXHRcdFx0cHQ6IDdyZW1cclxuXHRcdFx0dGE6IGNlbnRlclxyXG5cdFx0XHRweDogMjAlXHJcblx0XHRcdGJnOiAjZmFmYWZhXHJcblxyXG5cdFx0XHRoMVxyXG5cdFx0XHRcdGM6IGJsYWNrLzgwXHJcblxyXG5cdFx0XHRwIFxyXG5cdFx0XHRcdGM6ICRncmV5XHJcblxyXG5cdFx0LmdyaWRcclxuXHRcdFx0bWI6IDdyZW1cclxuXHRcdFx0ZDogZ3JpZFxyXG5cdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpXHJcblxyXG5cdFx0XHQiXX0=