tag Button

	attr width = "auto" 
	prop error = false

	<self>
		<button [c@hover: red bg: red bd: 1px solid red]=error>
			<slot>

	css
		&[width="auto"] button w: auto
		&[width="full"] button w: 100%

		button
			pos: relative
			c: white @hover: $orange
			bg: $orange @hover: transparent
			rd: full
			p: .375rem .75rem
			bd: 1px solid $orange
			cursor: pointer		
			tween: .35s	
			outline: none
			us: none

export default Button