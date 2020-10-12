export default tag Navbar

	prop links = [
		route: "home"
		name: "Home"
		---
		route: "pecas"
		name: "Peças"
		---
		route: "produtos"
		name: "Produtos"
		---
		route: "orcamento"
		name: "Orçamento"
	]

	def render
		<self>
			<div.navbar>
				<div.container>
					<a.brand route-to="home">
						<img src="imgs/logo.png">
					<ul.menu>
						for link in links 
							<li.nav-item route-to=link.route>
								<a.nav-link .active=(router.path.match(RegExp.new(link.route)))> link.name

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