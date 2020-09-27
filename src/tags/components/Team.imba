export default tag Team

	def render
		<self>
			<div.team>
				<div.container>
					<h1> "Nosso Time"
					<p> "Sunt dolore non incididunt ipsum nostrud sit culpa amet dolore dolore amet sit pariatur exercitation aute commodo magna ut dolore minim sit sunt et ipsum labore."
				<div.wrapper>
					for i in [1 .. 4]
						<div.card>
							<div.img-wrapper>
								<div[bgi: url("imgs/2.jpg")]>
							<h2> "John Smith"
							<small> "Engenheiro"
							<p> "Nostrud aliquip magna consequat incididunt exercitation veniam consequat ea cupidatat."

	css
		.team
			pt: 5rem
			bg: #fafafa

			.container
				px: 20%

				h1, p
					ta: center

			h1
				mb: 2rem

			p
				mb: 3rem

			
			.wrapper
				d: flex
				
				.card
					p: 1rem
					ta: center

					@hover
						.img-wrapper div
							transform: scale(1.05)

						h2
							c: $orange

					.img-wrapper
						overflow:hidden
						
						div
							w: 100% h: 300px
							bgs: cover
							transition: .3s ease

					img
						w: 100%

					h2
						mt: 1rem
						transition: .3s ease

					small
						fs: .9rem
						tt: uppercase
						c: $orange
						ls: 2px

					p
						mt: 1rem
			