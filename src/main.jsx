import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './assets/styles/index.scss';
import { MainLayout } from './layouts/MainLayout/index.js'
import { ThemeProvider } from './providers/ThemeProvider';
import { Theme } from './const/const';
import { Suspense } from 'react';
import { routerNavigations } from './const/router';
import { PageLoader } from './ui/PageLoader';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: routerNavigations.map(({path, element}) => ({
          path: path,
          element: <Suspense fallback={<PageLoader />}>{element}</Suspense>
        }))
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider initialTheme={Theme.LIGHT}>
    <RouterProvider router={router} />
  </ThemeProvider>
)
