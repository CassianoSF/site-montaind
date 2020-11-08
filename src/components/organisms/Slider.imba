export default tag Slider

	prop slideCount = 4
	prop active = 1
	prop timer

	def prev
		clearTimeout(timer)
		active = active is 1 ? slideCount : active - 1
		mount()

	def next
		clearTimeout(timer)
		active = active is slideCount ? 1 : active + 1
		mount()

	def changeSlide id
		clearTimeout(timer)
		active = id
		mount()

	def autoChangeSlide
		timer = setTimeout(&, 5000) do
			active = active is slideCount ? 1 : active + 1		
			render()
			mount()

	def mount
		autoChangeSlide()

	def unmount 
		clearTimeout(timer)

	def render
		<self>
			<div.slider>
				for id in [1 .. slideCount]
					let img = "url(/imgs/home{id}.jpg)"
					<div[bgi: {img}].slide .show=(id is active)>
						<div.filter>
						<div.container>
							<div.wrapper>
								<h1> "Montagem e Equipamentos Industriais"
								<button.btn @click=router.go('/site/orcamento')> 
									"Peça um orçamento"

				<div.navigation>
					for id in [1 .. slideCount]
						<label.dot .active=(id is active) @click=changeSlide(id)>

				<div[r: 0 rd: 100% 0% 0% 100% / 50% 0% 0% 50%].go @click=next()>
					<i.fa.fa-angle-right>
				<div[l: 0 rd: 0% 100% 100% 0% / 0% 50% 50% 0%].go @click=prev()>
					<i.fa.fa-angle-left>

	css
		.slider
			pos: relative
			h: calc(100vh - 4rem)		
			animation: fadeIn 1s
		
			.show
				animation-name: fadeIn

			.slide
				size: 100%
				animation-duration: 1s
				animation-fill-mode: both
				bgs: cover
				bgp: center
				pos: absolute
				o: 0
				
				@not(.show)
					animation-name: fadeOut
					zi: -1
			
				.filter
					pos: absolute t: 0 l: 0 b: 0 r: 0
					o: .8
					bg: linear-gradient(45deg, #0d1128 0%, #fd6100 100%)

				.container
					c: white
					pos: absolute
					h: 100%
					d: flex jc: center fld: column

					.wrapper
						w: 50%

						p
							c: white/90

						.btn
							mt: 1rem
							c: white @hover: $orange
							bg: $orange @hover: transparent
							rd: full
							p: 1rem 1.5rem
							bd: 1px solid $orange
							cursor: pointer		
							tween: .35s	
							outline: none
							us: none

			.navigation
				d: flex
				pos: absolute b: 20px l: 50% x: -50%
				zi: 1

				.dot
					mx: 6px
					size: 10px
					rd: full
					bg: white @hover: $orange
					cursor: pointer
					tween: .35s
			
				.active
					bg: $orange
			
			.go
				pos: absolute t:0 b: 0
				w: 75px
				tween: .35s
				bg@hover: white/20
				cursor: pointer
				d: flex ai: center jc: center
				fs: 2rem
				c: white/50 @hover: white
		
			
			