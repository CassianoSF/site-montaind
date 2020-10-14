export default tag Crud

	prop tipo

	def create
		router.go("admin/itens/{tipo.id}/criar")

	def update id
		router.go("admin/itens/{tipo.id}/editar/{id}")
	
	def delete id
		console.log "deleted"

	def mount 
		console.log router

	def render
		<self>
			<div.container>
				<div.wrapper>
					<div.header[d:flex jc: space-between]>
						<h2[c:grey8]> tipo.name
						<button.btn :click.create> 
							<i.fa.fa-plus-circle[mr:.5rem]>
							"Adicionar"
					<table.table>
						<thead[bdb: 3px solid grey3 bdt: 2px solid grey3]>
							<tr[lh: 2]>
								<th> "Título"
								<th> "Ações"
						<tbody>
							<tr[bdb: 2px solid grey3]>
								<th> "Engrenagem 20mm especial"
								<th>
									<div[d: flex ai:center]>
										<i[c:yellow5 @hover: yellow7 tween: .35s mr: .5rem fs: 1.5rem mb: -2px cursor: pointer].fa.fa-edit title="Editar" :click.update("3123")>
										<i[c:red6 @hover: red8 tween: .35s ml: .5rem fs: 1.5rem cursor: pointer].fa.fa-trash title="Excluir" :click.delete("12313")>
							
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

			.btn
				h: 100%
				c: white @hover: $orange
				bg: $orange @hover: transparent
				rd: full
				p: .375rem .75rem
				bd: 1px solid $orange
				cursor: pointer		
				tween: .35s	
				outline: none
				us: none


