export default tag FadeInUp

	def mount
		observer = new IntersectionObserver(&) do |entries|
			entries.map do |entrie|
				if entrie.isIntersecting
					animation = true 
					render()
		observer.observe($slot)

	def unmount
		observer.disconnect()

	def render
		<self>
			<div$slot[h: 100%] .fadeInUp=(animation) style="animation-delay: {delay}s">
				<slot>

	css
		.fadeInUp
			animation: fadeInUp 1s
			animation-fill-mode: both