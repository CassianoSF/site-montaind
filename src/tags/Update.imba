import Input		from '../atomic/atoms/Input'
import Textarea		from '../atomic/atoms/Textarea'
import Button		from '../atomic/atoms/Button'
import Switch		from '../atomic/atoms/Switch'
import Message		from '../atomic/atoms/Message'

import FileInput	from '../atomic/molecules/FileInput'
import FormWrapper	from '../atomic/molecules/FormWrapper'

import {fb} from '../models/Firebase'

tag Update

	prop item = {imagens: [], titulo: '', valor: '', descricao: ''}
	prop errors = {imagens: false, titulo: false, valor: false, descricao: false}
	prop previews = []

	def mount
		item.tipo = route.params.tipo

	def desselectImage id
		item.imagens.splice(id, 1)
		previews.splice(id, 1)
		console.log previews, item.imagens

	def updateItem
		loading = true
		errors = {imagens: false, titulo: false, valor: false, descricao: false}

		for own field of item
			if !item[field]
				errors[field] = 'Você deve preencher este campo.'

		if !item.imagens
			errors.imagens = 'Você deve selecionar uma ou mais imagens.'
		
		if !errors.valor and !item.valor.match(/^\d+(,\d{1,2})?$/)
			errors.valor = 'Você deve digitar o valor corretamente.'
		
		if Object.values(errors).every(do |error| !error)
			fb.uploadImages
			item = {imagens: [], titulo: '', valor: '', descricao: ''}
		loading = false

	def loadPreview
		previews = []
		for file in item.imagens
			let reader  = new FileReader()
			reader.onloadend = do
				let img = <img [size: 100%]>
				img.src = reader.result
				previews.push(img)
				render()
			reader.readAsDataURL(file)

	<self>
		<div.update>
			<FormWrapper @submit=updateItem!>
				<div slot="title"> "EDITAR" 
				<div[pb: .5rem]>
					<FileInput error=errors.imagens bind.data=item.imagens :change.loadPreview>

					<div[d: flex flw: wrap]>
						for preview, id in previews
							<div.preview[pos: relative size: 100px m: .5rem bd: 1px solid black/10 p: 4px] :click=desselectImage(id)>
								preview

					<Message error=errors.imagens>
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
				<div slot="button">
					if loading
						<i[mr: .5rem].fa.fa-spinner.fa-pulse>
					else
						<i[mr: .5rem].fa.fa-edit>
					"Editar"

	css
		.update
			size: 100%
			py: 5rem
			d: flex ai: center jc: center
			bg: grey2
			ta: center

		.preview
			pos: relative
			tween: .35s
			cursor: pointer
			
			@hover img
				o: .25
			
			@hover
				content@after: 'Remover'
			
			@after
				ff: $font 
				c: red5
				pos: absolute t: 0 r: 0
				size: 100%
				

export default Update