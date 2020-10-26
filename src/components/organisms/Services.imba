import FadeInUp from './FadeInUp'

export default tag Services
	def render
		<self>
			<div.services>
				<FadeInUp delay=.0 flb=true>
					<div[bg: $orange].card>
						<i.icon.flaticon-050-robot-arm>
						<h3> "Automação"
						<p> "Elit esse eiusmod labore ut velit proident pariatur reprehenderit id esse qui non tempor veniam."
				<FadeInUp delay=.1 flb=true>
					<div[bg: $indigo].card>
						<i.icon.flaticon-008-factory>
						<h3> "Fabricação"
						<p> "Laboris nulla sunt deserunt ea laborum aliquip mollit exercitation anim tempor non mollit reprehenderit laboris."
				<FadeInUp delay=.2 flb=true>
					<div[bg: $orange].card>
						<i.icon.flaticon-037-wrench>
						<h3> "Instalação"
						<p> "Qui veniam magna consequat cillum ex officia aliqua id quis enim consectetur anim laboris."
				<FadeInUp delay=.3 flb=true>
					<div[bg: $indigo].card>
						<i.icon.flaticon-022-repair-tools>
						<h3> "Manutenção"
						<p> "Amet officia elit proident mollit esse mollit id deserunt laborum do sint tempor consectetur."
				
			
	css
		.services
			d: flex

			.card
				p: 3rem 1.5rem
				ta: center
				flb: 100%
				h: 100%
				
				.icon 
					c: white
					d: block
					mb: 2rem

					@before
						fs: 3.125rem
						lh: 3.125rem

				h3
					c: white

				p
					c: white/80