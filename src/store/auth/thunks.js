import { checkingCredentials } from './'

export const checkingAuthentication = (email, Password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSingIn = (email, Password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials())
    }
}