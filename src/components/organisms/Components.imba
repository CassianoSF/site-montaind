import Card from './Card'
import FadeInUp from './FadeInUp'
import Item from '@/models/Item'

export default tag Components
	def mount
		items = await Item.getItems('pecas')
		render()

	def render
		<self>
			<FadeInUp>
				<div.container>
					<h1> "Nossas Peças"
			<div.grid>
				for item, i in items
					<FadeInUp delay=i/10 >
						<Card item=item>

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

			