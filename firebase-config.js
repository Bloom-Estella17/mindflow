const firebaseConfig = {
  apiKey: "AIzaSyAtb4nTMjvLruh0fg5O9_wiAPJI1Nall-g",
  authDomain: "mindflow-66abc.firebaseapp.com",
  projectId: "mindflow-66abc",
  storageBucket: "mindflow-66abc.firebasestorage.app",
  messagingSenderId: "466651144452",
  appId: "1:466651144452:web:4b1dc68d4f6ac1896830051",
  measurementId: "G-B7PEXP45WH"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
