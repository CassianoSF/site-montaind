import Input from '../atomic/atoms/Input'
import Textarea from '../atomic/atoms/Textarea'
import Button from '../atomic/atoms/Button'
import FileInput from '../atomic/molecules/FileInput'
import Message from '../atomic/atoms/Message'
import FormWrapper from '../atomic/molecules/FormWrapper'

tag Create

	prop item = {imagem: '', titulo: '', valor: '', descricao: ''}
	prop errors = {imagem: false, titulo: false, valor: false, descricao: false}

	def mount
		item.tipo = route.params.tipo

	def createItem
		errors = {imagem: false, titulo: false, valor: false, descricao: false}

		for own field of item
			if !item[field]
				errors[field] = 'Você deve preencher este campo.'

		if !item.imagem
			errors.imagem = 'Você deve selecionar uma ou mais imagens.'
		
		if !errors.valor and !item.valor.match(/^\d+(,\d{1,2})?$/)
			errors.valor = 'Você deve digitar o valor corretamente.'
		
		if Object.values(errors).every(do |error| !error)
			console.log item
			item = {imagem: '', titulo: '', valor: '', descricao: ''}

	<self>
		<div.create>
			<FormWrapper @submit=createItem!>
				<div slot="title"> "CRIAR" 
				<div[pb: .5rem]>
					<FileInput error=errors.imagem bind.data=item.imagem>
					<Message error=errors.imagem>
				<div[pb: .5rem]>
					<Input error=errors.titulo bind.data=item.titulo> "Título"
					<Message error=errors.titulo>
				<div[pb: .5rem]>
					<Input error=errors.valor bind.data=item.valor> "Valor" 
					<Message error=errors.valor>
				<div[pb: .5rem]>
					<Textarea error=errors.descricao bind.data=item.descricao> "Descrição"
					<Message error=errors.descricao>
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