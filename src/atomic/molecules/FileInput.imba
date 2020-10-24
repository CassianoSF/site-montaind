import Button from '../atoms/Button'

tag FileInput

	prop error = false
	prop data = ''

	def changeInput e
		data = Array.from(e.target.files)

	<self>
		<Button error=error width="full">
			<i.fa.fa-upload> 
			"Imagem(ens)"
			<input type="file" accept="image/png, image/jpeg, image/jpg" :change.changeInput multiple>

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

export default FileInput
