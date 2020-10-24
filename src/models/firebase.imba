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

firebase.initializeApp(config)

export default firebase