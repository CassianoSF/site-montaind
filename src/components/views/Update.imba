import Input		from '@/components/atoms/Input'
import Textarea		from '@/components/atoms/Textarea'
import Button		from '@/components/atoms/Button'
import Switch		from '@/components/atoms/Switch'
import Message		from '@/components/atoms/Message'
import FormButton   from '@/components/atoms/FormButton'

import FileInput	from '@/components/molecules/FileInput'
import CustomForm	from '@/components/molecules/CustomForm'
import Item from '@/models/Item'


tag Update
	prop item = new Item
	
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
					<FileInput error=item.errors.imagens bind.data=item.imagens>
				<div[pb: .5rem]>
					<Input error=item.errors.titulo bind.data=item.titulo> "Título"
					<Message error=item.errors.titulo>
				<div[pb: .5rem]>
					<Input error=item.errors.valor special=(item.valor is "A combinar" ? true : false) bind.data=item.valor> "Valor" 
					<Switch error=item.errors.valor bind.data=item.valor> "A combinar"
					<Message error=item.errors.valor>
				<div[pb: .5rem]>
					<Textarea error=item.errors.descricao bind.data=item.descricao> "Descrição"
					<Message error=item.errors.descricao>

				<FormButton @click.update>
					if loading
						<i.icon.fa.fa-spinner.fa-pulse>
					else
						<i.icon.fa.fa-edit>
					"Editar"


export default Update