import firebase from './firebase'

const firestore = firebase.firestore()
const storage = firebase.storage()

class Item
	prop imagens = []
	prop titulo = ''
	prop valor = ''
	prop descricao = ''
	prop data
	prop id
	prop errors = {}

	constructor args
		for own k, v of (args or {})
			self[k] = v

	
	def save
		data = (new Date).toJSON()
		validates()
		if not Object.keys(errors).length
			let obj = Object.assign({}, self)

			if id
				await Item.updateItem(obj)
			else
				await Item.createItem(obj)
				
	def delete
		Item.deleteItem(self)
		
	def validates		
		errors = {}
		if not titulo
			errors.titulo = 'Você deve digitar um título.'
		if not descricao
			errors.descricao = 'Você deve digitar uma descrição.'
		if not imagens
			errors.imagens = 'Você deve selecionar uma ou mais imagens.'

Item.getItem = do |id|
	const img_refs = await storage.ref("{id}").list()
	const images_urls = await Promise.all(img_refs.items.map do(ref) ref.getDownloadURL())
	const images_responses = await Promise.all(images_urls.map do(url) window.fetch(url))
	const images = await Promise.all(images_responses.map do(img_res) img_res.blob())
	const doc = await firestore.collection("items").doc(id).get()
	const item = doc.data()
	item.id = doc.id
	item.imagens = images
	new Item(item)
	
Item.getItems = do |type|
	const collection = await firestore.collection("items").where("tipo", "==", type).get()
	await Promise.all collection.docs.map do |doc|
		let item = doc.data()
		const img_refs = await storage.ref("{doc.id}").list()
		const images_urls = await Promise.all(img_refs.items.map do(ref) ref.getDownloadURL())
		const images_responses = await Promise.all(images_urls.map do(url) window.fetch(url))
		const images = await Promise.all(images_responses.map do(img_res) img_res.blob())
		item.id = doc.id
		item.imgs_urls = images_urls
		item.imagens = images
		return new Item(item)
	
Item.deleteImages = do |id|
	const currentList = await storage.ref("{id}").listAll()
	await Promise.all(currentList.items.map do(ref) ref.delete())

Item.uploadImage = do |id, files|
	await Item.deleteImages(id)
	await Promise.all(files.map do(file) storage.ref("{id}/{file.name}").put(file))
		
Item.createItem = do |item|
	let files = item.imagens
	delete item.imagens
	delete item.id
	delete item.errors
	delete item.images_urls
	let ref = await firestore.collection("items").add(item)
	await Item.uploadImage(ref.id, files)

Item.updateItem = do |item|
	let id = item.id
	let files = item.imagens
	delete item.imagens
	delete item.id
	delete item.errors
	delete item.images_urls
	await firestore.collection("items").doc(id).update(item)
	await Item.uploadImage(id, files)

Item.deleteItem = do |item|
	await Item.deleteImages(item.id)
	await firestore.collection("items").doc(item.id).delete()

export default Item