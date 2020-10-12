import '../../../web_modules/imba/dist/imba.js';
var $d = Symbol(), $g = Symbol(), $h = Symbol(), $i = Symbol(), $j = Symbol(), $k = Symbol(), $l = Symbol(), $m = Symbol();

export default class FadeInUp extends imba.tags.get('component','ImbaElement') {
	init$(){
		super.init$();this.delay = 0;
		
	}
	mount(){
		var self = this;
		
		this.observer = new IntersectionObserver(function(entries) {
			
			return entries.forEach(function(entrie) {
				
				if (entrie.isIntersecting) {
					
					self.animating = true;
					return self.render();
				};
			});
		});
		return this.observer.observe(this.$item);
	}
	
	unmount(){
		
		return this.observer.disconnect();
	}
	
	render(){
		var $1t, $1b, $1d, $1v, $0 = this._ns_ || '', $2t, $2b, $2d, $2v, $3t;
		
		$1t=this;
		$1t.open$();
		($1b=$1d=1,$1t[$d] === 1) || ($1b=$1d=0,$1t[$d]=1);
		($1v=(this.flb||undefined),$1v===$1t[$h]||($1d|=2,$1t[$h]=$1v));
		((!$1b||$1d&2) && $1t.flagSelf$(($1t[$h] ? 'ktq4g5bc' : '')));
		($2b=$2d=1,$2t=$1t[$i]) || ($2b=$2d=0,$1t[$i]=$2t=this.$item = imba.createElement('div',$1t,`ktq4g5be ${$0} item ref--item`,null));
		($2v=this.delay + .1,$2v===$1t[$j] || ($2t.css$var('--ktq4g5f',$1t[$j]=$2v,'s','animation-delay')));
		($2v=(this.animating||undefined),$2v===$1t[$l]||($2d|=2,$1t[$l]=$2v));
		($2d&2 && $2t.flag$(`ktq4g5be ${$0} item ref--item`+' '+($1t[$l] ? `fadeInUp` : '')));
		$3t=$1t.__slots.__;
		($1t[$m] = $2t.insert$($3t,384,$1t[$m]));
		$1t.close$($1d);
		return $1t;
	}
	
}; imba.tags.define('fade-in-up-ktq4g5',FadeInUp,{ns: 'ktq4g5b'});

imba.inlineStyles(".ktq4g5bc:not(#_):not(#_) {flex-basis: 100%;}\n\n.ktq4g5be:not(#_):not(#_) {width: 100%;\nheight: 100%;\nanimation-delay: var(--ktq4g5f);}\n\n\n.ktq4g5b_ .fadeInUp.ktq4g5b:not(#_) {animation: var(--animation-fadeInUp,fadeInUp) 1s;\nanimation-fill-mode: both;}\n\n",'ktq4g5');
/*
.ktq4g5bc:not(#_):not(#_) {flex-basis: 100%;}

.ktq4g5be:not(#_):not(#_) {width: 100%;
height: 100%;
animation-delay: var(--ktq4g5f);}


.ktq4g5b_ .fadeInUp.ktq4g5b:not(#_) {animation: var(--animation-fadeInUp,fadeInUp) 1s;
animation-fill-mode: both;}


*/

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZhZGVJblVwLmltYmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFHLENBQUMsUUFBUTtRQUEzQjtxQkFFSSxLQUFLLEdBQUcsQ0FBQzs7RUFGYjtDQUlDLEtBQUs7OztFQUFHLGFBQ0osR0FBTyxHQUFELENBQUMsb0JBQW9CLENBQUksUUFBRSxDQUFFLE9BQU8sRUFBQzs7R0FBSSxjQUNoRCxDQUFDLE9BQU8sQ0FBQyxRQUFFLENBQUUsTUFBTSxFQUFDOztJQUFLLEVBQUUsRUFDL0IsTUFBTSxDQUFDLGNBQWM7O0tBQU0sY0FDckIsR0FBRyxJQUFJO2lCQUFPLE1BQ2xCLEVBQUU7S0FBQTtJQUFBO0dBQUEsQ0FKK0I7RUFJNUIsb0JBQ1AsQ0FBQyxPQUFPLENBQUMsVUFBSyxDQUFDO0VBQUE7O0NBQU8sT0FFdEI7O0VBQUcsb0JBQVEsQ0FBQyxVQUNKLEVBQUU7RUFBQTs7Q0FBTyxNQUFNOzs7Ozs7UUFHbkIsUUFBRzs7eURBQVMsS0FBSyxHQUFSLGtFQUFHO09BQ1MsVUFBSyxFQUFDLEdBQUU7UUFBZSxjQUFTO3FFQUFuQixVQUFROzs7OztFQUF3Qjs7QUFNakU7QUFBQyIsImZpbGUiOiJGYWRlSW5VcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHRhZyBGYWRlSW5VcFxyXG5cclxuXHRwcm9wIGRlbGF5ID0gMFxyXG5cclxuXHRkZWYgbW91bnRcclxuXHRcdG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKCYpIGRvIHxlbnRyaWVzfFxyXG5cdFx0XHRlbnRyaWVzLmZvckVhY2ggZG8gfGVudHJpZXxcclxuXHRcdFx0XHRpZiBlbnRyaWUuaXNJbnRlcnNlY3RpbmdcclxuXHRcdFx0XHRcdGFuaW1hdGluZyA9IHRydWUgXHJcblx0XHRcdFx0XHRyZW5kZXIoKVxyXG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZSgkaXRlbSlcclxuXHJcblx0ZGVmIHVubW91bnRcclxuXHRcdG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxyXG5cclxuXHRkZWYgcmVuZGVyXHJcblx0XHQ8c2VsZiBbZmxiOiAxMDAlXT1mbGI+XHJcblx0XHRcdDxkaXYkaXRlbVtzaXplOiAxMDAlIGFuaW1hdGlvbi1kZWxheToge2RlbGF5Ky4xfXNdIC5mYWRlSW5VcD0oYW5pbWF0aW5nKT5cclxuXHRcdFx0XHQ8c2xvdD5cclxuXHJcblx0Y3NzXHJcblx0XHQuZmFkZUluVXBcclxuXHRcdFx0YW5pbWF0aW9uOiBmYWRlSW5VcCAxc1xyXG5cdFx0XHRhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoIl19