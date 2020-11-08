import FadeInUp from './FadeInUp'

export default tag Footer
	def render
		<self>
			<div.footer.container>
				<div.footer-wrapper>
					<div.col>
						<h3> "Alguma dúvida?"
						<div.info>
							<div.wrapper>
								<i.fa.fa-map-marker> 
								<div>
									<p> "R. Princesa Isabel 192-E"
									<p> "São Cristóvão"
									<p> "Chapecó | SC"
									<p> "CEP: 89813-160"
							<div.wrapper>
								<i.fa.fa-phone> 
								<p> "(49) 3323-6109"
							<div.wrapper>
								<i.fa.fa-envelope> 
								<p> "montaind.comercial@gmail.com"
					<div.col>
						<h3> "Links"
						<div.links>
							<div.wrapper route-to='home'> 
								<a.active> "Home"
							<div.wrapper route-to='pecas'> 
								<a> "Peças"
							<div.wrapper route-to='produtos'> 
								<a> "Produtos"
							<div.wrapper route-to='orcamento'> 
								<a> "Orçamento"
					
					<div.col>
						<div.subscribe>
							<h3> "Inscreva-se!"
							<input type="email" placeholder="Digite seu e-mail">
							<button.button> "Inscrever-se"
						<div.social>
							<h3> "Fale conosco"
							<div.wrapper>
								<FadeInUp delay=.0>
									<a href="#"> 
										<i.fa.fa-twitter>
								<FadeInUp delay=.1>
									<a href="#"> 
										<i.fa.fa-linkedin>
								<FadeInUp delay=.2>
									<a href="#"> 
										<i.fa.fa-facebook>
								<FadeInUp delay=.3>
									<a href="#"> 
										<i.fa.fa-instagram>
				<p.copyright> "Montaind ©2020"

	
	css

		.footer
			py: 5.25rem
			bg: #232323

			.footer-wrapper
				d: flex
				pb: 5rem
			
				.col
					flb: 100%
					px: 2rem

					.wrapper
						d: flex

					h3
						c: white
						mb: 2.5rem

					p, a
						c: white/80
						fs: .875rem
						m: 0

					i
						c: white

						@before
							d: flex jc: center

					.info, .links
						i
							mr: .5rem		

							@before
								w: 20px
								h: 100%

					.info

						i			
							pt: 4px

						.wrapper
							mb: 1rem

					.links
						a
							c@hover: white
							cursor: pointer
							tween: .35s

						.active
							c: white 
							cursor: default

						i
							fs: .8rem

							@before
								ai:center
							
					.subscribe
						mb: 2.5rem

						input, button
							p: 1rem
							bg: #333333
							fs: 1rem
							rd: xs
							mb: .5rem
							ta: center
							w: 100%
							tween: .35s
							c: white
							outline: none

						input@placeholder
							ff: $font
							fs: 1rem
							c: white/70

						button
							bg: #5D50C6 @hover: $orange
							cursor: pointer

					.social

						h3
							mb: 1rem

						a
							mr: 1rem
							bg: #333333 @hover: white
							size: 40px
							rd: full
							d: flex	ai: center jc: center
							tween: .35s

							@hover i
								c: $orange
							
							i
								tween: .35s
								fs: 1.25rem

			.copyright
				ta: center
				c: white/80
					