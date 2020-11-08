import Button from '../atoms/Button'
import Spinner from '../atoms/Spinner'

tag FileInput

	prop error = false
	prop data = ''
	prop previews = []
	prop loadingPreview

	def visit
		await renderImgs()
		render()

	def loadPreview e
		data.push *Array.from(e.target.files)
		await renderImgs()
		render()

	def renderImgs
		previews = []
		render()
		loadingPreview = true
		return new Promise do(resolve, err)
			for file in data
				let reader  = new FileReader()
				reader.onloadend = do
					let img = <img [size: 100%]>
					img.src = reader.result
					previews.push(img)
					if previews.length === data.length
						loadingPreview = false
						resolve()
					reader.onloadend = null
				reader.readAsDataURL(file)

	
	def removeImg i
		data.splice(i, 1)
		render()


	<self>
		<Button error=error width="full">
			<i.fa.fa-upload> 
			"Imagem(ens)"
			<input type="file" multiple
				accept="image/png, image/jpeg, image/jpg" 
				:change.loadPreview>

		if loadingPreview
			<Spinner>
		else
			<div.preview>
				for preview, i in previews
					<div.preview-item @click=removeImg(i)>
						preview

	css
		::-webkit-file-upload-button
			d: none

		i
			fs: 1.5rem
			mr: .5rem
		
		input
			rd: full
			cursor: pointer
			outline: none
			size: 100%
			pos: absolute t: 0 r: 0

		.preview
			d: flex flw: wrap

		.preview-item
			pos: relative
			size: 100px
			m: .5rem
			bd: 1px solid black/10
			p: 4px
			@hover
				background: red

export default FileInput
