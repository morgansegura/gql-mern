import * as firebase from 'firebase'

const firebaseConfig = {
	apiKey: 'AIzaSyBX7HYMARY4o2nv61uXkienDcOh8ECvxUE',
	authDomain: 'gqlmern-1593a.firebaseapp.com',
	projectId: 'gqlmern-1593a',
	storageBucket: 'gqlmern-1593a.appspot.com',
	// messagingSenderId: '790726157586',
	appId: '1:790726157586:web:984a6bc7c139542efc7fcb'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
