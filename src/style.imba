global css @root

	$font: "Poppins", Arial, sans-serif
	$orange: #fd6001
	$indigo: #0e1229
	$grey: #666666

	&
		h: calc(100% - 4rem)

		body, html
			h: 100%
			bg: grey2

	*@not(i)
		m: 0 p: 0 ff: $font

	a
		fs: 0.875rem
		td: none
		us: none

	ul
		list-style: none

	h1
		fs: 3.125rem
		fw: 600
		mb: 1.5rem
		lh: 1.2
	
	h2
		fs: 2rem
		fw: 500
		mb: 1.5rem

	p
		mb: 1rem
		lh: 1.8

	h3
		fs: 1.375rem
		fw: 500
		mb: .5rem

	small
		fs: 0.875rem
		c: $orange
		ft: uppercase
		ls: 1

	table, table *
		margin: 0
		padding: 0
		background: none
		border: none
		border-collapse: collapse
		border-spacing: 0
		background-image: none
		fw: 200

	button
		fs: 1rem

	i@before
		m: 0 p: 0

	.container
		w: 100% px: 10%

	.form-wrapper
			size: 100%
			display: flex
			align-itens: center
			justify-content: center
		
	.icon
		mr: .5rem

	@keyframes 
		fadeInUp
			0%
				opacity: 0
				visibility: hidden
				transform: translate3d(0, 40px, 0)	
			100%
				visibility: visible
				opacity: 1
				transform: none
		fadeIn
			0%
				opacity: 0
				visibility: hidden
				transform: scale(0.95)				
			100%
				opacity: 1
				visibility: visible
				transform: scale(1)				
		fadeOut
			0%
				opacity: 1
			100%
				opacity: 0
