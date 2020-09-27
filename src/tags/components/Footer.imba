export default tag Footer
	def render
		<self>
			<div.container>
				<div.col>
					<h3> "Alguma dúvida?"
					<div.wrapper>
						<span.material-icons> "location_on"
						<p> "203 Fake St. Mountain View, San Francisco, California, USA"
					<div.wrapper>
						<span.material-icons> "phone"
						<p> "(49) 99999-9999"
					<div.wrapper>
						<span.material-icons> "email"
						<p> "info@montaind.com"
				<div.col>
					<h3> "Links"
					<div.links>
						<div.wrapper>
							<span.material-icons> "east"
							<p> "Home"
						<div.wrapper>
							<span.material-icons> "east"
							<p> "Orçamento"
						<div.wrapper>
							<span.material-icons> "east"
							<p> "Peças"
						<div.wrapper>
							<span.material-icons> "east"
							<p> "Produtos"
				
				<div.col>
					<div.paragraph>
						<h3> "Inscreva-se!"
						<input type="email" placeholder="Digite seu e-mail">
						<button.button> "Inscrever-se"
					<h3> "Fale conosco"
					<div.social>
						<a href="#"> 
							<i.twitter .icon>
						<a href="#"> 
							<i.linkedin.icon>
						<a href="#"> 
							<i.facebook.f.icon>
						<a href="#"> 
							<i.instagram.icon>
			<div.container>
				<p.copyright> "Copyright ©2020 All rights reserved | This template is made with"

	
	css

		.container .copyright
			w: 100%
			ta: center
			fs: 1rem
			pb: 7rem
			
		.container
			bg: #232323
			d: flex
			pt: 5rem
			
			.material-icons
				c: white
				mr: 1.5rem
				d: flex
				ai: center

			.wrapper
				d:flex
				mb: 1.5rem
		
			h3
				c: white
				mb: 1.5rem

			p
				c: white/80
				fs: .9rem

		.col
			flex-basis: 100%
			px: 2rem

		.links
			.wrapper
				m: 0
			
			.material-icons
				fs: .8rem
				mr: .5rem
					
		.social
			d:flex
			a
				mr: 1rem
				td: none
				c: white
				bg: #333333
				size: 40px
				br: 20px
				d:flex
				ai:center
				jc:center
				transition: .3s
			i
				fs: 1.3rem
				m: 2px 0 0 1px
			
			a@hover
				color: $orange
				bg: white

		input, button
			p: 1rem
			ff: sans
			bg: #333333
			br: xs
			mb: .5rem
			ta: center
			w: 100%
			transition: .4s
			c: white
		
		.paragraph + h3
			mt: 1rem

		button
			bg: #5D50C6
			c: white
			cursor: pointer

		button@hover
			bg: $orange

		input@placeholder
			c: white/80