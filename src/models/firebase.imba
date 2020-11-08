import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

const config = {
	apiKey: "AIzaSyD6VIHAAbhnfEnGWxblbO6YXCprs9Pw96M",
	authDomain: "site-montaind-67a09.firebaseapp.com",
	databaseURL: "https://site-montaind-67a09.firebaseio.com",
	projectId: "site-montaind-67a09",
	storageBucket: "site-montaind-67a09.appspot.com",
	messagingSenderId: "927054406079",
	appId: "1:927054406079:web:41581606f2eccaa681010a",
	measurementId: "G-TXSBM5Q0LD"
}

firebase.initializeApp(config)

export default firebase