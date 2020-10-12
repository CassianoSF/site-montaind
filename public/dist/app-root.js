import '../web_modules/imba/dist/imba.js';
var $b = Symbol(), $f = Symbol(), $gi = Symbol(), $g = Symbol(), $c = Symbol(), $h = Symbol(), $i = Symbol(), $j = Symbol(), $k = Symbol(), $l = Symbol(), $m = Symbol(), $n = Symbol(), $o = Symbol(), $p = Symbol(), $q = Symbol(), $1t, $1b, $1d;



import './style.js';

import '../web_modules/imba/dist/imba-router.js';

import Navbar from './tags/components/Navbar.js';
import Home from './tags/Home.js';
import Pieces from './tags/Pieces.js';
import Products from './tags/Products.js';
import Admin from './tags/Admin.js';
import Footer from './tags/components/Footer.js';

class Crud extends imba.tags.get('component','ImbaElement') {
	
	render(){
		var $1t, $1b, $1d, $2t, $2v;
		
		$1t=this;
		$1t.open$();
		($1b=$1d=1,$1t[$b] === 1) || ($1b=$1d=0,$1t[$b]=1);
		($2t = $1t[$f]) || ($1t[$f]=$2t=imba.createElement('h1',$1t,null,null));
		($2v=this.router.path,($2v===$1t[$g]&&$1b) || ($1t[$gi] = $2t.insert$($1t[$g]=$2v,384,$1t[$gi])));
		$1t.close$($1d);
		return $1t;
	}
}; imba.tags.define('crud-yuxr2e',Crud,{});

class App extends imba.tags.get('component','ImbaElement') {
	
	mount(){
		
		console.log(this.router);
		if (this.router.path == "/") {
			
			return this.router.go('/#/site/home');
		};
	}
	render(){
		var $1t, $1b, $1d, $2t, $2b, $2d, $3t, $3b, $3d, $4t, $4b, $4d;
		
		$1t=this;
		$1t.open$();
		($1b=$1d=1,$1t[$c] === 1) || ($1b=$1d=0,$1t[$c]=1);
		($2b=$2d=1,$2t=$1t[$h]) || ($2b=$2d=0,$1t[$h]=$2t=imba.createElement('div',$1t,null,null));
		$2b || ($2t.route="/#/admin");
		($3b=$3d=1,$3t=$1t[$i]) || ($3b=$3d=0,$1t[$i]=$3t=imba.createComponent(Admin,$2t,null,null));
		$3b || ($3t.route="login");
		$3b || !$3t.setup || $3t.setup($3d);
		$3t.end$($3d);
		$3b || $3t.insertInto$($2t);
		($3b=$3d=1,$3t=$1t[$j]) || ($3b=$3d=0,$1t[$j]=$3t=imba.createComponent(Crud,$2t,null,null));
		$3b || ($3t.route="pecas");
		$3b || !$3t.setup || $3t.setup($3d);
		$3t.end$($3d);
		$3b || $3t.insertInto$($2t);
		($3b=$3d=1,$3t=$1t[$k]) || ($3b=$3d=0,$1t[$k]=$3t=imba.createComponent(Crud,$2t,null,null));
		$3b || ($3t.route="produtos");
		$3b || !$3t.setup || $3t.setup($3d);
		$3t.end$($3d);
		$3b || $3t.insertInto$($2t);
		$2b || !$2t.setup || $2t.setup($2d);
		$2t.end$($2d);
		($2b=$2d=1,$2t=$1t[$l]) || ($2b=$2d=0,$1t[$l]=$2t=imba.createElement('div',$1t,null,null));
		$2b || ($2t.route="/#/site");
		($3b=$3d=1,$3t=$1t[$m]) || ($3b=$3d=0,$1t[$m]=$3t=imba.createComponent(Navbar,$2t,null,null));
		$3b || !$3t.setup || $3t.setup($3d);
		$3t.end$($3d);
		$3b || $3t.insertInto$($2t);
		$2b || ($3t=imba.createElement('main',$2t,'yuxr2ede',null));
		($4b=$4d=1,$4t=$1t[$n]) || ($4b=$4d=0,$1t[$n]=$4t=imba.createComponent(Home,$3t,null,null));
		$4b || ($4t.route="home");
		$4b || !$4t.setup || $4t.setup($4d);
		$4t.end$($4d);
		$4b || $4t.insertInto$($3t);
		($4b=$4d=1,$4t=$1t[$o]) || ($4b=$4d=0,$1t[$o]=$4t=imba.createComponent(Pieces,$3t,null,null));
		$4b || ($4t.route="pecas");
		$4b || !$4t.setup || $4t.setup($4d);
		$4t.end$($4d);
		$4b || $4t.insertInto$($3t);
		($4b=$4d=1,$4t=$1t[$p]) || ($4b=$4d=0,$1t[$p]=$4t=imba.createComponent(Products,$3t,null,null));
		$4b || ($4t.route="produtos");
		$4b || !$4t.setup || $4t.setup($4d);
		$4t.end$($4d);
		$4b || $4t.insertInto$($3t);
		($3b=$3d=1,$3t=$1t[$q]) || ($3b=$3d=0,$1t[$q]=$3t=imba.createComponent(Footer,$2t,null,null));
		$3b || !$3t.setup || $3t.setup($3d);
		$3t.end$($3d);
		$3b || $3t.insertInto$($2t);
		$2b || !$2t.setup || $2t.setup($2d);
		$2t.end$($2d);
		$1t.close$($1d);
		return $1t;
	}
}; imba.tags.define('app-yuxr2e',App,{});

imba.mount((($1t=imba.createComponent(App,null,null,null)),
$1b || !$1t.setup || $1t.setup($1d),
$1t.end$($1d),
$1t));


imba.inlineStyles(".yuxr2ede:not(#_):not(#_) {margin-top: 4rem;\nposition: relative;}\n\n",'yuxr2e');
/*
.yuxr2ede:not(#_):not(#_) {margin-top: 4rem;
position: relative;}


*/

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1yb290LmltYmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxNQUFNLENBQUMsU0FBUzs7QUFDaEIsTUFDSSxDQUFDLHVCQUF1Qjs7QUFBRSxNQUU1QixDQUFDLE1BQU0sTUFBTSwwQkFBMEI7QUFBQyxNQUN6QyxDQUFDLElBQUksTUFBTSxhQUFhO0FBQUMsTUFDMUIsQ0FBQyxNQUFNLE1BQU0sZUFBZTtBQUFDLE1BQU0sQ0FDbkMsUUFBUSxNQUFNLGlCQUFpQjtBQUFDLE1BQU0sQ0FBQyxLQUNuQyxNQUFNLGNBQWM7QUFBQyxNQUFNLENBQUMsTUFDNUIsTUFBTSwwQkFBMEI7O0FBQUUsS0FBRyxDQUFDLElBQUk7O0NBRTNDLE1BQU07Ozs7OztrQ0FFVCxzQ0FBRTtPQUFNLFdBQ0osQ0FBQyxJQUNMOzs7RUFBQTtBQUFBOztBQUFFLEtBQUcsQ0FBQyxHQUFHOztDQUFNLEtBRWQ7O0VBQUcsT0FDRixDQUFDLEdBQUcsQ0FBQyxXQUNOLENBQUM7RUFBRyxFQUFFLEVBQUMsV0FBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQ3RCLEdBQUc7O0dBQUksa0JBQU0sQ0FBQyxFQUFFLENBQUMsY0FDWCxDQUFDO0dBQUE7RUFBQTtDQUFNLE1BQU07Ozs7OztvREFDaEIsdUNBQUc7Y0FBQyxLQUFLLENBQ1osVUFDQTtvREFBTyx5Q0FBSztjQUFDLEtBQUssQ0FBQyxPQUFPOzs7O29EQUNwQix3Q0FBSTtjQUFDLEtBQUssQ0FBQyxPQUFPOzs7O29EQUNwQix3Q0FBSTtjQUFDLEtBQUssQ0FBQyxVQUFVOzs7Ozs7b0RBQ3BCLHVDQUFHO2NBQUMsS0FBSyxDQUFDLFNBQVM7b0RBQ3RCLDBDQUFNOzs7O2NBQU8sOENBQUk7b0RBRVIsd0NBQUk7Y0FBQyxLQUFLLENBQUMsTUFBTTs7OztvREFDNUIsMENBQU07Y0FBQyxLQUFLLENBQUMsT0FBTzs7OztvREFDbEIsNENBQVE7Y0FBQyxLQUFLLENBQUMsVUFBVTs7OztvREFDcEIsMENBQU07Ozs7Ozs7O0VBQUM7QUFBQTs7QUFBRSxJQUFJLENBQUMsS0FBSyxPQUFFLHdDQUFHOzs7OztBQUFHIiwiZmlsZSI6ImFwcC1yb290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCAnLi9zdHlsZSdcclxuXHJcbmltcG9ydCAnaW1iYS9kaXN0L2ltYmEtcm91dGVyJ1xyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL3RhZ3MvY29tcG9uZW50cy9OYXZiYXInXHJcbmltcG9ydCBIb21lIGZyb20gJy4vdGFncy9Ib21lJ1xyXG5pbXBvcnQgUGllY2VzIGZyb20gJy4vdGFncy9QaWVjZXMnXHJcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuL3RhZ3MvUHJvZHVjdHMnXHJcbmltcG9ydCBBZG1pbiBmcm9tICcuL3RhZ3MvQWRtaW4nXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi90YWdzL2NvbXBvbmVudHMvRm9vdGVyJ1xyXG5cclxudGFnIENydWRcclxuXHRkZWYgcmVuZGVyXHJcblx0XHQ8c2VsZj5cclxuXHRcdFx0PGgxPlxyXG5cdFx0XHRcdHJvdXRlci5wYXRoXHJcblxyXG50YWcgQXBwXHJcblx0ZGVmIG1vdW50XHJcblx0XHRjb25zb2xlLmxvZyhyb3V0ZXIpXHJcblx0XHRpZiByb3V0ZXIucGF0aCA9PSBcIi9cIlxyXG5cdFx0XHRyb3V0ZXIuZ28oJy8jL3NpdGUvaG9tZScpXHJcblx0ZGVmIHJlbmRlclxyXG5cdFx0PHNlbGY+XHJcblx0XHRcdDxkaXYgcm91dGU9XCIvIy9hZG1pblwiPlxyXG5cdFx0XHRcdDxBZG1pbiByb3V0ZT1cImxvZ2luXCI+XHJcblx0XHRcdFx0PENydWQgcm91dGU9XCJwZWNhc1wiPlxyXG5cdFx0XHRcdDxDcnVkIHJvdXRlPVwicHJvZHV0b3NcIj5cclxuXHRcdFx0PGRpdiByb3V0ZT1cIi8jL3NpdGVcIj5cclxuXHRcdFx0XHQ8TmF2YmFyPlxyXG5cdFx0XHRcdDxtYWluW210OiA0cmVtIHBvczogcmVsYXRpdmVdPlxyXG5cdFx0XHRcdFx0PEhvbWUgcm91dGU9XCJob21lXCI+XHJcblx0XHRcdFx0XHQ8UGllY2VzIHJvdXRlPVwicGVjYXNcIj5cclxuXHRcdFx0XHRcdDxQcm9kdWN0cyByb3V0ZT1cInByb2R1dG9zXCI+XHRcdFxyXG5cdFx0XHRcdDxGb290ZXI+XHJcblxyXG5pbWJhLm1vdW50IDxBcHA+XHJcblxyXG4iXX0=