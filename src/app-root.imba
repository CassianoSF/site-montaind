
import './style'

import {Router} from './router/router'

import Navbar from './tags/components/Navbar'
import Home from './tags/Home'
import Pieces from './tags/Pieces'
import Products from './tags/Products'
import Admin from './tags/Admin'
import Footer from './tags/components/Footer'

tag App
	
	def render
		<self>
			<Admin route="/admin">
			# <Navbar>
			# <main[mt: 4rem pos: relative]>
			# 	<Home route="/home">
			# 	<Pieces route="/pecas">
			# 	<Products route="/produtos">		
			# <Footer>

imba.mount <App>
