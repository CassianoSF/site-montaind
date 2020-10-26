import Card from './Card'
import FadeInUp from './FadeInUp'

export default tag Components
	def render
		<self>
			<FadeInUp>
				<div.container>
					<h1> "Nossas Peças"
					<p> "Magna cupidatat consequat qui amet reprehenderit mollit eu anim aute tempor amet proident. Est veniam aute ad ut enim est proident dolor."
			<div.grid>
				for i in [0 ... 4] 
					<FadeInUp delay=i/10 >
						<Card>

	css 
		.container
			pt: 7rem
			ta: center
			px: 20%

			h1
				c: black/80

			p 
				c: $grey

		.grid
			pb: 7rem
			d: grid
			grid-template-columns: repeat(4, minmax(0, 1fr))

			