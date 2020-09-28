
import './style'

import {Router} from './router/router'

import Navbar from './tags/components/Navbar'
import Home from './tags/Home'
import Footer from './tags/components/Footer'

tag App
	
	def render
		<self>
			<Navbar>
			<main[mt: 4rem pos: relative]>
				<Home>	
			<Footer>

imba.mount <App>
