import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Main } from '@core/screens/Main';
import { Sidebar } from '@core/components/Sidebar';

import s from './App.module.css';
import { Header } from '@core/components/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
]);

function App() {
  return (
    <div className={s.root}>
      <Sidebar />
      <main className={s.main}>
        <Header />

        <div className={s.content}>
          <RouterProvider router={router} />
        </div>
      </main>
    </div>
  );
}

export default App;
