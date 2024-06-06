import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuth } from '../ui/components/CheckingAuth';
import { useCheckAuth } from '../hooks';

const AppRoutes = [
  {
    path: '/auth',
    children: AuthRoutes,
  },
  {
    path: '/',
    children: JournalRoutes,
  },
];

const checkingAuth = [
  {
    path: '*',
    element: <CheckingAuth/>
  }
];

export const AppRouter = () => {

  const status = useCheckAuth();
  const router = createBrowserRouter((status === 'checking') ? checkingAuth : AppRoutes);

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}