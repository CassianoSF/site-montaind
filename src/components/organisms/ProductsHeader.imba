export default tag ProductsHeader
	def render
		<self>
			<div.header>
				<div.filter>
				<h1> "Produtos"
				<p.breadcrumbs>
					<a route-to="/home"> "HOME "
						<i.fa.fa-chevron-right>
					<a.active> "PRODUTOS "
						<i.fa.fa-chevron-right>

	css
		.header
			pos: relative
			bgi: url("/imgs/home1.jpg")
			bgs: cover
			bgp: center
			h: 300px
			d: flex ai: center jc: center fld: column
			us: none

			.filter
				pos: absolute t: 0 r: 0 b: 0 l: 0
				bg: linear-gradient(45deg, #0d1128 0%, #fd6100 100%) 
				o: .5
				zi: 0
			
			h1
				mb: .5rem
				zi: 1				
				c: white

			.breadcrumbs
				zi: 1

				a
					mr: .5rem
					bdb: 2px solid white/25 @hover: 2px solid white
					tween: .35s
					cursor: pointer
					c: white

					i
						fs: .75rem
					
				.active
					bdb: 2px solid white/25 @hover: 2px solid white/25
					cursor: default


				

