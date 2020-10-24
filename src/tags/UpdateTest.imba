import Input		from '../atomic/atoms/Input'
import Textarea		from '../atomic/atoms/Textarea'
import Button		from '../atomic/atoms/Button'
import Switch		from '../atomic/atoms/Switch'
import Message		from '../atomic/atoms/Message'
import FormButton   from '../atomic/atoms/FormButton'

import FileInput	from '../atomic/molecules/FileInput'
import CustomForm	from '../atomic/molecules/CustomForm'
import Item from '../models/Item'


tag Update
	prop item = {}
	
	def mount
		item = await Item.getItem(route.params.id)
		
	def update
		await item.save()
		loading = false

	<self>
		<div.form-wrapper>
			<CustomForm color="{indigo2}">
				<div slot="form-title"> "EDITAR"
				<div[pb: .5rem]>
					<FileInput error=errors.imagens bind.data=item.imagens>
				<div[pb: .5rem]>
					<Input error=errors.titulo bind.data=item.titulo> "Título"
					<Message error=errors.titulo>
				<div[pb: .5rem]>
					<Input error=errors.valor special=(item.valor is "A combinar" ? true : false) bind.data=item.valor> "Valor" 
					<Switch error=errors.valor bind.data=item.valor> "A combinar"
					<Message error=errors.valor>
				<div[pb: .5rem]>
					<Textarea error=errors.descricao bind.data=item.descricao> "Descrição"
					<Message error=errors.descricao>

				<FormButton @click.update>
					if loading
						<i.icon.fa.fa-spinner.fa-pulse>
					else
						<i.icon.fa.fa-edit>
					"Editar"


export default Update