import '../../../web_modules/imba/dist/imba.js';
function iter$(a){ return a ? (a.toIterable ? a.toIterable() : a) : []; };
var $b = Symbol(), $d = Symbol(), $e = Symbol(), $f = Symbol(), $g = Symbol(), $h = Symbol(), $i = Symbol(), $j = Symbol(), $ki = Symbol(), $k = Symbol();

export default class Navbar extends imba.tags.get('component','ImbaElement') {
	init$(){
		super.init$();this.links = [
			{route: "home",
			name: "Home"},
			{route: "pecas",
			name: "Peças"},
			{route: "produtos",
			name: "Produtos"},
			{route: "orcamento",
			name: "Orçamento"}
		];
		
	}
	render(){
		var $1t, $1b, $1d, $0 = this._ns_ || '', $2t, $3t, $4t, $4b, $4d, $5t, $5k, $5c, $6t, $6b, $6d, $6v, $7t, $7b, $7d, $7v;
		
		$1t=this;
		$1t.open$();
		($1b=$1d=1,$1t[$b] === 1) || ($1b=$1d=0,$1t[$b]=1);
		$1b || ($2t=imba.createElement('div',$1t,`navbar ${$0}`,null));
		$1b || ($3t=imba.createElement('div',$2t,`container ${$0}`,null));
		($4b=$4d=1,$4t=$1t[$d]) || ($4b=$4d=0,$1t[$d]=$4t=imba.createElement('a',$3t,`brand ${$0}`,null));
		$4b || ($4t.routeTo="home");
		$4b || ($5t=imba.createElement('img',$4t,`${$0}`,null));
		$4b || ($5t.src="imgs/logo.png");
		$4b || !$4t.setup || $4t.setup($4d);
		$4t.end$($4d);
		($4t = $1t[$e]) || ($1t[$e]=$4t=imba.createElement('ul',$3t,`menu ${$0}`,null));
		($5t = $1t[$f]) || ($1t[$f]=$5t=imba.createIndexedFragment(384,$4t));
		$5k = 0;
		$5c=$5t.$;
		for (let $i = 0, $items = iter$(this.links), $len = $items.length; $i < $len; $i++) {
			let link = $items[$i];
			($6b=$6d=1,$6t=$5c[$5k]) || ($6b=$6d=0,$5c[$5k]=$6t=imba.createElement('li',$5t,`nav-item ${$0}`,null));
			$6b||($6t.up$=$5t);
			($6v=link.route,$6v===$6t[$g] || ($6t.routeTo=$6t[$g]=$6v));
			($7b=$7d=1,$7t=$6t[$h]) || ($7b=$7d=0,$6t[$h]=$7t=imba.createElement('a',$6t,`nav-link ${$0}`,null));
			($7v=(this.router.path.match(new RegExp(link.route))||undefined),$7v===$6t[$j]||($7d|=2,$6t[$j]=$7v));
			($7d&2 && $7t.flag$(`nav-link ${$0}`+' '+($6t[$j] ? `active` : '')));
			($7v=link.name,($7v===$6t[$k]&&$7b) || ($6t[$ki] = $7t.insert$($6t[$k]=$7v,384,$6t[$ki])));
			$6b || !$6t.setup || $6t.setup($6d);
			$6t.end$($6d);
			$5k++;
		};$5t.end$($5k);
		$1t.close$($1d);
		return $1t;
	}
	
}; imba.tags.define('navbar-bt0cjr',Navbar,{ns: 'bt0cjrc'});

imba.inlineStyles("\n.bt0cjrc_ .navbar.bt0cjrc:not(#_) {width: 100%;\nposition: fixed;\ntop: 0rem;\nz-index: 100;\nbackground: var(--indigo);}\n.bt0cjrc_ .navbar .container.bt0cjrc:not(#_) {height: 4rem;\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;}\n.bt0cjrc_ .navbar .container .brand.bt0cjrc:not(#_) {display: flex;}\n.bt0cjrc_ .navbar .container .brand img.bt0cjrc:not(#_) {height: 2rem;}\n.bt0cjrc_ .navbar .container .menu.bt0cjrc:not(#_) {display: flex;\nalign-items: center;}\n.bt0cjrc_ .navbar .container .menu .nav-item.bt0cjrc:not(#_) {cursor: pointer;\ncolor: hsla(0.00,0.00%,100.00%,100%);}\n.bt0cjrc_ .navbar .container .menu .nav-item.bt0cjrc:not(#_):hover {color: var(--orange);}\n.bt0cjrc_ .navbar .container .menu .nav-item .nav-link.bt0cjrc:not(#_) {margin-left: 1rem;\nmargin-right: 1rem;\npadding: 1rem;\ntransition: none .35s;\ntransition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;}\n.bt0cjrc_ .navbar .container .menu .nav-item .active.bt0cjrc:not(#_) {cursor: default;\ncolor: var(--orange);}\n\n",'bt0cjr');
/*

.bt0cjrc_ .navbar.bt0cjrc:not(#_) {width: 100%;
position: fixed;
top: 0rem;
z-index: 100;
background: var(--indigo);}
.bt0cjrc_ .navbar .container.bt0cjrc:not(#_) {height: 4rem;
display: flex;
justify-content: space-between;
align-items: center;}
.bt0cjrc_ .navbar .container .brand.bt0cjrc:not(#_) {display: flex;}
.bt0cjrc_ .navbar .container .brand img.bt0cjrc:not(#_) {height: 2rem;}
.bt0cjrc_ .navbar .container .menu.bt0cjrc:not(#_) {display: flex;
align-items: center;}
.bt0cjrc_ .navbar .container .menu .nav-item.bt0cjrc:not(#_) {cursor: pointer;
color: hsla(0.00,0.00%,100.00%,100%);}
.bt0cjrc_ .navbar .container .menu .nav-item.bt0cjrc:not(#_):hover {color: var(--orange);}
.bt0cjrc_ .navbar .container .menu .nav-item .nav-link.bt0cjrc:not(#_) {margin-left: 1rem;
margin-right: 1rem;
padding: 1rem;
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;}
.bt0cjrc_ .navbar .container .menu .nav-item .active.bt0cjrc:not(#_) {cursor: default;
color: var(--orange);}


*/

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdmJhci5pbWJhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUcsQ0FBQyxNQUFNO1FBQXpCO3FCQUVJLEtBQUssR0FBRztJQUFJLEtBQ1osRUFBRSxNQUFNO0dBQUcsSUFDYixFQUFFLE1BQU07SUFDUCxLQUNGLEVBQUUsT0FBTztHQUFHLElBQUksRUFDaEIsT0FBTztJQUNSLEtBQUssRUFDTCxVQUFVO0dBQUcsSUFBSSxFQUFFLFVBQ1g7SUFBUyxLQUNmLEVBQUUsV0FDSTtHQUFHLElBQUksRUFBRSxXQUNYOzs7RUFiTjtDQWFnQixNQUNmOzs7Ozs7Y0FFUSxpREFBRztjQUVULG9EQUFHO29EQUNDLDhDQUFDO2NBQU8sT0FDYixDQUFDLE1BQU07Y0FBUywwQ0FBRztjQUFDLEdBQUcsQ0FBQyxlQUNqQjs7O2tDQUFRLDhDQUFFOzs7O0VBQWEsR0FDOUIsNkJBQVMsVUFDWCwwQ0FBQztPQURFLElBQUk7dURBQ0csa0RBQUU7O1FBQ1AsSUFBSSxDQUFDLEtBQUssdUJBRE8sT0FDbEIsQ0FBQztxREFBcUIsaURBQUM7U0FDdkIsV0FBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQVEsR0FBRyxDQUFWLE1BQU0sQ0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7dURBRFAsUUFDcEM7UUFBOEMsSUFBSSxDQUFDLElBQUk7Ozs7R0FBQTs7O0VBQUE7O0FBNkJ6RDtBQUFDIiwiZmlsZSI6Ik5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHRhZyBOYXZiYXJcclxuXHJcblx0cHJvcCBsaW5rcyA9IFtcclxuXHRcdHJvdXRlOiBcImhvbWVcIlxyXG5cdFx0bmFtZTogXCJIb21lXCJcclxuXHRcdC0tLVxyXG5cdFx0cm91dGU6IFwicGVjYXNcIlxyXG5cdFx0bmFtZTogXCJQZcOnYXNcIlxyXG5cdFx0LS0tXHJcblx0XHRyb3V0ZTogXCJwcm9kdXRvc1wiXHJcblx0XHRuYW1lOiBcIlByb2R1dG9zXCJcclxuXHRcdC0tLVxyXG5cdFx0cm91dGU6IFwib3JjYW1lbnRvXCJcclxuXHRcdG5hbWU6IFwiT3LDp2FtZW50b1wiXHJcblx0XVxyXG5cclxuXHRkZWYgcmVuZGVyXHJcblx0XHQ8c2VsZj5cclxuXHRcdFx0PGRpdi5uYXZiYXI+XHJcblx0XHRcdFx0PGRpdi5jb250YWluZXI+XHJcblx0XHRcdFx0XHQ8YS5icmFuZCByb3V0ZS10bz1cImhvbWVcIj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCJpbWdzL2xvZ28ucG5nXCI+XHJcblx0XHRcdFx0XHQ8dWwubWVudT5cclxuXHRcdFx0XHRcdFx0Zm9yIGxpbmsgaW4gbGlua3MgXHJcblx0XHRcdFx0XHRcdFx0PGxpLm5hdi1pdGVtIHJvdXRlLXRvPWxpbmsucm91dGU+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YS5uYXYtbGluayAuYWN0aXZlPShyb3V0ZXIucGF0aC5tYXRjaChSZWdFeHAubmV3KGxpbmsucm91dGUpKSk+IGxpbmsubmFtZVxyXG5cclxuXHRjc3NcclxuXHRcdC5uYXZiYXJcclxuXHRcdFx0dzogMTAwJVxyXG5cdFx0XHRwb3M6IGZpeGVkIHQ6IDBcdHppOiAxMDBcclxuXHRcdFx0Ymc6ICRpbmRpZ29cclxuXHJcblx0XHRcdC5jb250YWluZXJcclxuXHRcdFx0XHRoOiA0cmVtXHJcblx0XHRcdFx0ZDogZmxleCBqYzogc3BhY2UtYmV0d2VlbiBhaTogY2VudGVyXHJcblxyXG5cdFx0XHRcdC5icmFuZFxyXG5cdFx0XHRcdFx0ZDogZmxleFxyXG5cclxuXHRcdFx0XHRcdGltZ1xyXG5cdFx0XHRcdFx0XHRoOiAycmVtXHJcblxyXG5cdFx0XHRcdC5tZW51XHJcblx0XHRcdFx0XHRkOiBmbGV4XHRhaTogY2VudGVyXHJcblxyXG5cdFx0XHRcdFx0Lm5hdi1pdGVtXHRcclxuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyXHJcblx0XHRcdFx0XHRcdGM6IHdoaXRlIEBob3ZlcjogJG9yYW5nZVxyXG5cclxuXHRcdFx0XHRcdFx0Lm5hdi1saW5rXHJcblx0XHRcdFx0XHRcdFx0bXg6IDFyZW0gcDogMXJlbVxyXG5cdFx0XHRcdFx0XHRcdHR3ZWVuOiAuMzVzXHJcblxyXG5cdFx0XHRcdFx0XHQuYWN0aXZlXHJcblx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBkZWZhdWx0XHJcblx0XHRcdFx0XHRcdFx0YzogJG9yYW5nZSJdfQ==