import '../../../web_modules/imba/dist/imba.js';
var $b = Symbol(), $d = Symbol();

import FadeInUp from './FadeInUp.js';

export default class Parallax extends imba.tags.get('component','ImbaElement') {
	
	render(){
		var $1t, $1b, $1d, $0 = this._ns_ || '', $2t, $3t, $4t, $4b, $4d, $eSt, $5t, $6t;
		
		$1t=this;
		$1t.open$();
		($1b=$1d=1,$1t[$b] === 1) || ($1b=$1d=0,$1t[$b]=1);
		$1b || ($2t=imba.createElement('div',$1t,`parallax ${$0}`,null));
		$1b || ($3t=imba.createElement('div',$2t,`filter ${$0}`,null));
		$1b || ($3t=imba.createElement('div',$2t,`container ${$0}`,null));
		$1b || ($4t=imba.createElement('iframe',$3t,`map ${$0}`,null));
		$1b || ($4t.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1056.1157327774918!2d-52.6248829023278!3d-27.082707942470464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4b5d3b1b49285%3A0x8a0c309b92417f3!2sR.%20Princesa%20Isabel%2C%20192%20-%20S%C3%A3o%20Crist%C3%B3v%C3%A3o%2C%20Chapec%C3%B3%20-%20SC%2C%2089813-160!5e0!3m2!1spt-BR!2sbr!4v1601341415373!5m2!1spt-BR!2sbr");
		$1b || ($4t.frameborder="0");
		$1b || ($4t.style="border:0;");
		$1b || ($4t.allowfullscreen="");
		$1b || ($4t.set$('aria-hidden',"false"));
		$1b || ($4t.tabindex="0");
		($4b=$4d=1,$4t=$1t[$d]) || ($4b=$4d=0,$1t[$d]=$4t=imba.createComponent(FadeInUp,$3t,`${$0}`,null));
		$eSt = $4t.slot$('__',$1t);
		$4b || ($4t.flb=true);
		$4b || ($5t=imba.createElement('div',$eSt,`paragraph ${$0}`,null));
		$4b || ($6t=imba.createElement('h1',$5t,`${$0}`,"Lorem Ipsum"));
		$4b || ($6t=imba.createElement('p',$5t,`${$0}`,"Incididunt nostrud non ullamco exercitation ut veniam. Aute eu cillum nulla est elit ex nisi Lorem. Sunt magna aliqua pariatur est officia fugiat esse reprehenderit velit ea ex Lorem. In cillum adipisicing dolore irure. Ullamco nisi elit pariatur sint ea qui laboris. Nulla irure excepteur quis aliquip sint nulla fugiat aute duis proident Lorem tempor sunt."));
		$4b || ($6t=imba.createElement('p',$5t,`${$0}`,"Officia voluptate non nulla consectetur cupidatat ut ipsum qui mollit amet voluptate."));
		$4b || !$4t.setup || $4t.setup($4d);
		$4t.end$($4d);
		$4b || $4t.insertInto$($3t);
		$1t.close$($1d);
		return $1t;
	}
}; imba.tags.define('parallax-gj1ng4',Parallax,{ns: 'gj1ng4c'});

imba.inlineStyles("\n.gj1ng4c_ .parallax.gj1ng4c:not(#_) {position: relative;\nbackground-image: url(\"imgs/parallax1.jpg\");\nwidth: 100%;\nheight: auto;\nbackground-attachment: fixed;\nbackground-position: center;\nbackground-repeat: no-repeat;\nbackground-size: cover;\npadding-top: 7rem;\npadding-bottom: 7rem;}\n.gj1ng4c_ .parallax h1.gj1ng4c:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);}\n.gj1ng4c_ .parallax p.gj1ng4c:not(#_) {color: hsla(0.00,0.00%,100.00%,90%);}\n.gj1ng4c_ .filter.gj1ng4c:not(#_) {position: absolute;\ntop: 0rem;\nleft: 0rem;\nbottom: 0rem;\nright: 0rem;\nopacity: 0.8;\nbackground: linear-gradient(45deg, #0d1128 0%, #fd6100 100%);}\n.gj1ng4c_ .container.gj1ng4c:not(#_) {display: flex;\nposition: relative;}\n.gj1ng4c_ .container .paragraph.gj1ng4c:not(#_) {padding-left: 4rem;}\n.gj1ng4c_ .container .map.gj1ng4c:not(#_) {width: 100%;\nheight: auto;\nflex-basis: 100%;}\n\n",'gj1ng4');
/*

.gj1ng4c_ .parallax.gj1ng4c:not(#_) {position: relative;
background-image: url("imgs/parallax1.jpg");
width: 100%;
height: auto;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
padding-top: 7rem;
padding-bottom: 7rem;}
.gj1ng4c_ .parallax h1.gj1ng4c:not(#_) {color: hsla(0.00,0.00%,100.00%,100%);}
.gj1ng4c_ .parallax p.gj1ng4c:not(#_) {color: hsla(0.00,0.00%,100.00%,90%);}
.gj1ng4c_ .filter.gj1ng4c:not(#_) {position: absolute;
top: 0rem;
left: 0rem;
bottom: 0rem;
right: 0rem;
opacity: 0.8;
background: linear-gradient(45deg, #0d1128 0%, #fd6100 100%);}
.gj1ng4c_ .container.gj1ng4c:not(#_) {display: flex;
position: relative;}
.gj1ng4c_ .container .paragraph.gj1ng4c:not(#_) {padding-left: 4rem;}
.gj1ng4c_ .container .map.gj1ng4c:not(#_) {width: 100%;
height: auto;
flex-basis: 100%;}


*/

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhcmFsbGF4LmltYmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBTSxDQUFDLFFBQVEsTUFBTSxZQUFZOztBQUNqQyxNQUNJLENBQUMsT0FBTyxDQUFDLEtBQUcsQ0FBQyxRQUFROztDQUN2QixNQUFNOzs7Ozs7Y0FDQyxtREFDUDtjQUFnQixpREFDaEI7Y0FBYyxvREFDZjtjQUFrQixpREFDZjtjQUFLLEdBQUcsQ0FBQyxvWEFBb1g7Y0FBQyxXQUFXLENBQUMsR0FBRztjQUFDLEtBQUssQ0FBQyxXQUFXO2NBQUMsZUFBZSxDQUFDLEVBQUU7Y0FBQyxtQkFBWSxPQUFPO2NBQUMsUUFBUSxDQUFDLEdBQUc7b0RBQVEsK0NBQzFkOztjQUFDLEdBQUcsQ0FBQyxJQUFJO2NBQVMscURBQ3ZCO2NBQW9CLG9DQUNuQixhQUFhLENBRFE7Y0FDQyxtQ0FBRyx3V0FDNlUsQ0FEL1U7Y0FDd1YsbUNBQUcsdUZBQzlSLENBRDRSOzs7Ozs7RUFDNVI7QUFrQ3BGO0FBQUM7cUdBOUJNLHNCQUFvQjs7OztzQkFBcEIsb0JBQW9CIiwiZmlsZSI6IlBhcmFsbGF4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZhZGVJblVwIGZyb20gJy4vRmFkZUluVXAnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YWcgUGFyYWxsYXhcclxuXHRkZWYgcmVuZGVyXHJcblx0XHQ8c2VsZj5cclxuXHRcdFx0PGRpdi5wYXJhbGxheD5cclxuXHRcdFx0XHQ8ZGl2LmZpbHRlcj5cclxuXHRcdFx0XHQ8ZGl2LmNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdDxpZnJhbWUubWFwIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDEwNTYuMTE1NzMyNzc3NDkxOCEyZC01Mi42MjQ4ODI5MDIzMjc4ITNkLTI3LjA4MjcwNzk0MjQ3MDQ2NCEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4OTRlNGI1ZDNiMWI0OTI4NSUzQTB4OGEwYzMwOWI5MjQxN2YzITJzUi4lMjBQcmluY2VzYSUyMElzYWJlbCUyQyUyMDE5MiUyMC0lMjBTJUMzJUEzbyUyMENyaXN0JUMzJUIzdiVDMyVBM28lMkMlMjBDaGFwZWMlQzMlQjMlMjAtJTIwU0MlMkMlMjA4OTgxMy0xNjAhNWUwITNtMiExc3B0LUJSITJzYnIhNHYxNjAxMzQxNDE1MzczITVtMiExc3B0LUJSITJzYnJcIiBmcmFtZWJvcmRlcj1cIjBcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGFyaWEtaGlkZGVuPVwiZmFsc2VcIiB0YWJpbmRleD1cIjBcIj5cclxuXHRcdFx0XHRcdDxGYWRlSW5VcCBmbGI9dHJ1ZT5cclxuXHRcdFx0XHRcdFx0PGRpdi5wYXJhZ3JhcGg+XHJcblx0XHRcdFx0XHRcdFx0PGgxPiBcIkxvcmVtIElwc3VtXCJcclxuXHRcdFx0XHRcdFx0XHQ8cD4gXCJJbmNpZGlkdW50IG5vc3RydWQgbm9uIHVsbGFtY28gZXhlcmNpdGF0aW9uIHV0IHZlbmlhbS4gQXV0ZSBldSBjaWxsdW0gbnVsbGEgZXN0IGVsaXQgZXggbmlzaSBMb3JlbS4gU3VudCBtYWduYSBhbGlxdWEgcGFyaWF0dXIgZXN0IG9mZmljaWEgZnVnaWF0IGVzc2UgcmVwcmVoZW5kZXJpdCB2ZWxpdCBlYSBleCBMb3JlbS4gSW4gY2lsbHVtIGFkaXBpc2ljaW5nIGRvbG9yZSBpcnVyZS4gVWxsYW1jbyBuaXNpIGVsaXQgcGFyaWF0dXIgc2ludCBlYSBxdWkgbGFib3Jpcy4gTnVsbGEgaXJ1cmUgZXhjZXB0ZXVyIHF1aXMgYWxpcXVpcCBzaW50IG51bGxhIGZ1Z2lhdCBhdXRlIGR1aXMgcHJvaWRlbnQgTG9yZW0gdGVtcG9yIHN1bnQuXCJcclxuXHRcdFx0XHRcdFx0XHQ8cD4gXCJPZmZpY2lhIHZvbHVwdGF0ZSBub24gbnVsbGEgY29uc2VjdGV0dXIgY3VwaWRhdGF0IHV0IGlwc3VtIHF1aSBtb2xsaXQgYW1ldCB2b2x1cHRhdGUuXCJcclxuXHRjc3NcclxuXHRcdC5wYXJhbGxheFx0XHJcblx0XHRcdHBvczogcmVsYXRpdmVcclxuXHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1ncy9wYXJhbGxheDEuanBnXCIpXHJcblx0XHRcdHc6MTAwJSBoOiBhdXRvXHJcblx0XHRcdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWRcclxuXHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyXHJcblx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcclxuXHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlclxyXG5cdFx0XHRweTogN3JlbVxyXG5cclxuXHRcdFx0aDFcclxuXHRcdFx0XHRjOiB3aGl0ZVxyXG5cdFx0XHRcclxuXHRcdFx0cFxyXG5cdFx0XHRcdGM6IHdoaXRlLzkwXHJcblx0XHRcdFxyXG5cdFx0LmZpbHRlclxyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGVcclxuXHRcdFx0dG9wOiAwXHJcblx0XHRcdGxlZnQ6IDBcclxuXHRcdFx0Ym90dG9tOiAwXHJcblx0XHRcdHJpZ2h0OiAwXHJcblx0XHRcdG9wYWNpdHk6IC44XHJcblx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzBkMTEyOCAwJSwgI2ZkNjEwMCAxMDAlKVxyXG5cclxuXHRcdC5jb250YWluZXJcclxuXHRcdFx0ZDogZmxleFxyXG5cdFx0XHRwb3M6IHJlbGF0aXZlXHJcblxyXG5cdFx0XHQucGFyYWdyYXBoXHJcblx0XHRcdFx0cGw6IDRyZW1cdFx0XHJcblxyXG5cdFx0XHQubWFwXHJcblx0XHRcdFx0c2l6ZTogMTAwJVxyXG5cdFx0XHRcdGZsYjogMTAwJVxyXG5cdFx0XHRcdGg6IGF1dG8iXX0=