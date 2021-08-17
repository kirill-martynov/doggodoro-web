import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Header } from "../components/Header";
import { Container } from "../components/Container";

import s from "./App.module.css";
import { useDispatch } from "react-redux";
import { getTasks } from "../../screens/Home/state/tasks/thunks/tasksThunks";

const Home = React.lazy(() => import("../../screens/Home"));
const Settings = React.lazy(() => import("../../screens/Settings"));

export function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log('init')

    dispatch(getTasks());
  }, []);

  return (
    <Router>
      <Header />

      <div className={s.content}>
        <Container>
          <React.Suspense fallback="loading">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/settings" component={Settings} />
            </Switch>
          </React.Suspense>
        </Container>
      </div>
    </Router>
  );
}

export default App;
