import '../../web_modules/imba/dist/imba.js';

import firebase from '../../web_modules/firebase.js';

const config = {
	apiKey: "AIzaSyBWZvlUF8nBvGuyMxsEllXHPOjRKmDfgSI",
	authDomain: "site-montaind.firebaseapp.com",
	databaseURL: "https://site-montaind.firebaseio.com",
	projectId: "site-montaind",
	storageBucket: "site-montaind.appspot.com",
	messagingSenderId: "367409790951",
	appId: "1:367409790951:web:5988f4273d381b85008742"
};

class Firebase {
	
	
	constructor(){
		this.authUser = undefined;
		
		firebase.initializeApp(config);
		this.firestore = firebase.firestore();
		this.auth = firebase.auth();
	}
	
	getItem(tipo){
		
		return this.firestore.collection("items").where("tipo","==",tipo).get();
	}
	
	createItem(item){
		
		return this.firestore.collection("items").add(item);
	}
	
	updateItem(item){
		
		return this.firestore.collection("items").doc(item.id).update(item);
	}
	
	deleteItem(id){
		
		return this.firestore.collection("items").doc(id).delete();
	}
	
	doLogin(email,password){
		
		return this.auth.signInWithEmailAndPassword(email,password);
	}
	
	doLogout(){
		
		return this.auth.signOut();
	}
};

export const fb = new Firebase;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZpcmViYXNlLmltYmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLENBQUMsUUFBUSxNQUFNLFVBQVU7O0FBQy9CLEtBQ0csQ0FBQyxNQUFNLEdBQUc7Q0FBRyxNQUNaLEVBQUUseUNBQXlDO0NBQUUsVUFDMUMsRUFBRSwrQkFBK0I7Q0FBRSxXQUNuQyxFQUFFLHNDQUFzQztDQUFFLFNBQzdDLEVBQUUsZUFBZTtDQUFFLGFBQ2hCLEVBQUUsMkJBQTJCO0NBQUUsaUJBQzVCLEVBQUUsY0FBYztDQUFFLEtBQUssRUFBRSwyQ0FDTztDQUFFOztBQUFFLEtBQUssQ0FBQyxRQUdsRDs7O0NBRUssV0FFUDtPQUpVLFFBRVY7O0VBRUcsUUFBUSxDQUFDLGFBQ0wsQ0FBQyxNQUFNLENBQUM7RUFBRyxjQUFTLEdBQUcsUUFDMUIsQ0FBQyxTQUFTLEVBQUU7RUFBRyxTQUFJLEdBQUcsUUFBUSxDQUFDLElBQ2hDLEVBQUU7RUFBQTs7Q0FBTyxPQUFPLENBQUMsSUFBSTs7RUFDdkIscUJBQ08sQ0FBQyxVQUNULENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFO0VBQUE7O0NBQU8sVUFBVSxDQUFDLElBQUk7O0VBQzlELHFCQUNPLENBQUMsVUFBVSxDQUFDLE9BQ2YsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7RUFBQTs7Q0FBTyxVQUFVLENBQUMsSUFBSTs7RUFBRyxxQkFFcEMsQ0FBQyxVQUFVLENBQUMsT0FDZixDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0VBQUE7O0NBQU8sVUFBVSxDQUFDLEVBQUU7O0VBQUcscUJBRXBELENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FDbkIsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO0VBQUE7O0NBQU8sT0FBTyxDQUFDLEtBQUssQ0FBRSxRQUFROztFQUMvQyxnQkFDRSxDQUFDLDBCQUEwQixDQUM3QixLQUFLLENBQUUsUUFBUSxDQUFDO0VBQUE7O0NBQU8sUUFBUTs7RUFBRyxnQkFBSSxDQUFDLE9BQU8sRUFBRTtFQUFBO0FBQUE7O09BRTdDLEtBQUssQ0FBQyxFQUFFLEdBQ1IsR0FBRCxDQUFDLFFBQVEiLCJmaWxlIjoiRmlyZWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnXHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcblx0YXBpS2V5OiBcIkFJemFTeUJXWnZsVUY4bkJ2R3V5TXhzRWxsWEhQT2pSS21EZmdTSVwiXHJcblx0YXV0aERvbWFpbjogXCJzaXRlLW1vbnRhaW5kLmZpcmViYXNlYXBwLmNvbVwiXHJcblx0ZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9zaXRlLW1vbnRhaW5kLmZpcmViYXNlaW8uY29tXCJcclxuXHRwcm9qZWN0SWQ6IFwic2l0ZS1tb250YWluZFwiXHJcblx0c3RvcmFnZUJ1Y2tldDogXCJzaXRlLW1vbnRhaW5kLmFwcHNwb3QuY29tXCJcclxuXHRtZXNzYWdpbmdTZW5kZXJJZDogXCIzNjc0MDk3OTA5NTFcIlxyXG5cdGFwcElkOiBcIjE6MzY3NDA5NzkwOTUxOndlYjo1OTg4ZjQyNzNkMzgxYjg1MDA4NzQyXCJcclxufVxyXG5cclxuY2xhc3MgRmlyZWJhc2VcclxuXHJcblx0cHJvcCBhdXRoVXNlclxyXG5cclxuXHRkZWYgY29uc3RydWN0b3JcclxuXHRcdGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKVxyXG5cdFx0ZmlyZXN0b3JlID0gZmlyZWJhc2UuZmlyZXN0b3JlKClcclxuXHRcdGF1dGggPSBmaXJlYmFzZS5hdXRoKClcclxuXHJcblx0ZGVmIGdldEl0ZW0gdGlwb1xyXG5cdFx0ZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJpdGVtc1wiKS53aGVyZShcInRpcG9cIiwgXCI9PVwiLCB0aXBvKS5nZXQoKVxyXG5cclxuXHRkZWYgY3JlYXRlSXRlbSBpdGVtXHJcblx0XHRmaXJlc3RvcmUuY29sbGVjdGlvbihcIml0ZW1zXCIpLmFkZChpdGVtKVxyXG5cclxuXHRkZWYgdXBkYXRlSXRlbSBpdGVtXHJcblx0XHRmaXJlc3RvcmUuY29sbGVjdGlvbihcIml0ZW1zXCIpLmRvYyhpdGVtLmlkKS51cGRhdGUoaXRlbSlcclxuXHJcblx0ZGVmIGRlbGV0ZUl0ZW0gaWRcclxuXHRcdGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwiaXRlbXNcIikuZG9jKGlkKS5kZWxldGUoKVxyXG5cclxuXHRkZWYgZG9Mb2dpbiBlbWFpbCwgcGFzc3dvcmRcclxuXHRcdGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG5cclxuXHRkZWYgZG9Mb2dvdXRcclxuXHRcdGF1dGguc2lnbk91dCgpXHJcblxyXG5leHBvcnQgY29uc3QgZmIgPSBuZXcgRmlyZWJhc2VcclxuIl19