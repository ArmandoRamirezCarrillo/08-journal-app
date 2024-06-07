import { Navigate, Outlet } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage";
import { useCheckAuth } from "../../hooks";
 
export const JournalRoutes = () => {
  if(useCheckAuth() !== 'authenticated') return <Navigate to='/auth/login'/>
  return <Outlet/>
}

export const journalRoutes = [
  {
      path: '/',
      element: <JournalPage/>
  },
  {
      path: '/*',
      element: <Navigate to={'/'}/>
  }
]