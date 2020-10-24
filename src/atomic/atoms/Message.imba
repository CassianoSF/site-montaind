tag Message
	prop error

	<self>
		if error
			<small .error-message>
				error

	css	.error-message
		w: 100%
		c: red
		d: block

export default Message