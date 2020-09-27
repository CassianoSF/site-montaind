export default tag Navbar
	def render
		<self>
			<div.navbar-wrapper>
				<div.navbar.container>
					<a route-to="home">
						<img.brand src="imgs/logo.png">
					<ul.menu>
						<li>
							<a#active route-to="home"> "Home"
						<li>
							<a route-to="pecas"> "Peças"
						<li>
							<a route-to="produtos"> "Produtos"
						<li>
							<a route-to="orcamento"> "Orçamento"

	css
		.navbar-wrapper
			w: 100%
			pos: fixed t: 0	zi: 100
			bg: $indigo
			
			.navbar
				h: 4rem
				d: flex jc: space-between ai: center

			.brand
				h: 2rem

			.menu
				d: flex	ai: center

				a	
					mx: 1rem p: 1rem
					c: white
					cursor: pointer

				#active
					c: $orange