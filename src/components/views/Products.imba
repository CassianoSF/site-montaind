import ProductsHeader from '@/components/organisms/ProductsHeader'
import FadeInUp from '@/components/organisms/FadeInUp'
import Card from '@/components/organisms/Card'
import Item from '@/models/Item'

export default tag Products

	def mount
		items = await Item.getItems('produtos')
		console.log items
		render()
		window.scrollTo(0,0)

	def render
		<self>
			<ProductsHeader> 
			<div.grid>
				for item, i in items
					let delay = i % 4
					<FadeInUp delay=delay/10 >
						<Card item=item>

			# <div.btn-wrapper>
			# 	<FadeInUp>
			# 		<button.btn> "Carregar mais"
			# 			<i.fa.fa-angle-double-right>

	css
		.grid
			mt: 5rem mb: 3rem
			d: grid
			grid-template-columns: repeat(4, minmax(0, 1fr))

		.btn-wrapper
			d: flex jc:center
			mb: 5rem

			.btn
				c: white @hover: $orange
				bg: $orange @hover: transparent
				rd: full
				p: 1rem 1.5rem
				bd: 1px solid $orange
				cursor: pointer		
				tween: .35s	
				outline: none
				us: none
				d: flex ai: center

				i
					ml: 1rem
					fs: 1.75rem
					rotate: 90deg