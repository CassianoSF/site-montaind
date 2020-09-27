export default tag Slider

	prop slides = 4
	prop number = 1
	prop timer

	def changeImage imageNumber
		clearTimeout(timer)
		let label = "r{number}"
		document.querySelector("label[for={label}]").id = ""
		number = imageNumber
		mount()

	def autoChangeImage
		timer = setTimeout(&, 5000) do
			let label = "r{number}"
			document.querySelector("label[for={label}]").id = ""
			document.getElementById("r{number}").checked = false
			number = number is slides ? 1 : number + 1			
			mount()

	def mount
		document.getElementById("r{number}").checked = true
		let label = "r{number}"
		document.querySelector("label[for={label}]").id = "active"
		autoChangeImage()

	def unmount 
		clearTimeout(timer)

	def render
		<self>
			<div.slider>
				for i in [1 .. slides]
					<input#r{i} type="radio" name="r">

				for i in [1 .. slides]
					<div$slide.slide.s{i}>
						$slide.style.backgroundImage = "url(imgs/home{i}.jpg)"
						<div.filter>
						<div.text>
							<h1> "Montagem e equipamentos industriais"
							<p> "Pense numa frase bem legal aqui!"
							<button.btn> "Peça um orçamento"

				<div.navigation>
					for i in [1 .. slides]
						<label.bar for="r{i}" :click=changeImage(i)>

	css
		.slider
			pos: relative
			w: 100%
			h: calc(100vh - 4rem)
			of: hidden
			
			.filter
				pos: absolute
				t: 0
				l: 0
				b: 0
				r: 0
				o: .8
				bg: linear-gradient(45deg, #0d1128 0%, #fd6100 100%)
		
			input[name="r"]
				d: none
			
			#r1:checked ~ .s1
				animation: slider-animation 1s	
				o: 1
				zi: 1
			
			#r2:checked ~ .s2
				animation: slider-animation 1s
				o: 1
				zi: 1
			
			#r3:checked ~ .s3
				animation: slider-animation 1s
				o: 1
				zi: 1
			
			#r4:checked ~ .s4
				animation: slider-animation 1s
				o: 1
				zi: 1

			#r5:checked ~ .s5
				animation: slider-animation 1s
				o: 1	
				zi: 1	

			.slide
				w: 100% h: 100%
				bgs: cover
				bgp: center
				pos: absolute
				tween: 1.5s
				o: 0
				zi: 0

				.text
					w: 50%
					c: white
					pos: absolute
					top: 50%
					left: 5rem 
					y: -50%

					h1
						ff: sans
						fs: 3.125rem
						fw: 600
						lh: 1.2
						mb: 1.5rem

					p
						o: 90%
						mb: 1rem

					button
						mt: 1rem
						ff: sans
						fs: 1rem
						p: 1rem 1.5rem

			.navigation
				zi: 1
				d: flex
				pos: absolute
				b: 20px
				l: 50%
				x: -50%

				.bar
					mx: 6px
					size: 10px
					br: 50%
					bg: white
					cursor: pointer
					tween: .4s
					shadow: 0 0 5px black/50
			
					@hover
						bg: $orange
			
				#active
					bg: $orange
			
			
			