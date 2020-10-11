
import './style'

import 'imba/dist/imba-router'

import Navbar from './tags/components/Navbar'
import Home from './tags/Home'
import Pieces from './tags/Pieces'
import Products from './tags/Products'
import Admin from './tags/Admin'
import Footer from './tags/components/Footer'

tag App
	def mount
		if router.path == "/"
			router.go('/home')
	def render
		<self>
			<Admin route="/admin">
			<div route="/home">
				<Navbar>
				<main[mt: 4rem pos: relative]>
					<Home route="">
					<Pieces route="pecas">
					<Products route="produtos">		
				<Footer>

imba.mount <App>
