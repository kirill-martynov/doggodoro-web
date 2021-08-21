import * as React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { requestNotification } from "@core/utils/browserNotifications";

import { getTasks } from "@Home/state/tasks/thunks/tasksThunks";

import { setSettingsItem } from "@Settings/state/thunks/settingsThunks";

import { Header } from "../components/Header";
import { Container } from "../components/Container";

import s from "./App.module.css";

const Home = React.lazy(() => import("@screens/Home"));
const Settings = React.lazy(() => import("@screens/Settings"));

const init = () => async (dispatch) => {
  try {
    const notificationPermission = await requestNotification();

    if (notificationPermission) {
      dispatch(setSettingsItem({ notifications: true }));
    }
  } catch (error) {
    console.error(error);
  }
};

export function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("init");

    dispatch(init());
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
