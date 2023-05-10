import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../firebaseInit.js";

const auth = getAuth(firebaseApp);

let loginForm = document.querySelector(".loginForm");

loginForm.addEventListener("submit", loginUser);

function loginUser(event) {
    event.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    signInWithEmailAndPassword(auth, email, password)
    .then(loggedInfo => {
        console.log("User logged in")
      // add user to local storage 
        console.log("user is",loggedInfo.user.email);
        localStorage.setItem("twitterUser", JSON.stringify(loggedInfo.user));
        alert("User logged in");
        window.location.href = "dashboard.html";
  })
    .catch(error => console.log(error.message));
}


