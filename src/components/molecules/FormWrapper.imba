import FormButton from '../atoms/FormButton'

tag FormWrapper	< div
	
	<self>
		<h3 [bg@after: $orange]=hover> <slot name="title">
		<slot>
		<FormButton :mouseover=(do hover=true) :mouseout=(do hover=false) :click=(do emit('submit', data))>
			<div>
				<slot name="button">

	css
		&
			w: 95% max-width: 600px
			p: 1rem
			shadow: lg
			bg: white

			h3
				ta: center
				mb: 3rem
				pos: relative
				pb: .5rem

				@after
					content: ''
					tween: .35s
					bg: #5D50C6
					w: 72px
					h: 5px
					pos: absolute b: 0 l: 50%
					x: -50%

export default FormWrapper