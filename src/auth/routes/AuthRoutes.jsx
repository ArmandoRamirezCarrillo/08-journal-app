import { Navigate, Outlet } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages";
import { useCheckAuth } from "../../hooks/useCheckAuth";

export const AuthRoutes = () => {
    if(useCheckAuth() === 'authenticated') return <Navigate to='/'/>
    return <Outlet/>
}

export const authRoutes = [
    {
        path: '/auth/login',
        element: <LoginPage/>
    },
    {
        path: '/auth/register',
        element: <RegisterPage/>
    },
    {
        path: '/auth/*',
        element: <Navigate to={'/auth/login'}/>
    }
]
