export default tag Card
	prop active = 0
	prop item

	def changeSlide id
		active = id

	def prev
		active = active is 0 ? item.imgs_urls.length - 1 : active - 1

	def next
		active = active is item.imgs_urls.length - 1 ? 0 : active + 1

	def render
		console.log(item)
		<self>
			<div.card>
				<div.imgs>
					for img, id in item.imgs_urls
						let url = "url({img})"
						<div[bgi: {url}].img .show=(id is active) >
					if item.imgs_urls.length > 1
						<div.navigation>
							for img, id in item.imgs_urls
								<label.dot .active=(id is active) @click=changeSlide(id)>
						<div[r: 0 rd: 100% 0% 0% 100% / 50% 0% 0% 50%].go @click=next()>
							<i.fa.fa-angle-right>
						<div[l: 0 rd: 0% 100% 100% 0% / 0% 50% 50% 0%].go @click=prev()>
							<i.fa.fa-angle-left>
				<h3> item.titulo
				<p> item.descricao
				# <button.btn> "Adicionar"

	css
		.card
			p: 1.5rem

			.imgs
				pos: relative				
				h: 300px
				w: 100%
				mb: 1.5rem

				.img
					pos: absolute
					background-size: cover
					background-position: center
					size: 100%
					animation-duration: 1s
					animation-fill-mode: both
					o: 0

					@not(.show)
						animation-name: fadeOut
						zi: -1

				.show
					animation-name: fadeIn

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
					w: 40px
					tween: .35s
					bg@hover: white/20
					cursor: pointer
					d: flex ai: center jc: center
					fs: 1.5rem
					c: white/50 @hover: white
					
			h3	
				fs: 1.5rem
				c: black/80

			p
				c: $grey

			.btn
				c: white @hover: $orange
				bg: $orange @hover: transparent
				rd: full
				p: .375rem .75rem
				bd: 1px solid $orange
				cursor: pointer		
				tween: .35s	
				outline: none
				us: none