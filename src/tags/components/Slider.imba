export default tag Slider

	prop slides = 4
	prop n = 1
	prop timer
	prop $slide = {}
	prop $dot = {}

	def changeSlide slide
		clearTimeout(timer)
		$slide[n].classList.remove('show')
		$dot[n].classList.remove('active')
		n = slide
		mount()

	def autoChangeSlide
		timer = setTimeout(&, 5000) do
			$slide[n].classList.remove('show')
			$dot[n].classList.remove('active')
			n = n is slides ? 1 : n + 1			
			mount()

	def mount
		$slide[n].classList.add('show')
		$dot[n].classList.add('active')
		autoChangeSlide()

	def unmount 
		clearTimeout(timer)

	def render
		<self>
			<div.slider>
				for i in [1 .. slides]
					<div>
						$slide[i] = <div.slide style="background-image: url(imgs/home{i}.jpg)">
							<div.filter>
							<div.container>
								<div.wrapper>
									<h1> "Montagem e Equipamentos Industriais"
									<p> "Anim eiusmod cillum officia fugiat incididunt labore."
									<button.btn> "Peça um orçamento"

				<div.navigation>
					for i in [1 .. slides]
						<div>
							$dot[i] = <label.dot @click=changeSlide(i)>

	css
		.slider
			pos: relative
			h: calc(100vh - 4rem)		
			animation: fadeIn 1s
		
			.show
				animation-name: fadeIn

			.slide
				size: 100%
				animation-duration: 1s
				animation-fill-mode: both
				bgs: cover
				bgp: center
				pos: absolute
				o: 0
				
				@not(.show)
					animation-name: fadeOut
					zi: -1
			
				.filter
					pos: absolute t: 0 l: 0 b: 0 r: 0
					o: .8
					bg: linear-gradient(45deg, #0d1128 0%, #fd6100 100%)

				.container
					c: white
					pos: absolute
					h: 100%
					d: flex jc: center fld: column

					.wrapper
						w: 50%

						p
							c: white/90

						.btn
							mt: 1rem
							c: white @hover: $orange
							bg: $orange @hover: transparent
							br: full
							p: 1rem 1.5rem
							bd: 1px solid $orange
							cursor: pointer		
							tween: .35s	

			.navigation
				d: flex
				pos: absolute b: 20px l: 50% x: -50%
				zi: 1

				div
					d: flex

					.dot
						mx: 6px
						size: 10px
						br: full
						bg: white @hover: $orange
						cursor: pointer
						tween: .35s
				
					.active
						bg: $orange
			
			
			