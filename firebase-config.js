// Firebase Configuration for MindFlow
// This file contains the connection keys to Firebase

const firebaseConfig = {
  apiKey: "AIzaSyAtb4nTMjvLruh0fg5O9_wiAPJI1Nall-g",
  authDomain: "mindflow-66abc.firebaseapp.com",
  projectId: "mindflow-66abc",
  storageBucket: "mindflow-66abc.firebasestorage.app",
  messagingSenderId: "466651144452",
  appId: "1:466651144452:web:4b1dc68d4f6ac1896830051",
  measurementId: "G-B7PEXP45WH"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Function to check if user is PRO
async function isUserPro() {
  const user = auth.currentUser;
  if (!user) return false;
  
  try {
    const userDoc = await db.collection('users').doc(user.uid).get();
    if (!userDoc.exists) return false;
    
    const userData = userDoc.data();
    return userData.isPro === true;
  } catch (error) {
    console.error('Error checking PRO status:', error);
    return false;
  }
}

// Function to check if user is logged in
function isUserLoggedIn() {
  return auth.currentUser !== null;
}

// Redirect to login if not logged in
function requireAuth() {
  if (!isUserLoggedIn()) {
    window.location.href = 'login.html';
    return false;
  }
  return true;
}

// Logout function
async function logout() {
  try {
    await auth.signOut();
    window.location.href = 'login.html';
  } catch (error) {
    console.error('Logout error:', error);
    alert('Erreur lors de la déconnexion');
  }
}
