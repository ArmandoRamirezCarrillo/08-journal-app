import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { firebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const {displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            //user info
            displayName, email, photoURL, uid
        }

    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        return{
            ok: false,
            errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async({email, password, displayName}) => {
    try {
        const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const {uid, photoURL} = resp.user;
        //TODO actualizar el usuario en firebase
        await updateProfile(firebaseAuth.currentUser,{displayName});
        return {
            ok: true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        console.log(error);
        return {
            ok: false, errorMessage: (error.message === 'Firebase: Error (auth/email-already-in-use).' ? 'Este usuario ya ha sido registrado' : null)
        }
    }
}

export const loginWithEmailPassword = async({email, password}) => {
    try {
        const resp = await signInWithEmailAndPassword(firebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user;
        return {
            ok: true,
            uid, photoURL, displayName
        }
    } catch (error) {
        console.log(error);
        return {
            ok: false, errorMessage: (error.message == 'Firebase: Error (auth/invalid-credential).' ? 'Credenciales invalidas' : null)
        }   
    }
}