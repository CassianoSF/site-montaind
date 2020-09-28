export default tag Parallax
	def render
		<self>
			<div.parallax>
				<div.container>
					<div.video>
						<div.play>
							<i.play.icon>
						<div.player>
					<div.paragraph>
						<h1> "Lorem Ipsum"
						<p> "Incididunt nostrud non ullamco exercitation ut veniam. Aute eu cillum nulla est elit ex nisi Lorem. Sunt magna aliqua pariatur est officia fugiat esse reprehenderit velit ea ex Lorem. In cillum adipisicing dolore irure. Ullamco nisi elit pariatur sint ea qui laboris. Nulla irure excepteur quis aliquip sint nulla fugiat aute duis proident Lorem tempor sunt."
						<p> "Officia voluptate non nulla consectetur cupidatat ut ipsum qui mollit amet voluptate."
				<div.container.numbers>
					for i in [1 .. 4]
						<div.text>
							<h1> Math.round(Math.random()*200)
							<p> "Nulla Lorem"



	css
		.parallax	
			pos: relative
			background-image: url("imgs/parallax1.jpg")
			w:100% h: auto
			background-attachment: fixed
			background-position: center
			background-repeat: no-repeat
			background-size: cover
			pt: 7rem
			zi: -2

			h1
				c: white
			
			p
				c: white/90
			
		.parallax@after
			content: ''
			position: absolute
			top: 0
			left: 0
			bottom: 0
			right: 0
			z-index: -1
			opacity: .8
			background: linear-gradient(45deg, #0d1128 0%, #fd6100 100%)

		.container
			d: flex

		.video
			background-image: url("imgs/2.jpg")
			background-position: center
			background-repeat: no-repeat
			background-size: cover
			h: auto
			w:50%
			pos: relative

			.play
				bg: white
				pos: absolute
				x: -50% y: -50%
				t: 50%
				l: 50%
				size: 80px
				c: $orange
				br: 50%
				jc: center
				ai: center
				d: flex
				cursor:pointer

				i
					pl: .1rem
					fs: 1.3rem
					user-select: none
		
		.paragraph
			w: 50%
			pl: 4rem

			h1, p
				mb: 1.5rem			

		.numbers
			py: 5rem
			jc: space-around

			.text
				text-align: center