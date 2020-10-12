import '../../../web_modules/imba/dist/imba.js';
var $b = Symbol(), $d = Symbol(), $e = Symbol();

export default class ProductsHeader extends imba.tags.get('component','ImbaElement') {
	
	render(){
		var $1t, $1b, $1d, $0 = this._ns_ || '', $2t, $3t, $4t, $4b, $4d, $5t;
		
		$1t=this;
		$1t.open$();
		($1b=$1d=1,$1t[$b] === 1) || ($1b=$1d=0,$1t[$b]=1);
		$1b || ($2t=imba.createElement('div',$1t,`header ${$0}`,null));
		$1b || ($3t=imba.createElement('div',$2t,`filter ${$0}`,null));
		$1b || ($3t=imba.createElement('h1',$2t,`${$0}`,"Produtos"));
		$1b || ($3t=imba.createElement('p',$2t,`breadcrumbs ${$0}`,null));
		($4b=$4d=1,$4t=$1t[$d]) || ($4b=$4d=0,$1t[$d]=$4t=imba.createElement('a',$3t,`${$0}`,null));
		$4b || ($4t.routeTo="/home");
		$4b || $4t.insert$("HOME ");
		$4b || ($5t=imba.createElement('i',$4t,`fa fa-chevron-right ${$0}`,null));
		$4b || !$4t.setup || $4t.setup($4d);
		$4t.end$($4d);
		($4t = $1t[$e]) || ($1t[$e]=$4t=imba.createElement('a',$3t,`active ${$0}`,null));
		$1b || $4t.insert$("PRODUTOS ");
		$1b || ($5t=imba.createElement('i',$4t,`fa fa-chevron-right ${$0}`,null));
		$1t.close$($1d);
		return $1t;
	}
	
}; imba.tags.define('products-header-y50uq2',ProductsHeader,{ns: 'y50uq2c'});


imba.inlineStyles("\n.y50uq2c_ .header.y50uq2c:not(#_) {position: relative;\nbackground-image: url(\"imgs/home1.jpg\");\nbackground-size: cover;\nbackground-position: center;\nheight: 300px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction: column;\nuser-select: none;}\n.y50uq2c_ .header .filter.y50uq2c:not(#_) {position: absolute;\ntop: 0rem;\nright: 0rem;\nbottom: 0rem;\nleft: 0rem;\nbackground: linear-gradient(45deg, #0d1128 0%, #fd6100 100%);\nopacity: 0.5;\nz-index: 0;}\n.y50uq2c_ .header h1.y50uq2c:not(#_) {margin-bottom: .5rem;\nz-index: 1;\ncolor: hsla(0.00,0.00%,100.00%,100%);}\n.y50uq2c_ .header .breadcrumbs.y50uq2c:not(#_) {z-index: 1;}\n.y50uq2c_ .header .breadcrumbs a.y50uq2c:not(#_) {margin-right: .5rem;\nborder-bottom: 2px solid hsla(0.00,0.00%,100.00%,25%);\ntransition: none .35s;\ntransition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;\ncursor: pointer;\ncolor: hsla(0.00,0.00%,100.00%,100%);}\n.y50uq2c_ .header .breadcrumbs a.y50uq2c:not(#_):hover {border-bottom: 2px solid hsla(0.00,0.00%,100.00%,100%);}\n.y50uq2c_ .header .breadcrumbs a i.y50uq2c:not(#_) {font-size: .75rem;}\n.y50uq2c_ .header .breadcrumbs .active.y50uq2c:not(#_) {border-bottom: 2px solid hsla(0.00,0.00%,100.00%,25%);\ncursor: default;}\n.y50uq2c_ .header .breadcrumbs .active.y50uq2c:not(#_):hover {border-bottom: 2px solid hsla(0.00,0.00%,100.00%,25%);}\n\n",'y50uq2');
/*

.y50uq2c_ .header.y50uq2c:not(#_) {position: relative;
background-image: url("imgs/home1.jpg");
background-size: cover;
background-position: center;
height: 300px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
user-select: none;}
.y50uq2c_ .header .filter.y50uq2c:not(#_) {position: absolute;
top: 0rem;
right: 0rem;
bottom: 0rem;
left: 0rem;
background: linear-gradient(45deg, #0d1128 0%, #fd6100 100%);
opacity: 0.5;
z-index: 0;}
.y50uq2c_ .header h1.y50uq2c:not(#_) {margin-bottom: .5rem;
z-index: 1;
color: hsla(0.00,0.00%,100.00%,100%);}
.y50uq2c_ .header .breadcrumbs.y50uq2c:not(#_) {z-index: 1;}
.y50uq2c_ .header .breadcrumbs a.y50uq2c:not(#_) {margin-right: .5rem;
border-bottom: 2px solid hsla(0.00,0.00%,100.00%,25%);
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
cursor: pointer;
color: hsla(0.00,0.00%,100.00%,100%);}
.y50uq2c_ .header .breadcrumbs a.y50uq2c:not(#_):hover {border-bottom: 2px solid hsla(0.00,0.00%,100.00%,100%);}
.y50uq2c_ .header .breadcrumbs a i.y50uq2c:not(#_) {font-size: .75rem;}
.y50uq2c_ .header .breadcrumbs .active.y50uq2c:not(#_) {border-bottom: 2px solid hsla(0.00,0.00%,100.00%,25%);
cursor: default;}
.y50uq2c_ .header .breadcrumbs .active.y50uq2c:not(#_):hover {border-bottom: 2px solid hsla(0.00,0.00%,100.00%,25%);}


*/

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2R1Y3RzSGVhZGVyLmltYmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFHLENBQUMsY0FBYzs7Q0FDN0IsTUFBTTs7Ozs7O2NBRVQsaURBQUc7Y0FDSCxpREFBRztjQUNKLG9DQUFJLFVBQVUsQ0FBWjtjQUFrQixvREFDcEI7b0RBQW9CLHdDQUNwQjtjQUFDLE9BQVEsQ0FBQyxPQUFPO3FCQUFFLE9BQU87Y0FBUSw0REFDbEM7OztrQ0FBNEIsK0NBQUM7cUJBQ3RCLFdBQVc7Y0FBUSw0REFBQzs7O0VBQ1I7O0FBcUNVOztBQUFFO21HQWpDaEIsa0JBQ0Y7Ozs7c0JBREUsZ0JBQ0YiLCJmaWxlIjoiUHJvZHVjdHNIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB0YWcgUHJvZHVjdHNIZWFkZXJcclxuXHRkZWYgcmVuZGVyXHJcblx0XHQ8c2VsZj5cclxuXHRcdFx0PGRpdi5oZWFkZXI+XHJcblx0XHRcdFx0PGRpdi5maWx0ZXI+XHJcblx0XHRcdFx0PGgxPiBcIlByb2R1dG9zXCJcclxuXHRcdFx0XHQ8cC5icmVhZGNydW1icz5cclxuXHRcdFx0XHRcdDxhIHJvdXRlLXRvPVwiL2hvbWVcIj4gXCJIT01FIFwiXHJcblx0XHRcdFx0XHRcdDxpLmZhLmZhLWNoZXZyb24tcmlnaHQ+XHJcblx0XHRcdFx0XHQ8YS5hY3RpdmU+IFwiUFJPRFVUT1MgXCJcclxuXHRcdFx0XHRcdFx0PGkuZmEuZmEtY2hldnJvbi1yaWdodD5cclxuXHJcblx0Y3NzXHJcblx0XHQuaGVhZGVyXHJcblx0XHRcdHBvczogcmVsYXRpdmVcclxuXHRcdFx0YmdpOiB1cmwoXCJpbWdzL2hvbWUxLmpwZ1wiKVxyXG5cdFx0XHRiZ3M6IGNvdmVyXHJcblx0XHRcdGJncDogY2VudGVyXHJcblx0XHRcdGg6IDMwMHB4XHJcblx0XHRcdGQ6IGZsZXggYWk6IGNlbnRlciBqYzogY2VudGVyIGZsZDogY29sdW1uXHJcblx0XHRcdHVzOiBub25lXHJcblxyXG5cdFx0XHQuZmlsdGVyXHJcblx0XHRcdFx0cG9zOiBhYnNvbHV0ZSB0OiAwIHI6IDAgYjogMCBsOiAwXHJcblx0XHRcdFx0Ymc6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzBkMTEyOCAwJSwgI2ZkNjEwMCAxMDAlKSBcclxuXHRcdFx0XHRvOiAuNVxyXG5cdFx0XHRcdHppOiAwXHJcblx0XHRcdFxyXG5cdFx0XHRoMVxyXG5cdFx0XHRcdG1iOiAuNXJlbVxyXG5cdFx0XHRcdHppOiAxXHRcdFx0XHRcclxuXHRcdFx0XHRjOiB3aGl0ZVxyXG5cclxuXHRcdFx0LmJyZWFkY3J1bWJzXHJcblx0XHRcdFx0emk6IDFcclxuXHJcblx0XHRcdFx0YVxyXG5cdFx0XHRcdFx0bXI6IC41cmVtXHJcblx0XHRcdFx0XHRiZGI6IDJweCBzb2xpZCB3aGl0ZS8yNSBAaG92ZXI6IDJweCBzb2xpZCB3aGl0ZVxyXG5cdFx0XHRcdFx0dHdlZW46IC4zNXNcclxuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlclxyXG5cdFx0XHRcdFx0Yzogd2hpdGVcclxuXHJcblx0XHRcdFx0XHRpXHJcblx0XHRcdFx0XHRcdGZzOiAuNzVyZW1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdC5hY3RpdmVcclxuXHRcdFx0XHRcdGJkYjogMnB4IHNvbGlkIHdoaXRlLzI1IEBob3ZlcjogMnB4IHNvbGlkIHdoaXRlLzI1XHJcblx0XHRcdFx0XHRjdXJzb3I6IGRlZmF1bHRcclxuXHJcblxyXG5cdFx0XHRcdFxyXG5cclxuIl19