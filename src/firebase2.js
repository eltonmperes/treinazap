import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyDrapztxkVqf16yOaAUZXSV6vY-3EZukEc",
    authDomain: "treinazapyes.firebaseapp.com",
    projectId: "treinazapyes",
    storageBucket: "treinazapyes.appspot.com",
    messagingSenderId: "352789884220",
    appId: "1:352789884220:web:a7e57d589afe78cbaf0239"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
