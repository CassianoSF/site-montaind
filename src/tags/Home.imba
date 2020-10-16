import Slider from './components/Slider'
import Services from './components/Services'
import Section from './components/Section'
import Parallax from './components/Parallax'
import Products from './components/Products'
import Components from './components/Components'

export default tag Home

	def mount
		window.scrollTo(0,0)

	def render
		<self>
			<Slider>
			<Services>
			<Section>
			<Parallax>
			<Products>
			<Components>