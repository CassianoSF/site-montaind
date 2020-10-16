tag Textarea

	prop error = false
	prop data = ''

	def autoSize el
		setTimeout(&, 0) do			
			el.style.height="100%"
			el.style.height="{el.scrollHeight}px"

	<self>
		<div>
			<textarea rows="1" :keydown=autoSize(this) required  bind=data>
			<label [bc: red bc@after: red]=error>
				<span [c: red]=error> <slot>

	css
		
		
		div
			w: 100%			
			pos: relative
			of: hidden
			
			textarea 
				of: hidden
				resize: none
				mt: 1.5rem
				width: calc(100% - 1.5rem) h: 100%
				c: black/90
				bd: none
				outline: none
				fs: 1rem					

				@focus + label span, @valid + label span
					top: 0
					scale: .875
					c: $orange

				@focus + label@after, @valid + label@after
					x: 0% 

			label
				pe: none
				tween: top .3s, transform .3s 
				origin: top left
				pos: absolute t: 0 r: 0 b: 0 l: 0
				bdb: 1px solid black/42

				@after
					content: ''
					size: 100%
					x: -100%
					bdb: 2px solid $orange
					pos: absolute b: -1px r: 0
					tween: all .3s

				span
					size: 100%
					c: black/42
					origin: top left
					pos: absolute t: 1.5rem l: 0
					tween: all .3s


export default Textarea