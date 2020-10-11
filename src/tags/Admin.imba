export default tag Admin
	
	prop auth = true

	def render
		<self>
			if auth
				<div.auth>
					<div.form>
						<h3> "LOGIN"
						<input type="email" placeholder="E-mail" required>
						<input type="password" placeholder="Senha" required>
						<button.btn type="submit"> "Entrar"

	css
		.auth
			h: 100vh w: 100vw
			d: flex ai: center jc: center

			.form
				br: md
				bd: 1px solid $orange
				p: 1rem
				d: flex
				fld: column
				shadow: lg

				input
					p: 1rem
					bg: transparent
					fs: 1rem
					br: xs
					mb: .5rem
					ta: center
					w: 100%
					tween: .35s
					c: white
					outline: none
					bdb: 1px solid $orange

				input@placeholder
					ff: $font
					fs: 1rem
					c: black/80
					fw: 500


