export default tag Services
	def render
		<self>
			<div.services>
				<div.card>
					<i.icon.flaticon-050-robot-arm>
					<h3> "Certified Teachers"
					<p> "Elit esse eiusmod labore ut velit proident pariatur reprehenderit id esse qui non tempor veniam."
				<div.card>
					<i.icon.flaticon-008-factory>
					<h3> "Fabricação"
					<p> "Laboris nulla sunt deserunt ea laborum aliquip mollit exercitation anim tempor non mollit reprehenderit laboris."
				<div.card>
					<i.icon.flaticon-037-wrench>
					<h3> "Instalação"
					<p> "Qui veniam magna consequat cillum ex officia aliqua id quis enim consectetur anim laboris."
				<div.card>
					<i.icon.flaticon-022-repair-tools>
					<h3> "Manutenção"
					<p> "Amet officia elit proident mollit esse mollit id deserunt laborum do sint tempor consectetur."
				
			
	css
		.services
			d: flex

			.card
				p: 48px 24px
				ta: center
				flex-basis: 100%

				i@before
					m:0
					c: white
					fs: 3.125rem
					lh: 3.125rem
				
				.icon 
					w: 100%
					h: auto
					m: 0 0 2rem

				h3
					color: white
					mb: .5rem
					font-size: 1.375rem
					fw: 500
					d: block

				p
					w: 100%
					fs: 1rem
					c: white/80
					lh: 1.8
					mb: 1rem
			
			.card@nth-child(odd)
				bg: $orange

			.card@nth-child(even)
				bg: $indigo		