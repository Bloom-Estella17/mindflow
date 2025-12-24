Clé API:"AIzaSyAtb4nTMjvLruh0fg5O9_wiAPJI1Nall-g",
```

**C'est ENCORE traduit en français !**

- ❌ `Clé API` au lieu de `apiKey`
- ❌ `domaine d'authentification` au lieu de `authDomain`
- ❌ `authentification` au lieu de `auth`
- ❌ Guillemets bizarres

---

## **🎯 LE VRAI PROBLÈME :**

**Ton navigateur ou ton éditeur TRADUIT automatiquement le code !**

---

## **✅ SOLUTION :**

**Je vais te donner le code en TXT brut que tu vas copier directement !**

**COPIE CE CODE (Ctrl+C) :**
```
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

async function isUserPro() {
  const user = auth.currentUser;
  if (!user) return false;
  try {
    const userDoc = await db.collection('users').doc(user.uid).get();
    if (!userDoc.exists) return false;
    const userData = userDoc.data();
    return userData.isPro === true;
  } catch (error) {
    console.error('Error checking PRO:', error);
    return false;
  }
}

function isUserLoggedIn() {
  return auth.currentUser !== null;
}

function requireAuth() {
  if (!isUserLoggedIn()) {
    window.location.href = 'login.html';
    return false;
  }
  return true;
}

async function logout() {
  try {
    await auth.signOut();
    window.location.href = 'login.html';
  } catch (error) {
    console.error('Logout error:', error);
    alert('Erreur lors de la déconnexion');
  }
}
