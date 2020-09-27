export default tag Products
	def render
		<self>
			<div.container>
				<h1> "Nossos Produtos"
				<p> "Magna cupidatat consequat qui amet reprehenderit mollit eu anim aute tempor amet proident. Est veniam aute ad ut enim est proident dolor."
			<div.flex>
				for i in [1 .. 4]
					<div.card>
						<div.img>
						<h2> "Sistema Hidráulico"
						<p> "Tempor non aliquip do laboris aliqua. Labore dolor sit labore in nisi fugiat qui. Occaecat mollit eiusmod labore voluptate anim in cupidatat do reprehenderit enim proident eiusmod cillum."
						<button.btn> "Adicionar ao orçamento"
		
	css
		.container
			mt: 5rem
			ta: center
			px: 15%

			h1
				mb: 1.5rem
			
			p 
				mb: 2rem

		.flex
			d: flex
		
		.card
			p: 1.5rem

			.img
				background-image: url("imgs/1.jpg")
				background-size: cover
				background-position: center
				h: 300px
				w: 100%
				mb: 1.5rem

			h2, p
				mb: .75rem

			