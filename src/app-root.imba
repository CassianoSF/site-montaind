
import './style'

import 'imba/dist/imba-router'

import Navbar from './tags/components/Navbar'
import Home from './tags/Home'
import Pieces from './tags/Pieces'
import Products from './tags/Products'
import Budget from './tags/Budget'
import Admin from './tags/Admin'
import Footer from './tags/components/Footer'
import Crud from './tags/Crud'
import Create from './tags/Create'
import Update from './tags/Update'

tag App
	def mount
		console.log(router)
		if router.path == "/"
			router.go('/site/home')

	def render
		<self>
			<div route="/admin">
				<Admin route.exact="">
				<div route="itens">
					<Navbar links=[{route: "produtos", name: "Produtos"}, {route: "pecas", name: "Peças"}] logout=true>
					<main[mt: 4rem pos: relative]>
						<Crud tipo={id: "pecas", name: "Peças"} route.exact="pecas">
						<Crud tipo={id: "produtos", name: "Produtos"} route.exact="produtos">
						<Create route=":tipo/criar">
						<Update route=":tipo/editar/:id">
			<div route="/site">
				<Navbar>
				<main[mt: 4rem pos: relative]>
					<Home route="home">
					<Pieces route="pecas">
					<Products route="produtos">		
					<Budget route="orcamento">
				<Footer>

imba.mount <App>

