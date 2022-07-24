// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect, signInWithPopup,GoogleAuthProvider} from "firebase/auth"


import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB415zZ1BPEFK0vKH9xuij9x9haoVcBw10",
  authDomain: "thrift-shop-db.firebaseapp.com",
  projectId: "thrift-shop-db",
  storageBucket: "thrift-shop-db.appspot.com",
  messagingSenderId: "490553157827",
  appId: "1:490553157827:web:e865d5587df8575ef7da76"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const authProvider= new GoogleAuthProvider()
authProvider.setCustomParameters({
    prompt:"select_account"
})


export const auth=getAuth();
export const signInWithGooglePopup=()=>{return signInWithPopup(auth,authProvider)}



// Intantiating database
export const db=getFirestore()

export const createUserDocumentFromAuth=async (userAuth)=>{
  const userDocRef=doc(db,'users',userAuth.uid)
  console.log(userDocRef,'printing usr doc ref')
  const userSnapShot=await getDoc(userDocRef)
console.log('prinitnf user snap shot in utils',userSnapShot)
console.log(userSnapShot.exists())

if(userSnapShot.exists()){
  const {displayName,email}=userAuth;
  const createdAt=new Date()

  try{
    await setDoc(userDocRef,{
      displayName,
      email,
      createdAt
    });
  }catch(err){
    console.log('error creating the user',err)
  }
}

}

