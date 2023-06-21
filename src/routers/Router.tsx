import { Routes, Route } from "react-router";
import { EventsPage } from "../pages/events/EventsPage";
import { LoginPage } from "../pages/login/LoginPage";
import { Dashboard } from "../shared/components/Dashboard/Dashboard";
import { BrowserRouter } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<EventsPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
