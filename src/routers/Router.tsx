import { Routes, Route } from "react-router";
import { EventsPage } from "../pages/events/EventsPage";
import { LoginPage } from "../pages/login/LoginPage";
import { Dashboard } from "../shared/components/Dashboard/Dashboard";
import { BrowserRouter } from "react-router-dom";
import { HOME_PAGE, LOGIN_PAGE } from "./routeNames";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_PAGE} element={<Dashboard />}>
          <Route path={HOME_PAGE} element={<EventsPage />} />
          <Route path={LOGIN_PAGE} element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
