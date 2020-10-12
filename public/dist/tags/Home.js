import '../../web_modules/imba/dist/imba.js';
var $b = Symbol(), $c = Symbol(), $d = Symbol(), $e = Symbol(), $f = Symbol(), $g = Symbol(), $h = Symbol();

import Slider from './components/Slider.js';
import Services from './components/Services.js';
import Section from './components/Section.js';
import Parallax from './components/Parallax.js';
import Products from './components/Products.js';
import Components from './components/Components.js';

export default class Home extends imba.tags.get('component','ImbaElement') {
	
	
	render(){
		var $1t, $1b, $1d, $0 = this._ns_ || '', $2t, $2b, $2d;
		
		$1t=this;
		$1t.open$();
		($1b=$1d=1,$1t[$b] === 1) || ($1b=$1d=0,$1t[$b]=1);
		($2b=$2d=1,$2t=$1t[$c]) || ($2b=$2d=0,$1t[$c]=$2t=imba.createComponent(Slider,$1t,`${$0}`,null));
		$2b || !$2t.setup || $2t.setup($2d);
		$2t.end$($2d);
		$2b || $2t.insertInto$($1t);
		($2b=$2d=1,$2t=$1t[$d]) || ($2b=$2d=0,$1t[$d]=$2t=imba.createComponent(Services,$1t,`${$0}`,null));
		$2b || !$2t.setup || $2t.setup($2d);
		$2t.end$($2d);
		$2b || $2t.insertInto$($1t);
		($2b=$2d=1,$2t=$1t[$e]) || ($2b=$2d=0,$1t[$e]=$2t=imba.createComponent(Section,$1t,`${$0}`,null));
		$2b || !$2t.setup || $2t.setup($2d);
		$2t.end$($2d);
		$2b || $2t.insertInto$($1t);
		($2b=$2d=1,$2t=$1t[$f]) || ($2b=$2d=0,$1t[$f]=$2t=imba.createComponent(Parallax,$1t,`${$0}`,null));
		$2b || !$2t.setup || $2t.setup($2d);
		$2t.end$($2d);
		$2b || $2t.insertInto$($1t);
		($2b=$2d=1,$2t=$1t[$g]) || ($2b=$2d=0,$1t[$g]=$2t=imba.createComponent(Products,$1t,`${$0}`,null));
		$2b || !$2t.setup || $2t.setup($2d);
		$2t.end$($2d);
		$2b || $2t.insertInto$($1t);
		($2b=$2d=1,$2t=$1t[$h]) || ($2b=$2d=0,$1t[$h]=$2t=imba.createComponent(Components,$1t,`${$0}`,null));
		$2b || !$2t.setup || $2t.setup($2d);
		$2t.end$($2d);
		$2b || $2t.insertInto$($1t);
		$1t.close$($1d);
		return $1t;
	}
}; imba.tags.define('home-p7c9gv',Home,{});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhvbWUuaW1iYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLENBQUMsTUFBTSxNQUFNLHFCQUFxQjtBQUFDLE1BQ3BDLENBQUMsUUFBUSxNQUFNLHVCQUF1QjtBQUFDLE1BQ3hDLENBQUMsT0FBTyxNQUFNLHNCQUFzQjtBQUFDLE1BQ3RDLENBQUMsUUFBUSxNQUFNLHVCQUF1QjtBQUFDLE1BQ3hDLENBQUMsUUFBUSxNQUFNLHVCQUF1QjtBQUFDLE1BQ3hDLENBQUMsVUFBVSxNQUFNLHlCQUF5Qjs7QUFBRSxNQUM1QyxDQUNELE9BQU8sQ0FBQyxLQUFHLENBQUMsSUFBSTs7O0NBQU8sTUFFckI7Ozs7OztvREFDQyw2Q0FBTTs7OztvREFDSiwrQ0FDTDs7OztvREFBTSw4Q0FBTzs7OztvREFDVCwrQ0FBUTs7OztvREFDUiwrQ0FBUTs7OztvREFDVCxpREFBVTs7Ozs7O0VBQUM7QUFBQSIsImZpbGUiOiJIb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tICcuL2NvbXBvbmVudHMvU2xpZGVyJ1xyXG5pbXBvcnQgU2VydmljZXMgZnJvbSAnLi9jb21wb25lbnRzL1NlcnZpY2VzJ1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvU2VjdGlvbidcclxuaW1wb3J0IFBhcmFsbGF4IGZyb20gJy4vY29tcG9uZW50cy9QYXJhbGxheCdcclxuaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4vY29tcG9uZW50cy9Qcm9kdWN0cydcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9jb21wb25lbnRzL0NvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YWcgSG9tZVxyXG5cclxuXHRkZWYgcmVuZGVyXHJcblx0XHQ8c2VsZj5cclxuXHRcdFx0PFNsaWRlcj5cclxuXHRcdFx0PFNlcnZpY2VzPlxyXG5cdFx0XHQ8U2VjdGlvbj5cclxuXHRcdFx0PFBhcmFsbGF4PlxyXG5cdFx0XHQ8UHJvZHVjdHM+XHJcblx0XHRcdDxDb21wb25lbnRzPiJdfQ==