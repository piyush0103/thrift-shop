// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
getDocs
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB415zZ1BPEFK0vKH9xuij9x9haoVcBw10",
  authDomain: "thrift-shop-db.firebaseapp.com",
  projectId: "thrift-shop-db",
  storageBucket: "thrift-shop-db.appspot.com",
  messagingSenderId: "490553157827",
  appId: "1:490553157827:web:e865d5587df8575ef7da76",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const authProvider = new GoogleAuthProvider();
authProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, authProvider);
};
export const signInWithGoogleRedirect = () => {
  return signInWithRedirect(auth, authProvider);
};

// Intantiating database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef, "printing usr doc ref");
  const userSnapShot = await getDoc(userDocRef);
  console.log("prinitnf user snap shot in utils", userSnapShot);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (err) {
      console.log(err, "occurred while setting the doc");
    }
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  const createduser = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return createduser;
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  const response = await signInWithEmailAndPassword(auth, email, password);

  console.log("printing response with user sign in", response);
  return response;
};

export const userSignOut = async () => {
  await signOut(auth);
};

export const onAuthStateChangelistener = (callback) => {
  onAuthStateChanged(auth, callback);
};

export const addCollectionsToFireStore = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesCollections =async ()=>{
  const collectionRef=collection(db,'category')
  const q=query(collectionRef)

  const querySnapshot=await getDocs(q)
console.log('well what do we have querysnapshot',querySnapshot)
  const categoryMap=querySnapshot.docs.reduce((acc,docSnapshot)=>{
    const {title,items}=docSnapshot.data();
    acc[title.toLowerCase()]=items
    console.log('well what do we have acc',acc)

    return acc
  },{})
return categoryMap
}