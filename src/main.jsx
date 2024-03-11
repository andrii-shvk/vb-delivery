import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './assets/styles/index.scss';
import { MainLayout } from './layouts/MainLayout/index.js'
import { PizzasPage } from './pages/PizzasPage/index.js'
import { OthersPage } from './pages/OthersPage/index.js'
import { BurgersPage } from './pages/BurgersPage/index.js'
import { ThemeProvider } from './providers/ThemeProvider';
import { Theme } from './const/const';
import { Suspense } from 'react';
import { NotFoundPage } from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={<p>Loading...</p>}>
      <MainLayout />
    </Suspense>,
    children: [
      {
        path: '/pizzas',
        element: <Suspense fallback={<p>Loading...</p>}>
          <PizzasPage />
        </Suspense>
      },
      {
        path: '/burgers',
        element: <Suspense fallback={<p>Loading...</p>}>
        <BurgersPage />
      </Suspense>
      },
      {
        path: '/others',
        element: <Suspense fallback={<p>Loading...</p>}>
        <OthersPage />
      </Suspense>
      },
      {
        path: '*',
        element: <Suspense fallback={<p>Loading...</p>}>
        <NotFoundPage />
      </Suspense>
      },
    ]
  },
  // {
  //   path: '/pizzas',
  //   element: <PizzasPage />
  // },
  // {
  //   path: '/burgers',
  //   element: <BurgersPage />
  // },
  // {
  //   path: '/others',
  //   element: <OthersPage />
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider initialTheme={Theme.LIGHT}>
    <RouterProvider router={router} />
  </ThemeProvider>
)
