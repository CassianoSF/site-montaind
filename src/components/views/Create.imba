import Input from '@/components/atoms/Input'
import Textarea from '@/components/atoms/Textarea'
import Button from '@/components/atoms/Button'
import FileInput from '@/components/molecules/FileInput'
import Message from '@/components/atoms/Message'
import FormButton from '@/components/atoms/FormButton'
import Switch from '@/components/atoms/Switch'

import Item from '@/models/Item'

export default tag Create

	prop item = new Item

	def mount
		item.tipo = route.params.tipo

	def createItem
		loading = true
		await item.save()
		loading = false

	<self>
		<div.create>
			<form @submit.prevent>
				<div slot="title"> "CRIAR" 
				<div[pb: .5rem]>
					<FileInput error=item.errors.imagens bind.data=item.imagens>
					<Message error=item.errors.imagens>
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
				<FormButton :click=createItem()>
					<div>
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

			form
				w: 95% max-width: 600px
				p: 1rem
				shadow: lg
				bg: white

				h3
					ta: center
					mb: 3rem
					pos: relative
					pb: .5rem

					@after
						content: ''
						tween: .35s
						bg: #5D50C6
						w: 72px
						h: 5px
						pos: absolute b: 0 l: 50%
						x: -50%
