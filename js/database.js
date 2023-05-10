import { getDatabase, ref, set } from "firebase/database";
import firebaseApp from "../firebaseInit.js";

const database = getDatabase(firebaseApp);



function addBankAccount(){

       set( ref(database, "posts/1"), {
        name: "Hello world",
        body: "This is my first post!",
       })
         .then(() => console.log("data added"))
         .catch((err) => console.log(err.message));

}

// form for bank account , user: email

addBankAccount()