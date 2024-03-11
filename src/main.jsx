import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './assets/styles/index.scss';
import { MainLayout } from './layouts/MainLayout/index.js'
import { PizzasPage } from './pages/PizzasPage/index.js'
import { OthersPage } from './pages/OthersPage/index.js'
import { BurgersPage } from './pages/BurgersPage/index.js'
import { ThemeProvider } from './providers/ThemeProvider';
import { Theme } from './const/const';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/pizzas',
        element: <div>Main Page</div>
      },
      {
        path: '/burgers',
        element: <div>Burgers Page</div>
      },
      {
        path: '/others',
        element: <div>Others Page</div>
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
