export default tag Section

	def render
		<self>
			<div.section.container>
				<div.wrapper>
					<h1.title> "O que Fazemos"
					<p.text> "Ipsum magna ut ullamco commodo occaecat enim non reprehenderit cillum. Velit sit consequat cupidatat nisi excepteur qui ad nulla excepteur. Id cillum ad enim pariatur et sint mollit excepteur. Sint exercitation nulla sunt ex velit commodo id minim tempor enim aliqua ea."
					<div.grid>
						<div.card>
							<div.icon>
								<i.flaticon-050-robot-arm>
							<div.text>
								<h3> "Comprometimento"
								<p> "Occaecat duis dolore non anim veniam reprehenderit cillum consectetur."
						<div.card>
							<div.icon>
								<i.flaticon-050-robot-arm>
							<div.text>
								<h3> "Inovação"
								<p> "Occaecat duis dolore non anim veniam reprehenderit cillum consectetur."
						<div.card>
							<div.icon>
								<i.flaticon-050-robot-arm>
							<div.text>
								<h3> "Segurança"
								<p> "Occaecat duis dolore non anim veniam reprehenderit cillum consectetur."
						<div.card>
							<div.icon>
								<i.flaticon-050-robot-arm>
							<div.text>
								<h3> "Ética"
								<p> "Occaecat duis dolore non anim veniam reprehenderit cillum consectetur."
						<div.card>
							<div.icon>
								<i.flaticon-050-robot-arm>
							<div.text>
								<h3> "Profissionalismo"
								<p> "Occaecat duis dolore non anim veniam reprehenderit cillum consectetur."
						<div.card>
							<div.icon>
								<i.flaticon-050-robot-arm>
							<div.text>
								<h3> "Trabalho em Equipe"
								<p> "Occaecat duis dolore non anim veniam reprehenderit cillum consectetur."
						
				<div.img[bgi: url("imgs/img.jpg")]>
			
	css
		.section
			d: flex
			
			.wrapper
				p: 3rem 1.5rem

				h1, h3
					c: black/80

				h1
					mb: 1.5rem

				p
					c: $grey

				.grid
					mt: 4rem
					d: grid
					grid-gap: 2rem
					grid-template-columns: minmax(0, 1fr) minmax(0, 1fr)

					.card
						d: flex
						mb: 1rem

					.icon	
						mt: .5rem
						size: 80px
						c: white
						border-radius: 50%
						bg: $orange
						d: flex
						ta: center
						ai: center

						i@before
							m:0
							c: white
							fs: 1.875rem
							lh: 1.875rem
						
						i
							w: 100%
							h: auto

					.text
						width: calc( 100% - 80px)
						pl: 1rem

						h3
							fs: 1.25rem
							mb: .5rem

			.img
				width: 100%
				height: auto
				bgs: cover
				bgp: center

			
			