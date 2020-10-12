import '../../web_modules/imba/dist/imba.js';
var $b = Symbol(), $c = Symbol();

import ProductsHeader from './components/ProductsHeader.js';

export default class Products extends imba.tags.get('component','ImbaElement') {
	
	render(){
		var $1t, $1b, $1d, $0 = this._ns_ || '', $2t, $2b, $2d;
		
		$1t=this;
		$1t.open$();
		($1b=$1d=1,$1t[$b] === 1) || ($1b=$1d=0,$1t[$b]=1);
		($2b=$2d=1,$2t=$1t[$c]) || ($2b=$2d=0,$1t[$c]=$2t=imba.createComponent(ProductsHeader,$1t,`${$0}`,null));
		$2b || !$2t.setup || $2t.setup($2d);
		$2t.end$($2d);
		$2b || $2t.insertInto$($1t);
		$1t.close$($1d);
		return $1t;
	}
}; imba.tags.define('products-rc4mhj',Products,{});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2R1Y3RzLmltYmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBTSxDQUFDLGNBQWMsTUFBTSw2QkFBNkI7O0FBQ3hELE1BQ0ksQ0FBQyxPQUFPLENBQUMsS0FBRyxDQUFDLFFBQVE7O0NBQ3ZCLE1BQU07Ozs7OztvREFDQyxxREFDSTs7Ozs7O0VBQUM7QUFBQSIsImZpbGUiOiJQcm9kdWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0c0hlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvUHJvZHVjdHNIZWFkZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YWcgUHJvZHVjdHNcclxuXHRkZWYgcmVuZGVyXHJcblx0XHQ8c2VsZj5cclxuXHRcdFx0PFByb2R1Y3RzSGVhZGVyPiAiXX0=