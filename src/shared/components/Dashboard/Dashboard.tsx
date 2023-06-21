import { Outlet } from "react-router";
import { NavBar } from "../NavBar/NavBar";
import { MainLayout, PageWrapper } from "../../styles/styles";

export const Dashboard = () => {
  return (
    <MainLayout>
      <NavBar />
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </MainLayout>
  );
};
