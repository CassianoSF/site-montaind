tag FormButton

	<self>
		<button>
			<slot>

	css
		button
			w: 100%
			tween: .35s
			c: white
			outline: none
			p: 1rem
			bg: #5D50C6 @hover: $orange
			cursor: pointer

export default FormButton