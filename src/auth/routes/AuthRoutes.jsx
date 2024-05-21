import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '/register',
        element: <RegisterPage/>
    },
    {
        path: '*',
        element: <Navigate to={'/auth/login'}/>
    }
]);

export const AuthRoutes = () => {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}
