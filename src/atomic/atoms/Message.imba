tag Message

	prop error = true

	<self>
		<small [visibility: visible]=error> error

	css	
		small
			w: 100%
			c: red
			d: block
			visibility: hidden

export default Message