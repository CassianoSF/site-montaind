
import './style'

import 'imba/dist/imba-router'

import Navbar from '@/components/organisms/Navbar'
import Footer from '@/components/organisms/Footer'

import Home from '@/components/views/Home'
import Pieces from '@/components/views/Pieces'
import Products from '@/components/views/Products'
import Budget from '@/components/views/Budget'
import Login from '@/components/views/Login'
import Crud from '@/components/views/Crud'
import Create from '@/components/views/Create'
import Update from '@/components/views/Update'

tag App
	def mount
		if router.path == "/"
			router.go('/site/home')

	def render
		<self>
			<div route="/admin">
				<Login route.exact="">
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

