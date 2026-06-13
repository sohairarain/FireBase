  import { getFirestore , doc , setDoc} from  "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
  import { getDatabase , set ,ref } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  const firebaseConfig = {
  };    

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);  
  const db = getFirestore(app);


export {doc , setDoc , db , createUserWithEmailAndPassword , auth }
