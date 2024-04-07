import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './assets/styles/index.scss';
import { MainLayout } from './layouts/MainLayout/index.js'
import { ThemeProvider } from './providers/ThemeProvider';
import { Theme } from './const/const';
import { Suspense } from 'react';
import { routerNavigations } from './const/router';
import { PageLoader } from './ui/PageLoader';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { LayoutContextProvider } from './providers/LayoutContextProvider';
import { PersistGate } from 'redux-persist/integration/react';


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
  <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider initialTheme={Theme.LIGHT}>
        <LayoutContextProvider>
          <RouterProvider router={router} />
        </LayoutContextProvider>
      </ThemeProvider>
    </PersistGate>
  </Provider>
)