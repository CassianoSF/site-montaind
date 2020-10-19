tag Switch

	prop error = false
	prop data = ''

	def changeInput el
		data = el.checked ? $label.textContent : ''

	<self>
		<label>
			<input type="checkbox" :change=changeInput(this)>
			<span[bg: red]=error >
			<a$label> <slot>

	css
		label
			cursor: pointer
			position: relative
			display: inline-block

			span
				my: auto
				w: 30px
				height: 17px
				position: absolute
				cursor: pointer
				top: 0
				left: 0
				right: 0
				bottom: 0
				background-color: #ccc
				transition: .3s
				rd: full

				@before
					position: absolute
					content: ""
					size: 13px
					left: 2px
					bottom: 2px
					background-color: white
					transition: .3s
					rd: full

			a
				tween: .3s
				fs: 1rem
				ml: calc(30px+.5rem)
				c: black/42

			input
				o: 0
				size: 0

				@checked + span
					background-color: $orange

				@checked + span@before
					x: 13px

				@checked ~ a
					c: black/90

export default Switch