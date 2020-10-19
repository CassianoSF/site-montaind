import Button from '../atomic/atoms/Button'

import {fb} from '../models/Firebase'

export default tag Crud

	prop tipo
	prop itens
	prop loading = true

	def doCreate
		router.go("admin/itens/{tipo.id}/criar")

	def doUpdate id
		router.go("admin/itens/{tipo.id}/editar/{id}")
	
	def doDelete id
		console.log "deleted"

	def mount
		itens = await fb.getItens(tipo.id)
		loading = false
		render!

	def render
		<self>
			<div.container[bg: white size: 100%]>
				<div.wrapper>
					<div.header[d:flex jc: space-between]>
						<h2[c:grey8]> tipo.name
						<Button :click=doCreate> 
							<i.fa.fa-plus-circle[mr:.5rem]>
							"Adicionar"
					<table[pos:relative].table>
						<thead[bdb: 3px solid grey3 bdt: 2px solid grey3]>
							<tr[lh: 2]>
								<th> "Título"
								<th> "Ações"
						<tbody>
							if loading
								<div[d: flex jc: center pos: absolute b: -3rem l: 50% x: -50%]>
									<i[c: $orange fs: 2rem mr: .5rem].fa.fa-spinner.fa-pulse>
							else
								for item in itens.docs
									<tr[bdb: 2px solid grey3]>
										<th> item.data().titulo
										<th>
											<div[d: flex ai:center]>
												<i[c:yellow5 @hover: yellow7 tween: .35s mr: .5rem fs: 1.5rem mb: -2px cursor: pointer].fa.fa-edit title="Editar" :click=doUpdate(item.id)>
												<i[c:red6 @hover: red8 tween: .35s ml: .5rem fs: 1.5rem cursor: pointer].fa.fa-trash title="Excluir" :click=doDelete(item.id)>
							
	css
		.wrapper
			pt: 5rem
			pb: 7rem

			.table
				w:100%

				th
					lh: 3
					ta: start
					px: 1rem
			
				thead th
					c: grey7
					fw: 500


