import '../../../web_modules/imba/dist/imba.js';
var $b = Symbol(), $h = Symbol(), $i = Symbol(), $j = Symbol(), $k = Symbol(), $l = Symbol(), $m = Symbol(), $n = Symbol(), $o = Symbol(), $p = Symbol(), $q = Symbol();

export default class Slider extends imba.tags.get('component','ImbaElement') {
	init$(){
		super.init$();this.slideCount = 4;
		this.active = 1;
		this.timer = undefined;
		
	}
	prev(){
		
		clearTimeout(this.timer);
		this.active = (this.active === 1) ? this.slideCount : (this.active - 1);
		return this.mount();
	}
	
	next(){
		
		clearTimeout(this.timer);
		this.active = (this.active === this.slideCount) ? 1 : (this.active + 1);
		return this.mount();
	}
	
	changeSlide(id){
		
		clearTimeout(this.timer);
		this.active = id;
		return this.mount();
	}
	
	autoChangeSlide(){
		var self = this;
		
		return this.timer = setTimeout(function() {
			
			self.active = (self.active === self.slideCount) ? 1 : (self.active + 1);
			self.render();
			return self.mount();
		},5000);
	}
	
	mount(){
		
		return this.autoChangeSlide();
	}
	
	unmount(){
		
		return clearTimeout(this.timer);
	}
	
	render(){
		var self = this, $1t, $1b, $1d, $0 = this._ns_ || '', $2t, $3t, $3k, $3c, $4t, $4b, $4d, $4v, $5t, $6t, $7t, $4k, $4c, $5b, $5d, $5v;
		
		$1t=this;
		$1t.open$();
		($1b=$1d=1,$1t[$b] === 1) || ($1b=$1d=0,$1t[$b]=1);
		($2t = $1t[$h]) || ($1t[$h]=$2t=imba.createElement('div',$1t,`slider ${$0}`,null));
		($3t = $1t[$i]) || ($1t[$i]=$3t=imba.createIndexedFragment(128,$2t));
		$3k = 0;
		$3c=$3t.$;
		for (let len = this.slideCount, id = 1, rd = len - id; (rd > 0) ? (id <= len) : (id >= len); (rd > 0) ? (id++) : (id--)) {
			
			let img = ("url(imgs/home" + id + ".jpg)");
			($4b=$4d=1,$4t=$3c[$3k]) || ($4b=$4d=0,$3c[$3k]=$4t=imba.createElement('div',$3t,`q7abtkcd slide ${$0}`,null));
			$4b||($4t.up$=$3t);
			(img===$4t[$j] || ($4t.css$var('--q7abtke',$4t[$j]=img,null,'bgi')));
			($4v=(id === this.active||undefined),$4v===$4t[$l]||($4d|=2,$4t[$l]=$4v));
			($4d&2 && $4t.flag$(`q7abtkcd slide ${$0}`+' '+($4t[$l] ? `show` : '')));
			$4b || ($5t=imba.createElement('div',$4t,`filter ${$0}`,null));
			$4b || ($5t=imba.createElement('div',$4t,`container ${$0}`,null));
			$4b || ($6t=imba.createElement('div',$5t,`wrapper ${$0}`,null));
			$4b || ($7t=imba.createElement('h1',$6t,`${$0}`,"Montagem e Equipamentos Industriais"));
			$4b || ($7t=imba.createElement('p',$6t,`${$0}`,"Anim eiusmod cillum officia fugiat incididunt labore."));
			$4b || ($7t=imba.createElement('button',$6t,`btn ${$0}`,"Peça um orçamento"));
			$3k++;
		};$3t.end$($3k);
		($3t = $1t[$m]) || ($1t[$m]=$3t=imba.createElement('div',$2t,`navigation ${$0}`,null));
		($4t = $1t[$n]) || ($1t[$n]=$4t=imba.createIndexedFragment(384,$3t));
		$4k = 0;
		$4c=$4t.$;
		for (let len = this.slideCount, id = 1, rd = len - id; (rd > 0) ? (id <= len) : (id >= len); (rd > 0) ? (id++) : (id--)) {
			
			($5b=$5d=1,$5t=$4c[$4k]) || ($5b=$5d=0,$4c[$4k]=$5t=imba.createElement('label',$4t,`dot ${$0}`,null));
			$5b||($5t.up$=$4t);
			($5v=(id === this.active||undefined),$5v===$5t[$p]||($5d|=2,$5t[$p]=$5v));
			$5v = $5t[$q] || ($5t[$q]={$_: [function(e,$,_2) {
				return self.changeSlide(_2);
			},null]});
			$5v.$_[1]=id;
			$5b || $5t.on$(`click`,$5v,this);
			($5d&2 && $5t.flag$(`dot ${$0}`+' '+($5t[$p] ? `active` : '')));
			$4k++;
		};$4t.end$($4k);
		$1b || ($3t=imba.createElement('div',$2t,`q7abtkcf go ${$0}`,null));
		$1b || ($3t.on$(`click`,{$_: [function(e,$) {
			return self.next();
		}]},this));
		$1b || ($4t=imba.createElement('i',$3t,`fa fa-angle-right ${$0}`,null));
		$1b || ($3t=imba.createElement('div',$2t,`q7abtkcg go ${$0}`,null));
		$1b || ($3t.on$(`click`,{$_: [function(e,$) {
			return self.prev();
		}]},this));
		$1b || ($4t=imba.createElement('i',$3t,`fa fa-angle-left ${$0}`,null));
		$1t.close$($1d);
		return $1t;
	}
	
}; imba.tags.define('slider-q7abtk',Slider,{ns: 'q7abtkc'});

imba.inlineStyles(".q7abtkcd:not(#_):not(#_) {background-image: var(--q7abtke);}\n\n.q7abtkcf:not(#_):not(#_) {right: 0rem;\nbr: 100% 0% 0% 100% / 50% 0% 0% 50%;}\n\n.q7abtkcg:not(#_):not(#_) {left: 0rem;\nbr: 0% 100% 100% 0% / 0% 50% 50% 0%;}\n\n\n.q7abtkc_ .slider.q7abtkc:not(#_) {position: relative;\nheight: calc(100vh - 4rem);\nanimation: var(--animation-fadeIn,fadeIn) 1s;}\n.q7abtkc_ .slider .show.q7abtkc:not(#_) {animation-name: var(--animation-fadeIn,fadeIn);}\n.q7abtkc_ .slider .slide.q7abtkc:not(#_) {width: 100%;\nheight: 100%;\nanimation-duration: 1s;\nanimation-fill-mode: both;\nbackground-size: cover;\nbackground-position: center;\nposition: absolute;\nopacity: 0;}\n.q7abtkc_ .slider .slide.q7abtkc:not(#_):not(.show) {animation-name: var(--animation-fadeOut,fadeOut);\nz-index: -1;}\n.q7abtkc_ .slider .slide .filter.q7abtkc:not(#_) {position: absolute;\ntop: 0rem;\nleft: 0rem;\nbottom: 0rem;\nright: 0rem;\nopacity: 0.8;\nbackground: linear-gradient(45deg, #0d1128 0%, #fd6100 100%);}\n.q7abtkc_ .slider .slide .container.q7abtkc:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);\nposition: absolute;\nheight: 100%;\ndisplay: flex;\njustify-content: center;\nflex-direction: column;}\n.q7abtkc_ .slider .slide .container .wrapper.q7abtkc:not(#_) {width: 50%;}\n.q7abtkc_ .slider .slide .container .wrapper p.q7abtkc:not(#_) {color: hsla(0.00,0.00%,100.00%,90%);}\n.q7abtkc_ .slider .slide .container .wrapper .btn.q7abtkc:not(#_) {margin-top: 1rem;\ncolor: hsla(0.00,0.00%,100.00%,100%);\nbackground: var(--orange);\nbr: full;\npadding: 1rem 1.5rem;\nborder: 1px solid var(--orange);\ncursor: pointer;\ntransition: none .35s;\ntransition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;\noutline: none;\nuser-select: none;}\n.q7abtkc_ .slider .slide .container .wrapper .btn.q7abtkc:not(#_):hover {color: var(--orange);}\n.q7abtkc_ .slider .slide .container .wrapper .btn.q7abtkc:not(#_):hover {background: hsla(0.00,0.00%,100.00%,0%);}\n.q7abtkc_ .slider .navigation.q7abtkc:not(#_) {--t_x:0;--t_y:0;--t_z:0;--t_rotate:0;--t_scale:1;--t_scale-x:1;--t_scale-y:1;--t_skew-x:0;--t_skew-y:0;\ntransform: translate3d(var(--t_x),var(--t_y),var(--t_z)) rotate(var(--t_rotate)) skewX(var(--t_skew-x)) skewY(var(--t_skew-y)) scaleX(var(--t_scale-x)) scaleY(var(--t_scale-y)) scale(var(--t_scale));\ndisplay: flex;\nposition: absolute;\nbottom: 20px;\nleft: 50%;\n--t_x: -50% !important;\nz-index: 1;}\n.q7abtkc_ .slider .navigation .dot.q7abtkc:not(#_) {margin-left: 6px;\nmargin-right: 6px;\nwidth: 10px;\nheight: 10px;\nbr: full;\nbackground: hsla(0.00,0.00%,100.00%,100%);\ncursor: pointer;\ntransition: none .35s;\ntransition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;}\n.q7abtkc_ .slider .navigation .dot.q7abtkc:not(#_):hover {background: var(--orange);}\n.q7abtkc_ .slider .navigation .active.q7abtkc:not(#_) {background: var(--orange);}\n.q7abtkc_ .slider .go.q7abtkc:not(#_) {position: absolute;\ntop: 0rem;\nbottom: 0rem;\nwidth: 75px;\ntransition: none .35s;\ntransition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;\ncursor: pointer;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nfont-size: 2rem;\ncolor: hsla(0.00,0.00%,100.00%,50%);}\n.q7abtkc_ .slider .go.q7abtkc:not(#_):hover {background: hsla(0.00,0.00%,100.00%,20%);}\n.q7abtkc_ .slider .go.q7abtkc:not(#_):hover {color: hsla(0.00,0.00%,100.00%,100%);}\n\n",'q7abtk');
/*
.q7abtkcd:not(#_):not(#_) {background-image: var(--q7abtke);}

.q7abtkcf:not(#_):not(#_) {right: 0rem;
br: 100% 0% 0% 100% / 50% 0% 0% 50%;}

.q7abtkcg:not(#_):not(#_) {left: 0rem;
br: 0% 100% 100% 0% / 0% 50% 50% 0%;}


.q7abtkc_ .slider.q7abtkc:not(#_) {position: relative;
height: calc(100vh - 4rem);
animation: var(--animation-fadeIn,fadeIn) 1s;}
.q7abtkc_ .slider .show.q7abtkc:not(#_) {animation-name: var(--animation-fadeIn,fadeIn);}
.q7abtkc_ .slider .slide.q7abtkc:not(#_) {width: 100%;
height: 100%;
animation-duration: 1s;
animation-fill-mode: both;
background-size: cover;
background-position: center;
position: absolute;
opacity: 0;}
.q7abtkc_ .slider .slide.q7abtkc:not(#_):not(.show) {animation-name: var(--animation-fadeOut,fadeOut);
z-index: -1;}
.q7abtkc_ .slider .slide .filter.q7abtkc:not(#_) {position: absolute;
top: 0rem;
left: 0rem;
bottom: 0rem;
right: 0rem;
opacity: 0.8;
background: linear-gradient(45deg, #0d1128 0%, #fd6100 100%);}
.q7abtkc_ .slider .slide .container.q7abtkc:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);
position: absolute;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;}
.q7abtkc_ .slider .slide .container .wrapper.q7abtkc:not(#_) {width: 50%;}
.q7abtkc_ .slider .slide .container .wrapper p.q7abtkc:not(#_) {color: hsla(0.00,0.00%,100.00%,90%);}
.q7abtkc_ .slider .slide .container .wrapper .btn.q7abtkc:not(#_) {margin-top: 1rem;
color: hsla(0.00,0.00%,100.00%,100%);
background: var(--orange);
br: full;
padding: 1rem 1.5rem;
border: 1px solid var(--orange);
cursor: pointer;
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
outline: none;
user-select: none;}
.q7abtkc_ .slider .slide .container .wrapper .btn.q7abtkc:not(#_):hover {color: var(--orange);}
.q7abtkc_ .slider .slide .container .wrapper .btn.q7abtkc:not(#_):hover {background: hsla(0.00,0.00%,100.00%,0%);}
.q7abtkc_ .slider .navigation.q7abtkc:not(#_) {--t_x:0;--t_y:0;--t_z:0;--t_rotate:0;--t_scale:1;--t_scale-x:1;--t_scale-y:1;--t_skew-x:0;--t_skew-y:0;
transform: translate3d(var(--t_x),var(--t_y),var(--t_z)) rotate(var(--t_rotate)) skewX(var(--t_skew-x)) skewY(var(--t_skew-y)) scaleX(var(--t_scale-x)) scaleY(var(--t_scale-y)) scale(var(--t_scale));
display: flex;
position: absolute;
bottom: 20px;
left: 50%;
--t_x: -50% !important;
z-index: 1;}
.q7abtkc_ .slider .navigation .dot.q7abtkc:not(#_) {margin-left: 6px;
margin-right: 6px;
width: 10px;
height: 10px;
br: full;
background: hsla(0.00,0.00%,100.00%,100%);
cursor: pointer;
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;}
.q7abtkc_ .slider .navigation .dot.q7abtkc:not(#_):hover {background: var(--orange);}
.q7abtkc_ .slider .navigation .active.q7abtkc:not(#_) {background: var(--orange);}
.q7abtkc_ .slider .go.q7abtkc:not(#_) {position: absolute;
top: 0rem;
bottom: 0rem;
width: 75px;
transition: none .35s;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
font-size: 2rem;
color: hsla(0.00,0.00%,100.00%,50%);}
.q7abtkc_ .slider .go.q7abtkc:not(#_):hover {background: hsla(0.00,0.00%,100.00%,20%);}
.q7abtkc_ .slider .go.q7abtkc:not(#_):hover {color: hsla(0.00,0.00%,100.00%,100%);}


*/

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNsaWRlci5pbWJhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBRyxDQUFDLE1BQU07UUFBekI7cUJBRUksVUFBVSxHQUFHLENBQUM7T0FDZixNQUFNLEdBQUcsQ0FBQztPQUNYLEtBQUs7O0VBSlA7Q0FLQyxJQUNFOztFQUFHLFlBQ0MsQ0FBQyxVQUFLLENBQUM7RUFBRyxXQUNqQixHQUFHLFlBQU0sQ0FBQyxHQUFFLENBQUMsQ0FBQyxJQUFHLGVBQVUsSUFBRyxXQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FBRyxLQUFLLEVBQ2hEO0VBQUE7O0NBQU8sSUFDUDs7RUFDQyxZQUNDLENBQUMsVUFBSyxDQUFDO0VBQUcsV0FBTSxHQUFHLFlBQ2pCLENBQUMsR0FBRSxDQUFDLGVBQVUsSUFBRyxDQUFDLElBQUcsV0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2NBQUcsS0FBSyxFQUFFO0VBQUE7O0NBQzNDLFdBRUYsQ0FBQyxFQUFFOztFQUFHLFlBQVksQ0FBQyxVQUNoQixDQUFDO0VBQUcsV0FBTSxHQUFHLEVBQUU7Y0FBRyxLQUNsQixFQUFFO0VBQUE7O0NBQU8sZUFFWDs7O0VBQ0MsaUJBQUssR0FBRyxVQUFVLENBQ1osUUFBRTs7R0FBSSxXQUFNLEdBQUcsWUFBTSxDQUFDLEdBQUUsQ0FBQyxlQUN4QixJQUFHLENBQUMsSUFBRyxXQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBTSxNQUFNLEVBQUU7ZUFBSSxLQUFLLEVBQUU7R0FBQSxDQURqRCxJQUFJLENBQUM7RUFDNEM7O0NBQzlDLEtBQUs7O2NBQ1YsZUFFQyxFQUFFO0VBQUE7O0NBQU8sT0FDTCxFQUFDOztFQUFHLG1CQUNULENBQUMsVUFDRyxDQUFDO0VBQUE7O0NBQU8sTUFDVDs7Ozs7O2tDQUFjLGlEQUFHOzs7O0VBRVosR0FBRyxZQUVWLGVBQVUsT0FETCxDQUFDLG1GQUNLOztHQUNYLEdBQUcsQ0FBQyxHQUFHLHNCQUFrQixFQUFFO3VEQUNuQix5REFBRzs7SUFBTyxHQUFHLCtDQUFILEdBQUc7U0FBZ0IsRUFBRSxDQUN4QyxHQUFFLENBQUMsV0FBTTs2REFEdUIsTUFBSTtlQUNqQixpREFBRztlQUFnQixvREFBRztlQUMvQixrREFBRztlQUNELG9DQUFJLHFDQUVSLENBRk07ZUFFSSxtQ0FBRyx1REFDRyxDQURMO2VBQ2UsNENBQVksbUJBQW1CLENBQXpCOztHQUF5QjtrQ0FDOUQscURBQUc7Ozs7RUFBa0IsR0FBRyxZQUFhLGVBRWxDLE9BRjZCLENBQUMsbUZBRTdCOzt1REFBUSxnREFBSzs7U0FDUixFQUFFLENBQUMsR0FBRSxDQUFDLFdBQU07b0RBL0N4QjtnQkErQ2lDLFdBQ3ZCLENBQUMsRUFBRSxDQUFDO0lBaERkOzs7a0RBK0NJLFFBQU07O0dBQ0s7Y0FBTyxzREFBRzs4Q0FoRHpCO2VBa0RXLElBQUksRUFBRTtHQWxEakI7Y0FrRHlCLDBEQUFDO2NBQXlCLHNEQUFHOzhDQWxEdEQ7ZUFvRFMsSUFBSSxFQUFFO0dBcERmO2NBb0R1Qix5REFBQzs7O0VBQWtCOztBQXlFaEM7QUFBQyIsImZpbGUiOiJTbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB0YWcgU2xpZGVyXHJcblxyXG5cdHByb3Agc2xpZGVDb3VudCA9IDRcclxuXHRwcm9wIGFjdGl2ZSA9IDFcclxuXHRwcm9wIHRpbWVyXHJcblxyXG5cdGRlZiBwcmV2XHJcblx0XHRjbGVhclRpbWVvdXQodGltZXIpXHJcblx0XHRhY3RpdmUgPSBhY3RpdmUgaXMgMSA/IHNsaWRlQ291bnQgOiBhY3RpdmUgLSAxXHJcblx0XHRtb3VudCgpXHJcblxyXG5cdGRlZiBuZXh0XHJcblx0XHRjbGVhclRpbWVvdXQodGltZXIpXHJcblx0XHRhY3RpdmUgPSBhY3RpdmUgaXMgc2xpZGVDb3VudCA/IDEgOiBhY3RpdmUgKyAxXHJcblx0XHRtb3VudCgpXHJcblxyXG5cdGRlZiBjaGFuZ2VTbGlkZSBpZFxyXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVyKVxyXG5cdFx0YWN0aXZlID0gaWRcclxuXHRcdG1vdW50KClcclxuXHJcblx0ZGVmIGF1dG9DaGFuZ2VTbGlkZVxyXG5cdFx0dGltZXIgPSBzZXRUaW1lb3V0KCYsIDUwMDApIGRvXHJcblx0XHRcdGFjdGl2ZSA9IGFjdGl2ZSBpcyBzbGlkZUNvdW50ID8gMSA6IGFjdGl2ZSArIDFcdFx0XHJcblx0XHRcdHJlbmRlcigpXHJcblx0XHRcdG1vdW50KClcclxuXHJcblx0ZGVmIG1vdW50XHJcblx0XHRhdXRvQ2hhbmdlU2xpZGUoKVxyXG5cclxuXHRkZWYgdW5tb3VudCBcclxuXHRcdGNsZWFyVGltZW91dCh0aW1lcilcclxuXHJcblx0ZGVmIHJlbmRlclxyXG5cdFx0PHNlbGY+XHJcblx0XHRcdDxkaXYuc2xpZGVyPlxyXG5cdFx0XHRcdGZvciBpZCBpbiBbMSAuLiBzbGlkZUNvdW50XVxyXG5cdFx0XHRcdFx0bGV0IGltZyA9IFwidXJsKGltZ3MvaG9tZXtpZH0uanBnKVwiXHJcblx0XHRcdFx0XHQ8ZGl2W2JnaToge2ltZ31dLnNsaWRlIC5zaG93PShpZCBpcyBhY3RpdmUpPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2LmZpbHRlcj5cclxuXHRcdFx0XHRcdFx0PGRpdi5jb250YWluZXI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdi53cmFwcGVyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGgxPiBcIk1vbnRhZ2VtIGUgRXF1aXBhbWVudG9zIEluZHVzdHJpYWlzXCJcclxuXHRcdFx0XHRcdFx0XHRcdDxwPiBcIkFuaW0gZWl1c21vZCBjaWxsdW0gb2ZmaWNpYSBmdWdpYXQgaW5jaWRpZHVudCBsYWJvcmUuXCJcclxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24uYnRuPiBcIlBlw6dhIHVtIG9yw6dhbWVudG9cIlxyXG5cclxuXHRcdFx0XHQ8ZGl2Lm5hdmlnYXRpb24+XHJcblx0XHRcdFx0XHRmb3IgaWQgaW4gWzEgLi4gc2xpZGVDb3VudF1cclxuXHRcdFx0XHRcdFx0PGxhYmVsLmRvdCAuYWN0aXZlPShpZCBpcyBhY3RpdmUpIEBjbGljaz1jaGFuZ2VTbGlkZShpZCk+XHJcblxyXG5cdFx0XHRcdDxkaXZbcjogMCBicjogMTAwJSAwJSAwJSAxMDAlIC8gNTAlIDAlIDAlIDUwJV0uZ28gQGNsaWNrPW5leHQoKT5cclxuXHRcdFx0XHRcdDxpLmZhLmZhLWFuZ2xlLXJpZ2h0PlxyXG5cdFx0XHRcdDxkaXZbbDogMCBicjogMCUgMTAwJSAxMDAlIDAlIC8gMCUgNTAlIDUwJSAwJV0uZ28gQGNsaWNrPXByZXYoKT5cclxuXHRcdFx0XHRcdDxpLmZhLmZhLWFuZ2xlLWxlZnQ+XHJcblxyXG5cdGNzc1xyXG5cdFx0LnNsaWRlclxyXG5cdFx0XHRwb3M6IHJlbGF0aXZlXHJcblx0XHRcdGg6IGNhbGMoMTAwdmggLSA0cmVtKVx0XHRcclxuXHRcdFx0YW5pbWF0aW9uOiBmYWRlSW4gMXNcclxuXHRcdFxyXG5cdFx0XHQuc2hvd1xyXG5cdFx0XHRcdGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5cclxuXHJcblx0XHRcdC5zbGlkZVxyXG5cdFx0XHRcdHNpemU6IDEwMCVcclxuXHRcdFx0XHRhbmltYXRpb24tZHVyYXRpb246IDFzXHJcblx0XHRcdFx0YW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aFxyXG5cdFx0XHRcdGJnczogY292ZXJcclxuXHRcdFx0XHRiZ3A6IGNlbnRlclxyXG5cdFx0XHRcdHBvczogYWJzb2x1dGVcclxuXHRcdFx0XHRvOiAwXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0QG5vdCguc2hvdylcclxuXHRcdFx0XHRcdGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0XHJcblx0XHRcdFx0XHR6aTogLTFcclxuXHRcdFx0XHJcblx0XHRcdFx0LmZpbHRlclxyXG5cdFx0XHRcdFx0cG9zOiBhYnNvbHV0ZSB0OiAwIGw6IDAgYjogMCByOiAwXHJcblx0XHRcdFx0XHRvOiAuOFxyXG5cdFx0XHRcdFx0Ymc6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzBkMTEyOCAwJSwgI2ZkNjEwMCAxMDAlKVxyXG5cclxuXHRcdFx0XHQuY29udGFpbmVyXHJcblx0XHRcdFx0XHRjOiB3aGl0ZVxyXG5cdFx0XHRcdFx0cG9zOiBhYnNvbHV0ZVxyXG5cdFx0XHRcdFx0aDogMTAwJVxyXG5cdFx0XHRcdFx0ZDogZmxleCBqYzogY2VudGVyIGZsZDogY29sdW1uXHJcblxyXG5cdFx0XHRcdFx0LndyYXBwZXJcclxuXHRcdFx0XHRcdFx0dzogNTAlXHJcblxyXG5cdFx0XHRcdFx0XHRwXHJcblx0XHRcdFx0XHRcdFx0Yzogd2hpdGUvOTBcclxuXHJcblx0XHRcdFx0XHRcdC5idG5cclxuXHRcdFx0XHRcdFx0XHRtdDogMXJlbVxyXG5cdFx0XHRcdFx0XHRcdGM6IHdoaXRlIEBob3ZlcjogJG9yYW5nZVxyXG5cdFx0XHRcdFx0XHRcdGJnOiAkb3JhbmdlIEBob3ZlcjogdHJhbnNwYXJlbnRcclxuXHRcdFx0XHRcdFx0XHRicjogZnVsbFxyXG5cdFx0XHRcdFx0XHRcdHA6IDFyZW0gMS41cmVtXHJcblx0XHRcdFx0XHRcdFx0YmQ6IDFweCBzb2xpZCAkb3JhbmdlXHJcblx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyXHRcdFxyXG5cdFx0XHRcdFx0XHRcdHR3ZWVuOiAuMzVzXHRcclxuXHRcdFx0XHRcdFx0XHRvdXRsaW5lOiBub25lXHJcblx0XHRcdFx0XHRcdFx0dXM6IG5vbmVcclxuXHJcblx0XHRcdC5uYXZpZ2F0aW9uXHJcblx0XHRcdFx0ZDogZmxleFxyXG5cdFx0XHRcdHBvczogYWJzb2x1dGUgYjogMjBweCBsOiA1MCUgeDogLTUwJVxyXG5cdFx0XHRcdHppOiAxXHJcblxyXG5cdFx0XHRcdC5kb3RcclxuXHRcdFx0XHRcdG14OiA2cHhcclxuXHRcdFx0XHRcdHNpemU6IDEwcHhcclxuXHRcdFx0XHRcdGJyOiBmdWxsXHJcblx0XHRcdFx0XHRiZzogd2hpdGUgQGhvdmVyOiAkb3JhbmdlXHJcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXJcclxuXHRcdFx0XHRcdHR3ZWVuOiAuMzVzXHJcblx0XHRcdFxyXG5cdFx0XHRcdC5hY3RpdmVcclxuXHRcdFx0XHRcdGJnOiAkb3JhbmdlXHJcblx0XHRcdFxyXG5cdFx0XHQuZ29cclxuXHRcdFx0XHRwb3M6IGFic29sdXRlIHQ6MCBiOiAwXHJcblx0XHRcdFx0dzogNzVweFxyXG5cdFx0XHRcdHR3ZWVuOiAuMzVzXHJcblx0XHRcdFx0YmdAaG92ZXI6IHdoaXRlLzIwXHJcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyXHJcblx0XHRcdFx0ZDogZmxleCBhaTogY2VudGVyIGpjOiBjZW50ZXJcclxuXHRcdFx0XHRmczogMnJlbVxyXG5cdFx0XHRcdGM6IHdoaXRlLzUwIEBob3Zlcjogd2hpdGVcclxuXHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0Il19