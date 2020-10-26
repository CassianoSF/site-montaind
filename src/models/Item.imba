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
	
	def save
		data = (new Date).toJSON()
		validates()
		if not Object.keys(errors).length
			let obj = Object.assign({}, self)
			delete obj.errors
			delete obj.id
			if id
				await Item.updateItem(obj)
			else
				await Item.createItem(obj)
				
	def delete
		Item.deleteItem(self)
		
	def validates		
		errors = {}
		for own field of self
			if not self[field]
				errors[field] = 'Você deve preencher este campo.'

		if not self.imagens
			errors.imagens = 'Você deve selecionar uma ou mais imagens.'
		
		if !errors.valor and !self.valor.match(/^\d+(,\d{1,2})?$/)
			errors.valor = 'Você deve digitar o valor corretamente.'

Item.getItem = do |id|
	const doc = await firestore.collection("items").doc(id).get()
	const item = doc.data()
	item.id = doc.id
	new Item(item)
	
Item.getItems = do |type|
	const collection = await firestore.collection("items").where("tipo", "==", type).get()
	collection.docs.map do |doc|
		let item = doc.data()
		item.id = doc.id
		new Item(item)
		
Item.createItem = do |item|
	let files = item.imagens
	delete item.imagens
	let ref = await firestore.collection("items").add(item)
	Item.uploadImage(ref.id, files)
	
Item.uploadImage = do |id, files|
	for file in files
		await storage.ref("{id}/{file.name}").put(file)

Item.updateItem = do |item|
	firestore.collection("items").doc(item.id).update(item)

Item.deleteItem = do |item|
	firestore.collection("items").doc(item.id).delete()

export default Item