import FadeInUp from './FadeInUp'

export default tag Parallax
	def render
		<self>
			<div.parallax>
				<div.filter>
				<div.container>
					<iframe.map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1056.1157327774918!2d-52.6248829023278!3d-27.082707942470464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4b5d3b1b49285%3A0x8a0c309b92417f3!2sR.%20Princesa%20Isabel%2C%20192%20-%20S%C3%A3o%20Crist%C3%B3v%C3%A3o%2C%20Chapec%C3%B3%20-%20SC%2C%2089813-160!5e0!3m2!1spt-BR!2sbr!4v1601341415373!5m2!1spt-BR!2sbr" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
					<FadeInUp flb=true>
						<div.paragraph>
							<h1> "Lorem Ipsum"
							<p> "Incididunt nostrud non ullamco exercitation ut veniam. Aute eu cillum nulla est elit ex nisi Lorem. Sunt magna aliqua pariatur est officia fugiat esse reprehenderit velit ea ex Lorem. In cillum adipisicing dolore irure. Ullamco nisi elit pariatur sint ea qui laboris. Nulla irure excepteur quis aliquip sint nulla fugiat aute duis proident Lorem tempor sunt."
							<p> "Officia voluptate non nulla consectetur cupidatat ut ipsum qui mollit amet voluptate."
	css
		.parallax	
			pos: relative
			background-image: url("imgs/parallax1.jpg")
			w:100% h: auto
			background-attachment: fixed
			background-position: center
			background-repeat: no-repeat
			background-size: cover
			py: 7rem

			h1
				c: white
			
			p
				c: white/90
			
		.filter
			content: ''
			position: absolute
			top: 0
			left: 0
			bottom: 0
			right: 0
			opacity: .8
			background: linear-gradient(45deg, #0d1128 0%, #fd6100 100%)

		.container
			d: flex
			pos: relative

			.paragraph
				pl: 4rem		

			.map
				size: 100%
				flb: 100%
				h: auto