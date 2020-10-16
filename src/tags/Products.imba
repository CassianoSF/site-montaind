import ProductsHeader from './components/ProductsHeader'
import FadeInUp from './components/FadeInUp'
import Card from './components/Card'

export default tag Products

	def mount
		window.scrollTo(0,0)

	def render
		<self>
			<ProductsHeader> 
			<div.grid>
				for i in [0 ... 12]
					let delay = i % 4
					<FadeInUp delay=delay/10 >
						<Card>

			<div.btn-wrapper>
				<FadeInUp>
					<button.btn> "Carregar mais"
						<i.fa.fa-angle-double-right>

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