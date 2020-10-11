import PiecesHeader from './components/PiecesHeader'
import Products from './components/Products'

export default tag Pieces
	def render
		<self>
			<PiecesHeader> 
			<Products>
			
			<div.btn-wrapper>
				<button.btn> "Carregar mais"
					<i.fa.fa-angle-double-right>

	css
		.btn-wrapper
			d: flex jc:center
			mb: 7rem

			.btn
				c: white @hover: $orange
				bg: $orange @hover: transparent
				br: full
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