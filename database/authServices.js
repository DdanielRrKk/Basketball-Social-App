import { getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword } from "firebase/auth";


export function SignUp(email, password) {
    let uid = '';
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => uid = userCredential.user.uid)
    .catch((error) => console.log(error));
    return uid;
}

export function SignIn(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => console.log(userCredential.user)) // for debuging
    .catch((error) => console.log(error));
}