import FormButton from '../atoms/FormButton'

tag CustomForm < div
	
	prop color = "{indigo6}"
	prop backButton = false

	<self.form>
		<h3[background@after: color].form-title> <slot name="form-title">
		<slot>
		<FormButton :click=(do emit('submit'))>	<fragment> <slot name="action-button">
		if backButton
			<FormButton> <fragment> <slot name="back-button">

	css
		.form
			max-width: 450px
			padding: 1rem
			margin: 1.5rem
			shadow: lg
			background: white

			.form-title
				text-align: center
				margin-bottom: 3rem
				position: relative
				padding-bottom: .5rem

				@after
					content: ''
					tween: .35s
					background: indigo6
					width: 72px
					height: 5px
					position: absolute
					bottom: 0
					left: 50%
					x: -50%


export default CustomForm