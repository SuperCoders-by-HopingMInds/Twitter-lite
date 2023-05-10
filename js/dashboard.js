import {getAuth} from "firebase/auth";
import firebaseApp from "../firebaseInit.js";

let auth = getAuth(firebaseApp); 

let twitterUser = localStorage.getItem("twitterUser");
twitterUser = JSON.parse(twitterUser);

let loggedinUser = document.querySelector(".loggedin-user-info");

let para = document.createElement("p");
para.innerHTML = `Welcome ${twitterUser.email}`;
loggedinUser.appendChild(para);

// console.log("user is",twitterUser.email);