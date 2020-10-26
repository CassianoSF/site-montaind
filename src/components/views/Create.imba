import Input from '@/components/atoms/Input'
import Textarea from '@/components/atoms/Textarea'
import Button from '@/components/atoms/Button'
import FileInput from '@/components/molecules/FileInput'
import Message from '@/components/atoms/Message'
import FormWrapper from '@/components/molecules/FormWrapper'

import Item from '@/models/Item'

tag Create

	prop item = new Item

	def mount
		item.tipo = route.params.tipo

	def createItem
		await item.save()
		loading = false

	<self>
		<div.create>
			<FormWrapper @submit=createItem!>
				<div slot="title"> "CRIAR" 
				<div[pb: .5rem]>
					<FileInput error=item.errors.imagens bind.data=item.imagens>
					<Message error=item.errors.imagens>
				<div[pb: .5rem]>
					<Input error=item.errors.titulo bind.data=item.titulo> "Título"
					<Message error=item.errors.titulo>
				<div[pb: .5rem]>
					<Input error=item.errors.valor bind.data=item.valor> "Valor" 
					<Message error=item.errors.valor>
				<div[pb: .5rem]>
					<Textarea error=item.errors.descricao bind.data=item.descricao> "Descrição"
					<Message error=item.errors.descricao>
				<div slot="button">
					if loading
						<i[mr: .5rem].fa.fa-spinner.fa-pulse>
					else
						<i[mr: .5rem].fa.fa-plus-circle>
					"Criar"

	css
		.create
			size: 100%
			py: 5rem
			d: flex ai: center jc: center
			bg: grey2

export default Create