import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';

const AppRoutes = [
    {
        path: '/auth/*',
        children: AuthRoutes,
    },
    {
        path: '/',
        children: JournalRoutes,
    },
];

const router = createBrowserRouter(AppRoutes);

export const AppRouter = () => {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}