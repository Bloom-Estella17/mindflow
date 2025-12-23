// Configuration Firebase pour MindFlow
// Ce fichier contient les clés de connexion à Firebase

const firebaseConfig = {
  apiKey: "AIzaSyAtb4nTMjvLruh0fg5O9_wiAPJI1Nall-g",
  authDomain: "mindflow-66abc.firebaseapp.com",
  projectId: "mindflow-66abc",
  storageBucket: "mindflow-66abc.firebasestorage.app",
  messagingSenderId: "466651144452",
  appId: "1:466651144452:web:4b1dc68d4f6ac1896830051",
  measurementId: "G-B7PEXP45WH"
};

// Initialisation Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Fonction pour vérifier si l'utilisateur est PRO
async function isUserPro() {
  const user = auth.currentUser;
  if (!user) return false;
  
  try {
    const userDoc = await db.collection('users').doc(user.uid).get();
    if (!userDoc.exists) return false;
    
    const userData = userDoc.data();
    return userData.isPro === true;
  } catch (error) {
    console.error('Erreur vérification PRO:', error);
    return false;
  }
}

// Fonction pour vérifier si l'utilisateur est connecté
function isUserLoggedIn() {
  return auth.currentUser !== null;
}

// Rediriger vers login si pas connecté
function requireAuth() {
  if (!isUserLoggedIn()) {
    window.location.href = 'login.html';
    return false;
  }
  return true;
}

// Déconnexion
async function logout() {
  try {
    await auth.signOut();
    window.location.href = 'login.html';
  } catch (error) {
    console.error('Erreur déconnexion:', error);
    alert('Erreur lors de la déconnexion');
  }
}
