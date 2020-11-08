import FadeInUp from './FadeInUp'

export default tag Services
	def render
		<self>
			<div.services>
				<FadeInUp delay=.0 flb=true>
					<div[bg: $orange].card>
						<i.icon.flaticon-050-robot-arm>
						<h3> "Automação"
						<p> 
							"Contamos com sistemas de controle utilizando computadores,
							 robôs e tecnologias de ponta para otimizar diferentes processos."
				<FadeInUp delay=.1 flb=true>
					<div[bg: $indigo].card>
						<i.icon.flaticon-008-factory>
						<h3> "Fabricação"
						<p> 
							"Produzimos peças e componentes de equipamentos industriais para
							 suprir o caso de uso de sua empresa."
				<FadeInUp delay=.2 flb=true>
					<div[bg: $orange].card>
						<i.icon.flaticon-037-wrench>
						<h3> "Instalação"
						<p> 
							"Oferecemos assessoria técnica e avaliações mecânicas e 
							elétricas para apoiar instalações e máquinas industriais, 
							trabalhos de desmontagem, atualização e montagem."
				<FadeInUp delay=.3 flb=true>
					<div[bg: $indigo].card>
						<i.icon.flaticon-022-repair-tools>
						<h3> "Manutenção"
						<p> 
							"Manutenção preditiva, preventiva e corretiva.  
							Promoção de melhorias e soluções para problemas frequentes em 
							equipamentos e maquinários industriais."
			
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