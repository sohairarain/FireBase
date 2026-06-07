import { doc , getFirestore , collection , addDoc } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
import { initializeApp } from " https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeJIgDFGk7rGvPBOKOeohlJ_KxzV-L0sI",
  authDomain: "real-estate-38daa.firebaseapp.com",
  projectId: "real-estate-38daa",
  storageBucket: "real-estate-38daa.firebasestorage.app",
  messagingSenderId: "477602530305",
  appId: "1:477602530305:web:494ab2b4aff6baf13f2c00",
  measurementId: "G-VF8XN25E9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const alovelaceDocumentRef = doc(db, 'users', 'alovelace');
const analytics = getAnalytics(app);

const usersCollectionRef = collection(db, 'users');

console.log(usersCollectionRef)

// // try {
// //     const docRef = await addDoc(collection(db , 'users'),{    first: "Ada",
// //     last: "Lovelace",
// //     born: 1815
// // })
//     console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//      console.error("Error adding document: ", e);
// }