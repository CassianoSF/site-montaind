import Button from '../atomic/atoms/Button'

export default tag Crud

	prop tipo

	def doCreate
		router.go("admin/itens/{tipo.id}/criar")

	def doUpdate id
		router.go("admin/itens/{tipo.id}/editar/{id}")
	
	def doDelete id
		console.log "deleted"

	def mount 
		console.log router

	def render
		<self>
			<div.container[bg: white size: 100%]>
				<div.wrapper>
					<div.header[d:flex jc: space-between]>
						<h2[c:grey8]> tipo.name
						<Button :click=doCreate> 
							<i.fa.fa-plus-circle[mr:.5rem]>
							"Adicionar"
					<table.table>
						<thead[bdb: 3px solid grey3 bdt: 2px solid grey3]>
							<tr[lh: 2]>
								<th> "Título"
								<th> "Ações"
						<tbody>
							for i in [1 .. 12]
								<tr[bdb: 2px solid grey3]>
									<th> "Engrenagem 20mm especial"
									<th>
										<div[d: flex ai:center]>
											<i[c:yellow5 @hover: yellow7 tween: .35s mr: .5rem fs: 1.5rem mb: -2px cursor: pointer].fa.fa-edit title="Editar" :click=doUpdate("3123")>
											<i[c:red6 @hover: red8 tween: .35s ml: .5rem fs: 1.5rem cursor: pointer].fa.fa-trash title="Excluir" :click=doDelete("12313")>
							
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


