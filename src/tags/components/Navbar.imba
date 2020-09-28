export default tag Navbar
	def render
		<self>
			<div.navbar>
				<div.container>
					<a.brand route-to="home">
						<img src="imgs/logo.png">
					<ul.menu>
						<li.nav-item route-to="home">
							<a.nav-link.active> "Home"
						<li.nav-item route-to="pecas">
							<a.nav-link> "Peças"
						<li.nav-item route-to="produtos">
							<a.nav-link> "Produtos"
						<li.nav-item route-to="orcamento">
							<a.nav-link> "Orçamento"

	css
		.navbar
			w: 100%
			pos: fixed t: 0	zi: 100
			bg: $indigo

			.container
				h: 4rem
				d: flex jc: space-between ai: center

				.brand
					d: flex

					img
						h: 2rem

				.menu
					d: flex	ai: center

					.nav-item	
						cursor: pointer
						c: white @hover: $orange

						.nav-link
							mx: 1rem p: 1rem
							tween: .35s

						.active
							cursor: default
							c: $orange