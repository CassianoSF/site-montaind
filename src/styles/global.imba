global css @root
	fs: 16px
	--font-sans: "Poppins", Arial, sans-serif

	$orange: #fd6001
	$indigo: #0e1229
	$grey: #666666
	$black: #333333

	*
		p: 0 m: 0
		ff: sans	

	p
		lh: 1.8
		fs: 1rem

	ul
		list-style: none

	a
		td: none

	.container
		w: 100%
		mx: auto

		@sm			
			max-width: 600px

		@md
			max-width: 708px

		@lg
			max-width: 944px
		
		@xl
			max-width: 1180px
	
	.btn
		c: white
		bg: $orange
		lh: 1.5rem
		br: 40px
		bd: 1px solid $orange
		p: 0.375rem 0.75rem
		us: none
		ta: center
		cursor: pointer
		tween: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out

	.btn@hover
		color: $orange
		bg: transparent