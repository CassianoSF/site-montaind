import '../../web_modules/imba/dist/imba.js';
var $b = Symbol(), $f = Symbol(), $g = Symbol(), $h = Symbol(), $i = Symbol(), $j = Symbol(), $k = Symbol(), $l = Symbol(), $m = Symbol(), $n = Symbol(), $o = Symbol(), $p = Symbol(), $q = Symbol(), $c0 = Symbol(), $r = Symbol(), $d0 = Symbol();

import {fb} from "../models/Firebase.js";

export default class Admin extends imba.tags.get('component','ImbaElement') {
	
	async login(){
		
		this.loading = true;
		try {
			
			const res = await fb.doLogin(this.email,this.password);
			return this.router.go('/test');
		} catch (err) {
			
			this.error = true;
			return this.loading = false;
		};
	}
	
	render(){
		var $5c$0, $4d$0, $1t, $1b, $1d, $0 = this._ns_ || '', $2t, $3t, $3b, $3d, $4t, $4b, $4d, $4v, $6b, $6d, $5b, $5d;
		
		$1t=this;
		$1t.open$();
		($1b=$1d=1,$1t[$b] === 1) || ($1b=$1d=0,$1t[$b]=1);
		$1b || ($2t=imba.createElement('div',$1t,`auth ${$0}`,null));
		($3b=$3d=1,$3t=$1t[$f]) || ($3b=$3d=0,$1t[$f]=$3t=imba.createElement('form',$2t,`form ${$0}`,null));
		$3b || ($3t.autocomplete="off");
		$3b || ($4t=imba.createElement('h3',$3t,`${$0}`,"LOGIN"));
		($4b=$4d=1,$4t=$1t[$g]) || ($4b=$4d=0,$1t[$g]=$4t=imba.createElement('input',$3t,`${$0}`,null));
		($4v=(this.error||undefined),$4v===$1t[$i]||($4d|=2,$1t[$i]=$4v));
		$4v=$1t[$j] || ($1t[$j]=$4t.bind$('data',[null,'email']));
		$4v[0]=this;
		$4b || ($4t.type="email");
		$4b || ($4t.placeholder="E-mail");
		$4b || ($4t.autofocus='autofocus');
		$4b || ($4t.required='required');
		$4b || ($4t.on$(`keydown`,{enter: true,login: true},this));
		($4d&2 && $4t.flag$(`${$0}`+' '+($1t[$i] ? `input-error` : '')));
		$4b || !$4t.setup || $4t.setup($4d);
		$4t.end$($4d);
		($4b=$4d=1,$4t=$1t[$k]) || ($4b=$4d=0,$1t[$k]=$4t=imba.createElement('input',$3t,`${$0}`,null));
		($4v=(this.error||undefined),$4v===$1t[$m]||($4d|=2,$1t[$m]=$4v));
		$4v=$1t[$n] || ($1t[$n]=$4t.bind$('data',[null,'password']));
		$4v[0]=this;
		$4b || ($4t.type="text");
		$4b || ($4t.placeholder="Senha");
		$4b || ($4t.autocomplete="new-password");
		$4b || ($4t.required='required');
		$4b || ($4t.on$(`keydown`,{enter: true,login: true},this));
		($4d&2 && $4t.flag$(`${$0}`+' '+($1t[$m] ? `input-error` : '')));
		$4b || !$4t.setup || $4t.setup($4d);
		$4t.end$($4d);
		($4b=$4d=1,$4t=$1t[$o]) || ($4b=$4d=0,$1t[$o]=$4t=imba.createElement('button',$3t,`btn ${$0}`,null));
		$4b || ($4t.type="submit");
		$4b || ($4t.on$(`click`,{prevent: true,login: true},this));
		$5c$0 = null;
		if (this.loading) {
			
			($6b=$6d=1,$5c$0=$1t[$p]) || ($6b=$6d=0,$1t[$p]=$5c$0=imba.createElement('i',null,`icon fa fa-spinner fa-pulse ${$0}`,null));
			$6b||($5c$0.up$=$4t);
		} else {
			
			($6b=$6d=1,$5c$0=$1t[$q]) || ($6b=$6d=0,$1t[$q]=$5c$0=imba.createElement('i',null,`icon fa fa-sign-in ${$0}`,null));
			$6b||($5c$0.up$=$4t);
		};
		($1t[$c0] = $4t.insert$($5c$0,0,$1t[$c0]));
		$4b || $4t.insert$("Entrar");
		$4d$0 = null;
		if (this.error) { ($5b=$5d=1,$4d$0=$1t[$r]) || ($5b=$5d=0,$1t[$r]=$4d$0=imba.createElement('span',null,`error ${$0}`,"E-mail ou senha inválidos."));
		$5b||($4d$0.up$=$3t) };
		($1t[$d0] = $3t.insert$($4d$0,0,$1t[$d0]));
		$1t.close$($1d);
		return $1t;
	}
	
}; imba.tags.define('admin-bgm6ct',Admin,{ns: 'bgm6cte'});


imba.inlineStyles("\n.bgm6cte_ .auth.bgm6cte:not(#_) {height: 100vh;\nwidth: 100vw;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nbackground: hsla(210.00,38.46%,94.90%,100%);}\n.bgm6cte_ .auth .form.bgm6cte:not(#_) {text-align: center;\nwidth: 40%;\nmax-width: 350px;\nbr: md;\npadding: 1rem;\ndisplay: flex;\nflex-direction: column;\nbox-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\nbackground: hsla(0.00,0.00%,100.00%,100%);}\n.bgm6cte_ .auth .form h3.bgm6cte:not(#_) {margin-bottom: 1.5rem;\nposition: relative;\npadding-bottom: .5rem;}\n.bgm6cte_ .auth .form h3.bgm6cte:not(#_)::after {--t_x:0;--t_y:0;--t_z:0;--t_rotate:0;--t_scale:1;--t_scale-x:1;--t_scale-y:1;--t_skew-x:0;--t_skew-y:0;\ntransform: translate3d(var(--t_x),var(--t_y),var(--t_z)) rotate(var(--t_rotate)) skewX(var(--t_skew-x)) skewY(var(--t_skew-y)) scaleX(var(--t_scale-x)) scaleY(var(--t_scale-y)) scale(var(--t_scale));\ncontent: '';\nbackground: #5D50C6;\nwidth: 72px;\nheight: 5px;\nposition: absolute;\nbottom: 0rem;\nleft: 50%;\n--t_x: -50% !important;}\n.bgm6cte_ .auth .form input.bgm6cte:not(#_) {padding: 1rem;\nbackground: hsla(210.00,38.46%,94.90%,100%);\nfont-size: 1rem;\nbr: xs;\nmargin-bottom: .5rem;\ntext-align: center;\nwidth: 100%;\ntransition: none .35s;\ntransition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;\noutline: none;}\n.bgm6cte_ .auth .form .input-error.bgm6cte:not(#_) {background: hsla(0.00,95.12%,91.96%,100%);}\n.bgm6cte_ .auth .form input.bgm6cte:not(#_)::placeholder {font-family: var(--font);\nfont-size: 1rem;\ncolor: hsla(0.00,0.00%,0.00%,80%);\nfont-weight: 500;}\n.bgm6cte_ .auth .form button.bgm6cte:not(#_) {transition: none .35s;\ntransition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;\nbr: xs;\ncolor: hsla(0.00,0.00%,100.00%,100%);\noutline: none;\npadding: 1rem;\nbackground: #5D50C6;\ncursor: pointer;}\n.bgm6cte_ .auth .form button.bgm6cte:not(#_):hover {background: var(--orange);}\n.bgm6cte_ .auth .form button .icon.bgm6cte:not(#_) {margin-right: .5rem;}\n.bgm6cte_ .auth .form .error.bgm6cte:not(#_) {color: red;\nfont-size: .9rem;\nmargin-top: .25rem;}\n\n",'bgm6ct');
/*

.bgm6cte_ .auth.bgm6cte:not(#_) {height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
background: hsla(210.00,38.46%,94.90%,100%);}
.bgm6cte_ .auth .form.bgm6cte:not(#_) {text-align: center;
width: 40%;
max-width: 350px;
br: md;
padding: 1rem;
display: flex;
flex-direction: column;
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
background: hsla(0.00,0.00%,100.00%,100%);}
.bgm6cte_ .auth .form h3.bgm6cte:not(#_) {margin-bottom: 1.5rem;
position: relative;
padding-bottom: .5rem;}
.bgm6cte_ .auth .form h3.bgm6cte:not(#_)::after {--t_x:0;--t_y:0;--t_z:0;--t_rotate:0;--t_scale:1;--t_scale-x:1;--t_scale-y:1;--t_skew-x:0;--t_skew-y:0;
transform: translate3d(var(--t_x),var(--t_y),var(--t_z)) rotate(var(--t_rotate)) skewX(var(--t_skew-x)) skewY(var(--t_skew-y)) scaleX(var(--t_scale-x)) scaleY(var(--t_scale-y)) scale(var(--t_scale));
content: '';
background: #5D50C6;
width: 72px;
height: 5px;
position: absolute;
bottom: 0rem;
left: 50%;
--t_x: -50% !important;}
.bgm6cte_ .auth .form input.bgm6cte:not(#_) {padding: 1rem;
background: hsla(210.00,38.46%,94.90%,100%);
font-size: 1rem;
br: xs;
margin-bottom: .5rem;
text-align: center;
width: 100%;
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
outline: none;}
.bgm6cte_ .auth .form .input-error.bgm6cte:not(#_) {background: hsla(0.00,95.12%,91.96%,100%);}
.bgm6cte_ .auth .form input.bgm6cte:not(#_)::placeholder {font-family: var(--font);
font-size: 1rem;
color: hsla(0.00,0.00%,0.00%,80%);
font-weight: 500;}
.bgm6cte_ .auth .form button.bgm6cte:not(#_) {transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
br: xs;
color: hsla(0.00,0.00%,100.00%,100%);
outline: none;
padding: 1rem;
background: #5D50C6;
cursor: pointer;}
.bgm6cte_ .auth .form button.bgm6cte:not(#_):hover {background: var(--orange);}
.bgm6cte_ .auth .form button .icon.bgm6cte:not(#_) {margin-right: .5rem;}
.bgm6cte_ .auth .form .error.bgm6cte:not(#_) {color: red;
font-size: .9rem;
margin-top: .25rem;}


*/

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFkbWluLmltYmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBTSxFQUFFLEVBQUUsT0FBTyxvQkFBb0I7O0FBQ3JDLE1BQ0ksQ0FBQyxPQUFPLENBQUMsS0FBRyxDQUFDLEtBQUs7O09BQ3BCLEtBQUs7O0VBQUcsWUFDTCxHQUFHLElBQUk7TUFDWjs7R0FBSSxLQUNGLENBQUMsR0FBRyxHQUFTLFFBQUUsQ0FBQyxPQUFPLENBQUMsVUFBSyxDQUFFLGFBQVEsQ0FBQztHQUFJLGtCQUM1QyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7R0FBQSxhQUNYOztHQUFJLFVBQUssR0FDVixJQUFJO0dBQUksbUJBQ1YsR0FBRyxLQUFLO0dBQUE7RUFBQTs7Q0FBTyxNQUNkOzs7Ozs7Y0FFRCwrQ0FBRztvREFDRSxnREFBSTtjQUNULFlBQVksQ0FBQyxLQUFLO2NBQVEsb0NBQUksT0FDN0IsQ0FEMkI7b0RBQ3BCLDRDQUFLO1FBRVosVUFBSzs7O2NBQ0YsSUFBSSxDQUFDLE9BQU87Y0FDWCxXQUFXLENBQUMsUUFDWjtjQUFPLFNBQVM7Y0FDckIsUUFBUTs7NkNBTEwsYUFDSDs7O29EQU1VLDRDQUFLO1FBQ1IsVUFBSzs7O2NBQ2MsSUFDdkIsQ0FBQyxNQUFNO2NBQU8sV0FDVixDQUFDLE9BQU87Y0FDWixZQUFZLENBQUMsY0FDYjtjQUFPLFFBQVE7OzZDQU5NLGFBQ2xCOzs7b0RBT0gsaURBQU07Y0FBSyxJQUFJLENBQUMsUUFBUTs7O0VBRUYsRUFBRSxFQUFDLFlBQU87O3lEQUFTLHFFQUFDOztHQUUzQyxNQUFXOzt5REFBUyw0REFBQzs7R0FDcEI7O3FCQUFPLFFBQ0o7O0VBRUMsRUFBRSxFQUFDLFVBQUssMERBRkYsNkNBQVksNEJBRW5CLENBRlc7Ozs7O0VBRUY7O0FBNERaOztBQUFFO2k4QkF2Q0osRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FBRixFQUFFIiwiZmlsZSI6IkFkbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmYn0gZnJvbSBcIi4uL21vZGVscy9GaXJlYmFzZVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YWcgQWRtaW5cclxuXHRkZWYgbG9naW5cclxuXHRcdGxvYWRpbmcgPSB0cnVlXHJcblx0XHR0cnlcclxuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgZmIuZG9Mb2dpbihlbWFpbCwgcGFzc3dvcmQpXHJcblx0XHRcdHJvdXRlci5nbygnL3Rlc3QnKVxyXG5cdFx0Y2F0Y2ggZXJyXHJcblx0XHRcdGVycm9yID0gdHJ1ZVxyXG5cdFx0XHRsb2FkaW5nID0gZmFsc2VcclxuXHJcblx0ZGVmIHJlbmRlclxyXG5cdFx0PHNlbGY+XHJcblx0XHRcdDxkaXYuYXV0aD5cclxuXHRcdFx0XHQ8Zm9ybS5mb3JtIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxyXG5cdFx0XHRcdFx0PGgzPiBcIkxPR0lOXCJcclxuXHRcdFx0XHRcdDxpbnB1dCBcclxuXHRcdFx0XHRcdFx0LmlucHV0LWVycm9yPWVycm9yIFxyXG5cdFx0XHRcdFx0XHRiaW5kPWVtYWlsXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRS1tYWlsXCJcclxuXHRcdFx0XHRcdFx0YXV0b2ZvY3VzXHJcblx0XHRcdFx0XHRcdHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdDprZXlkb3duLmVudGVyLmxvZ2luPlxyXG5cdFx0XHRcdFx0PGlucHV0IFxyXG5cdFx0XHRcdFx0XHQuaW5wdXQtZXJyb3I9ZXJyb3IgXHJcblx0XHRcdFx0XHRcdGJpbmQ9cGFzc3dvcmRcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNlbmhhXCJcclxuXHRcdFx0XHRcdFx0YXV0b2NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0OmtleWRvd24uZW50ZXIubG9naW4+XHJcblxyXG5cdFx0XHRcdFx0PGJ1dHRvbi5idG4gdHlwZT1cInN1Ym1pdFwiIDpjbGljay5wcmV2ZW50LmxvZ2luPlxyXG5cdFx0XHRcdFx0XHRpZiBsb2FkaW5nXHJcblx0XHRcdFx0XHRcdFx0PGkuaWNvbi5mYS5mYS1zcGlubmVyLmZhLXB1bHNlPlxyXG5cdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0PGkuaWNvbi5mYS5mYS1zaWduLWluPlxyXG5cdFx0XHRcdFx0XHRcIkVudHJhclwiXHJcblx0XHRcdFx0XHQ8c3Bhbi5lcnJvcj4gXCJFLW1haWwgb3Ugc2VuaGEgaW52w6FsaWRvcy5cIiBpZiBlcnJvclxyXG5cclxuXHRjc3NcclxuXHRcdC5hdXRoXHJcblx0XHRcdGg6IDEwMHZoIHc6IDEwMHZ3XHJcblx0XHRcdGQ6IGZsZXggYWk6IGNlbnRlciBqYzogY2VudGVyXHJcblx0XHRcdGJnOiBncmV5MlxyXG5cclxuXHRcdFx0LmZvcm1cclxuXHRcdFx0XHR0YTogY2VudGVyXHJcblx0XHRcdFx0dzogNDAlXHJcblx0XHRcdFx0bWF4LXdpZHRoOiAzNTBweFxyXG5cdFx0XHRcdGJyOiBtZFxyXG5cdFx0XHRcdHA6IDFyZW1cclxuXHRcdFx0XHRkOiBmbGV4XHJcblx0XHRcdFx0ZmxkOiBjb2x1bW5cclxuXHRcdFx0XHRzaGFkb3c6IGxnXHJcblx0XHRcdFx0Ymc6IHdoaXRlXHJcblxyXG5cdFx0XHRcdGgzXHJcblx0XHRcdFx0XHRtYjogMS41cmVtXHJcblx0XHRcdFx0XHRwb3M6IHJlbGF0aXZlXHJcblx0XHRcdFx0XHRwYjogLjVyZW1cclxuXHJcblx0XHRcdFx0XHRAYWZ0ZXJcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJydcclxuXHRcdFx0XHRcdFx0Ymc6ICM1RDUwQzZcclxuXHRcdFx0XHRcdFx0dzogNzJweFxyXG5cdFx0XHRcdFx0XHRoOiA1cHhcclxuXHRcdFx0XHRcdFx0cG9zOiBhYnNvbHV0ZVxyXG5cdFx0XHRcdFx0XHRiOiAwIGw6IDUwJVxyXG5cdFx0XHRcdFx0XHR4OiAtNTAlXHJcblxyXG5cdFx0XHRcdGlucHV0XHJcblx0XHRcdFx0XHRwOiAxcmVtXHJcblx0XHRcdFx0XHRiZzogZ3JleTJcclxuXHRcdFx0XHRcdGZzOiAxcmVtXHJcblx0XHRcdFx0XHRicjogeHNcclxuXHRcdFx0XHRcdG1iOiAuNXJlbVxyXG5cdFx0XHRcdFx0dGE6IGNlbnRlclxyXG5cdFx0XHRcdFx0dzogMTAwJVxyXG5cdFx0XHRcdFx0dHdlZW46IC4zNXNcclxuXHRcdFx0XHRcdG91dGxpbmU6IG5vbmVcclxuXHJcblx0XHRcdFx0LmlucHV0LWVycm9yXHJcblx0XHRcdFx0XHRiZzogcmVkMlx0XHRcdFx0XHRcclxuXHJcblx0XHRcdFx0aW5wdXRAcGxhY2Vob2xkZXJcclxuXHRcdFx0XHRcdGZmOiAkZm9udFxyXG5cdFx0XHRcdFx0ZnM6IDFyZW1cclxuXHRcdFx0XHRcdGM6IGJsYWNrLzgwXHJcblx0XHRcdFx0XHRmdzogNTAwXHJcblxyXG5cdFx0XHRcdGJ1dHRvblxyXG5cdFx0XHRcdFx0dHdlZW46IC4zNXNcclxuXHRcdFx0XHRcdGJyOiB4c1xyXG5cdFx0XHRcdFx0Yzogd2hpdGVcclxuXHRcdFx0XHRcdG91dGxpbmU6IG5vbmVcclxuXHRcdFx0XHRcdHA6IDFyZW1cclxuXHRcdFx0XHRcdGJnOiAjNUQ1MEM2IEBob3ZlcjogJG9yYW5nZVxyXG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyXHJcblxyXG5cdFx0XHRcdFx0Lmljb25cclxuXHRcdFx0XHRcdFx0bXI6IC41cmVtXHJcblxyXG5cdFx0XHRcdC5lcnJvclxyXG5cdFx0XHRcdFx0YzogcmVkXHJcblx0XHRcdFx0XHRmczogLjlyZW1cclxuXHRcdFx0XHRcdG10OiAuMjVyZW1cclxuXHJcbiJdfQ==