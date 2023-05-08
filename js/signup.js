
import { getAuth, createUserWithEmailAndPassword, updateProfile,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseApp from "../firebaseInit.js";

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider(firebaseApp);

let signupForm = document.querySelector(".signupForm");
let googleSignup = document.querySelector(".google-login-button");

signupForm.addEventListener("submit", addUser)



function addUser(e){
    e.preventDefault();
   let email = document.querySelector("#email").value;
   let password = document.querySelector("#password").value;
   createUserWithEmailAndPassword(auth, email, password)
   .then(user=> {
    console.log("user added")
    updateProfile(auth.currentUser,{
        displayName: document.querySelector("#name").value
    })
    .then(() => console.log("user deatils added"))
    .catch(err => console.log("user deatils didnot get added",err.message))

}) 
   .catch(err => console.log("user didnot get added",err.message))
   
}


googleSignup.addEventListener("click", googleSignupUser)

function googleSignupUser(){
    signInWithPopup(auth, provider)
    .then(user => console.log("user added"))
    .catch(err => console.log("user didnot get added",err.message))
}


