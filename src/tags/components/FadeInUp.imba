export default tag FadeInUp

	def mount
		observer = new IntersectionObserver(&) do |entries|
			entries.forEach do |entrie|
				if entrie.isIntersecting
					animating = true 
					render()
		observer.observe($item)

	def unmount
		observer.disconnect()

	def render
		<self [flb: 100%]=flb>
			<div$item[size: 100% animation-delay: {delay+.3}s] .fadeInUp=(animating)>
				<slot>

	css
		.fadeInUp
			animation: fadeInUp 1s
			animation-fill-mode: both