import '../../../web_modules/imba/dist/imba.js';
function iter$(a){ return a ? (a.toIterable ? a.toIterable() : a) : []; };
var $b = Symbol(), $i = Symbol(), $j = Symbol(), $k = Symbol(), $l = Symbol(), $m = Symbol(), $n = Symbol(), $o = Symbol(), $p = Symbol(), $q = Symbol(), $r = Symbol(), $s = Symbol(), $t = Symbol(), $h0 = Symbol(), $h1 = Symbol(), $h2 = Symbol();

export default class Card extends imba.tags.get('component','ImbaElement') {
	init$(){
		super.init$();this.imgs = ["1","2","3","4"];
		this.active = 0;
		
	}
	changeSlide(id){
		
		return this.active = id;
	}
	
	prev(){
		
		return this.active = (this.active === 0) ? (this.imgs.length - 1) : (this.active - 1);
	}
	
	next(){
		
		return this.active = (this.active === this.imgs.length - 1) ? 0 : (this.active + 1);
	}
	
	render(){
		var self = this, $4h$0, $4h$1, $4h$2, $1t, $1b, $1d, $0 = this._ns_ || '', $2t, $3t, $4t, $4k, $4c, $5t, $5b, $5d, $5v, $6t, $6k, $6c, $7t, $7b, $7d, $7v;
		
		$1t=this;
		$1t.open$();
		($1b=$1d=1,$1t[$b] === 1) || ($1b=$1d=0,$1t[$b]=1);
		$1b || ($2t=imba.createElement('div',$1t,`card ${$0}`,null));
		($3t = $1t[$i]) || ($1t[$i]=$3t=imba.createElement('div',$2t,`imgs ${$0}`,null));
		($4t = $1t[$j]) || ($1t[$j]=$4t=imba.createIndexedFragment(128,$3t));
		$4k = 0;
		$4c=$4t.$;
		for (let id = 0, $items = iter$(this.imgs), $len = $items.length; id < $len; id++) {
			let img = $items[id];
			let url = ("url(imgs/" + img + ".jpg)");
			($5b=$5d=1,$5t=$4c[$4k]) || ($5b=$5d=0,$4c[$4k]=$5t=imba.createElement('div',$4t,`gntb0jcd img ${$0}`,null));
			$5b||($5t.up$=$4t);
			(url===$5t[$k] || ($5t.css$var('--gntb0je',$5t[$k]=url,null,'bgi')));
			($5v=(id === this.active||undefined),$5v===$5t[$m]||($5d|=2,$5t[$m]=$5v));
			($5d&2 && $5t.flag$(`gntb0jcd img ${$0}`+' '+($5t[$m] ? `show` : '')));
			$4k++;
		};$4t.end$($4k);
		$4h$0 = $4h$1 = $4h$2 = null;
		if (this.imgs.length > 1) {
			
			($5b=$5d=1,$4h$0=$1t[$n]) || ($5b=$5d=0,$1t[$n]=$4h$0=imba.createElement('div',null,`navigation ${$0}`,null));
			$5b||($4h$0.up$=$3t);
			($6t = $4h$0[$o]) || ($4h$0[$o]=$6t=imba.createIndexedFragment(384,$4h$0));
			$6k = 0;
			$6c=$6t.$;
			for (let id = 0, $items = iter$(this.imgs), $len = $items.length; id < $len; id++) {
				let img = $items[id];
				($7b=$7d=1,$7t=$6c[$6k]) || ($7b=$7d=0,$6c[$6k]=$7t=imba.createElement('label',$6t,`dot ${$0}`,null));
				$7b||($7t.up$=$6t);
				($7v=(id === this.active||undefined),$7v===$7t[$q]||($7d|=2,$7t[$q]=$7v));
				$7v = $7t[$r] || ($7t[$r]={$_: [function(e,$,_2) {
					return self.changeSlide(_2);
				},null]});
				$7v.$_[1]=id;
				$7b || $7t.on$(`click`,$7v,this);
				($7d&2 && $7t.flag$(`dot ${$0}`+' '+($7t[$q] ? `active` : '')));
				$6k++;
			};$6t.end$($6k);
			($5b=$5d=1,$4h$1=$1t[$s]) || ($5b=$5d=0,$1t[$s]=$4h$1=imba.createElement('div',null,`gntb0jcf go ${$0}`,null));
			$5b||($4h$1.up$=$3t);
			$5b || ($4h$1.on$(`click`,{$_: [function(e,$) {
				return self.next();
			}]},this));
			$5b || ($6t=imba.createElement('i',$4h$1,`fa fa-angle-right ${$0}`,null));
			($5b=$5d=1,$4h$2=$1t[$t]) || ($5b=$5d=0,$1t[$t]=$4h$2=imba.createElement('div',null,`gntb0jcg go ${$0}`,null));
			$5b||($4h$2.up$=$3t);
			$5b || ($4h$2.on$(`click`,{$_: [function(e,$) {
				return self.prev();
			}]},this));
			$5b || ($6t=imba.createElement('i',$4h$2,`fa fa-angle-left ${$0}`,null));
		};
		($1t[$h0] = $3t.insert$($4h$0,0,$1t[$h0]));
		($1t[$h1] = $3t.insert$($4h$1,0,$1t[$h1]));
		($1t[$h2] = $3t.insert$($4h$2,0,$1t[$h2]));
		$1b || ($3t=imba.createElement('h3',$2t,`${$0}`,"Sistema Hidráulico"));
		$1b || ($3t=imba.createElement('p',$2t,`${$0}`,"Tempor non aliquip do laboris aliqua. Labore dolor sit labore in nisi fugiat qui. Occaecat mollit eiusmod labore voluptate anim in cupidatat do reprehenderit enim proident eiusmod cillum."));
		$1b || ($3t=imba.createElement('button',$2t,`btn ${$0}`,"Adicionar"));
		$1t.close$($1d);
		return $1t;
	}
	
}; imba.tags.define('card-gntb0j',Card,{ns: 'gntb0jc'});

imba.inlineStyles(".gntb0jcd:not(#_):not(#_) {background-image: var(--gntb0je);}\n\n.gntb0jcf:not(#_):not(#_) {right: 0rem;\nbr: 100% 0% 0% 100% / 50% 0% 0% 50%;}\n\n.gntb0jcg:not(#_):not(#_) {left: 0rem;\nbr: 0% 100% 100% 0% / 0% 50% 50% 0%;}\n\n\n.gntb0jc_ .card.gntb0jc:not(#_) {padding: 1.5rem;}\n.gntb0jc_ .card .imgs.gntb0jc:not(#_) {position: relative;\nheight: 300px;\nwidth: 100%;\nmargin-bottom: 1.5rem;}\n.gntb0jc_ .card .imgs .img.gntb0jc:not(#_) {position: absolute;\nbackground-size: cover;\nbackground-position: center;\nwidth: 100%;\nheight: 100%;\nanimation-duration: 1s;\nanimation-fill-mode: both;\nopacity: 0;}\n.gntb0jc_ .card .imgs .img.gntb0jc:not(#_):not(.show) {animation-name: var(--animation-fadeOut,fadeOut);\nz-index: -1;}\n.gntb0jc_ .card .imgs .show.gntb0jc:not(#_) {animation-name: var(--animation-fadeIn,fadeIn);}\n.gntb0jc_ .card .imgs .navigation.gntb0jc:not(#_) {--t_x:0;--t_y:0;--t_z:0;--t_rotate:0;--t_scale:1;--t_scale-x:1;--t_scale-y:1;--t_skew-x:0;--t_skew-y:0;\ntransform: translate3d(var(--t_x),var(--t_y),var(--t_z)) rotate(var(--t_rotate)) skewX(var(--t_skew-x)) skewY(var(--t_skew-y)) scaleX(var(--t_scale-x)) scaleY(var(--t_scale-y)) scale(var(--t_scale));\ndisplay: flex;\nposition: absolute;\nbottom: 20px;\nleft: 50%;\n--t_x: -50% !important;\nz-index: 1;}\n.gntb0jc_ .card .imgs .navigation .dot.gntb0jc:not(#_) {margin-left: 6px;\nmargin-right: 6px;\nwidth: 10px;\nheight: 10px;\nbr: full;\nbackground: hsla(0.00,0.00%,100.00%,100%);\ncursor: pointer;\ntransition: none .35s;\ntransition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;}\n.gntb0jc_ .card .imgs .navigation .dot.gntb0jc:not(#_):hover {background: var(--orange);}\n.gntb0jc_ .card .imgs .navigation .active.gntb0jc:not(#_) {background: var(--orange);}\n.gntb0jc_ .card .imgs .go.gntb0jc:not(#_) {position: absolute;\ntop: 0rem;\nbottom: 0rem;\nwidth: 40px;\ntransition: none .35s;\ntransition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;\ncursor: pointer;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nfont-size: 1.5rem;\ncolor: hsla(0.00,0.00%,100.00%,50%);}\n.gntb0jc_ .card .imgs .go.gntb0jc:not(#_):hover {background: hsla(0.00,0.00%,100.00%,20%);}\n.gntb0jc_ .card .imgs .go.gntb0jc:not(#_):hover {color: hsla(0.00,0.00%,100.00%,100%);}\n.gntb0jc_ .card h3.gntb0jc:not(#_) {font-size: 1.5rem;\ncolor: hsla(0.00,0.00%,0.00%,80%);}\n.gntb0jc_ .card p.gntb0jc:not(#_) {color: var(--grey);}\n.gntb0jc_ .card .btn.gntb0jc:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);\nbackground: var(--orange);\nbr: full;\npadding: .375rem .75rem;\nborder: 1px solid var(--orange);\ncursor: pointer;\ntransition: none .35s;\ntransition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;\noutline: none;\nuser-select: none;}\n.gntb0jc_ .card .btn.gntb0jc:not(#_):hover {color: var(--orange);}\n.gntb0jc_ .card .btn.gntb0jc:not(#_):hover {background: hsla(0.00,0.00%,100.00%,0%);}\n\n",'gntb0j');
/*
.gntb0jcd:not(#_):not(#_) {background-image: var(--gntb0je);}

.gntb0jcf:not(#_):not(#_) {right: 0rem;
br: 100% 0% 0% 100% / 50% 0% 0% 50%;}

.gntb0jcg:not(#_):not(#_) {left: 0rem;
br: 0% 100% 100% 0% / 0% 50% 50% 0%;}


.gntb0jc_ .card.gntb0jc:not(#_) {padding: 1.5rem;}
.gntb0jc_ .card .imgs.gntb0jc:not(#_) {position: relative;
height: 300px;
width: 100%;
margin-bottom: 1.5rem;}
.gntb0jc_ .card .imgs .img.gntb0jc:not(#_) {position: absolute;
background-size: cover;
background-position: center;
width: 100%;
height: 100%;
animation-duration: 1s;
animation-fill-mode: both;
opacity: 0;}
.gntb0jc_ .card .imgs .img.gntb0jc:not(#_):not(.show) {animation-name: var(--animation-fadeOut,fadeOut);
z-index: -1;}
.gntb0jc_ .card .imgs .show.gntb0jc:not(#_) {animation-name: var(--animation-fadeIn,fadeIn);}
.gntb0jc_ .card .imgs .navigation.gntb0jc:not(#_) {--t_x:0;--t_y:0;--t_z:0;--t_rotate:0;--t_scale:1;--t_scale-x:1;--t_scale-y:1;--t_skew-x:0;--t_skew-y:0;
transform: translate3d(var(--t_x),var(--t_y),var(--t_z)) rotate(var(--t_rotate)) skewX(var(--t_skew-x)) skewY(var(--t_skew-y)) scaleX(var(--t_scale-x)) scaleY(var(--t_scale-y)) scale(var(--t_scale));
display: flex;
position: absolute;
bottom: 20px;
left: 50%;
--t_x: -50% !important;
z-index: 1;}
.gntb0jc_ .card .imgs .navigation .dot.gntb0jc:not(#_) {margin-left: 6px;
margin-right: 6px;
width: 10px;
height: 10px;
br: full;
background: hsla(0.00,0.00%,100.00%,100%);
cursor: pointer;
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;}
.gntb0jc_ .card .imgs .navigation .dot.gntb0jc:not(#_):hover {background: var(--orange);}
.gntb0jc_ .card .imgs .navigation .active.gntb0jc:not(#_) {background: var(--orange);}
.gntb0jc_ .card .imgs .go.gntb0jc:not(#_) {position: absolute;
top: 0rem;
bottom: 0rem;
width: 40px;
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
color: hsla(0.00,0.00%,100.00%,50%);}
.gntb0jc_ .card .imgs .go.gntb0jc:not(#_):hover {background: hsla(0.00,0.00%,100.00%,20%);}
.gntb0jc_ .card .imgs .go.gntb0jc:not(#_):hover {color: hsla(0.00,0.00%,100.00%,100%);}
.gntb0jc_ .card h3.gntb0jc:not(#_) {font-size: 1.5rem;
color: hsla(0.00,0.00%,0.00%,80%);}
.gntb0jc_ .card p.gntb0jc:not(#_) {color: var(--grey);}
.gntb0jc_ .card .btn.gntb0jc:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);
background: var(--orange);
br: full;
padding: .375rem .75rem;
border: 1px solid var(--orange);
cursor: pointer;
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
outline: none;
user-select: none;}
.gntb0jc_ .card .btn.gntb0jc:not(#_):hover {color: var(--orange);}
.gntb0jc_ .card .btn.gntb0jc:not(#_):hover {background: hsla(0.00,0.00%,100.00%,0%);}


*/

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhcmQuaW1iYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFHLENBQUMsSUFBSTtRQUF2QjtxQkFFSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFFLEdBQUcsQ0FBRSxHQUFHO09BQzNCLE1BQU0sR0FBRyxDQUFDOztFQUhiO0NBS0EsV0FBVyxDQUFDLEVBQUU7O0VBQUcsa0JBQ2YsR0FBRyxFQUFFO0VBQUE7O0NBQU8sSUFFYjs7RUFBRyxrQkFBTSxHQUNSLFlBQU0sQ0FBQyxHQUFFLENBQUMsQ0FBQyxLQUFHLFNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBRyxXQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFBQTs7Q0FBTyxJQUNuRDs7RUFDQyxrQkFBTSxHQUFHLFlBQ0wsQ0FBQyxHQUFFLENBQUMsU0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFHLENBQUMsSUFBRyxXQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFBQTs7Q0FBTyxNQUFNOzs7Ozs7Y0FFM0MsK0NBQ1Y7a0NBQ0UsK0NBQUc7Ozs7RUFDSCxHQUFHLDZCQUNKLFNBQUk7T0FEQyxHQUFHO0dBQ0csR0FBRyxDQUFDLEdBQUcsa0JBQ1osR0FBRzt1REFBZSx1REFBRzs7SUFBTyxHQUNwQywrQ0FEb0MsR0FDcEM7U0FBYyxFQUFFLENBQUMsR0FBRSxDQUFDLFdBQU07MkRBQWxCLE1BQUk7O0dBQWlCOztFQUFNLEVBQUUsRUFBQyxTQUFJLENBQUMsTUFBTSxDQUFDLENBQ2xELENBQUMsQ0FBQzs7eURBQVEsc0RBQUc7Ozs7O0dBQ0wsR0FBRyw2QkFBWSxTQUNwQjtRQURTLEdBQUc7d0RBQ0YsZ0RBQUs7O1VBQ2QsRUFBRSxDQUFDLEdBQUUsQ0FBQyxXQUFNO3FEQXhCaEI7aUJBd0J5QixXQUFXLENBQUMsRUFBRSxDQUFDO0tBeEJ4Qzs7O21EQXVCd0IsUUFDdEI7O0lBQXVDO3lEQUFRLHVEQUFHOztpREF4QnBEO2dCQXlCc0MsSUFBSSxFQUFFO0lBekI1QztlQXlCc0QsNERBQUM7eURBQzdDLHVEQUFHOztpREExQmI7Z0JBMkJvQyxJQUFJLEVBQUU7SUEzQjFDO2VBMkJvRCwyREFBQztHQUFrQjs7OztjQUNsRSxvQ0FBSSxvQkFDVCxDQURPO2NBQ0QsbUNBQUcsNkxBQzhKLENBRGhLO2NBQ3NLLDRDQUFZLFdBQVcsQ0FBakI7OztFQUFpQjs7QUFrRS9LO0FBQUMiLCJmaWxlIjoiQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHRhZyBDYXJkXHJcblx0XHJcblx0cHJvcCBpbWdzID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiXVxyXG5cdHByb3AgYWN0aXZlID0gMFxyXG5cclxuXHRkZWYgY2hhbmdlU2xpZGUgaWRcclxuXHRcdGFjdGl2ZSA9IGlkXHJcblxyXG5cdGRlZiBwcmV2XHJcblx0XHRhY3RpdmUgPSBhY3RpdmUgaXMgMCA/IGltZ3MubGVuZ3RoIC0gMSA6IGFjdGl2ZSAtIDFcclxuXHJcblx0ZGVmIG5leHRcclxuXHRcdGFjdGl2ZSA9IGFjdGl2ZSBpcyBpbWdzLmxlbmd0aCAtIDEgPyAwIDogYWN0aXZlICsgMVxyXG5cclxuXHRkZWYgcmVuZGVyXHJcblx0XHQ8c2VsZj5cclxuXHRcdFx0PGRpdi5jYXJkPlxyXG5cdFx0XHRcdDxkaXYuaW1ncz5cclxuXHRcdFx0XHRcdGZvciBpbWcsIGlkIGluIGltZ3NcclxuXHRcdFx0XHRcdFx0bGV0IHVybCA9IFwidXJsKGltZ3Mve2ltZ30uanBnKVwiXHJcblx0XHRcdFx0XHRcdDxkaXZbYmdpOiB7dXJsfV0uaW1nIC5zaG93PShpZCBpcyBhY3RpdmUpID5cclxuXHRcdFx0XHRcdGlmIGltZ3MubGVuZ3RoID4gMVxyXG5cdFx0XHRcdFx0XHQ8ZGl2Lm5hdmlnYXRpb24+XHJcblx0XHRcdFx0XHRcdFx0Zm9yIGltZywgaWQgaW4gaW1nc1xyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsLmRvdCAuYWN0aXZlPShpZCBpcyBhY3RpdmUpIEBjbGljaz1jaGFuZ2VTbGlkZShpZCk+XHJcblx0XHRcdFx0XHRcdDxkaXZbcjogMCBicjogMTAwJSAwJSAwJSAxMDAlIC8gNTAlIDAlIDAlIDUwJV0uZ28gQGNsaWNrPW5leHQoKT5cclxuXHRcdFx0XHRcdFx0XHQ8aS5mYS5mYS1hbmdsZS1yaWdodD5cclxuXHRcdFx0XHRcdFx0PGRpdltsOiAwIGJyOiAwJSAxMDAlIDEwMCUgMCUgLyAwJSA1MCUgNTAlIDAlXS5nbyBAY2xpY2s9cHJldigpPlxyXG5cdFx0XHRcdFx0XHRcdDxpLmZhLmZhLWFuZ2xlLWxlZnQ+XHJcblx0XHRcdFx0PGgzPiBcIlNpc3RlbWEgSGlkcsOhdWxpY29cIlxyXG5cdFx0XHRcdDxwPiBcIlRlbXBvciBub24gYWxpcXVpcCBkbyBsYWJvcmlzIGFsaXF1YS4gTGFib3JlIGRvbG9yIHNpdCBsYWJvcmUgaW4gbmlzaSBmdWdpYXQgcXVpLiBPY2NhZWNhdCBtb2xsaXQgZWl1c21vZCBsYWJvcmUgdm9sdXB0YXRlIGFuaW0gaW4gY3VwaWRhdGF0IGRvIHJlcHJlaGVuZGVyaXQgZW5pbSBwcm9pZGVudCBlaXVzbW9kIGNpbGx1bS5cIlxyXG5cdFx0XHRcdDxidXR0b24uYnRuPiBcIkFkaWNpb25hclwiXHJcblxyXG5cdGNzc1xyXG5cdFx0LmNhcmRcclxuXHRcdFx0cDogMS41cmVtXHJcblxyXG5cdFx0XHQuaW1nc1xyXG5cdFx0XHRcdHBvczogcmVsYXRpdmVcdFx0XHRcdFxyXG5cdFx0XHRcdGg6IDMwMHB4XHJcblx0XHRcdFx0dzogMTAwJVxyXG5cdFx0XHRcdG1iOiAxLjVyZW1cclxuXHJcblx0XHRcdFx0LmltZ1xyXG5cdFx0XHRcdFx0cG9zOiBhYnNvbHV0ZVxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlclxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyXHJcblx0XHRcdFx0XHRzaXplOiAxMDAlXHJcblx0XHRcdFx0XHRhbmltYXRpb24tZHVyYXRpb246IDFzXHJcblx0XHRcdFx0XHRhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoXHJcblx0XHRcdFx0XHRvOiAwXHJcblxyXG5cdFx0XHRcdFx0QG5vdCguc2hvdylcclxuXHRcdFx0XHRcdFx0YW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRcclxuXHRcdFx0XHRcdFx0emk6IC0xXHJcblxyXG5cdFx0XHRcdC5zaG93XHJcblx0XHRcdFx0XHRhbmltYXRpb24tbmFtZTogZmFkZUluXHJcblxyXG5cdFx0XHRcdC5uYXZpZ2F0aW9uXHJcblx0XHRcdFx0XHRkOiBmbGV4XHJcblx0XHRcdFx0XHRwb3M6IGFic29sdXRlIGI6IDIwcHggbDogNTAlIHg6IC01MCVcclxuXHRcdFx0XHRcdHppOiAxXHJcblxyXG5cdFx0XHRcdFx0LmRvdFxyXG5cdFx0XHRcdFx0XHRteDogNnB4XHJcblx0XHRcdFx0XHRcdHNpemU6IDEwcHhcclxuXHRcdFx0XHRcdFx0YnI6IGZ1bGxcclxuXHRcdFx0XHRcdFx0Ymc6IHdoaXRlIEBob3ZlcjogJG9yYW5nZVxyXG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXJcclxuXHRcdFx0XHRcdFx0dHdlZW46IC4zNXNcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcdC5hY3RpdmVcclxuXHRcdFx0XHRcdFx0Ymc6ICRvcmFuZ2VcclxuXHJcblx0XHRcdFx0LmdvXHJcblx0XHRcdFx0XHRwb3M6IGFic29sdXRlIHQ6MCBiOiAwXHJcblx0XHRcdFx0XHR3OiA0MHB4XHJcblx0XHRcdFx0XHR0d2VlbjogLjM1c1xyXG5cdFx0XHRcdFx0YmdAaG92ZXI6IHdoaXRlLzIwXHJcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXJcclxuXHRcdFx0XHRcdGQ6IGZsZXggYWk6IGNlbnRlciBqYzogY2VudGVyXHJcblx0XHRcdFx0XHRmczogMS41cmVtXHJcblx0XHRcdFx0XHRjOiB3aGl0ZS81MCBAaG92ZXI6IHdoaXRlXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0aDNcdFxyXG5cdFx0XHRcdGZzOiAxLjVyZW1cclxuXHRcdFx0XHRjOiBibGFjay84MFxyXG5cclxuXHRcdFx0cFxyXG5cdFx0XHRcdGM6ICRncmV5XHJcblxyXG5cdFx0XHQuYnRuXHJcblx0XHRcdFx0Yzogd2hpdGUgQGhvdmVyOiAkb3JhbmdlXHJcblx0XHRcdFx0Ymc6ICRvcmFuZ2UgQGhvdmVyOiB0cmFuc3BhcmVudFxyXG5cdFx0XHRcdGJyOiBmdWxsXHJcblx0XHRcdFx0cDogLjM3NXJlbSAuNzVyZW1cclxuXHRcdFx0XHRiZDogMXB4IHNvbGlkICRvcmFuZ2VcclxuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXJcdFx0XHJcblx0XHRcdFx0dHdlZW46IC4zNXNcdFxyXG5cdFx0XHRcdG91dGxpbmU6IG5vbmVcclxuXHRcdFx0XHR1czogbm9uZSJdfQ==