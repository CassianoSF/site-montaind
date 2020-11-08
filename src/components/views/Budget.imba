import BudgetHeader from '@/components/organisms/BudgetHeader' 
import FadeInUp from '@/components/organisms/FadeInUp'


export default tag Budget

	prop orcamento = {nome: '', empresa: '', email: '', itens: ''}
	prop errors = {nome: '', empresa: '', email: '', itens: ''}

	def autosize
		setTimeout(&, 0) do
			$textarea.style.height = "100%"
			$textarea.style.height = "{$textarea.scrollHeight}px"

	def sendBudget()
		loading = true
		const res = await window.fetch('https://us-central1-site-montaind-67a09.cloudfunctions.net/sendMail',{
			method: 'post',
			body: 'orcamento'
		})
		loading = false
		message = await res.json()
		console.log(message)

	def mount
		window.scrollTo(0,0)

	def render
		<self>
			<BudgetHeader>
			<FadeInUp>
				<div.auth>
					<div.form>
						<div.input>
							<div.input-wrapper>
								<input .error=errors.nome .animated-input type="text" required bind=orcamento.nome>
								<label [c: red bdb: 1px solid red bdb@before: 2px solid red]=errors.nome .animated-label>
									<span.content-name> "Nome"
							<small [visibility: visible]=errors.nome > errors.nome
						<div.input>
							<div.input-wrapper>
								<input .error=errors.empresa .animated-input type="text" required bind=orcamento.empresa>
								<label [c: red bdb: 1px solid red bdb@before: 2px solid red]=errors.empresa .animated-label>
									<span.content-name> "Empresa"
							<small [visibility: visible]=errors.empresa > errors.empresa
						<div.input>
							<div.input-wrapper>
								<input  .error=errors.email .animated-input type="text" required bind=orcamento.email>
								<label [c: red bdb: 1px solid red bdb@before: 2px solid red]=errors.email .animated-label>
									<span.content-name> "E-mail"
							<small [visibility: visible]=errors.email > errors.email
						<div.input>
							<div.input-wrapper>
								<textarea$textarea .error=errors.itens .animated-input :keydown.autosize() rows="1" required bind=orcamento.itens>
								<label [c: red bdb: 1px solid red bdb@before: 2px solid red]=errors.itens .animated-label>
									<span.content-name> "Escreva o que deseja orçar aqui"
							<small [visibility: visible]=errors.itens > errors.itens
			<FadeInUp>
				<div.btn-wrapper>
					<button.btn @click=sendBudget()> "Enviar"
						<i.fa.fa-paper-plane>

	css
		.btn-wrapper
			d: flex jc:center
			mb: 5rem

			.btn	
				c: white @hover: $orange
				bg: $orange @hover: transparent
				rd: full
				p: 1rem 1.5rem
				bd: 1px solid $orange
				cursor: pointer		
				tween: .35s	
				outline: none
				us: none
				d: flex ai: center
				w: 95%
				max-width: 600px
				d: flex jc: center

				i
					ml: 1rem
					fs: 1.25rem

		.auth
			d: flex ai: center jc: center
			pt: 5rem pb: 3rem

			.form
				ta: center
				w: 95%
				max-width: 600px
				br: md
				p: 1rem
				d: flex
				fld: column
				bg: white

				h3
					mb: 3rem
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

				
		.input
			pb: .5rem
			
		small
			c: red
			w: 100%
			d: block
			ta: start
			visibility: hidden

		.input-wrapper
			pos: relative
			of: hidden

			textarea
				resize: none
				
			input 
				h: 100%
				pb: 6px
				

			input, textarea
				width: 100% 
				overflow: hidden
				color: grey8
				pt: 20px
				border: none
				outline: none
				fs: 1rem

				@focus + label span, @valid + label span
					top: 0
					scale: .875

				@focus@not(.error) + label span, @valid@not(.error) + label span
					c: $orange

				@focus + label@after, @valid + label@after
					x: 0% 

				@focus@not(.error) + label@after, @valid@not(.error) + label@after
					bdb: 2px solid $orange 
			

			label
				pos: absolute
				t: 0
				l: 0
				size: 100% 
				pointer-events: none
				bdb: 1px solid black/42
				c: black/42

				@after
					content: ''
					pos: absolute
					l: 0 b: -1px
					size: 100%
					bdb: 2px solid red
					x: -100%
					tween: .3s

				span
					pos: absolute
					l: 0 t: 20px
					tween: top .3s, transform .3s 
					transform-origin: top left