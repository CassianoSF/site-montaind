import firebase from 'firebase'

const config = {
	apiKey: "AIzaSyBWZvlUF8nBvGuyMxsEllXHPOjRKmDfgSI"
	authDomain: "site-montaind.firebaseapp.com"
	databaseURL: "https://site-montaind.firebaseio.com"
	projectId: "site-montaind"
	storageBucket: "site-montaind.appspot.com"
	messagingSenderId: "367409790951"
	appId: "1:367409790951:web:5988f4273d381b85008742"
}

class Firebase

	prop authUser

	def constructor
		firebase.initializeApp(config)
		firestore = firebase.firestore()
		auth = firebase.auth()

	def getItem tipo
		firestore.collection("items").where("tipo", "==", tipo).get()

	def createItem item
		firestore.collection("items").add(item)

	def updateItem item
		firestore.collection("items").doc(item.id).update(item)

	def deleteItem id
		firestore.collection("items").doc(id).delete()

	def doLogin email, password
		auth.signInWithEmailAndPassword(email, password)

	def doLogout
		auth.signOut()

export const fb = new Firebase
