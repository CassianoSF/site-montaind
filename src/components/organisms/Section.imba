import FadeInUp from './FadeInUp'

export default tag Section

	def render
		<self>
			<div.section.container>
				<FadeInUp>
					<div.wrapper>
						<h1.title> "Sobre a empresa"
						<p.text> 
								"A Montaind Industrial LTDA, Fundada em 2012, é uma empresa 
								que tem como principal negócio a prestação de serviços
								na área mecânica e equipamentos industriais.
								Contamos com uma equipe qualificada composta por
								engenheiro mecânico, mecânicos e soldadores que tem
								como finalidade suprir e superar as
								necessidades do mercado, trazendo um diferencial em
								atendimento e qualidade em todos os projetos
								executados, para estar sempre conquistando novas
								parcerias."
						<p.text>
								"Com energia e determinação, a Montaind constrói uma
								história de superação e crescimento, onde buscar
								bons resultados sempre motivou a empresa a querer
								mais, a crescer com qualidade em todos os projetos
								executados."
						<p.text>
								"Fazemos de cada cliente um parceiro, é assim que
								crescemos e seguiremos crescendo no segmento de
								tubulações e instalações de sistemas, montagem de
								sistema hidráulico de combate contra incêndio,
								máquinas e equipamentos para a indústria alimentícia,
								moveleira, entre outras."
						<p.text>
								"Sendo uma empresa moderna e voltada sempre para as
								novas tendências, conta com mão de obra
								especializada e grande experiência no mercado,
								garantindo segurança e confiabilidade aos clientes."
						<div.grid>
							<div.card>
								<div.icon>
									<i.flaticon-047-thinking>
								<div.text>
									<h3> "Respeito"
									<p> "A Montaind acredita na busca continua de atingir os
										melhores resultados, sem abrir mão da valorização, do
										respeito ao ser humano e da seriedade  com
										nossos colaboradores, fornecedores e clientes. "
							<div.card>
								<div.icon>
									<i.flaticon-032-idea>
								<div.text>
									<h3> "Inovação"
									<p> "Somos uma empresa voltada a inovação, buscamos novas
										formas de fazer as coisas, acreditamos na capacidade de
										superar limites e de pensar o nosso negócio a partir das
										pessoas, a quem damos nosso maior valor."
							<div.card>
								<div.icon>
									<i.flaticon-029-worker>
								<div.text>
									<h3> "Segurança"
									<p> "Atuar com excelência operacional e qualidade, 
									    com a eliminação de perigos e riscos à 
										saúde e segurança além de mitigar impactos ambientais 
										faz parte de nossa missão."
							<div.card>
								<div.icon>
									<i.flaticon-035-book>
								<div.text>
									<h3> "Ética"
									<p> "Atuamos de forma íntegra e ética com todos os
										públicos, em especial agentes públicos, não tolerando a prática de
										quaisquer atos que violem as regras do trabalho ético e as leis
										anticorrupção aplicáveis. "
							<div.card>
								<div.icon>
									<i.flaticon-001-conveyor-2>
								<div.text>
									<h3> "Profissionalismo"
									<p> "Desenvolvemos e capacitamos nossos colaboradores
										através de treinamentos técnicos, operacionais e comportamentais, 
										visando aprimorar as competências e, consequentemente, atender 
										com mais eficiência as demandas de nossos processos. "
							<div.card>
								<div.icon>
									<i.flaticon-026-settings-2>
								<div.text>
									<h3> "Trabalho em Equipe"
									<p> "Buscamos basear a empresa em pessoas com senso de urgência,
										proativas, focadas, que pensem e ajam de acordo com os objetivos e
										sejam sempre positivas diante das crescentes necessidades de
										clientes e fornecedores. "
						
				<div.img[bgi: url("/imgs/section5.jpg")]>
			
	css
		.section
			d: flex
			bg: white
			
			.wrapper
				p: 3rem 1.5rem

				h1, h3
					c: black/80

				p
					c: $grey

				.text
					text-align: justify
					margin-right: 20px

				.grid
					mt: 4rem
					d: grid
					grid-gap: 2rem
					grid-template-columns: minmax(0, 1fr) minmax(0, 1fr)

					.card
						d: flex

					.icon	
						mt: .5rem
						size: 80px
						c: white
						rd: full
						bg: $orange
						d: flex ai: center
						ta: center

						i
							w: 100%

							@before
								fs: 1.875rem
								lh: 1.875rem
						
					.text
						width: calc(100% - 80px)
						pl: 1rem

						h3
							fs: 1.25rem

			.img
				width: 100%
				bgs: cover
				bgp: center

			
			