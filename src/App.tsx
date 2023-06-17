import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Sidebar } from '@core/components/Sidebar';
import { Header } from '@core/components/Header';

import s from './App.module.css';

const ROUTES = [{ element: React.lazy(() => import('@core/screens/Main')), path: '/' }];

function App() {
  return (
    <div className={s.root}>
      <Sidebar />
      <main className={s.main}>
        <Header />

        <div className={s.content}>
          <React.Suspense fallback="Loading...">
            <Routes>
              {ROUTES.map((route) => {
                const Screen = route.element;

                return <Route key={route.path} path={route.path} element={<Screen />} />;
              })}
            </Routes>
          </React.Suspense>
        </div>
      </main>
    </div>
  );
}

export default App;
