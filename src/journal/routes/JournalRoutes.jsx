import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <JournalPage/>
    },
    {
        path: '/*',
        element: <Navigate to={'/'}/>
    }
]);

export const JournalRoutes = () => {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}