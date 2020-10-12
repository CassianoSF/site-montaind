
import './style'

import 'imba/dist/imba-router'

import Navbar from './tags/components/Navbar'
import Home from './tags/Home'
import Pieces from './tags/Pieces'
import Products from './tags/Products'
import Admin from './tags/Admin'
import Footer from './tags/components/Footer'

tag Crud
	def render
		<self>
			<h1>
				router.path

tag App
	def mount
		console.log(router)
		if router.path == "/"
			router.go('/#/site/home')
	def render
		<self>
			<div route="/#/admin">
				<Admin route="login">
				<Crud route="pecas">
				<Crud route="produtos">
			<div route="/#/site">
				<Navbar>
				<main[mt: 4rem pos: relative]>
					<Home route="home">
					<Pieces route="pecas">
					<Products route="produtos">		
				<Footer>

imba.mount <App>

