import firebase from "@/models/firebase"

export default tag Admin

	def clear error=false
		loading = false
		error = error
		password = ""

	def doLogin
		loading = true
		try
			const auth = firebase.auth()
			await auth.signInWithEmailAndPassword(email, password)
			clear()
			router.go('/admin/itens/produtos')
		catch err
			clear(true)

	def render
		<self>
			<div.auth>
				<div.form>
					<h3 [bg@after:$orange]=hover> "LOGIN"
					<input 
						.input-error=error 
						bind=email
						type="email"
						placeholder="E-mail"
						autofocus
						:keydown.enter.doLogin()>
					<input 
						.input-error=error 
						bind=password
						type="password"
						placeholder="Senha"
						autocomplete="new-password"
						:keydown.enter.doLogin()>

					<button.btn type="button" @mouseover=(do hover=true) @mouseout=(do hover=false) :click.doLogin()>
						if loading
							<i.icon.fa.fa-spinner.fa-pulse>
						else
							<i.icon.fa.fa-sign-in>
						"Entrar"
					<span.error> "E-mail ou senha inválidos." if error

	css
		.auth
			h: 100vh w: 100vw
			d: flex ai: center jc: center
			bg: grey2

			.form
				ta: center
				w: 40%
				max-width: 350px
				br: md
				p: 1rem
				d: flex
				fld: column
				shadow: lg
				bg: white

				h3
					mb: 1.5rem
					pos: relative
					pb: .5rem

					@after
						content: ''
						tween: .35s
						bg: #5D50C6
						w: 72px
						h: 5px
						pos: absolute
						b: 0 l: 50%
						x: -50%

				input
					p: 1rem
					bg: grey2
					fs: 1rem
					br: xs
					mb: .5rem
					ta: center
					w: 100%
					tween: .35s
					outline: none

				.input-error
					bg: red2					

				input@placeholder
					ff: $font
					fs: 1rem
					c: black/80
					fw: 500

				button
					tween: .35s
					br: xs
					c: white
					outline: none
					p: 1rem
					bg: #5D50C6 @hover: $orange
					cursor: pointer

					.icon
						mr: .5rem

				.error
					c: red
					fs: .9rem
					mt: .25rem
