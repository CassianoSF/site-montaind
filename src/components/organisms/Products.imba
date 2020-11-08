import Card from './Card'
import FadeInUp from './FadeInUp'
import Item from '@/models/Item'

export default tag Products < div 

	def mount
		items = await Item.getItems('produtos')
		render()

	def render
		<self[bg: white]>
			<FadeInUp>
				<div.container>
					<h1> "Nossos Produtos"
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

			