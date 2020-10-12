import '../../../web_modules/imba/dist/imba.js';
var $b = Symbol(), $d = Symbol(), $f = Symbol(), $g = Symbol(), $i = Symbol(), $j = Symbol();

import Card from './Card.js';
import FadeInUp from './FadeInUp.js';

export default class Products extends imba.tags.get('component','ImbaElement') {
	
	render(){
		var $1t, $1b, $1d, $0 = this._ns_ || '', $2t, $2b, $2d, $eSt, $3t, $4t, $3k, $3c, $4b, $4d, $hSt, $4v, $5t, $5b, $5d;
		
		$1t=this;
		$1t.open$();
		($1b=$1d=1,$1t[$b] === 1) || ($1b=$1d=0,$1t[$b]=1);
		($2b=$2d=1,$2t=$1t[$d]) || ($2b=$2d=0,$1t[$d]=$2t=imba.createComponent(FadeInUp,$1t,`${$0}`,null));
		$eSt = $2t.slot$('__',$1t);
		$2b || ($3t=imba.createElement('div',$eSt,`container ${$0}`,null));
		$2b || ($4t=imba.createElement('h1',$3t,`${$0}`,"Nossos Produtos"));
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
	
}; imba.tags.define('products-mbpc94',Products,{ns: 'mbpc94c'});


imba.inlineStyles("\n.mbpc94c_ .container.mbpc94c:not(#_) {margin-top: 7rem;\ntext-align: center;\npadding-left: 20%;\npadding-right: 20%;}\n.mbpc94c_ .container h1.mbpc94c:not(#_) {color: hsla(0.00,0.00%,0.00%,80%);}\n.mbpc94c_ .container p.mbpc94c:not(#_) {color: var(--grey);}\n.mbpc94c_ .grid.mbpc94c:not(#_) {margin-bottom: 7rem;\ndisplay: grid;\ngrid-template-columns: repeat(4, 1fr);}\n\n",'mbpc94');
/*

.mbpc94c_ .container.mbpc94c:not(#_) {margin-top: 7rem;
text-align: center;
padding-left: 20%;
padding-right: 20%;}
.mbpc94c_ .container h1.mbpc94c:not(#_) {color: hsla(0.00,0.00%,0.00%,80%);}
.mbpc94c_ .container p.mbpc94c:not(#_) {color: var(--grey);}
.mbpc94c_ .grid.mbpc94c:not(#_) {margin-bottom: 7rem;
display: grid;
grid-template-columns: repeat(4, 1fr);}


*/

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2R1Y3RzLmltYmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBTSxDQUFDLElBQUksTUFBTSxRQUFRO0FBQUMsTUFDckIsQ0FBQyxRQUFRLE1BQU0sWUFBWTs7QUFBRSxNQUUvQixDQUFDLE9BQU8sQ0FBQyxLQUFHLENBQUMsUUFBUTs7Q0FDdkIsTUFBTTs7Ozs7O29EQUNDLCtDQUNGOztjQUFPLHFEQUNaO2NBQWtCLG9DQUNqQixpQkFBaUIsQ0FBbkI7Y0FBMEIsbUNBQzFCLDJJQUEySSxDQURoSDs7OztrQ0FDcUgsK0NBQUc7Ozs7RUFDM0ksR0FBRyxVQUNSLENBQUMsTUFBSyxDQUFDLE9BQUU7O3VEQUFPLCtDQUNqQjs7O1FBQU8sQ0FBQyxFQUFDLEdBQUUsdUJBQVYsS0FBSyxDQUFDO3FEQUFjLDRDQUFJOzs7Ozs7O0dBQUM7OztFQUFBOztBQWtCbEI7O0FBQUUiLCJmaWxlIjoiUHJvZHVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnXHJcbmltcG9ydCBGYWRlSW5VcCBmcm9tICcuL0ZhZGVJblVwJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFnIFByb2R1Y3RzXHJcblx0ZGVmIHJlbmRlclxyXG5cdFx0PHNlbGY+XHJcblx0XHRcdDxGYWRlSW5VcD5cclxuXHRcdFx0XHQ8ZGl2LmNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdDxoMT4gXCJOb3Nzb3MgUHJvZHV0b3NcIlxyXG5cdFx0XHRcdFx0PHA+IFwiTWFnbmEgY3VwaWRhdGF0IGNvbnNlcXVhdCBxdWkgYW1ldCByZXByZWhlbmRlcml0IG1vbGxpdCBldSBhbmltIGF1dGUgdGVtcG9yIGFtZXQgcHJvaWRlbnQuIEVzdCB2ZW5pYW0gYXV0ZSBhZCB1dCBlbmltIGVzdCBwcm9pZGVudCBkb2xvci5cIlxyXG5cdFx0XHQ8ZGl2LmdyaWQ+XHJcblx0XHRcdFx0Zm9yIGkgaW4gWzAgLi4uIDRdIFxyXG5cdFx0XHRcdFx0PEZhZGVJblVwIGRlbGF5PWkvMTAgPlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZD5cclxuXHJcblx0Y3NzXHJcblx0XHQuY29udGFpbmVyXHJcblx0XHRcdG10OiA3cmVtXHJcblx0XHRcdHRhOiBjZW50ZXJcclxuXHRcdFx0cHg6IDIwJVxyXG5cclxuXHRcdFx0aDFcclxuXHRcdFx0XHRjOiBibGFjay84MFxyXG5cclxuXHRcdFx0cCBcclxuXHRcdFx0XHRjOiAkZ3JleVxyXG5cclxuXHRcdC5ncmlkXHJcblx0XHRcdG1iOiA3cmVtXHJcblx0XHRcdGQ6IGdyaWRcclxuXHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKVxyXG5cclxuXHRcdFx0Il19