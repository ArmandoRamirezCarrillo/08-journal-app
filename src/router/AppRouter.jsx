import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthRoutes, authRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes, journalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuth } from '../ui/components/CheckingAuth';
import { useCheckAuth } from '../hooks';

const AppRoutes = [
  {
    path: '/auth',
    element: <AuthRoutes/>,
    children: authRoutes,
  },
  {
    path: '/',
    element: <JournalRoutes/>,
    children: journalRoutes,
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