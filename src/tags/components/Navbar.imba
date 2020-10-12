import {fb} from '../../models/Firebase'

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

	prop logout = false

	def doLogout
		fb.doLogout()
		router.go('/admin')

	def render
		<self>
			<div.navbar>
				<div.container>
					<a.brand route-to="home">
						<img src="/imgs/logo.png">
					<ul.menu>
						for link in links 
							<li.nav-item route-to=link.route>
								<a.nav-link .active=(router.path.match(RegExp.new(link.route)))> link.name
						
						<li.nav-item> if logout
							<button.btn[ml: 2rem] @click.doLogout()>  
								<i.fa.fa-sign-out[mr:.5rem]>
								"Sair"
	
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

				.btn
					c: white @hover: $orange
					bg: $orange @hover: transparent
					rd: full
					p: .375rem .75rem
					bd: 1px solid $orange
					cursor: pointer		
					tween: .35s	
					outline: none
					us: none