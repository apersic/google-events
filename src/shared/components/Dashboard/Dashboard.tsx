import { Outlet } from "react-router";
import { NavBar } from "../NavBar/NavBar";
import { MainLayout } from "../../../pages/events/EventsPage.styles";

export const Dashboard = () => {
  return (
    <MainLayout>
      <NavBar />
      <Outlet />
    </MainLayout>
  );
};
