import { singInWithGoogle } from '../../firebase/providers'
import { checkingCredentials, login, logout } from './'

export const checkingAuthentication = (email, Password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSingIn = (email, Password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const result = await singInWithGoogle();
        if(!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result))
    }
}