import Slider from '@/components/organisms/Slider'
import Services from '@/components/organisms/Services'
import Section from '@/components/organisms/Section'
import Parallax from '@/components/organisms/Parallax'
import Products from '@/components/organisms/Products'
import Components from '@/components/organisms/Components'

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