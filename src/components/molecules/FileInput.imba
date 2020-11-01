import Button from '../atoms/Button'

tag FileInput

	prop error = false
	prop data = ''
	prop previews = []

	def loadPreview e
		data = Array.from(e.target.files)
		previews = []
		for file in data
			let reader  = new FileReader()
			reader.onloadend = do
				let img = <img [size: 100%]>
				img.src = reader.result
				previews.push(img)
				render()
			reader.readAsDataURL(file)

	<self>
		<Button error=error width="full">
			<i.fa.fa-upload> 
			"Imagem(ens)"
			<input type="file" multiple
				accept="image/png, image/jpeg, image/jpg" 
				:change.loadPreview>

		<div.preview>
			for preview, id in previews
				<div.preview-item :click=desselectImage(id)>
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

export default FileInput
