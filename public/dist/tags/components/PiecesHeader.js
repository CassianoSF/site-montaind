import '../../../web_modules/imba/dist/imba.js';
var $b = Symbol(), $d = Symbol(), $e = Symbol();

export default class PiecesHeader extends imba.tags.get('component','ImbaElement') {
	
	render(){
		var $1t, $1b, $1d, $0 = this._ns_ || '', $2t, $3t, $4t, $4b, $4d, $5t;
		
		$1t=this;
		$1t.open$();
		($1b=$1d=1,$1t[$b] === 1) || ($1b=$1d=0,$1t[$b]=1);
		$1b || ($2t=imba.createElement('div',$1t,`header ${$0}`,null));
		$1b || ($3t=imba.createElement('div',$2t,`filter ${$0}`,null));
		$1b || ($3t=imba.createElement('h1',$2t,`${$0}`,"Peças"));
		$1b || ($3t=imba.createElement('p',$2t,`breadcrumbs ${$0}`,null));
		($4b=$4d=1,$4t=$1t[$d]) || ($4b=$4d=0,$1t[$d]=$4t=imba.createElement('a',$3t,`${$0}`,null));
		$4b || ($4t.routeTo="/home");
		$4b || $4t.insert$("HOME ");
		$4b || ($5t=imba.createElement('i',$4t,`fa fa-chevron-right ${$0}`,null));
		$4b || !$4t.setup || $4t.setup($4d);
		$4t.end$($4d);
		($4t = $1t[$e]) || ($1t[$e]=$4t=imba.createElement('a',$3t,`active ${$0}`,null));
		$1b || $4t.insert$("PEÇAS ");
		$1b || ($5t=imba.createElement('i',$4t,`fa fa-chevron-right ${$0}`,null));
		$1t.close$($1d);
		return $1t;
	}
	
}; imba.tags.define('pieces-header-pmej0d',PiecesHeader,{ns: 'pmej0dc'});


imba.inlineStyles("\n.pmej0dc_ .header.pmej0dc:not(#_) {position: relative;\nbackground-image: url(\"imgs/home4.jpg\");\nbackground-size: cover;\nbackground-position: center;\nheight: 300px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction: column;\nuser-select: none;}\n.pmej0dc_ .header .filter.pmej0dc:not(#_) {position: absolute;\ntop: 0rem;\nright: 0rem;\nbottom: 0rem;\nleft: 0rem;\nbackground: linear-gradient(45deg, #0d1128 0%, #fd6100 100%);\nopacity: 0.5;\nz-index: 0;}\n.pmej0dc_ .header h1.pmej0dc:not(#_) {margin-bottom: .5rem;\nz-index: 1;\ncolor: hsla(0.00,0.00%,100.00%,100%);}\n.pmej0dc_ .header .breadcrumbs.pmej0dc:not(#_) {z-index: 1;}\n.pmej0dc_ .header .breadcrumbs a.pmej0dc:not(#_) {margin-right: .5rem;\nborder-bottom: 2px solid hsla(0.00,0.00%,100.00%,25%);\ntransition: none .35s;\ntransition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;\ncursor: pointer;\ncolor: hsla(0.00,0.00%,100.00%,100%);}\n.pmej0dc_ .header .breadcrumbs a.pmej0dc:not(#_):hover {border-bottom: 2px solid hsla(0.00,0.00%,100.00%,100%);}\n.pmej0dc_ .header .breadcrumbs a i.pmej0dc:not(#_) {font-size: .75rem;}\n.pmej0dc_ .header .breadcrumbs .active.pmej0dc:not(#_) {border-bottom: 2px solid hsla(0.00,0.00%,100.00%,25%);\ncursor: default;}\n.pmej0dc_ .header .breadcrumbs .active.pmej0dc:not(#_):hover {border-bottom: 2px solid hsla(0.00,0.00%,100.00%,25%);}\n\n",'pmej0d');
/*

.pmej0dc_ .header.pmej0dc:not(#_) {position: relative;
background-image: url("imgs/home4.jpg");
background-size: cover;
background-position: center;
height: 300px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
user-select: none;}
.pmej0dc_ .header .filter.pmej0dc:not(#_) {position: absolute;
top: 0rem;
right: 0rem;
bottom: 0rem;
left: 0rem;
background: linear-gradient(45deg, #0d1128 0%, #fd6100 100%);
opacity: 0.5;
z-index: 0;}
.pmej0dc_ .header h1.pmej0dc:not(#_) {margin-bottom: .5rem;
z-index: 1;
color: hsla(0.00,0.00%,100.00%,100%);}
.pmej0dc_ .header .breadcrumbs.pmej0dc:not(#_) {z-index: 1;}
.pmej0dc_ .header .breadcrumbs a.pmej0dc:not(#_) {margin-right: .5rem;
border-bottom: 2px solid hsla(0.00,0.00%,100.00%,25%);
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
cursor: pointer;
color: hsla(0.00,0.00%,100.00%,100%);}
.pmej0dc_ .header .breadcrumbs a.pmej0dc:not(#_):hover {border-bottom: 2px solid hsla(0.00,0.00%,100.00%,100%);}
.pmej0dc_ .header .breadcrumbs a i.pmej0dc:not(#_) {font-size: .75rem;}
.pmej0dc_ .header .breadcrumbs .active.pmej0dc:not(#_) {border-bottom: 2px solid hsla(0.00,0.00%,100.00%,25%);
cursor: default;}
.pmej0dc_ .header .breadcrumbs .active.pmej0dc:not(#_):hover {border-bottom: 2px solid hsla(0.00,0.00%,100.00%,25%);}


*/

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBpZWNlc0hlYWRlci5pbWJhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBRyxDQUFDLFlBQVk7O0NBQzNCLE1BQU07Ozs7OztjQUVULGlEQUFHO2NBQ0gsaURBQUc7Y0FDSixvQ0FBSSxPQUFPLENBQVQ7Y0FBZSxvREFDakI7b0RBQW9CLHdDQUNwQjtjQUFDLE9BQVEsQ0FBQyxPQUFPO3FCQUFFLE9BQU87Y0FBUSw0REFDbEM7OztrQ0FBNEIsK0NBQUM7cUJBQ3RCLFFBQVE7Y0FBUSw0REFBQzs7O0VBQ0w7O0FBcUNVOztBQUFFO21HQWpDaEIsa0JBQ0Y7Ozs7c0JBREUsZ0JBQ0YiLCJmaWxlIjoiUGllY2VzSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgdGFnIFBpZWNlc0hlYWRlclxyXG5cdGRlZiByZW5kZXJcclxuXHRcdDxzZWxmPlxyXG5cdFx0XHQ8ZGl2LmhlYWRlcj5cclxuXHRcdFx0XHQ8ZGl2LmZpbHRlcj5cclxuXHRcdFx0XHQ8aDE+IFwiUGXDp2FzXCJcclxuXHRcdFx0XHQ8cC5icmVhZGNydW1icz5cclxuXHRcdFx0XHRcdDxhIHJvdXRlLXRvPVwiL2hvbWVcIj4gXCJIT01FIFwiXHJcblx0XHRcdFx0XHRcdDxpLmZhLmZhLWNoZXZyb24tcmlnaHQ+XHJcblx0XHRcdFx0XHQ8YS5hY3RpdmU+IFwiUEXDh0FTIFwiXHJcblx0XHRcdFx0XHRcdDxpLmZhLmZhLWNoZXZyb24tcmlnaHQ+XHJcblxyXG5cdGNzc1xyXG5cdFx0LmhlYWRlclxyXG5cdFx0XHRwb3M6IHJlbGF0aXZlXHJcblx0XHRcdGJnaTogdXJsKFwiaW1ncy9ob21lNC5qcGdcIilcclxuXHRcdFx0YmdzOiBjb3ZlclxyXG5cdFx0XHRiZ3A6IGNlbnRlclxyXG5cdFx0XHRoOiAzMDBweFxyXG5cdFx0XHRkOiBmbGV4IGFpOiBjZW50ZXIgamM6IGNlbnRlciBmbGQ6IGNvbHVtblxyXG5cdFx0XHR1czogbm9uZVxyXG5cclxuXHRcdFx0LmZpbHRlclxyXG5cdFx0XHRcdHBvczogYWJzb2x1dGUgdDogMCByOiAwIGI6IDAgbDogMFxyXG5cdFx0XHRcdGJnOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwZDExMjggMCUsICNmZDYxMDAgMTAwJSkgXHJcblx0XHRcdFx0bzogLjVcclxuXHRcdFx0XHR6aTogMFxyXG5cdFx0XHRcclxuXHRcdFx0aDFcclxuXHRcdFx0XHRtYjogLjVyZW1cclxuXHRcdFx0XHR6aTogMVx0XHRcdFx0XHJcblx0XHRcdFx0Yzogd2hpdGVcclxuXHJcblx0XHRcdC5icmVhZGNydW1ic1xyXG5cdFx0XHRcdHppOiAxXHJcblxyXG5cdFx0XHRcdGFcclxuXHRcdFx0XHRcdG1yOiAuNXJlbVxyXG5cdFx0XHRcdFx0YmRiOiAycHggc29saWQgd2hpdGUvMjUgQGhvdmVyOiAycHggc29saWQgd2hpdGVcclxuXHRcdFx0XHRcdHR3ZWVuOiAuMzVzXHJcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXJcclxuXHRcdFx0XHRcdGM6IHdoaXRlXHJcblxyXG5cdFx0XHRcdFx0aVxyXG5cdFx0XHRcdFx0XHRmczogLjc1cmVtXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHQuYWN0aXZlXHJcblx0XHRcdFx0XHRiZGI6IDJweCBzb2xpZCB3aGl0ZS8yNSBAaG92ZXI6IDJweCBzb2xpZCB3aGl0ZS8yNVxyXG5cdFx0XHRcdFx0Y3Vyc29yOiBkZWZhdWx0XHJcblxyXG5cclxuXHRcdFx0XHRcclxuXHJcbiJdfQ==